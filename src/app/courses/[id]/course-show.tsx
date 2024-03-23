import { getOneCourse } from "@/actions";
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
      <figure className="grid gap-4 md:grid-cols-2">
        <Image
          width="900"
          height={900}
          className=" w-full rounded-sm"
          alt="course#1"
          src={course.image}
        />
        <figcaption className="md:gap- gap-2w flex flex-col md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Instructor: {course.instructor}
            </h2>
            <p className="text-justify">{course.description}</p>
          </div>
          {course.status === "active" && (
            <Button asChild className="w-full">
              <Link href={`/courses/${course.id}/form`}>Sign Yourself</Link>
            </Button>
          )}
        </figcaption>
      </figure>
    </>
  );
}
