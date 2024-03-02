import { getCourses } from "@/actions";
import React from "react";
import { DataTable } from "./date-table";
import { columns } from "./columns";

export default async function Table() {
  const courses = await getCourses();

  return <DataTable columns={columns} data={courses} />;
}
