import { useState } from "react";
import { Link } from "react-scroll";
import "../../public/font/font.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ffffff] fixed text-black  w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl items-center josefin-sans-bold ">
              Vedant Tech
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6 cursor-pointer merriweather-regular">
            <Link to="hero" smooth={true} duration={500}>Home</Link>
            <Link to="about" smooth={true} duration={500}>About Us</Link>
            <Link to="services" smooth={true} duration={500}>Services</Link>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="bg-[#ef8354] px-6 text-white py-2 rounded-xl">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden merriweather-regular flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-In Menu with Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#7886C7] z-50 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl">
          &times;
        </button>

        {/* Mobile Menu Links */}
        <nav className="mt-16 space-y-4 text-center cursor-pointer">
          <Link to="hero" smooth={true} duration={500} className="block px-6 py-3 cursor-grab text-white hover:bg-blue-800">Home</Link>
          <Link to="about" smooth={true} duration={500} className="block px-6 py-3 text-white hover:bg-blue-800">About Us</Link>
          <Link to="services" smooth={true} duration={500} className="block px-6 py-3 text-white hover:bg-blue-800">Services</Link>
          <Link to="projects" smooth={true} duration={500} className="block px-6 py-3 text-white hover:bg-blue-800">Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="block px-6 py-3 text-white hover:bg-blue-800">Contact Us</Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
