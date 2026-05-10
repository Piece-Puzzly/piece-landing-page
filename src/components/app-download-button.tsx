"use client";

import DownloadQr from "@/assets/download-qr.svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useDeviceType from "@/hooks/use-device-type";

export default function AppDownloadButton() {
  const device = useDeviceType();

  // 모바일 또는 태블릿일 경우 실행될 링크 이동 함수
  const handleRedirect = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    // 🔗 여기에 실제 링크를 입력하세요
    const androidUrl = "/redirect-page"; // 예: "https://play.google.com/store/apps/details?id=..."
    const iosUrl = "/redirect-page"; // 예: "https://apps.apple.com/app/id..."

    if (/android/.test(userAgent)) {
      window.location.href = androidUrl;
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      window.location.href = iosUrl;
    } else {
      // 혹시 모를 예외 상황 (PC인데 이 함수가 호출된 경우 등)
      alert("스토어로 이동할 수 없습니다.");
    }
  };

  // 공통 버튼 스타일
  const buttonClassName =
    "flex min-w-[100px] items-center justify-center font-semibold rounded-full py-3.5 px-7 lg:py-5 lg:px-9 h-auto text-base leading-6 lg:text-xl lg:leading-8 hover:bg-[#5D0EC0]";

  // ✅ PC일 경우: QR코드를 보여주는 Dialog를 렌더링
  if (device === "pc") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button className={buttonClassName}>앱 다운로드</Button>
        </DialogTrigger>
        <DialogContent className="rounded-5 p-15 gap-7 flex flex-col items-center w-fit">
          <DialogHeader className="absolute hidden">
            <DialogTitle className="text-primary">다운로드</DialogTitle>
            <DialogDescription>다운로드</DialogDescription>
          </DialogHeader>
          <div className="text-[1.75rem] leading-10 text-primary font-semibold">
            Download
          </div>
          <DownloadQr className="size-45" />
          <div className="text-base text-6 font-medium text-primary text-center">
            <p>QR 코드를 스캔하여</p> <p>앱을 다운로드 하세요!</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  // ✅ 모바일 또는 태블릿일 경우: 클릭 시 스토어로 이동하는 버튼을 렌더링
  return (
    <Button className={buttonClassName} onClick={handleRedirect}>
      앱 다운로드
    </Button>
  );
}
