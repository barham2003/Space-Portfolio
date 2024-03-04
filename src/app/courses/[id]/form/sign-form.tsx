"use client";

import { addForm, getCourses } from "@/actions";
import FormButton from "@/components/ui/form-button";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";
import { twMerge } from "tailwind-merge";
export default function SignForm({ id }: { id: string }) {
  const [{ message, status }, formAction] = useFormState(addForm, {
    message: "",
    status: "",
  });
  return (
    <form action={formAction} className="space-y-4 ">
      {message && (
        <p
          className={twMerge(
            "rounded-sm bg-secondary p-2 text-red-600 ",
            status === "success" && "text-green-600",
          )}
        >
          {message}
        </p>
      )}
      <Input
        type="text"
        name="name"
        id="name"
        placeholder="Your Full Name"
        required
      />
      <Input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email"
        required
      />
      <Input
        type="number"
        name="phone"
        placeholder="Phone"
        id="phone"
        required
      />
      <Input
        type="text"
        name="university"
        id="university"
        placeholder="University"
        required
      />
      <Input type="number" name="age" placeholder="Age" id="age" required />
      <Input
        className="hidden"
        type="number"
        defaultValue={id}
        name="courseId"
        id="courseId"
        required
      />
      <FormButton type="submit">Submit</FormButton>
    </form>
  );
}
