import React from "react";
import {
  FaNetworkWired,
  FaShieldAlt,
  FaCloud,
  FaHome,
  FaUserCheck,
} from "react-icons/fa";
import "../../public/font/font.css";

function AboutUs() {
  return (
    <div className="  bg-[#D4BEE4] py-6 px-6 bg- ">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="inline-block bg-blue-600 text-white px-8 py-3  md:text-2xl font-bold rounded-lg shadow-lg">
          About Us
        </h1>
      </div>

      {/* Who We Are */}
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-2xl rounded-lg mb-12 flex flex-col md:flex-row items-center">
        <img
          src="../../public/images/wifi1.jpg"
          alt="Vedant Tech Logo"
          className="w-60 h-60 sm:w-80 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
        />
        <div >
          <h1 className="text-3xl  font-bold text-center  text-gray-800 mb-4 merriweather-regular ">
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
