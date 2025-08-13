export default function SectionDescription({
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className="font-medium text-[1.75rem] leading-10 text-muted-foreground"
      {...props}
    />
  );
}
