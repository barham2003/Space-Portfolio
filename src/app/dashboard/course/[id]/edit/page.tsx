import { Suspense } from "react";
import EditForm from "./edit-form";
import { Protect, getOneCourse } from "@/actions";

export default async function page({ params }: { params: { id: string } }) {
  const course = await getOneCourse(+params.id);
  if (!course) return null;

  return (
    <main>
      <Suspense fallback={"loading"}>
        <EditForm course={course} />
      </Suspense>
    </main>
  );
}
