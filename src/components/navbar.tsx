import Image from "next/image";
import spaceLogo from "/public/space-logo.png";
import navLinks from "@/lib/nav-links";
import Link from "next/link";
import AnimateNav from "./ui/animate-nav";

export default function Navbar() {
  return (
    <AnimateNav className="fixed bottom-8 z-50 flex w-[93%] rounded-full border border-black/10 bg-secondary p-1 drop-shadow-2xl">
      <div className="w-[10%]">
        <Image src={spaceLogo} alt="Logo" className="w-[45px]" />
      </div>
      <ul className="flex w-[90%] items-center justify-around font-bold md:text-xl">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.head}</Link>
          </li>
        ))}
      </ul>
    </AnimateNav>
  );
}
