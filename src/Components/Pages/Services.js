import React, { useState } from "react";
// Top category images
import eyeImg from "../Assets/eye-checkup.jpg";
import lensImg from "../Assets/lenses.jpg";
import frameImg from "../Assets/frames.jpg";
import readingImg from "../Assets/reading-glasses.jpg";
import accessoryImg from "../Assets/accessories.jpg";

const Services = () => {

  const categories = [
    {
      name: "All Services",
      image: eyeImg,
    },
    {
      name: "Eye Checkups",
      image: eyeImg,
    },
    {
      name: "Prescription Lenses",
      image: lensImg,
    },
    {
      name: "Designer Frames",
      image: frameImg,
    },
    {
      name: "Reading Glasses",
      image: readingImg,
    },
    {
      name: "Optical Accessories",
      image: accessoryImg,
    },
  ];
const [selectedService, setSelectedService] = useState(null);

  const serviceData = {
  "All Services": [
    {
      title: "Complete Eye Examination",
      duration: "45 Min",
      price: "Ksh 2,000",
      description:
        "Professional vision testing using advanced diagnostic equipment to assess your eyesight and overall eye health.",
      details: [
        "Visual acuity testing",
        "Eye pressure examination",
        "Retinal health assessment",
        "Professional eye consultation",
      ],
      image1: eyeImg,
      image2: lensImg,
    },
    {
      title: "Progressive Lenses",
      duration: "30 Min",
      price: "Ksh 8,500",
      description:
        "Premium progressive lenses designed to provide smooth vision correction at all distances.",
      details: [
        "Lens power assessment",
        "Personalized fitting",
        "Anti-glare coating options",
        "Professional adjustment",
      ],
      image1: lensImg,
      image2: frameImg,
    },
    {
      title: "Luxury Frames Fitting",
      duration: "25 Min",
      price: "Ksh 5,000",
      description:
        "Discover stylish and comfortable frames that match your personality and lifestyle.",
      details: [
        "Face shape analysis",
        "Frame styling advice",
        "Comfort adjustment",
        "Premium frame selection",
      ],
      image1: frameImg,
      image2: readingImg,
    },
    {
      title: "Reading Glasses",
      duration: "20 Min",
      price: "Ksh 3,000",
      description:
        "Comfortable reading glasses available in various strengths and elegant designs.",
      details: [
        "Reading strength assessment",
        "Frame selection",
        "Lens fitting",
        "Comfort adjustments",
      ],
      image1: readingImg,
      image2: frameImg,
    },
    {
      title: "Lens Cleaning & Care",
      duration: "15 Min",
      price: "Ksh 1,000",
      description:
        "Professional maintenance and cleaning services to keep your lenses in perfect condition.",
      details: [
        "Deep lens cleaning",
        "Scratch inspection",
        "Protective coating advice",
        "Care accessories recommendation",
      ],
      image1: accessoryImg,
      image2: lensImg,
    },
    {
      title: "Frame Adjustments",
      duration: "15 Min",
      price: "Ksh 800",
      description:
        "Precise adjustments to improve the comfort and fit of your glasses.",
      details: [
        "Temple alignment",
        "Nose pad adjustment",
        "Frame balancing",
        "Comfort testing",
      ],
      image1: frameImg,
      image2: accessoryImg,
    },
  ],

  "Eye Checkups": [
    {
      title: "Vision Assessment",
      duration: "45 Min",
      price: "Ksh 2,000",
      description:
        "Comprehensive eye examination to determine your exact visual needs.",
      details: [
        "Visual clarity testing",
        "Eye coordination assessment",
        "Prescription evaluation",
        "Professional consultation",
      ],
      image1: eyeImg,
      image2: lensImg,
    },
    {
      title: "Eye Health Screening",
      duration: "30 Min",
      price: "Ksh 1,500",
      description:
        "Early detection and monitoring of common eye conditions.",
      details: [
        "Eye pressure check",
        "Retinal examination",
        "Disease screening",
        "Eye health advice",
      ],
      image1: eyeImg,
      image2: accessoryImg,
    },
  ],

  "Prescription Lenses": [
    {
      title: "Single Vision Lenses",
      duration: "20 Min",
      price: "Ksh 4,500",
      description:
        "Clear and accurate correction for either near or distance vision.",
      details: [
        "Lens measurement",
        "Prescription verification",
        "Lens fitting",
        "Quality inspection",
      ],
      image1: lensImg,
      image2: frameImg,
    },
    {
      title: "Progressive Lenses",
      duration: "30 Min",
      price: "Ksh 8,500",
      description:
        "Seamless transition lenses for near, intermediate and far vision.",
      details: [
        "Advanced measurements",
        "Customized lens design",
        "Anti-reflective options",
        "Final fitting",
      ],
      image1: lensImg,
      image2: readingImg,
    },
  ],

  "Designer Frames": [
    {
      title: "Premium Collection",
      duration: "25 Min",
      price: "Ksh 5,000",
      description:
        "Explore a range of fashionable and premium eyewear collections.",
      details: [
        "Designer brand selection",
        "Face shape consultation",
        "Style recommendations",
        "Perfect fitting",
      ],
      image1: frameImg,
      image2: readingImg,
    },
    {
      title: "Frame Styling",
      duration: "30 Min",
      price: "Ksh 3,500",
      description:
        "Professional guidance to help you choose your perfect eyewear style.",
      details: [
        "Personal style analysis",
        "Color matching",
        "Frame adjustments",
        "Comfort fitting",
      ],
      image1: frameImg,
      image2: accessoryImg,
    },
  ],

  "Reading Glasses": [
    {
      title: "Classic Readers",
      duration: "15 Min",
      price: "Ksh 2,500",
      description:
        "Simple and elegant reading glasses designed for daily comfort.",
      details: [
        "Reading power test",
        "Frame selection",
        "Lens fitting",
        "Comfort adjustment",
      ],
      image1: readingImg,
      image2: frameImg,
    },
  ],

  "Optical Accessories": [
    {
      title: "Cleaning Kits",
      duration: "10 Min",
      price: "Ksh 800",
      description:
        "Premium cleaning products that maintain the clarity of your lenses.",
      details: [
        "Cleaning solutions",
        "Microfiber cloths",
        "Lens sprays",
        "Care instructions",
      ],
      image1: accessoryImg,
      image2: lensImg,
    },
    {
      title: "Protective Cases",
      duration: "10 Min",
      price: "Ksh 1,200",
      description:
        "Durable and stylish cases that protect your eyewear from damage.",
      details: [
        "Hard cases",
        "Soft cases",
        "Travel protection",
        "Premium designs",
      ],
      image1: accessoryImg,
      image2: frameImg,
    },
  ],
};

  const [activeCategory, setActiveCategory] = useState("All Services");


  return (
    <section className="bg-[#f3f1eb] py-5 px-4">

      {/* Heading */}
      <h1 className="text-center text-5xl md:text-6xl font-bold uppercase mb-8">
        Our <span className="text-sky-400">Services</span>
      </h1>


      {/* Top Categories */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">

        {categories.map((item, index) => (

          <div
            key={index}
            onClick={() => setActiveCategory(item.name)}
            className="relative h-40 border border-gray-400 rounded-2xl overflow-hidden cursor-pointer group"
          >

            {/* Background Image */}
            <img
              src={item.image}
              alt={item.name}
              className="
                absolute inset-0
                w-full h-full object-cover
                scale-100 group-hover:scale-110
                transition duration-700
              "
            />

            {/* Dark overlay on image */}
            <div className="absolute inset-0 bg-black/30"></div>


            {/* Eye opening gray cover */}
            <div
              className="
                absolute inset-0
                bg-[#efefea]
                group-hover:-translate-y-full
                transition-transform duration-700 ease-in-out
                z-10
              "
            />
            {/* Text */}
            <div className="
                absolute bottom-4 left-4 z-20
                text-sky-700 group-hover:text-white
                transition duration-300
            ">
              <h3 className="font-bold uppercase text-lg">
                {item.name}
              </h3>

              <p className="text-sm">
                {serviceData[item.name]?.length || 0} services
              </p>
            </div>

          </div>

        ))}

      </div>


      {/* Content Heading */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold uppercase">
          {activeCategory}
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          Discover professional eye care services tailored to your needs,
          combining advanced technology, precision, and stylish optical
          solutions for clearer and healthier vision.
        </p>

      </div>


      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {serviceData[activeCategory].map((service, index) => (

          <div
            key={index}
            className="
              relative
              border border-sky-400
              bg-white
              rounded-2xl
              p-6
              min-h-[240px]
              overflow-hidden
              group
            "
          >

            <h3 className="text-2xl font-black uppercase mb-4">
              {service.title}
            </h3>


            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>


            {/* Duration */}
            <div className="
              absolute bottom-6 left-6
              flex items-center gap-2
              group-hover:opacity-0
              transition duration-300
            ">
              <span>⏱</span>
              <span className="font-semibold">
                {service.duration}
              </span>
            </div>


            {/* Hover Buttons */}
            <div className="
              absolute bottom-6 left-6 right-6
              flex gap-3
              opacity-0 translate-y-5
              group-hover:opacity-100
              group-hover:translate-y-0
              transition duration-300
            ">

            <button
            onClick={() => setSelectedService(service)}
            className="
            bg-sky-400 text-white
            px-4 py-2 text-sm
            font-semibold
            hover:bg-sky-700
            "
            >
            Book Now
            </button>


              <button className="
                border border-sky-400
                px-4 py-2 text-sm
                font-semibold
                hover:bg-sky-700 hover:text-white
              ">
                Learn More
              </button>

            </div>


          </div>

        ))}

      </div>
     {/* Service Details Popup Modal */}
{selectedService && (
  <div
    className="
      fixed inset-0 
      bg-black/70 
      backdrop-blur-sm 
      z-50 
      flex items-center justify-center 
      p-4
    "
    onClick={() => setSelectedService(null)}
  >
    {/* Modal Container */}
    <div
      className="
        bg-[#f5f3ee]
        w-full
        max-w-6xl
        max-h-[90vh]
        overflow-y-auto
        relative
        border border-gray-400
        shadow-2xl
        p-4 md:p-8
        grid md:grid-cols-2
        gap-8
      "
      onClick={(e) => e.stopPropagation()}
    >
      
      {/* Close Button */}
      <button
        onClick={() => setSelectedService(null)}
        className="
          absolute 
          top-4 
          right-5 
          text-4xl 
          font-light
          hover:rotate-90
          transition-transform 
          duration-300
          z-50
        "
      >
        ×
      </button>


      {/* Left Image Section */}
      <div className="space-y-4">

        <div className="overflow-hidden">
          <img
            src={selectedService.image1}
            alt={selectedService.title}
            className="
              w-full
              h-[250px]
              md:h-[320px]
              object-cover
              hover:scale-105
              transition-transform
              duration-700
            "
          />
        </div>


        <div className="overflow-hidden">
          <img
            src={selectedService.image2}
            alt={selectedService.title}
            className="
              w-full
              h-[250px]
              md:h-[320px]
              object-cover
              hover:scale-105
              transition-transform
              duration-700
            "
          />
        </div>

      </div>


      {/* Right Content Section */}
      <div className="pt-4 md:pt-2">

        {/* Rating */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">
            ★★★★★
          </span>

          <span className="text-2xl font-bold">
            4.9
          </span>
        </div>


        {/* Title */}
        <h2
          className="
            text-4xl 
            md:text-6xl 
            font-black 
            uppercase
            leading-none
            mb-6
          "
        >
          {selectedService.title}
        </h2>


        {/* Price & Duration */}
        <div className="flex items-center gap-6 mb-6">

          <span className="text-3xl font-black">
            {selectedService.price}
          </span>


          <div className="flex items-center gap-2">
            <span className="text-lg">⏱</span>

            <span className="font-semibold">
              {selectedService.duration}
            </span>
          </div>

        </div>


        {/* Description */}
        <p className="text-gray-800 text-lg leading-relaxed mb-8">
          {selectedService.description}
        </p>


        {/* Ideal For */}
        <div className="mb-8">

          <h3 className="font-black uppercase mb-2">
            Ideal For:
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Individuals looking for professional eye care, clearer vision,
            improved comfort, and stylish optical solutions tailored to
            their lifestyle.
          </p>

        </div>


        {/* What Is Included */}
        <div className="mb-10">

          <h3 className="font-black uppercase mb-3">
            What's Included:
          </h3>


          <ul className="space-y-3">

            {selectedService.details.map((detail, index) => (

              <li
                key={index}
                className="flex items-start gap-3"
              >

                <span className="font-black text-lg">
                  ■
                </span>


                <span className="text-gray-800">
                  {detail}
                </span>

              </li>

            ))}

          </ul>

        </div>


        {/* Booking Button */}
        <button
          className="
            bg-sky-400 
            text-white
            px-10 
            py-4 
            font-semibold 
            uppercase
            tracking-wide
            hover:bg-sky-700 
            transition-colors
          "
        >
          Book Now
        </button>

      </div>

    </div>

  </div>
)}
    </section>
  );
};


export default Services;