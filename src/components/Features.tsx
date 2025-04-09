import { BiLeaf, BiWrench, BiCube, BiDroplet } from "react-icons/bi";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-tertiary">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <BiLeaf size={20} />,
      title: "Sustainable Materials",
      description: "Made from responsibly sourced plywood",
    },
    {
      icon: <BiWrench size={20} />,
      title: "Handcrafted Quality",
      description: "Designed and built by skilled artisans",
    },
    {
      icon: <BiCube size={20} />,
      title: "Minimalist Aesthetic",
      description: "Perfect for modern and cozy interiors",
    },
    {
      icon: <BiDroplet size={20} />,
      title: "Eco-Friendly Finishes",
      description: "Safe, durable, and non-toxic",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-secondary text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
