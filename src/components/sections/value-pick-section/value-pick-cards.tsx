import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ValuePickCards() {
  const valuePickData: { src: string; alt: string; className: string }[] = [
    {
      src: "/value-pick-1.png",
      alt: "가치관 PICK 1",
      className: "top-15 left-15",
    },
    {
      src: "/value-pick-2.png",
      alt: "가치관 PICK 2",
      className: "top-40 left-130",
    },
    {
      src: "/value-pick-3.png",
      alt: "가치관 PICK 3",
      className: "top-0 left-245",
    },
  ];

  return (
    <div className="absolute w-full z-10 h-full">
      {valuePickData.map(({ src, alt, className }) => (
        <Image
          key={src}
          src={src}
          width={400}
          height={254.16}
          className={cn("absolute w-100 h-auto", className)}
          alt={alt}
        />
      ))}
    </div>
  );
}
