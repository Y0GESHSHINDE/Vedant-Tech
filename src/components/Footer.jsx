import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold flex items-center">
            Vdeant Tech
          </h2>
          <p className="mt-2 text-gray-400">
            Your trusted partner in high-speed internet, IT infrastructure, and
            security solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                href="#"
                className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#"  to="projects" smooth={true} duration={500} className="hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link  href="#"  to="about" smooth={true} duration={500} className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <ul className="text-gray-400 space-y-2">
            <li className="flex items-center">
              <FaEnvelope className="mr-2" /> vedanttech40@gmail.com
            </li>
            <li className="flex items-center">
              <FaPhone className="mr-2" /> tel-  6262404040
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt  className="mr-2 text-[30px]" /> 1st Floor, Sai Plaza ,Akole Bypass Road ,Vitthal Nagar, Sangamner
              Ahilyanagar 422605
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Vdeant Tech. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
