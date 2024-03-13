import { getOneCourse } from "@/actions";
import BackButton from "@/components/back-button";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CourseShow({ id }: { id: number }) {
  const course = await getOneCourse(+id);
  if (!course) return notFound();
  return (
    <>
      <Heading>{course.name}</Heading>
      <BackButton href="/courses" />
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
