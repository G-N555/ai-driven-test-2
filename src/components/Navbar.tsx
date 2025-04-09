import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] z-50">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 text-[#B45309]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold text-[#1F2937]">PlyCraft</span>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-[#1F2937] font-medium hover:text-[#B45309] transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#1F2937] font-medium hover:text-[#B45309] transition-colors"
          >
            Store
          </a>
          <a
            href="#"
            className="text-[#1F2937] font-medium hover:text-[#B45309] transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-[#1F2937] font-medium hover:text-[#B45309] transition-colors"
          >
            Blog
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-white border border-[#E5E7EB] rounded-full py-2 px-4 pr-10 text-[#ADAEBC] focus:outline-none focus:ring-1 focus:ring-[#B45309]"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
          </div>
          <button className="p-2">
            <FiUser className="w-5 h-5 text-[#1F2937]" />
          </button>
          <button className="p-2 relative">
            <FiShoppingCart className="w-5 h-5 text-[#1F2937]" />
            <span className="absolute -top-1 -right-1 bg-[#B45309] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
