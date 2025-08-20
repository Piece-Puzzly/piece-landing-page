import Fab from "@/components/fab";
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
  title: "개발 중",
  description: "...",
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="text-[16px] lg:text-[14px] break-keep">
      <body
        className={`${pretendard.variable} ${pretendard.className} antialiased relative`}
      >
        {children}
        
        <Fab />
      </body>
    </html>
  );
}
