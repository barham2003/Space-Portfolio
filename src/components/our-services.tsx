import { ourServices } from "@/lib/services";
import Heading from "./ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OurServices() {
  return (
    <section className="flex flex-col gap-8 ">
      <Heading>Our Services</Heading>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:px-56">
        {ourServices.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold lg:text-5xl">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify text-lg font-semibold lg:text-2xl">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
