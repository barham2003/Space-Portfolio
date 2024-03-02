import { getCourses } from "@/actions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function CourseList() {
  const courses = await getCourses();

  return (
    <>
      {courses.map((course, index) => (
        <Link href={`/courses/${course.id}`} className="h-full" key={index}>
          <Card className="group rounded-sm border-none bg-secondary/50 transition-all hover:bg-secondary">
            <CardContent className="flex h-full flex-col justify-between gap-2 py-2">
              <div className="h-full w-full overflow-hidden rounded-md">
                <Image
                  src={course.image}
                  alt="course#1"
                  className="h-[300px] w-full object-cover transition-all group-hover:scale-110 lg:h-[400px]"
                  width={200}
                  height={200}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-1">
              <CardTitle className="text-md">{course.name}</CardTitle>
              <h3>Instructor: {course.instructor}</h3>
              <p className="text-justify text-xs">
                {course.description.length > 80
                  ? course.description.slice(0, 80) + "..."
                  : course.description}
              </p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  );
}
