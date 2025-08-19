export default function SectionDescription({
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className="font-medium text-lg leading-5.5 lg:text-[1.75rem] lg:leading-10 text-muted-foreground"
      {...props}
    />
  );
}
