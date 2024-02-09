import About from "@/components/about-us";
import Introduction from "@/components/introduction";
import OurServices from "@/components/our-services";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-around text-justify text-lg font-semibold lg:px-56 lg:text-2xl">
      <Introduction />
      <OurServices />
      <About />
    </main>
  );
}
