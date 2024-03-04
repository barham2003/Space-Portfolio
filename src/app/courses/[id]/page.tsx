import { Suspense } from "react";
import CourseShow from "./course-show";
import CourseSkeleton from "./course-skeleton";
import { getCourses, getOneCourse } from "@/actions";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const course = await getOneCourse(+id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: course?.name,
    description: course?.description,
    openGraph: {
      images: [course?.image || "", ...previousImages],
    },
  };
}

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
