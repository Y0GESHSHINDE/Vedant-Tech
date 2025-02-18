import React, { useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";

// Import images
import fiberImage from "../../public/images/Services/fiber.jpg";
import home1Image from "../../public/images/Services/home1.png";
import p2pImage from "../../public/images/Services/p2p.png";
import cctv2Image from "../../public/images/Services/cctv2.jpg";
const projectsData = [
  {
    name: "Fiber Optic Network for XYZ Corp",
    image: fiberImage,
    description:
      "Deployed a high-speed fiber optic network to enhance connectivity and reduce downtime.",
    client: "XYZ Corporation",
    duration: "3 Months",
    status: "Completed",
  },
  {
    name: "Smart Security System for ABC Mall",
    image: home1Image,
    description:
      "Installed 50+ AI-powered security cameras for real-time monitoring and enhanced safety.",
    client: "ABC Mall",
    duration: "2 Months",
    status: "Completed",
  },
  {
    name: "Enterprise LAN Setup for TechHub",
    image: p2pImage,
    description:
      "Designed a secure and scalable LAN/WAN infrastructure for seamless office networking.",
    client: "TechHub Pvt Ltd",
    duration: "4 Months",
    status: "Ongoing",
  },
  {
    name: "Cloud Networking for DEF Industries",
    image: cctv2Image,
    description:
      "Migrated enterprise operations to a secure and scalable cloud network infrastructure.",
    client: "DEF Industries",
    duration: "5 Months",
    status: "Completed",
  },
  {
    name: "CCTV Surveillance for GHI Factory",
    image: cctv2Image,
    description:
      "Implemented a 24/7 surveillance system with remote monitoring for industrial safety.",
    client: "GHI Factory",
    duration: "3 Months",
    status: "Completed",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="bg-[#ecf8f8] pt-20 px-6 text-center items-center">
      <div className="text-center mb-8">
        <h1 className="inline-block text-black px-8 py-3 text-[20px] md:text-2xl font-bold rounded-lg ">
          Our Projects
        </h1>
      </div>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        We have successfully completed numerous projects across networking,
        security, IT infrastructure, and cloud solutions.
      </p>
      <h3 className="text-lg mt-5 font-semibold text-gray-600 mb-6 bg-blue-100 py-2 px-4 inline-block rounded-md">
        30+ Happy Customers 🚀
      </h3>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {projectsData.slice(0, 3).map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
            onClick={() => setSelectedProject(project)}>
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
          </div>
        ))}
      </div>

      <button
        className="mt-6 bg-[#326273] text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        onClick={() => setSelectedProject(projectsData[3])}>
        View More Projects
      </button>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-4 text-gray-600 text-2xl"
              onClick={() => setSelectedProject(null)}>
              &times;
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
              <strong>Duration:</strong> {selectedProject.duration}
            </p>
            <p className="text-gray-700">
              <strong>Status:</strong> {selectedProject.status}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
