import React from "react";

export default function SectionHeader({
  ...props
}: React.ComponentProps<"div">) {
  return <div className="w-full space-y-7" {...props} />;
}
