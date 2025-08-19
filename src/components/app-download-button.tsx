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
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-primary">Download</DialogTitle>
          <DialogDescription className="absolute-hidden">
            다운로드
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
