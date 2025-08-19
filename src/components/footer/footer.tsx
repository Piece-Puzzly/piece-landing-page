import ChannelTalkIcon from "@/assets/channel-talk.svg";
import InstagramIcon from "@/assets/instagram.svg";
import { Separator } from "../ui/separator";

const actionInfo = [
  { title: "카카오 채널톡", href: "", icon: ChannelTalkIcon },
  { title: "인스타그램", href: "", icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="p-15 text-[#6C7073] flex items-start border-t border-[#CBD1D9]">
      <div className="space-y-8 flex-1">
        <div className="space-y-3 text-3.5 leading-5">
          <div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              이용 약관
            </a>
          </div>
          <div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              개인정보 처리방침
            </a>
          </div>
        </div>
        <div className="space-y-3 font-medium">
          <div>Copyright © 2025 Piece Inc. All rights reserved.</div>
          <div className="flex gap-4 flex-wrap items-center">
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
        {actionInfo.map(({ title, href, icon: Icon }) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={title}
            className="size-8 -mx-1"
            href={href}
          >
            <Icon className="size-6" />
          </a>
        ))}
      </div>
    </footer>
  );
}
