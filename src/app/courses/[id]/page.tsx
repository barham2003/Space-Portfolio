import { Suspense } from "react";
import SkeletonCard from "../skeleton-card";
import CourseShow from "./course-show";
import CourseSkeleton from "./course-skeleton";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main className="space-y-4 lg:px-52">
      <Suspense fallback={<CourseSkeleton />}>
        <CourseShow id={+id} />
      </Suspense>
    </main>
  );
}
