"use client";
import { sendEmail } from "@/actions/email-action";
import AnimateSection from "./ui/animate-section";
import FormButton from "./ui/form-button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useFormState } from "react-dom";
import { twMerge } from "tailwind-merge";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/type-writer";

export default function ContactUs() {
  const [{ message, done }, formAction] = useFormState(sendEmail, {
    message: "",
    done: "yet",
  });

  return (
    <AnimateSection id="contact" className="w-full">
      <section className="w-full">
        <form action={formAction} className="flex w-full flex-col gap-4">
          <TypewriterEffect
            words={[
              {
                text: "Contact",
                className: "my-8 text-center text-2xl font-bold lg:text-4xl",
              },
              {
                text: "Us",
                className: "my-8 text-center text-2xl font-bold lg:text-4xl",
              },
            ]}
          />
          <Input placeholder="Email" type="email" name="senderEmail" />
          <Textarea
            placeholder="Type Your Content Here"
            className="h-[300px]"
            name="message"
          />
          <span
            className={twMerge(
              "rounded-full p-2 text-center text-sm",
              done === "success" && " bg-green-100 text-green-900",
              done === "yet" && " hidden",
              done === "error" && "bg-red-100  text-red-600",
            )}
          >
            {message}
          </span>
          <FormButton className="shimmer" type="submit">
            Send Email
          </FormButton>
        </form>
      </section>
    </AnimateSection>
  );
}
