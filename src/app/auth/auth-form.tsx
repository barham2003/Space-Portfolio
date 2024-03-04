"use client";
import { isAuth, signIn } from "@/actions";
import { Button } from "@/components/ui/button";
import FormButton from "@/components/ui/form-button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";
import { twMerge } from "tailwind-merge";

export default function AuthForm() {
  const [{ message, status }, formAction] = useFormState(signIn, {
    message: "",
  });
  return (
    <main>
      <Heading>Sign In</Heading>
      <form action={formAction} className="flex flex-col gap-4">
        <Input type="text" name="username" placeholder="Username" />
        <Input type="password" name="password" placeholder="Password" />
        <FormButton variant="space">Submit</FormButton>
        {message && (
          <span
            className={twMerge(
              "rounded-sm bg-secondary p-2 text-red-600 ",
              status === "success" && "text-green-600",
            )}
          >
            {message}
          </span>
        )}
      </form>
    </main>
  );
}
