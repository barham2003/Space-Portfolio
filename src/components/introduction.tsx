import Image from "next/image";
import spaceLogo from "/public/space-logo.jpg";
import Heading from "./ui/heading";
import AnimateSection from "./ui/animate-section";

export default function Introduction() {
  return (
    <AnimateSection
      className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-center md:gap-12"
      id="main"
    >
      <Image src={spaceLogo} className=" w-[200px] lg:w-[400px]" alt="Logo" />
      <div className=" space-y-4 lg:w-[40%]">
        <Heading className="md:text-left">Welcome to Space</Heading>
        <p className="leading-[35px]">
          Space, your premier destination for cutting-edge courses and
          innovative digital solutions. At Space, we are committed to pushing
          the boundaries of education and technology to empower individuals and
          organizations worldwide.
        </p>
      </div>
    </AnimateSection>
  );
}
