"use server";

import { db } from "@/db";
import { forms, session } from "@/db/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import * as zod from "zod";
interface FormState {
  message: string;
  status?: "success" | "error" | "";
}

export async function getCourses() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const courses = db.query.courses.findMany();
  return courses;
}

export async function getOneCourse(id: number) {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const course = await db.query.courses.findFirst({
    where(courses, { eq }) {
      return eq(courses.id, id);
    },
  });

  return course;
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

  console.log(newSession.id);
  cookies().set({ secure: true, value: `${newSession.id}`, name: "sessionId" });

  return { message: "Successfully Signed In", status: "success" };
}

export async function Protect() {
  const sessionId = Number(cookies().get("sessionId")?.value);
  if (!sessionId) redirect("/auth");
  const theSession = await db.query.session.findFirst({
    where(sessions, { eq }) {
      return eq(sessions.id, sessionId);
    },
  });

  if (!theSession) {
    cookies().delete("sessionId");
    redirect("/auth");
  }

  if (Date.now() > new Date(theSession.createdAt).getTime() + 1000 * 60 * 60) {
    cookies().delete("sessionId");
    await db.delete(session).where(eq(session.id, sessionId));
    redirect("/auth");
  }
}
