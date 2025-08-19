import React from "react";

export default function SectionTitle(props: React.ComponentProps<"div">) {
  return (
    <div
      className="text-[1.75rem] leading-10 lg:text-5xl lg:leading-16 font-semibold"
      {...props}
    />
  );
}
