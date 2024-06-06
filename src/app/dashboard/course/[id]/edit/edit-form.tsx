"use client";
import { AddCourse, editCourse, getOneCourse } from "@/actions";
import FormButton from "@/components/ui/form-button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Course } from "@/db/schema";
import { useFormState } from "react-dom";

export default function EditCourse({ course }: { course: Course }) {
  const [{ message, status }, formAction] = useFormState(editCourse, {
    message: "",
  });

  console.log(course);
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

        <fieldset>
          <label>Status</label>
          <RadioGroup defaultValue="active" name="status">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="active" id="active" />
              <Label htmlFor="active">Active</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="deactivate" id="deactivate" />
              <Label htmlFor="deactivate">Deactivate</Label>
            </div>
          </RadioGroup>
        </fieldset>
        <Input
          placeholder="Priority"
          type="number"
          defaultValue={course.priority}
          name="priority"
        />
        <Textarea
          placeholder="Description"
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
