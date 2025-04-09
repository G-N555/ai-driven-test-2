import blog1Image from "../assets/images/blog1.png";
import blog2Image from "../assets/images/blog2.png";
import blog3Image from "../assets/images/blog3.png";

interface BlogPostProps {
  image: string;
  title: string;
}

const BlogPostCard = ({ image, title }: BlogPostProps) => {
  return (
    <div className="shadow-product rounded-xl overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-4">{title}</h3>
        <a href="#" className="text-primary font-medium hover:underline">
          Read More →
        </a>
      </div>
    </div>
  );
};

const Blog = () => {
  const posts = [
    {
      image: blog1Image,
      title: "The Beauty of Plywood: Why It's Perfect for Furniture",
    },
    {
      image: blog2Image,
      title: "How We Make Our Stools Sustainable & Durable",
    },
    {
      image: blog3Image,
      title: "Minimalist Living: Creating a Cozy Home with Less",
    },
  ];

  return (
    <section className="bg-light py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-secondary">From Our Blog</h2>
          <div className="hidden md:block w-1/3 h-px bg-gray-200"></div>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPostCard key={index} image={post.image} title={post.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
