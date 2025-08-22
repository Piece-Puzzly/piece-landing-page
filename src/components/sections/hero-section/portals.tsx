import AppStoreIcon from "@/assets/appstore.svg";
import Instagram from "@/assets/instagram.svg";
import PlayStoreIcon from "@/assets/playstore.svg";
const portalInfo: {
  title: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  href: string;
}[] = [
  {
    title: "플레이스토어",
    icon: PlayStoreIcon,
    href: "https://play.google.com/store/apps/details?id=com.puzzle.piece",
  },
  {
    title: "앱스토어",
    icon: AppStoreIcon,
    href: "https://apps.apple.com/kr/app/%ED%94%BC%EC%8A%A4-piece-%EA%B0%80%EC%B9%98%EA%B4%80-%EA%B8%B0%EB%B0%98-%EA%B2%8C%EC%9D%B4-%EC%86%8C%EA%B0%9C%ED%8C%85/id6742348014",
  },
  {
    title: "인스타그램",
    icon: Instagram,
    href: "https://www.instagram.com/piece_puzzly?igsh=MXNwMmMwanFkOGkyNQ%3D%3D",
  },
];

export default function Portals() {
  return (
    <div className="flex gap-5 items-center">
      {portalInfo.map(({ title, icon: Icon, href }) => (
        <a
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="size-8 -m-1 flex items-center justify-center text-[#D0ABFD] hover:text-[#F6EFFF] transition-colors"
        >
          <Icon className="size-6" />
        </a>
      ))}
    </div>
  );
}
