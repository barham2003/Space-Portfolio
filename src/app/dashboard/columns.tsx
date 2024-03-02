"use client";

import { Course } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { DeleteCourse } from "@/actions";

export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "name",
    header: "name",
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
          <Link href={`/courses/${course.id}/edit`}>Edit</Link>
        </Button>
      );
    },
  },
  {
    id: "delete",
    cell: ({ row }) => {
      const course = row.original;
      return (
        <Button variant="destructive">
          <form action={DeleteCourse.bind(null, course.id)}>Delete</form>
        </Button>
      );
    },
  },
];
