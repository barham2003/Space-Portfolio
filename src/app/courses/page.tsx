import Heading from "@/components/ui/heading";
import CourseList from "./course-list";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import SkeletonCard from "./loading";
export default async function page() {
  return (
    <main>
      <section>
        <Heading>Our Courses</Heading>
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3">
          <Suspense fallback={<SkeletonCard />}>
            <CourseList />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
