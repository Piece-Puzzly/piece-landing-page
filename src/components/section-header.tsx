import { cn } from "@/lib/utils";
import React from "react";

export default function SectionHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        className,
        "w-full space-y-4 lg:space-y-6 px-6 sm:px-10 md:px-12"
      )}
      {...props}
    />
  );
}
