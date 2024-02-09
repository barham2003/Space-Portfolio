import Image from "next/image";
import spaceLogo from "/public/space-logo.png";
import navLinks from "@/lib/nav-links";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" fixed bottom-8 left-1/2 flex w-[95%] -translate-x-1/2 rounded-full border border-black/10 bg-secondary p-2 drop-shadow-2xl">
      <div className="w-[10%]">
        <Image src={spaceLogo} alt="Logo" className="w-[60px]" />
      </div>
      <ul className="flex w-[90%] items-center justify-around font-bold md:text-xl">
        {navLinks.map((link, index) => (
          <li>
            <Link href={link.href}>{link.head}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
