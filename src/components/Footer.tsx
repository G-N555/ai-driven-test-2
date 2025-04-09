import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-darkFooter text-gray-400">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-bold text-white">Stay Connected</h3>
              <div className="hidden md:block w-12 h-px bg-gray-700"></div>
            </div>
            <p className="mb-4">
              Subscribe for exclusive offers and inspiration
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-secondary text-gray-400 px-4 py-2 rounded-l-full focus:outline-none"
              />
              <button className="bg-primary text-white px-4 py-2 rounded-r-full hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-bold text-white">Follow Us</h3>
              <div className="hidden md:block w-12 h-px bg-gray-700"></div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <BiLogoFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <BiLogoInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-primary transition-colors"
              >
                <BiLogoTwitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <div className="hidden md:block w-12 h-px bg-gray-700"></div>
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Store Locator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-bold text-white">Contact</h3>
              <div className="hidden md:block w-12 h-px bg-gray-700"></div>
            </div>
            <address className="not-italic mb-2">
              1234 Furniture Lane
              <br />
              Design District
              <br />
              Los Angeles, CA 90012
            </address>
            <a
              href="mailto:contact@plycraft.com"
              className="hover:text-white transition-colors"
            >
              contact@plycraft.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p>© 2025 PlyCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
