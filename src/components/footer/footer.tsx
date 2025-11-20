"use client";

import ChannelTalkIcon from "@/assets/channel-talk.svg";
import InstagramIcon from "@/assets/instagram.svg";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Fragment } from "react";
import { Separator } from "../ui/separator";

const actionInfo = [
  {
    title: "카카오 채널톡",
    href: "https://kd0n5.channel.io/home",
    icon: ChannelTalkIcon,
  },
  {
    title: "인스타그램",
    href: "https://www.instagram.com/piece_puzzly?igsh=MXNwMmMwanFkOGkyNQ%3D%3D",
    icon: InstagramIcon,
  },
];

const textInfo = [
  "퍼즐리",
  "서울특별시 서초구 방배동 870-32, 501",
  "대표이사: 양세빈",
  "puzzlyofficial@puzzly.site",
  "사업자번호: 174-06-03144",
  "통신판매업신고번호: 2025-서울서초-0842",
];

export default function Footer() {
  const isTablet = useMediaQuery(1024);
  return (
    <footer className="p-10 text-[#6C7073] border-t border-[#CBD1D9]">
      <div className="space-y-8 flex-1">
        <div className="flex justify-between text-xs leading-4">
          <div className="space-y-3  flex-1">
            <div>
              <a
                href="https://brassy-client-c0a.notion.site/16a2f1c4b966800f923cd499d8e07a97"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                이용 약관
              </a>
            </div>
            <div>
              <a
                href="https://brassy-client-c0a.notion.site/16a2f1c4b96680f8b622e5925a394edf?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                개인정보처리방침
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

        <div className="space-y-3 font-medium ">
          {!isTablet ? (
            <div className="flex gap-4 flex-wrap items-center">
              {textInfo.map((text, index) => (
                <Fragment key={index}>
                  <div className="text-xs leading-4">{text}</div>
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
            <div className="space-y-2 mb-8 text-xs leading-4">
              {textInfo.map((text, index) => (
                <div key={index}>{text}</div>
              ))}
            </div>
          )}
          <div className="text-xs leading-4">
            Copyright © 2025 Piece Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
