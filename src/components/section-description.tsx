export default function SectionDescription({
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className="font-medium text-base leading-6 lg:text-[1.25rem] lg:leading-8 text-muted-foreground"
      {...props}
    />
  );
}
