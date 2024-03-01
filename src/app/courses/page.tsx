import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/db";
import Image from "next/image";
import Link from "next/link";

async function getCourses() {
  "use server";
  const courses = db.query.courses.findMany();
  return courses;
}

export default async function page() {
  const courses = await getCourses();
  return (
    <main>
      <section>
        <h1 className=" text-center text-lg font-semibold">Our Courses</h1>
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-3">
          {courses.map((course, index) => (
            <>
              <Card
                className="group flex flex-col justify-between rounded-sm border-none bg-secondary/50 transition-all hover:bg-secondary"
                key={index}
              >
                <CardHeader className="px-2 py-2">
                  <CardTitle className="text-md">{course.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 overflow-hidden px-2 py-2">
                  <div className="w-full overflow-hidden rounded-md">
                    <Image
                      src="https://img.freepik.com/premium-vector/new-courses-social-media-web-banner-design_621391-63.jpg"
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

                <CardFooter className="px-0 py-2 pl-2">
                  <Link
                    href=""
                    className="rounded-sm bg-foreground p-0 px-2 py-2 text-xs text-background transition hover:bg-foreground/90"
                  >
                    View Course
                  </Link>
                </CardFooter>
              </Card>{" "}
              <Card
                className="group flex flex-col justify-between rounded-sm border-none bg-secondary/50 transition-all hover:bg-secondary"
                key={index}
              >
                <CardHeader className="px-2 py-2">
                  <CardTitle className="text-md">{course.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 overflow-hidden px-2 py-2">
                  <div className="w-full overflow-hidden rounded-md">
                    <Image
                      src="https://img.freepik.com/premium-vector/new-courses-social-media-web-banner-design_621391-63.jpg"
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

                <CardFooter className="px-0 py-2 pl-2">
                  <Link
                    href=""
                    className="rounded-sm bg-foreground p-0 px-2 py-2 text-xs text-background transition hover:bg-foreground/90"
                  >
                    View Course
                  </Link>
                </CardFooter>
              </Card>
            </>
          ))}
        </div>
      </section>
    </main>
  );
}
