import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
export default function SkeletonCard() {
  return Array.from({ length: 2 }).map((_, index) => (
    <Card
      className="group flex flex-col justify-between rounded-sm border-none bg-secondary/50 transition-all hover:bg-secondary"
      key={index}
    >
      <CardHeader className="px-2 py-2">
        <CardTitle className="text-md">
          <Skeleton />
        </CardTitle>{" "}
      </CardHeader>
      <CardContent className="space-y-2 overflow-hidden px-2 py-2">
        <div className="w-full overflow-hidden rounded-md">
          <Skeleton className="h-[120px] lg:h-[400px]" />
        </div>
        <Skeleton className="h-[20px]" />
        <ul className="text-xs">
          <li>
            <Skeleton className="h-[20px]" />
          </li>
        </ul>
      </CardContent>
    </Card>
  ));
}
