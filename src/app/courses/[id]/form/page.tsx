"use client";

import { addForm } from "@/actions";
import FormButton from "@/components/ui/form-button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const [{ message, status }, formActino] = useFormState(addForm, {
    message: "",
    status: "",
  });
  return (
    <main className="lg:px-56">
      <Heading>Form</Heading>
      <form action={formActino} className="space-y-4 ">
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
        <FormButton type="submit" variant={"space"}>
          Submit
        </FormButton>
      </form>
    </main>
  );
}
