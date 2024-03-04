import { Skeleton } from "@/components/ui/skeleton";
export default function TableSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton className="h-[48px] w-[1690px]" />
      <Skeleton className="h-[800px] w-[1690px]" />
    </div>
  );
}
