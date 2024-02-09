import Image from "next/image";
import spaceLogo from "/public/space-logo.jpg";

export default function Introduction() {
  return (
    <section className="flex w-full flex-col items-center gap-4">
      <Image src={spaceLogo} className=" w-[200px] lg:w-[400px]" alt="Logo" />
      <h1 className="text-3xl font-bold lg:text-4xl">Space</h1>
      <p className="w-[90%] text-justify text-xl font-semibold lg:w-1/2">
        Welcome to Space, your premier destination for cutting-edge courses and
        innovative digital solutions. At Space, we are committed to pushing the
        boundaries of education and technology to empower individuals and
        organizations worldwide.
      </p>
    </section>
  );
}
