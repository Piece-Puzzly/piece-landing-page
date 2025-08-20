import { cn } from "@/lib/utils";
import { ProcedureInfo } from "./procedure";

export default function Indicator({
  title,
  accent,
  icon: Icon,
}: ProcedureInfo) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5 w-[6.3rem] items-center leading-8 text-[#6C7073] ",
        { "text-primary": accent }
      )}
      key={title}
    >
      <Icon className="size-10 lg:size-13" />

      <div className="font-semibold text-base lg:text-2xl whitespace-nowrap">
        {title}
      </div>
    </div>
  );
}
