"use client";

import ChannelTalkIcon from "@/assets/channel-talk.svg";
import InstagramIcon from "@/assets/instagram.svg";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Fragment } from "react";
import { Separator } from "../ui/separator";

const actionInfo = [
  { title: "카카오 채널톡", href: "", icon: ChannelTalkIcon },
  { title: "인스타그램", href: "", icon: InstagramIcon },
];

const textInfo = [
  "퍼즐리",
  "서울특별시 서초구 방배동 870-32, 501",
  "대표이사: 양세빈",
  "puzzlyofficial@gmail.com",
  "사업자번호: 174-06-03144",
  "통신판매업신고번호: 2025-서울서초-0842",
];

export default function Footer() {
  const isTablet = useMediaQuery(1024);
  return (
    <footer className="p-10 text-[#6C7073] border-t border-[#CBD1D9]">
      <div className="space-y-8 flex-1">
        <div className="flex justify-between">
          <div className="space-y-3 text-3.5 leading-5 flex-1">
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
        </div>

        <div className="space-y-3 font-medium">
          {!isTablet ? (
            <div className="flex gap-4 flex-wrap items-center">
              {textInfo.map((text, index) => (
                <Fragment key={index}>
                  <div>{text}</div>
                  {index < textInfo.length - 1 && (
                    <Separator
                      orientation="vertical"
                      className="h-3! bg-[#CBD1D9]"
                    />
                  )}
                </Fragment>
              ))}
            </div>
          ) : (
            <div className="space-y-2 mb-8">
              {textInfo.map((text, index) => (
                <div key={index}>{text}</div>
              ))}
            </div>
          )}
          <div>Copyright © 2025 Piece Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
