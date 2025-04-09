import { BiShoppingBag } from "react-icons/bi";
import product1Image from "../assets/images/product1.png";
import product2Image from "../assets/images/product2.png";
import product3Image from "../assets/images/product3.png";

interface ProductProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const ProductCard = ({ image, title, description, price }: ProductProps) => {
  return (
    <div className="bg-light rounded-xl shadow-product overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-tertiary mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-secondary">${price}</span>
          <button className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary/90 transition-colors">
            <BiShoppingBag />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      image: product1Image,
      title: "Minimalist Bar Stool",
      description: "Lightweight, durable, and elegant",
      price: 199,
    },
    {
      image: product2Image,
      title: "Scandinavian Plywood Stool",
      description: "Simple and timeless",
      price: 149,
    },
    {
      image: product3Image,
      title: "Adjustable Workshop Stool",
      description: "Functional design with a sleek touch",
      price: 249,
    },
  ];

  return (
    <section className="bg-lightGray py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-secondary text-center mb-12">
          Featured Products
        </h2>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
