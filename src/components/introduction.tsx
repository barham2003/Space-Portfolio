import Image from "next/image";
import spaceLogo from "/public/space-logo.jpg";
import Heading from "./ui/heading";

export default function Introduction() {
  return (
    <section className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center md:gap-12">
      <Image src={spaceLogo} className=" w-[200px] lg:w-[400px]" alt="Logo" />
      <div className="lg:w-[40%]">
        <Heading className="md:text-left">Welcome to Space</Heading>
        <p className="text-justify text-xl font-semibold leading-[35px]">
          Space, your premier destination for cutting-edge courses and
          innovative digital solutions. At Space, we are committed to pushing
          the boundaries of education and technology to empower individuals and
          organizations worldwide.
        </p>
      </div>
    </section>
  );
}
