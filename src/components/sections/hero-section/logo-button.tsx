"use client";

import Logo from "@/assets/logo.svg";

import { useEffect, useState } from "react";

export default function LogoButton() {
  const [origin, setOrigin] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  return (
    <a href={origin} rel="noopener noreferrer" className=" transition-colors">
      <Logo className="h-8 max-h-8" />
    </a>
  );
}
