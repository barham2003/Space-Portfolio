import { Skeleton } from "@/components/ui/skeleton";
export default function CourseSkeleton() {
  return (
    <>
      <Skeleton className="h-8" />
      <Skeleton className="h-[250px] w-full" />
      <Skeleton className="h-4" />
      <Skeleton className="h-32" />
      <Skeleton className="h-[40px] w-[95px]" />
    </>
  );
}
