import { Protect, deleteAllSessions, signOut } from "@/actions";
import FormButton from "@/components/ui/form-button";
import Heading from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Table from "./shad-table/table";
import { Suspense } from "react";
import TableSkeleton from "./shad-table/skeleton-table";

export default async function page() {
  await Protect();
  return (
    <main className="flex flex-col gap-3">
      <form action={signOut}>
        <FormButton variant="destructive">Signout</FormButton>
      </form>
      <form action={deleteAllSessions}>
        <FormButton variant="destructive">Delete All Sessions</FormButton>
      </form>
      <Heading>Dashboard</Heading>
      <Button asChild variant="space" className="w-full">
        <Link href="/dashboard/course/new">Add Course</Link>
      </Button>
      <Suspense fallback={<TableSkeleton />}>
        <Table />
      </Suspense>
    </main>
  );
}
