import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FcServices } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-scroll";
import cctv1 from "../../public/images/cctv1.jpg";
import wifi1 from "../../public/images/wifi1.jpg";
import home1 from "../../public/images/home1.jpg";

const images = [cctv1, wifi1, home1];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Static Background Image Change */}
      <img
        src={images[currentIndex]}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-light"
        >
          Powering the Future with <br className="hidden md:block" />
        </motion.h1>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          <span className="text-[#DDA853]">Smart IT</span> &{" "}
          <span className="text-[#DDA853]">Security Solutions</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-3 text-lg md:text-xl opacity-80"
        >
          Security & Surveillance | Home Automation | IT Infrastructure
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 flex flex-col md:flex-row gap-5"
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="flex md:w-80 items-center gap-2 justify-center text-center bg-[#ccd5ae] px-6 py-3 rounded-lg text-black text-lg font-semibold shadow-md cursor-pointer"
            >
              Explore Our Services <FcServices className="text-2xl" />
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex md:w-80 items-center justify-center text-center gap-2 bg-[#ccd5ae] px-6 py-3 rounded-lg text-black text-lg font-semibold shadow-md cursor-pointer"
            >
              Get Quote <IoIosContact className="text-2xl" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
