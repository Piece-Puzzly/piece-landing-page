import LogoButton from "./logo-button";
import Portals from "./portals";
export default function Header() {
  return (
    <div className="py-6 px-15 flex justify-between fixed top-0 w-full z-20">
      <LogoButton />
      <Portals />
    </div>
  );
}
