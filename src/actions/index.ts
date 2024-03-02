"use server";

import { db } from "@/db";
import { courses, forms, session } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { revalidateTag, unstable_cache as unstable } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as zod from "zod";
interface FormState {
  message: string;
  status?: "success" | "error" | "";
}

const courseSchema = zod.object({
  name: zod.string().min(1),
  image: zod.string().min(1),
  description: zod.string().min(1),
  status: zod.string().min(1),
  instructor: zod.string().min(1),
  startDate: zod.date(),
  priority: zod.number().min(0),
});

export async function AddCourse(
  formState: FormState,
  formData: FormData,
): Promise<FormState> {
  Protect();

  const result = courseSchema.safeParse({
    name: formData.get("name") as string,
    image: formData.get("image") as string,
    description: formData.get("description") as string,
    status: formData.get("status") as string,
    instructor: formData.get("instructor") as string,
    startDate: new Date(formData.get("startDate") as string),
    priority: Number(formData.get("priority") as string),
  });

  if (!result.success) {
    return {
      message: JSON.stringify(
        Object.values(result.error.flatten().fieldErrors).join(", "),
      ),
      status: "error",
    };
  }

  await db.insert(courses).values(result.data);
  revalidateTag("courses");
  redirect("/dashboard");
}

export async function getCourses() {
  const getUnstableCourses = unstable(
    async () => db.select().from(courses).orderBy(desc(courses.priority)),
    ["courses"],
    { tags: ["courses"] },
  );
  const Gottencourses = getUnstableCourses();
  return Gottencourses;
}

export async function getOneCourse(id: number) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const getUnstableCourse = unstable(
    async (id) =>
      db.query.courses.findFirst({
        where: (courses, { eq }) => {
          return eq(courses.id, id);
        },
      }),

    [`c${id}`],
    { tags: [`c${id}`] },
  );

  const course = getUnstableCourse(id);
  return course;
}

export async function DeleteCourse(id: number) {
  await Protect();
  await db.delete(courses).where(eq(courses.id, id));
  revalidateTag("courses");
}

export async function editCourse(
  formState: FormState,
  formData: FormData,
): Promise<FormState> {
  await Protect();

  const id = Number(formData.get("id"));
  const result = courseSchema.safeParse({
    name: formData.get("name") as string,
    image: formData.get("image") as string,
    description: formData.get("description") as string,
    status: formData.get("status") as string,
    instructor: formData.get("instructor") as string,
    startDate: new Date(formData.get("startDate") as string),
    priority: Number(formData.get("priority") as string),
  });

  if (!result.success) {
    return {
      message: JSON.stringify(
        Object.values(result.error.flatten().fieldErrors).join(", "),
      ),
      status: "error",
    };
  }

  await db.update(courses).set(result.data).where(eq(courses.id, id));

  revalidateTag("courses");
  revalidateTag(`c${id}`);
  redirect("/dashboard");
}

const formSchema = zod.object({
  name: zod.string().min(1),
  email: zod.string().email(),
  university: zod.string().min(1),
  age: zod.number().min(1),
  courseId: zod.number().min(1),
  phone: zod
    .string()
    .min(6, { message: "Phone number is too short, it should be at least 6" })
    .max(15, {
      message: "Phone number is too long it should be at most 15",
    }),
});

export async function addForm(
  formState: FormState,
  formData: FormData,
): Promise<FormState> {
  const result = formSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    university: formData.get("university") as string,
    age: Number(formData.get("age") as string),
    courseId: Number(formData.get("courseId") as string),
    phone: formData.get("phone") as string,
  });

  if (!result.success)
    return {
      message: JSON.stringify(
        Object.values(result.error.flatten().fieldErrors).join(", "),
      ),
      status: "error",
    };

  await db.insert(forms).values(result.data);

  return { message: "Successfully Added", status: "success" };
}

const signInSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

const user = {
  username: "space",
  password: "123",
};

export async function signIn(
  formState: FormState,
  formData: FormData,
): Promise<FormState> {
  const result = signInSchema.safeParse({
    username: formData.get("username") as string,
    password: formData.get("password") as string,
  });

  if (!result.success) {
    return {
      message: JSON.stringify(
        Object.values(result.error.flatten().fieldErrors).join(", "),
      ),
      status: "error",
    };
  }

  if (
    result.data.username !== user.username ||
    result.data.password !== user.password
  ) {
    return { message: "Invalid Credentials", status: "error" };
  }

  const [newSession] = await db
    .insert(session)
    .values({})
    .returning({ id: session.id });

  cookies().set({
    // secure: true,
    value: `${newSession.id}`,
    name: "sessionId",
    // httpOnly: true,
  });

  return { message: "Successfully Signed In", status: "success" };
}

export async function Protect() {
  const sessionId = Number(cookies().get("sessionId")?.value);
  if (!sessionId) redirect("/auth");
  const theSession = await db.query.session.findFirst({
    where: (sessions, { eq }) => {
      return eq(sessions.id, sessionId);
    },
  });

  if (!theSession) redirect("/auth");

  if (
    Date.now() >
    new Date(theSession.createdAt).getTime() + 1000 * 60 * 60 * 60
  ) {
    await db.delete(session).where(eq(session.id, sessionId));
    redirect("/auth");
  }
}

export async function signOut() {
  const sessionId = Number(cookies().get("sessionId")?.value);
  if (sessionId) await db.delete(session).where(eq(session.id, sessionId));
  cookies().delete("sessionId");
}

export async function deleteAllSessions() {
  await db.delete(session);
}

export async function isAuth(): Promise<boolean> {
  const sessionId = Number(cookies().get("sessionId")?.value);
  if (!sessionId) return false;

  const theSession = await db.query.session.findFirst({
    where: (sessions, { eq }) => {
      return eq(sessions.id, sessionId);
    },
  });
  if (!theSession) return false;
  if (
    Date.now() >
    new Date(theSession.createdAt).getTime() + 1000 * 60 * 60 * 60
  ) {
    await db.delete(session).where(eq(session.id, sessionId));
    return false;
  }

  return true;
}
