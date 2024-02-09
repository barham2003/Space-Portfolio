import Introduction from "@/components/introduction";
import OurServices from "@/components/our-services";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-around">
      <Introduction />
      <OurServices />
    </main>
  );
}
