import Heading from "@/components/ui/heading";
import CourseList from "./course-list";
import { Suspense } from "react";
import SkeletonCard from "./skeleton-card";
import { Metadata } from "next";
import BackButton from "@/components/back-button";

export const metadata: Metadata = {
  title: "Courses",
  description: "A list of our courses.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default async function page() {
  return (
    <main>
      <section>
        <BackButton href="/" />
        <Heading>Our Courses</Heading>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<SkeletonCard />}>
            <CourseList />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
