import { Suspense } from "react";
import TableComponent from "./table";
import SkeletonCard from "@/app/courses/skeleton-card";
import TableSkeleton from "../../shad-table/skeleton-table";
import Heading from "@/components/ui/heading";

export default async function page({ params }: { params: { id: string } }) {
  return (
    <main>
      <Heading>Forms</Heading>
      <Suspense fallback={<TableSkeleton />}>
        <TableComponent id={+params.id} />
      </Suspense>
    </main>
  );
}
