import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// Import images
import sai from "../../public/images/sai_mandir.jpg";
import smbt from "../../public/images/smbt.jpg";
import amrutvahini from "../../public/images/amrutvahini.jpg";
import cctv2Image from "../../public/images/Services/cctv2.jpg";

const projectsData = [
  {
    name: "Shree Sai Baba Sansthan, Shirdi",
    image: sai,
    description:
      "Completed live streaming of Sai Baba darshan across the entire campus. Currently deploying advanced surveillance and IT systems.",
    client: "Shree Sai Baba Sansthan",
    status: "Completed",
  },
  {
    name: "SMBT Institute",
    image: smbt,
    description:
      "Installed 200 surveillance cameras and an EPABX system across the campus. Implemented a centralised monitoring system for security.",
    client: "SMBT Institute",
    status: "Completed",
  },
  {
    name: "Sangamner City Surveillance Project",
    image: cctv2Image,
    description:
      "Developed a city-wide surveillance system under the guidance of the Superintendent of Police, Ahillyanagar. Integrated a large-scale monitoring room at Sangamner police station, enabling direct PTZ camera control.",
    client: "Sangamner Police Station",
    status: "Completed",
  },
  {
    name: "Amrutvahini College of Engineering",
    image: amrutvahini,
    description:
      "Set up servers for the computer lab and call centre. Installed networking systems across the campus.",
    client: "Amrutvahini COE",
    status: "Ongoing",
  },
  {
    name: "Life Line Hospital, Sangamner",
    image: cctv2Image,
    description:
      "Established complete IT infrastructure and networking solutions. Implemented EPABX and nurse call systems for hospital operations.",
    client: "Life Line Hospital",
    status: "Completed",
  },
  {
    name: "KK Thorat Construction Company",
    image: cctv2Image,
    description:
      "Executed networking and EPABX system installations across multiple office locations. Implemented Point-to-Point connectivity in the company’s stone crusher unit and office areas.",
    client: "KK Thorat Construction",
    status: "Completed",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="bg-[#ecf8f8] py-20 px-6 text-center">
      {/* Section Title */}
      <motion.h1
        className="text-black text-2xl md:text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Projects
      </motion.h1>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        We have successfully completed numerous projects across networking,
        security, IT infrastructure, and cloud solutions.
      </p>
      <h3 className="text-lg mt-5 font-semibold text-gray-600 mb-6 bg-blue-100 py-2 px-4 inline-block rounded-md">
        30+ Happy Customers 🚀
      </h3>

      {/* Projects Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className="absolute top-2 right-4 text-gray-600 text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold text-gray-800 mt-4">
              {selectedProject.name}
            </h2>
            <p className="text-gray-600 mt-2">{selectedProject.description}</p>
            <p className="text-gray-700 mt-2">
              <strong>Client:</strong> {selectedProject.client}
            </p>
            <p className="text-gray-700">
              <strong>Status:</strong> {selectedProject.status}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Projects;
