import { BiRightArrowAlt } from "react-icons/bi";
import aboutImage from "../assets/images/about-image.png";

const About = () => {
  return (
    <section className="bg-light py-16">
      <div className="container">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-gray-200 border-dashed">
            <img
              src={aboutImage}
              alt="Our workshop and team"
              className="w-full aspect-square object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Our Story – Meet the Makers
            </h2>
            <p className="text-tertiary mb-8">
              A small team with a big vision. We are a group of passionate
              designers and artisans who believe that great furniture should be
              both beautiful and responsible. Our plywood stools are crafted
              with care, blending modern design with traditional craftsmanship.
            </p>
            <a
              href="#"
              className="text-primary font-medium flex items-center gap-1 hover:underline"
            >
              See how we create our stools
              <BiRightArrowAlt />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
