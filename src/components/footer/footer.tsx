import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

const actionInfo = [
  { title: "카카오 채널톡", href: "", iconSrc: "/footer-channel-talk.svg" },
  { title: "인스타그램", href: "", iconSrc: "/footer-instagram.svg" },
];

export default function Footer() {
  return (
    <footer className="p-15 text-[#6C7073] flex items-start">
      <div className="space-y-4 flex-1">
        <div className="space-y-3 text-3.5 leading-5">
          <Link href="">이용 약관</Link>
          <Link href="">개인정보 처리방침</Link>
        </div>
        <div className="space-y-3">
          <div>Copyright © 2025 Piece Inc. All rights reserved.</div>
          <div className="flex gap-4 flex-wrap">
            <div>퍼즐리</div>
            <Separator orientation="vertical" className="h-3! bg-[#CBD1D9]" />
            <div>서울특별시 서초구 방배동 870-32, 501</div>
            <Separator orientation="vertical" className="h-3! bg-[#CBD1D9]" />
            <div>
              대표이사: 양세빈 puzzlyofficial@gmail.com 사업자번호: 174-06-03144
            </div>
            <Separator orientation="vertical" className="h-3! bg-[#CBD1D9]" />
            <div>통신판매업신고번호: 2025-서울서초-0842</div>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        {actionInfo.map(({ title, href, iconSrc }) => (
          <Link key={title} className="size-8 -mx-1" href={href}>
            <Image
              width={24}
              height={24}
              className="size-6"
              src={iconSrc}
              alt={title}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
}
