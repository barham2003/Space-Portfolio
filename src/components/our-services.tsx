import { ourServices } from "@/lib/services";
import Heading from "./ui/heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimateSection from "./ui/animate-section";
import Link from "next/link";
import { Button } from "./ui/button";
import { LinkPreview } from "./ui/link-preview";
import { HoverEffect } from "./ui/card-hover-effect";

export default function OurServices() {
  return (
    <AnimateSection id="services" className="scroll-mt-0">
      <section>
        <Heading>Our Services</Heading>
        <HoverEffect items={ourServices} />
        {/* {ourServices.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold lg:text-3xl">
                  {service.title === "Courses" ? (
                    <Link href={service.link}>{service.title}</Link>
                  ) : (
                    service.title
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className=" font-medium text-gray-500">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter>
                {service.title === "Courses" && (
                  <Button asChild>
                    <LinkPreview url={service.link} className="w-full">
                      View Courses
                    </LinkPreview>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))} */}
      </section>
    </AnimateSection>
  );
}
