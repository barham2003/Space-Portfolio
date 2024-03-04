import React from "react";
import { twMerge } from "tailwind-merge";
export default function Heading({
  children,
  className,
  as,
}: {
  children: React.ReactNode;
  className?: string;
  as?: string;
}) {
  if (as === "h1")
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

  return (
    <h2
      className={twMerge(
        "my-8 text-center text-3xl font-bold lg:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
