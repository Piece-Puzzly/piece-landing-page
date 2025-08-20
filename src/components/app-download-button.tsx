import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
export default function AppDownloadButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full py-3.5 px-7 lg:py-5 lg:px-9 h-auto text-base leading-6 lg:text-2xl lg:leading-8 hover:bg-[#5D0EC0]">
          앱 다운로드
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-5 p-15 gap-7 flex flex-col items-center w-fit">
        <DialogHeader className="absolute hidden">
          <DialogTitle className="text-primary">다운로드</DialogTitle>
          <DialogDescription>다운로드</DialogDescription>
        </DialogHeader>
        <div className="text-[1.75rem] leading-10 text-primary font-semibold">
          Download
        </div>
        <div className="aspect-square w-45 bg-primary"></div>
        <div className="text-base text-6 font-medium text-primary text-center">
          <p>QR 코드를 스캔하여</p> <p>앱을 다운로드 하세요!</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
