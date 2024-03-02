import About from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Introduction from "@/components/introduction";
import OurServices from "@/components/our-services";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-around gap-[400px] px-4 py-20 text-justify text-lg font-semibold md:pb-32 md:pt-10 lg:px-20 lg:py-40 lg:text-2xl">
      <Introduction />
      <About />
      <OurServices />
      <ContactUs />
    </main>
  );
}
