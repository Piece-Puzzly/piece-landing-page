import { cn } from "@/lib/utils";

export default function Section({
  bgClassName,
  className,
  children,
  ...props
}: { bgClassName?: string } & React.ComponentProps<"div">) {
  return (
    <div className={cn("w-full flex", bgClassName)} {...props}>
      <div
        className={cn(
          "max-w-screen-2xl w-full mx-auto lg:py-45 py-20 space-y-12.5 lg:space-y-20",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
