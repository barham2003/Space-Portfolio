import { getCourses } from "@/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function CourseList() {
  const courses = await getCourses();

  return (
    <>
      {courses.map((course, index) => (
        <Card
          className="group flex flex-col justify-between rounded-sm border-none bg-secondary/50 transition-all hover:bg-secondary"
          key={index}
        >
          <Link href={`/courses/${course.id}`} className="h-full">
            <CardHeader className="px-2 py-2">
              <CardTitle className="text-md">{course.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 overflow-hidden px-2 py-2">
              <div className="w-full overflow-hidden rounded-md">
                <Image
                  src={course.image}
                  alt="course#1"
                  className="w-full object-cover transition-all group-hover:scale-110"
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-justify text-xs">
                {course.description.length > 80
                  ? course.description.slice(0, 80) + "..."
                  : course.description}
              </p>
              <ul className="text-xs">
                <li>Instructor: {course.instructor}</li>
              </ul>
            </CardContent>
          </Link>
        </Card>
      ))}
    </>
  );
}
