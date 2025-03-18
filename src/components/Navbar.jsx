import { useState } from "react";
import { Link } from "react-scroll";
import vedantLogo from "../../public/images/vedant.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 text-2xl font-bold">
              <img src={vedantLogo} alt="Vedant Tech" className="h-10 w-auto" />
              Vedant Tech
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 cursor-pointer font-medium">
            <Link to="hero" smooth={true} duration={500} className="hover:text-blue-600">Home</Link>
            <Link to="about" smooth={true} duration={500} className="hover:text-blue-600">About Us</Link>
            <Link to="services" smooth={true} duration={500} className="hover:text-blue-600">Services</Link>
            <Link to="projects" smooth={true} duration={500} className="hover:text-blue-600">Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="bg-[#ef8354] px-6 py-2 text-white rounded-xl shadow-md hover:bg-[#e76b3c] transition">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="focus:outline-none">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)}></div>

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        {/* Close Button */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <img src={vedantLogo} alt="Vedant Tech" className="h-10 w-auto" />
          <button onClick={() => setIsOpen(false)} className="text-gray-700 text-2xl">&times;</button>
        </div>

        {/* Mobile Menu Links */}
        <nav className="mt-6 space-y-4 text-center flex flex-col items-center font-medium">
          <Link to="hero" smooth={true} duration={500} className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="about" smooth={true} duration={500} className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="services" smooth={true} duration={500} className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="projects" smooth={true} duration={500} className="block px-6 py-3 text-gray-700 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="contact" smooth={true} duration={500} className="block px-6 py-3 text-white bg-[#ef8354] rounded-md shadow-md w-1/2  hover:bg-[#e76b3c] transition" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
