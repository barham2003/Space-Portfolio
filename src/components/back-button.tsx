import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BackButton({ href }: { href: string }) {
  return (
    <Button asChild variant="space">
      <Link href={href} className=" w-fit">
        <ChevronLeft size="40" />
      </Link>
    </Button>
  );
}
