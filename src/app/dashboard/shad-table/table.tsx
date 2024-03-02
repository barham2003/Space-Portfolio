import { getCourses } from "@/actions";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default async function Table() {
  const courses = await getCourses();
  return <DataTable columns={columns} data={courses} />;
}
