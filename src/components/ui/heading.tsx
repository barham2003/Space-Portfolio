import React from "react";
import { twMerge } from "tailwind-merge";
export default function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={twMerge(
        "my-8 text-center text-4xl font-bold lg:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}