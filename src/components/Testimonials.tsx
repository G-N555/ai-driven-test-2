import { BiStar } from "react-icons/bi";
import avatar1Image from "../assets/images/avatar1.png";
import avatar2Image from "../assets/images/avatar2.png";

interface TestimonialProps {
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

const TestimonialCard = ({ name, avatar, text, rating }: TestimonialProps) => {
  return (
    <div className="bg-light rounded-xl shadow-product p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-secondary">{name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <BiStar
                key={i}
                className={`${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                }`}
                size={16}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-tertiary">{text}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma L.",
      avatar: avatar1Image,
      text: '"The best stool I\'ve ever owned! Simple, sturdy, and stunning."',
      rating: 5,
    },
    {
      name: "Mark R.",
      avatar: avatar2Image,
      text: '"Finally, a stylish stool that\'s also eco-friendly. Love it."',
      rating: 5,
    },
  ];

  return (
    <section className="bg-cream py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-secondary text-center mb-12">
          Customer Reviews
        </h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
