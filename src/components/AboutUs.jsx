import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import vedant from "../../public/images/vedant.png";

const AboutUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="about" className="bg-[#ecf8f8] text-center py-20 px-6">
      {/* Heading Section */}
      <motion.div
        ref={ref}
        className="text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold">
          <span className="text-[40px] font-bold text-[#36c3ff]">
            The #1 Choice
          </span>{" "}
          for
        </h3>
        <h4 className="text-[20px] md:text-[20px]">
          Security, Networking & IT in
        </h4>
        <motion.h1
          className="text-3xl md:text-6xl josefin-sans-bold"
          initial={{ scale: 0.8 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Ahilyanagar & Nashik
        </motion.h1>

        {/* Call to Action Button */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-[#326273] px-6 py-3 cursor-pointer text-white text-[18px] rounded-lg font-semibold shadow-lg hover:bg-[#264c5e] transition-all"
          >
            Get Expert Call
          </Link>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        ref={ref}
        className="max-w-5xl mx-auto p-8 mt-12 rounded-lg flex flex-col md:flex-row items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Image Section */}
        <motion.img
          src={vedant}
          alt="Vedant Tech Logo"
          className="w-60 h-60 sm:w-80 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* Text Content */}
        <div>
          <motion.h1
            className="text-3xl font-bold text-center text-gray-800 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Vedant Tech
          </motion.h1>

          <motion.p
            className="josefin-sans-regular text-[16px] md:text-[18px] text-center md:text-left text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <b>Vedant Tech</b> is a leading IT solutions provider dedicated to
            delivering <b>high-performance networking</b>, <b>security</b>, and{" "}
            <b>IT infrastructure services</b> for businesses, enterprises, and
            smart homes. Our mission is to bridge the digital divide by offering
            reliable, scalable, and innovative technology solutions tailored to
            your needs. With a team of experienced professionals, we have
            successfully deployed fiber optic networks, security surveillance
            systems, enterprise IT solutions, and cloud networking services for
            over <b>30+ satisfied clients</b>.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
