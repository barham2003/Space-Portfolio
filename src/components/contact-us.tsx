import AnimateSection from "./ui/animate-section";
import { Button } from "./ui/button";
import Heading from "./ui/heading";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactUs() {
  return (
    <AnimateSection className="flex w-full flex-col gap-4" id="contact">
      <Heading>Contact Us</Heading>
      <Input placeholder="Email" />
      <Textarea placeholder="Type Your Content Here" className="h-[400px]" />
      <Button className=" rounded-full font-bold">Send Email</Button>
    </AnimateSection>
  );
}
