import Image from "next/image";
import spaceLogo from "/public/space-logo.jpg";
import Heading from "./ui/heading";
import AnimateSection from "./ui/animate-section";
import AnimatePosition from "./ui/left-to-right";
import AnimateDiv from "./ui/animate-div";
import { FlipWords } from "./ui/flip-words";
import { SpaceSparkless } from "./space-sparkless";
const words = ["Space", "Apps", "Services", "Team"];

export default function Introduction() {
  return (
    <AnimateSection id="main" className="scroll-mt-48">
      <section className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between md:gap-12 ">
        <AnimatePosition toRight={true}>
          <Image
            src={spaceLogo}
            className=" w-[200px] min-w-[140px] lg:w-[400px]"
            alt="Logo"
            priority
          />
        </AnimatePosition>

        <AnimateDiv className="space-y-4">
          <div className="lg:hidden">
            <Heading as="h1">Welcome to Space</Heading>
            <Heading as="h2" className="break-words font-normal ">
              from here you can explore our <FlipWords words={words} />
            </Heading>
          </div>
          <SpaceSparkless />
        </AnimateDiv>
      </section>
    </AnimateSection>
  );
}
