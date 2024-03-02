import { Protect, getCourses, signOut } from "@/actions";
import FormButton from "@/components/ui/form-button";
import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Table from "./table";
import { Suspense } from "react";

export default async function page() {
  await Protect();
  return (
    <main className="flex flex-col gap-3">
      <form action={signOut}>
        <FormButton variant="destructive">Signout</FormButton>
      </form>
      <Heading>Dashboard</Heading>
      <Button asChild variant="space" className="w-full">
        <Link href="/dashboard/course/new">Add Course</Link>
      </Button>
      <Suspense>
        <Table />
      </Suspense>
    </main>
  );
}
