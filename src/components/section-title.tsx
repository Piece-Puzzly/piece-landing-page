import React from "react";

export default function SectionTitle(props: React.ComponentProps<"div">) {
  return (
    <div
      className="text-2xl leading-8 lg:text-4xl lg:leading-12 font-semibold "
      {...props}
    />
  );
}
