import LogoButton from "./logo-button";
import Portals from "./portals";
export default function Header() {
  return (
    <div className="w-full flex fixed top-0 z-20">
      <div className="py-6 px-6 md:px-10 lg:px-15 flex justify-between w-full mx-auto max-w-[1920px]">
        <LogoButton />
        <Portals />
      </div>
    </div>
  );
}
