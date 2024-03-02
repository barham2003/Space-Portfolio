"use client";
import { AddCourse, getOneCourse } from "@/actions";
import FormButton from "@/components/ui/form-button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Course } from "@/db/schema";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function EditCourse({ id }: { id: number }) {
  const [course, setCourse] = useState<Course>();
  useEffect(() => {
    async function fetchData() {
      const theCourse = await getOneCourse(id);
      if (!theCourse) return;
      setCourse(theCourse);
    }
    fetchData();
  }, [id]);

  const [{ message, status }, formAction] = useFormState(AddCourse, {
    message: "",
  });

  if (!course) return null;
  return (
    <main>
      <Heading>Edit Course</Heading>
      <form className="space-y-4" action={formAction}>
        {message && (
          <p
            className={`${
              status === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <Input
          placeholder="ID"
          type="text"
          defaultValue={course.id}
          className="hidden"
          name="id"
        />
        <Input
          placeholder="Name"
          type="text"
          defaultValue={course.name}
          name="name"
        />
        <Input
          placeholder="Instructor"
          type="text"
          defaultValue={course.instructor}
          name="instructor"
        />
        <Input
          placeholder="Status"
          type="text"
          defaultValue={course.status}
          name="status"
        />
        <Input
          placeholder="Description"
          type="text"
          defaultValue={course.description}
          name="description"
        />
        <Input
          placeholder="Image"
          type="text"
          defaultValue={course.image}
          name="image"
        />
        <Input
          placeholder="Start Date"
          type="date"
          defaultValue={new Date(course.startDate).toISOString().split("T")[0]}
          name="startDate"
        />
        <FormButton variant="space" type="submit">
          Submit
        </FormButton>
      </form>
    </main>
  );
}
