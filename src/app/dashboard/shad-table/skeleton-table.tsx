import { Skeleton } from "@/components/ui/skeleton";
export default function TableSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton className="h-[48px] w-full" />
      <Skeleton className="h-[800px] w-full" />
    </div>
  );
}
