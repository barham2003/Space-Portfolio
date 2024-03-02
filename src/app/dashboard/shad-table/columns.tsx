"use client";

import { Course } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { DeleteCourse } from "@/actions";
import FormButton from "@/components/ui/form-button";

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "instructor",
    header: "Instructor",
  },
  {
    id: "edit",
    cell: ({ row }) => {
      const course = row.original;
      return (
        <Button variant="space">
          <Link href={`/dashboard/course/${course.id}/edit`}>Edit</Link>
        </Button>
      );
    },
  },
  {
    id: "delete",
    cell: ({ row }) => {
      const course = row.original;
      const deleteAction = DeleteCourse.bind(null, course.id);
      return (
        <form action={deleteAction}>
          <FormButton variant="destructive">Delete</FormButton>
        </form>
      );
    },
  },
];
