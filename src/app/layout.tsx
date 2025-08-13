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
  title: "Piece Admin",
  description: "피스 어드민 웹페이지",
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
    <html lang="ko" className="">
      <body
        className={`${pretendard.variable} ${pretendard.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
