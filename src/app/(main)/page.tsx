import About from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Introduction from "@/components/introduction";
import OurServices from "@/components/our-services";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className=" ">
      <TracingBeam childrenClassName="flex w-full space-y-20 flex-col items-center justify-between text-justify text-lg font-semibold md:pb-32 md:pt-10 lg:text-2xl">
        <Introduction />
        <About />
        <OurServices />
        <ContactUs />
      </TracingBeam>
    </main>
  );
}
