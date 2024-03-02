import { getCourses } from "@/actions";
import Heading from "@/components/ui/heading";
import SignForm from "./sign-form";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <main className="lg:px-56">
      <Heading>Form</Heading>
      <SignForm id={id} />
    </main>
  );
}

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}
