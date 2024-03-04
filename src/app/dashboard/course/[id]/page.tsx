import { Suspense } from "react";
import TableComponent from "./table";
import SkeletonCard from "@/app/courses/skeleton-card";
import TableSkeleton from "../../shad-table/skeleton-table";

export default async function page({ params }: { params: { id: string } }) {
  return (
    <main>
      <Suspense fallback={<TableSkeleton />}>
        <TableComponent id={+params.id} />
      </Suspense>
    </main>
  );
}
