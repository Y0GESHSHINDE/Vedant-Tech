import React, { useState } from "react";
import { FaNetworkWired, FaShieldAlt, FaServer, FaTools, FaSearch } from "react-icons/fa";
import wifi from "../../public/images/Services/wifi.jpg";
import p2p from "../../public/images/Services/p2p.png";
import fiber from "../../public/images/Services/fiber.jpg";
import wifi1 from "../../public/images/Services/wifi1.jpg";
import cctv1 from "../../public/images/Services/cctv1.jpg";
import remote from "../../public/images/Services/remote.jpg";
import bio from "../../public/images/Services/bio.jpeg";
import cctv2 from "../../public/images/Services/cctv2.jpg";
import it from "../../public/images/Services/it.jpg";
import data from "../../public/images/Services/data.jpg";
import cable from "../../public/images/Services/cable.jpg";
import home from "../../public/images/Services/home.jpg";
import phone from "../../public/images/Services/phone.jpg";
import home1 from "../../public/images/Services/home1.png";

const servicesData = [
  {
    type: "High-Speed Internet Solutions",
    icon: <FaNetworkWired className="text-blue-500 text-2xl" />,
    services: [
       { name: "Wi-Fi & Hotspot Solutions", image: wifi },
       { name: "P2P Wireless Connectivity", image: p2p },
       { name: "Fiber Optic Network Installation", image: fiber },
       { name: "Enterprise LAN & WAN Setup", image: wifi1 },
    ],
  },
  {
    type: "Security & Surveillance",
    icon: <FaShieldAlt className="text-red-500 text-2xl" />,
    services: [
      { name: "CCTV Surveillance Installation", image: cctv1 },
      { name: "Remote Monitoring & Access Control", image: remote },
      { name: "Biometric & Access Control Systems", image: bio },
      { name: "Smart Security Camera Setup", image: cctv2 },
    ],
  },
  {
    type: "IT Infrastructure & Setup",
    icon: <FaServer className="text-green-500 text-2xl" />,
    services: [
       { name: "IT Infrastructure Management", image: it },
      { name: "Server & Data Center Setup", image: data },
      { name: "Structured Cabling & Wiring", image: cable }
   ],
  },
  {
    type: "Other IT Services",
    icon: <FaTools className="text-yellow-500 text-2xl" />,
    services: [
      { name: "Home & Office Automation", image: home },
      { name: "VoIP & IP Telephony Setup", image: phone },
      { name: "Smart Home & IoT Integration", image: home1 },
    ],
  },
];

function Services() {
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = servicesData.map((category) => ({
    ...category,
    services: category.services.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <section id="services" className=" py-20 bg-[#ecf8f8] ">
      <div className="text-center mb-8 items-center">
        <h1 className="inline-block text-black px-8 py-3  md:text-2xl font-bold rounded-lg ">
          Our Services
        </h1>
      </div>

      <div className="max-w-8xl mx-auto px-6">
        {filteredServices.map((category, index) => (
          <div key={index} className="mb-12">
            <div className="flex justify-center items-center space-x-3 mb-6">
              <h2 className="text-[16px] md:text-[22px] font-semibold text-gray-700">{category.type}</h2>
              {category.icon}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {category.services.length > 0 ? (
                category.services.slice(0, expanded ? category.services.length : 4).map((service, i) => (
                  <div key={i} className="bg-white shadow-lg rounded-lg p-6 w-72 text-center border border-gray-300 hover:shadow-2xl transition relative">
                    <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-md mb-3" />
                    <h3 className="text-lg font-medium text-gray-800">{service.name}</h3>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
