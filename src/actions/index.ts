"use server";

import { db } from "@/db";

interface FormState {
  message: string;
  done: string;
}

export async function getCourses() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const courses = db.query.courses.findMany();
  return courses;
}
