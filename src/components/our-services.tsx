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

export default function OurServices() {
  return (
    <AnimateSection id="services" className="scroll-mt-0">
      <section>
        <Heading>Our Services</Heading>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {ourServices.map((service, index) => (
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
                    <Link href={service.link} className="w-full">
                      View Courses
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </AnimateSection>
  );
}
