import React, { useState } from "react";
import { FaNetworkWired, FaShieldAlt, FaServer, FaTools, FaSearch } from "react-icons/fa";

const servicesData = [
  {
    type: "High-Speed Internet Solutions",
    icon: <FaNetworkWired className="text-blue-500 text-2xl" />,
    services: [
       { name: "Wi-Fi & Hotspot Solutions", image: "../../public/images/Services/wifi.jpg" },
       { name: "P2P Wireless Connectivity", image: "../../public/images/Services/p2p.png" },
       { name: "Fiber Optic Network Installation", image: "../../public/images/Services/fiber.jpg" },
       { name: "Enterprise LAN & WAN Setup", image: "../../public/images/Services/wifi1.jpg" },
    ],
  },
  {
    type: "Security & Surveillance",
    icon: <FaShieldAlt className="text-red-500 text-2xl" />,
    services: [
      { name: "CCTV Surveillance Installation", image: "../../public/images/Services/cctv1.jpg" },
      { name: "Remote Monitoring & Access Control", image: "../../public/images/Services/remote.jpg" },
      { name: "Biometric & Access Control Systems", image: "../../public/images/Services/bio.jpeg" },
      { name: "Smart Security Camera Setup", image: "../../public/images/Services/cctv2.jpg" },
    ],
  },
  {
    type: "IT Infrastructure & Setup",
    icon: <FaServer className="text-green-500 text-2xl" />,
    services: [
       { name: "IT Infrastructure Management", image: "../../public/images/Services/it.jpg" },
      { name: "Server & Data Center Setup", image: "../../public/images/Services/data.jpg" },
      { name: "Structured Cabling & Wiring", image: "../../public/images/Services/cable.jpg" }
   ],
  },
  {
    type: "Other IT Services",
    icon: <FaTools className="text-yellow-500 text-2xl" />,
    services: [
      { name: "Home & Office Automation", image: "../../public/images/Services/home.jpg" },
      { name: "VoIP & IP Telephony Setup", image: "../../public/images/Services/phone.jpg" },
      { name: "Smart Home & IoT Integration", image: "../../public/images/Services/home1.png" },
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
      {/* Title Section */}
      <div className="text-center mb-8 items-center">
        <h1 className="inline-block text-black px-8 py-3  md:text-2xl font-bold rounded-lg ">
          Our Services
        </h1>
      </div>

      {/* Search Bar
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
          <FaSearch className="absolute left-3 top-4 text-gray-500" />
        </div>
      </div> */}

      {/* Services Container */}
      <div className="max-w-8xl mx-auto px-6">
        {filteredServices.map((category, index) => (
          <div key={index} className="mb-12">
            {/* Category Title */}
            <div className="flex justify-center items-center space-x-3 mb-6">
              <h2 className="text-[16px] md:text-[22px] font-semibold text-gray-700">{category.type}</h2>
              {category.icon}
            </div>

            {/* Service Cards */}
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
