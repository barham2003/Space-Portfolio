"use client";
import { AddCourse, Protect } from "@/actions";
import { Button } from "@/components/ui/button";
import FormButton from "@/components/ui/form-button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormState, useFormStatus } from "react-dom";

export default function AddCourseForm() {
  const [{ message, status }, formAction] = useFormState(AddCourse, {
    message: "",
  });
  return (
    <main>
      <Heading>New Course</Heading>
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
        <Input placeholder="Name" type="text" name="name" />
        <Input placeholder="Instructor" type="text" name="instructor" />
        <Input placeholder="Status" type="text" name="status" />
        <Input placeholder="Priority" type="number" name="priority" />
        <Input placeholder="Image" type="text" name="image" />
        <Textarea placeholder="Description" name="description" />
        <Input placeholder="Start Date" type="date" name="startDate" />
        <FormButton variant="space" type="submit">
          Submit
        </FormButton>
      </form>
    </main>
  );
}
