"use client";

import { useEffect, useState } from "react";
import { Toggle } from "./ui/toggle";

const scaleMap = [
  { fontSize: "16", title: "원본" },
  { fontSize: "12", title: "축소" },
];
export default function Fab() {
  const [scale, setScale] = useState<number>(0); // 기본 배율 1 (100%)
  useEffect(() => {
    document.documentElement.className = `text-[16px] lg:text-[${scaleMap[scale].fontSize}px] break-keep`;
    // 16px 기준, rem 1rem = 16px * scale
  }, [scale]);
  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg border bg-white hidden lg:block p-1 shadow-sm">
      {scaleMap.map((e, i) => (
        <Toggle
          variant={"default"}
          key={i}
          pressed={scale === i}
          onPressedChange={() => setScale(i)}
        >
          {e.title}
        </Toggle>
      ))}
    </div>
  );
}
