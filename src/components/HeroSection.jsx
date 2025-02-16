import { useState, useEffect } from "react";
import "../../public/font/font.css";
import { FcServices } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";

const HeroSection = () => {
  const images = [
    "/public/images/cctv1.jpg",
    "/public/images/wifi1.jpg",
    "/public/images/home1.jpg",
  ];

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
    <section className="relative items-center w-full h-[100vh] md:h-[100vh] lg:h-[100vh] overflow-hidden">
      {/* Image Wrapper */}
      <div className="absolute inset-0 flex transition-transform duration-700">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className=" animate-fadeIn delay-300">
          <h3 className="text-2xl md:text-3xl font-semibold">
            <span className="text-[35px] font-bold text-[#36c3ff]">
              The #1 Choice
            </span>{" "}
            for
          </h3>
          <h4 className="text-[20px] md:text-[20px] ">
            Security, Networking & IT in
          </h4>
          <h1 className="text-3xl md:text-6xl josefin-sans-bold">
            Ahilyanagar & Nashik
          </h1>
          <div className="mt-8 ">
            <a
              href=""
              className="bg-purple-500 px-6 py-3 rounded-lg font-semibold">
              Get Expert call
            </a>
          </div>
        </div>
        <h1 className="text-2xl mt-16 md:text-5xl  animate-fadeIn josefin-sans-light">
          Powering the Future with <br className="hidden md:block" />
        </h1>
        <div className="text-3xl md:text-6xl  animate-fadeIn  text-[#FBFBFB]">
          {" "}
          <span className="text-[#DDA853] font-extrabold ">
            Smart IT
          </span> &{" "}
          <span className="text-[#DDA853] font-extrabold">
            Security Solutions
          </span>
        </div>
        <p className="mt-3 text-md md:text-xl opacity-80 josefin-sans-normal text-white animate-fadeIn delay-200">
          Security & Surveillance | Home Automation | IT Infrastructure
        </p>
        <div className="mt-16 flex flex-col gap-5  md:flex-row ">
          <a
            href="/services"
            className="flex items-center gap-2 justify-center text-center f bg-blue-600 hover:bg-blue-700 px-6 py-3 md:px-7 md:py-3.5 rounded-lg text-white text-md md:text-lg font-semibold shadow-md relative overflow-hidden transition duration-300">
            <span className="absolute inset-0 bg-white opacity-10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            Explore Our Services <FcServices className="text-[25px]" />
          </a>
          <a
            href="/contact"
            className="flex items-center justify-center text-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 md:px-7 md:py-3.5 rounded-lg text-white text-md md:text-lg font-semibold shadow-md relative overflow-hidden transition duration-300">
            <span className="absolute inset-0 bg-white opacity-10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            Get Quote <IoIosContact className="text-[25px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
