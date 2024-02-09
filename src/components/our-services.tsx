import { ourServices } from "@/lib/services";
import Heading from "./ui/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OurServices() {
  return (
    <section id="services">
      <Heading>Our Services</Heading>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {ourServices.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold lg:text-5xl">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
