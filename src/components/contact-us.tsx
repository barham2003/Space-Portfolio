import { Button } from "./ui/button";
import Heading from "./ui/heading";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactUs() {
  return (
    <section className="flex w-full flex-col gap-4">
      <Heading>Contact Us</Heading>
      <Input placeholder="Email" />
      <Textarea placeholder="Type Your Content Here" className="h-[400px]" />
      <Button className=" rounded-full font-bold">Send Email</Button>
    </section>
  );
}
