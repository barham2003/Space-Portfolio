import { Suspense } from "react";
import CourseShow from "./course-show";
import CourseSkeleton from "./course-skeleton";
import { getCourses } from "@/actions";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main className="space-y-4 md:px-20 xl:px-64">
      <Suspense fallback={<CourseSkeleton />}>
        <CourseShow id={+id} />
      </Suspense>
    </main>
  );
}

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}
