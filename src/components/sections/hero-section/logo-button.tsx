"use client";

import Logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LogoButton() {
  return (
    <Button
      variant={"ghost"}
      onClick={() => location.reload()}
      className="-mx-4 -my-2 h-auto hover:bg-transparent"
    >
      <Image
        src={Logo}
        width="85.38"
        height="32"
        alt="Piece"
        className="h-8 w-auto"
      />
    </Button>
  );
}
