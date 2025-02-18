import React from "react";
import { FaNetworkWired, FaShieldAlt, FaCloud, FaHome, FaUserCheck } from "react-icons/fa";
import "../../public/font/font.css";
import { Link } from "react-scroll";
import vedant from "../../public/images/vedant.png"
function AboutUs() {
  return (
    <div id="about" className=" bg-[#ecf8f8]  text-center py-20  px-6 bg- ">
      <div className=" animate-fadeIn delay-300 text-black">
        <h3 className="text-2xl md:text-3xl font-semibold">
          <span className="text-[40px] font-bold text-[#36c3ff]">
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
        <div className="mt-16 ">
          <Link
            to="contact" smooth={true} duration={500} 
            href=""
            className="bg-[#326273] px-6 py-3  text-white text-[18px]  rounded-lg font-semibold"
          >
            Get Expert call
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-8 mt-7  rounded-lg mb-12 flex flex-col md:flex-row items-center">
        <img
          src={vedant}
          alt="Vedant Tech Logo"
          className="w-60 h-60 sm:w-80 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h1 className="text-3xl  font-bold text-center text-gray-800 mb- merriweather-regular ">
            Vedant Tech
          </h1>
          <p className="josefin-sans-regula text-[16px] md:text-[18px] text-center md:text-left text-gray-600 ">
            <b>Vedant Tech</b> is a leading IT solutions provider dedicated to
            delivering <b>high-performance networking</b>, <b>security</b>, and <b>IT
            infrastructure services</b> for businesses, enterprises, and smart
            homes. Our mission is to bridge the digital divide by offering
            reliable, scalable, and innovative technology solutions tailored to
            your needs. With a team of experienced professionals, we have
            successfully deployed fiber optic networks, security surveillance
            systems, enterprise IT solutions, and cloud networking services for
            over <b> 30+ satisfied clients</b> .
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
