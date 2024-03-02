import { Protect, getCourses, signOut } from "@/actions";
import FormButton from "@/components/ui/form-button";
import Heading from "@/components/ui/heading";
import { DataTable } from "./date-table";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function page() {
  await Protect();
  const courses = await getCourses();
  return (
    <div className="flex flex-col gap-3">
      <form action={signOut}>
        <FormButton variant="destructive">Signout</FormButton>
      </form>
      <Heading>Dashboard</Heading>
      <Button asChild variant="space" className="w-full">
        <Link href="/dashboard/add-course">Add Course</Link>
      </Button>
      <DataTable columns={columns} data={courses} />
    </div>
  );
}
