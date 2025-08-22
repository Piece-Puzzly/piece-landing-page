// app/redirect-test/page.tsx
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RedirectTestPage() {
  const ua = (await headers()).get("user-agent")?.toLowerCase() || "";

  if (ua.includes("android")) {
    redirect("https://play.google.com/store/apps/details?id=com.puzzle.piece");
  }

  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) {
    redirect(
      "https://apps.apple.com/kr/app/%ED%94%BC%EC%8A%A4-piece-%EA%B0%80%EC%B9%98%EA%B4%80-%EA%B8%B0%EB%B0%98-%EA%B2%8C%EC%9D%B4-%EC%86%8C%EA%B0%9C%ED%8C%85/id6742348014"
    );
  }

  return <div />;
}
