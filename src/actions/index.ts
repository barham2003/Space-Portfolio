"use server";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_CODE);

interface FormState {
  message: string;
  done: string;
}

export async function sendEmail(
  formState: FormState,
  formData: FormData,
): Promise<FormState> {
  const senderMessage = formData.get("message") as string;
  const senderEmail = formData.get("senderEmail") as string;

  console.log(senderEmail, senderMessage);

  if (!senderMessage || !senderEmail)
    return {
      message: "Validation Failed. Please Fill or Fields!",
      done: "error",
    };

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bk22332@auis.edu.krd",
      subject: "Email From Portfolio",
      reply_to: senderEmail,
      text: senderMessage,
    });

    return { message: "Email successfully sent!", done: "success" };
  } catch (e) {
    console.log(e);
    return { message: "Something went wrong", done: "error" };
  }
}
