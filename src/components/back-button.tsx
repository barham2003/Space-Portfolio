import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function BackButton({ href }: { href: string }) {
  return (
    <Button asChild variant="space" className=" h-8 w-10">
      <Link href={href} className=" w-fit">
        <ChevronLeft size="20" />
      </Link>
    </Button>
  );
}
