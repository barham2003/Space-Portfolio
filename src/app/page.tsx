import Introduction from "@/components/introduction";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 items-center w-full ">
      <Introduction />
    </main>
  );
}
