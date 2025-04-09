import heroImage from "../assets/images/hero-image.png";

const Hero = () => {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 flex flex-col items-start text-left">
            <h1 className="text-3xl md:text-[48px] font-bold text-secondary leading-tight mb-8">
              Handcrafted Plywood Stools – Timeless, Sustainable, and Designed
              for Modern Living.
            </h1>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-outline">Discover Our Story</button>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Plywood stool in a modern interior"
                className="w-full aspect-square object-cover max-w-[600px] max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
