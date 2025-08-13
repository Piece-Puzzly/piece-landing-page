import Image from "next/image";

const portalInfo: { title: string; iconSrc: string; href: string }[] = [
  { title: "플레이스토어", iconSrc: "/appstore.svg", href: "" },
  { title: "앱스토어", iconSrc: "/playstore.svg", href: "" },
  { title: "인스타그램", iconSrc: "/instagram.svg", href: "" },
];

export default function Portals() {
  return (
    <div className="flex gap-3.5 items-center">
      {portalInfo.map(({ title, iconSrc, href }) => (
        <a
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          //   className=" hover:bg-accent/10"
          className="size-8 -m-1 flex items-center justify-center"
        >
          <Image src={iconSrc} width="24" height="24" alt={title} />
        </a>
      ))}
    </div>
  );
}
