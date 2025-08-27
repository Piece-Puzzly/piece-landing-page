import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const pretendard = localFont({
  src: "../font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});
// const notoSans = Noto_Sans_KR({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "피스(Piece) | 가치관 기반 게이 소개팅 앱 ",
  description:
    "누구나 퍼즐 조각처럼 꼭 맞는 인연이 있습니다. 피스는 마음이 통하는 상대를 찾아드리는 게이 소개팅 앱입니다.",
  icons: {
    icon: "/favicon.png",
  },
  other: {
    "naver-site-verification": "7172e194b4bca7e6c7b4a271f632c9809252e1f8",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="text-[16px]  break-keep">
      <body
        className={`${pretendard.variable} ${pretendard.className} antialiased `}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-08F110M34C" />
    </html>
  );
}
