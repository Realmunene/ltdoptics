import React from "react";

import eyeCheckup from "./Assets/eyecheckup.webp";
import lenses from "./Assets/lens.webp";
import frames from "./Assets/framedesign.webp";
import { Link } from "react-router-dom";

const Ourservices = () => {
  const services = [
    {
      title: "EYE CHECKUPS",
      description: "Professional vision testing",
      image: eyeCheckup,
    },
    {
      title: "PRESCRIPTION LENSES",
      description: "High quality optical lenses",
      image: lenses,
    },
    {
      title: "DESIGNER FRAMES",
      description: "Modern and stylish eyewear",
      image: frames,
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      
      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-bold uppercase mb-10">
        Our Services
      </h1>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden h-[420px] cursor-pointer group"
          >
            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Text bottom left */}
            <div className="absolute bottom-6 left-5 text-white">
              <h2 className="text-2xl font-bold">
                {service.title}
              </h2>
              <p className="text-sm">
                {service.description}
              </p>
            </div>

            {/* Bottom right icon */}
            <div className="absolute bottom-6 right-5">
              <button className="text-white text-3xl font-light">
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View all */}
      <div className="text-center mt-10">
        <Link to='/services'>
        <button className="text-3xl font-medium underline hover:text-sky-700 transition">
          View All
        </button>
        </Link>
      </div>

    </section>
  );
};

export default Ourservices;