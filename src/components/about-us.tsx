import AnimateSection from "./ui/animate-section";
import Heading from "./ui/heading";

export default function About() {
  return (
    <AnimateSection
      className=" px-3 leading-[35px] md:leading-[50px]"
      id="about"
    >
      <Heading>About Us</Heading>
      <p>
        Space is a forward-thinking organization dedicated to revolutionizing
        the way people learn and interact with technology. Founded on the
        principle of exploration and discovery, we believe in fostering a
        culture of continuous growth and learning. Our team consists of
        passionate educators, developers, and designers who are driven by a
        shared vision of making education accessible, engaging, and impactful
        for everyone. With years of experience in both education and technology,
        we combine expertise from diverse fields to create dynamic learning
        experiences and intuitive digital platforms. At Space, we believe in the
        power of education to transform lives and shape the future. That's why
        we're committed to staying at the forefront of innovation, constantly
        evolving our methods and technologies to meet the changing needs of
        learners in today's fast-paced world.
      </p>
    </AnimateSection>
  );
}
