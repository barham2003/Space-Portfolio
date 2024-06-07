import Image from "next/image";
import spaceLogo from "/public/space-logo.jpg";
import Heading from "./ui/heading";
import AnimateSection from "./ui/animate-section";
import AnimatePosition from "./ui/left-to-right";
import AnimateDiv from "./ui/animate-div";
import { SpaceSparkless } from "./space-sparkless";

export default function Introduction() {
  return (
    <AnimateSection id="main" className="scroll-mt-48">
      <section className="flex w-full flex-col items-center gap-4 py-10 lg:flex-row lg:justify-center lg:gap-12 ">
        <AnimatePosition toRight={true}>
          <Image
            src={spaceLogo}
            className=" w-[200px] min-w-[140px] lg:w-[400px]"
            alt="Logo"
            priority
          />
        </AnimatePosition>

        <AnimateDiv className="space-y-4">
          <SpaceSparkless />
        </AnimateDiv>
      </section>
    </AnimateSection>
  );
}
