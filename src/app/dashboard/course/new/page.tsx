import { Protect } from "@/actions";
import AddCourseForm from "./add-course-form";

export default async function page() {
  await Protect();
  return <AddCourseForm />;
}
