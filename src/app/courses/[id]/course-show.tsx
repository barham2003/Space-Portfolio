import { getOneCourse } from "@/actions";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    openGraph: {
      images: [course?.image || "", ...previousImages],
    },
  };
}

export default async function CourseShow({ id }: { id: number }) {
  const course = await getOneCourse(+id);
  if (!course) return notFound();
  return (
    <>
      <Heading>{course.name}</Heading>
      <Image
        width="900"
        height={900}
        className=" w-full rounded-sm"
        alt="course#1"
        src={course.image}
      />
      <h2 className="text-lg font-semibold">Instructor: {course.instructor}</h2>
      <p className="text-justify">{course.description}</p>
      {course.status === "active" && (
        <Button asChild className="w-full">
          <Link href={`/courses/${course.id}/form`}>Sign Yourself</Link>
        </Button>
      )}
    </>
  );
}
