"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "./button";
import { Loader2 } from "lucide-react";

type FormProps = ButtonProps & {
  children: React.ReactNode;
  isChild?: boolean;
};

export default function FormButton({
  children,
  type = "submit",
  variant = "default",
  className = "font-bold",
  isChild = false,
}: FormProps) {
  const { pending } = useFormStatus();
  if (isChild)
    return (
      <>
        {pending ? (
          <div className="flex items-center gap-2">
            {children}
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          </div>
        ) : (
          children
        )}
      </>
    );

  if (!isChild)
    return (
      <Button
        type={type}
        variant={variant}
        disabled={pending}
        className={className}
      >
        {pending ? (
          <div className="flex items-center gap-2">
            {children}
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          </div>
        ) : (
          children
        )}
      </Button>
    );
}
