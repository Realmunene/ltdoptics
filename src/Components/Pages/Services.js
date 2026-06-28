import React, { useState } from "react";
// Top category images
import eyeImg from "../Assets/eyecheckup.webp";
import allserv from "../Assets/image2/allserv.webp";
import eyeImg1 from "../Assets/image2/assessm.webp";
import eyeImg2 from "../Assets/image2/screen.webp";
import eyeImg3 from "../Assets/image2/assess.webp";
import eyecheck from "../Assets/image2/blue block inside.webp";
import lensImg from "../Assets/lenses.webp";
import lensImg1 from "../Assets/image2/4.webp";
import lensImg2 from "../Assets/image2/premiumcollection.webp";
import frameImg from "../Assets/frames.webp";
import readingImg from "../Assets/reading-glasses.webp";
import readingImg1 from "../Assets/image2/1.webp";
import accessoryImg from "../Assets/image2/blueblock12.webp";
import premium from "../Assets/image2/blueblockshop.webp"
import premium2 from "../Assets/image2/15.webp"
import casing2 from "../Assets/image2/casing2.webp"
import casing1 from "../Assets/image2/casing1.webp"
import kitclean from "../Assets/image2/cleank1.webp"
import kitclean2 from "../Assets/image2/cleank2.webp"

const Services = () => {

  const categories = [
    {
      name: "All Services",
      image: allserv,
    },
    {
      name: "Eye Checkups",
      image: eyecheck,
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


// Appointment popup
const [showBookingForm, setShowBookingForm] = useState(false);


// Customer Details
const [fullName, setFullName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
// Appointment Details
const [appointmentDate, setAppointmentDate] = useState("");
const [appointmentTime, setAppointmentTime] = useState("");
// Privacy Consent
const [consent, setConsent] = useState(false);
// Prevent double clicks
const [sending, setSending] = useState(false);

  const serviceData = {
  "All Services": [
    {
      title: "Complete Eye Examination",
      duration: "45 Min",
      price: "Book Now To enquire",
      description:
        "Professional vision testing using advanced diagnostic equipment to assess your eyesight and overall eye health.",
      details: [
        "Visual acuity testing",
        "Eye pressure examination",
        "Retinal health assessment",
        "Professional eye consultation",
      ],
      image1: eyeImg2,
      image2: lensImg,
    },
    {
      title: "Progressive Lenses",
      duration: "30 Min",
      price: "Book Now To enquire",
      description:
        "Premium progressive lenses designed to provide smooth vision correction at all distances.",
      details: [
        "Lens power assessment",
        "Personalized fitting",
        "Anti-glare coating options",
        "Professional adjustment",
      ],
      image1: lensImg,
      image2: lensImg2,
    },
    {
      title: "Luxury Frames Fitting",
      duration: "25 Min",
      price: "Book Now To enquire",
      description:
        "Discover stylish and comfortable frames that match your personality and lifestyle.",
      details: [
        "Face shape analysis",
        "Frame styling advice",
        "Comfort adjustment",
        "Premium frame selection",
      ],
      image1: premium,
      image2: readingImg,
    },
    {
      title: "Reading Glasses",
      duration: "20 Min",
      price: "Book Now To enquire",
      description:
        "Comfortable reading glasses available in various strengths and elegant designs.",
      details: [
        "Reading strength assessment",
        "Frame selection",
        "Lens fitting",
        "Comfort adjustments",
      ],
      image1: readingImg,
      image2: lensImg1,
    },
    {
      title: "Lens Cleaning & Care",
      duration: "15 Min",
      price: "Book Now To enquire",
      description:
        "Professional maintenance and cleaning services to keep your lenses in perfect condition.",
      details: [
        "Deep lens cleaning",
        "Scratch inspection",
        "Protective coating advice",
        "Care accessories recommendation",
      ],
      image1: kitclean,
      image2: kitclean2,
    },
    {
      title: "Frame Adjustments",
      duration: "15 Min",
      price: "Book Now To enquire",
      description:
        "Precise adjustments to improve the comfort and fit of your glasses.",
      details: [
        "Temple alignment",
        "Nose pad adjustment",
        "Frame balancing",
        "Comfort testing",
      ],
      image1: frameImg,
      image2: premium,
    },
  ],

  "Eye Checkups": [
    {
      title: "Vision Assessment",
      duration: "45 Min",
      price: "Book Now To enquire",
      description:
        "Comprehensive eye examination to determine your exact visual needs.",
      details: [
        "Visual clarity testing",
        "Eye coordination assessment",
        "Prescription evaluation",
        "Professional consultation",
      ],
      image1: eyeImg,
      image2: eyeImg3,
    },
    {
      title: "Eye Health Screening",
      duration: "30 Min",
      price: "Book Now To enquire",
      description:
        "Early detection and monitoring of common eye conditions.",
      details: [
        "Eye pressure check",
        "Retinal examination",
        "Disease screening",
        "Eye health advice",
      ],
      image1: eyeImg2,
      image2: eyeImg1,
    },
  ],

  "Prescription Lenses": [
    {
      title: "Single Vision Lenses",
      duration: "20 Min",
      price: "Book Now To enquire",
      description:
        "Clear and accurate correction for either near or distance vision.",
      details: [
        "Lens measurement",
        "Prescription verification",
        "Lens fitting",
        "Quality inspection",
      ],
      image1: lensImg,
      image2: lensImg1,
    },
    {
      title: "Progressive Lenses",
      duration: "30 Min",
      price: "Book Now To enquire",
      description:
        "Seamless transition lenses for near, intermediate and far vision.",
      details: [
        "Advanced measurements",
        "Customized lens design",
        "Anti-reflective options",
        "Final fitting",
      ],
      image1: lensImg,
      image2: lensImg2,
    },
  ],

  "Designer Frames": [
    {
      title: "Premium Collection",
      duration: "25 Min",
      price: "Book Now To enquire",
      description:
        "Explore a range of fashionable and premium eyewear collections.",
      details: [
        "Designer brand selection",
        "Face shape consultation",
        "Style recommendations",
        "Perfect fitting",
      ],
      image1: premium,
      image2: premium2,
    },
    {
      title: "Frame Styling",
      duration: "30 Min",
      price: "Book Now To enquire",
      description:
        "Professional guidance to help you choose your perfect eyewear style.",
      details: [
        "Personal style analysis",
        "Color matching",
        "Frame adjustments",
        "Comfort fitting",
      ],
      image1: frameImg,
      image2: premium,
    },
  ],

  "Reading Glasses": [
    {
      title: "Classic Readers",
      duration: "15 Min",
      price: "Book Now To enquire",
      description:
        "Simple and elegant reading glasses designed for daily comfort.",
      details: [
        "Reading power test",
        "Frame selection",
        "Lens fitting",
        "Comfort adjustment",
      ],
      image1: readingImg,
      image2: readingImg1,
    },
  ],

  "Optical Accessories": [
    {
      title: "Cleaning Kits",
      duration: "10 Min",
      price: "Book Now To enquire",
      description:
        "Premium cleaning products that maintain the clarity of your lenses.",
      details: [
        "Cleaning solutions",
        "Microfiber cloths",
        "Lens sprays",
        "Care instructions",
      ],
      image1: kitclean,
      image2: kitclean2,
    },
    {
      title: "Protective Cases",
      duration: "10 Min",
      price: "Book Now To enquire",
      description:
        "Durable and stylish cases that protect your eyewear from damage.",
      details: [
        "Hard cases",
        "Soft cases",
        "Travel protection",
        "Premium designs",
      ],
      image1: casing1,
      image2: casing2,
    },
  ],
};
  const [activeCategory, setActiveCategory] = useState("All Services");
const handleServiceBooking = () => {

  // Required validation
  if (
    !fullName.trim() ||
    !phone.trim() ||
    !email.trim() ||
    !appointmentDate ||
    !appointmentTime
  ) {
    alert(
      "Please complete all appointment details."
    );
    return;
  }


  // Kenyan phone validation
  const phoneRegex = /^(07\d{8}|2547\d{8})$/;

  if (!phoneRegex.test(phone)) {
    alert(
      "Please enter a valid Kenyan phone number. Example: 0712345678"
    );
    return;
  }


  // Email validation
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert(
      "Please enter a valid email address."
    );
    return;
  }


  // Privacy agreement
  if (!consent) {
    alert(
      "Please accept the privacy agreement before proceeding."
    );
    return;
  }


  setSending(true);


  // WhatsApp Message
  const message = `
Hello Blue Block Optics,

I would like to request an appointment.
* Service:${selectedService.title}
* Duration:${selectedService.duration}
* Full Name:${fullName}
* Phone:${phone}
* Email:${email}
* Preferred Date:${appointmentDate}
* Preferred Time: ${appointmentTime}
Kindly confirm my appointment.

Thank you.
`;


  // whatsapp business number
  const whatsappNumber=process.env.REACT_APP_WHATSAPP_NUMBER;
  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


  window.open(url, "_blank");


  // Small delay for better UX
  setTimeout(() => {

    setSending(false);

    setShowBookingForm(false);

    setSelectedService(null);


    // Clear fields
    setFullName("");
    setPhone("");
    setEmail("");

    setAppointmentDate("");
    setAppointmentTime("");

    setConsent(false);

  }, 1000);

};
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
              loading="lazy"
              decoding="async"
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
            loading="lazy"
            decoding="async"
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
         onClick={() => {
                      setFullName("");
                      setPhone("");
                      setEmail("");
                      setAppointmentTime("");
                      setShowBookingForm(true);
                    }}
         
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
           rounded-lg
         "
       >
                Book Now
       </button>

      </div>

    </div>

  </div>
)}
{/* Appointment Booking Form Popup */}
{showBookingForm && (
  <div
    className="
      fixed inset-0
      bg-black/70
      backdrop-blur-sm
      z-[60]
      flex items-center justify-center
      p-4
    "
    onClick={() => setShowBookingForm(false)}
  >
    {/* Modal Card */}
<div
  className="
    bg-[#f5f3ee]
    w-full
    max-w-2xl
    max-h-[90vh]
    overflow-y-auto
    relative
    border border-gray-400
    shadow-2xl
    rounded-2xl
    p-6 md:p-10
  "
  onClick={(e) => e.stopPropagation()}
>

      {/* Close Button */}
      <button
  onClick={() => setShowBookingForm(false)}
  className="
    sticky
    top-0
    ml-auto
    block
    text-4xl
    font-light
    bg-[#f5f3ee]
    z-20
    hover:rotate-90
    transition-transform
    duration-300
  "
>
  ×
</button>

      {/* Heading */}
      <div className="mb-8">

        <h2 className="
          text-3xl md:text-5xl
          font-black
          uppercase
          leading-tight
        ">
          Confirm Your
          <span className="text-sky-400">
            {" "}Appointment
          </span>
        </h2>

        <p className="
          text-gray-600
          mt-3
          text-lg
        ">
          You are booking:
        </p>

        <h3 className="
          text-xl
          font-bold
          text-sky-700
          mt-1
        ">
          {selectedService?.title}
        </h3>

      </div>


      {/* Form Fields */}
      <div className="space-y-5">


        {/* Full Name */}
        <div>
          <label className="font-semibold mb-2 block">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              focus:outline-none
              focus:border-sky-400
            "
          />
        </div>


        {/* Phone Number */}
        <div>
          <label className="font-semibold mb-2 block">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="07XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              focus:outline-none
              focus:border-sky-400
            "
          />
        </div>


        {/* Email */}
        <div>
          <label className="font-semibold mb-2 block">
            Email Address
          </label>

          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              focus:outline-none
              focus:border-sky-400
            "
          />
        </div>
          <div>

      <label className="font-semibold mb-2 block">
      Preferred Appointment Date
      </label>
      <input
        type="date"
        value={appointmentDate}
        onChange={(e) =>
          setAppointmentDate(e.target.value)
        }
        min={new Date().toISOString().split("T")[0]}
        className="
          w-full
          border
          border-gray-300
          rounded-lg
          px-4
          py-3
          focus:outline-none
          focus:border-sky-400
        "
      />

      </div>

        {/* Appointment Time */}
        <div>
          <label className="font-semibold mb-2 block">
            Preferred Appointment Time
          </label>

          <select
            value={appointmentTime}
            onChange={(e) =>
              setAppointmentTime(e.target.value)
            }
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              focus:outline-none
              focus:border-sky-400
            "
          >

            <option value="">
              Select Time
            </option>

            <option>
              08:00 AM
            </option>

            <option>
              09:00 AM
            </option>

            <option>
              10:00 AM
            </option>

            <option>
              11:00 AM
            </option>

            <option>
              12:00 PM
            </option>

            <option>
              02:00 PM
            </option>

            <option>
              03:00 PM
            </option>

            <option>
              04:00 PM
            </option>

          </select>

        </div>

        <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) =>
            setConsent(e.target.checked)
          }
          className="mt-1 w-5 h-5 accent-sky-400"
        />
        <p className="text-sm text-gray-600">
        By proceeding, you agree that Blue Block Optics may use your details to contact you regarding your appointment request.
        </p>
        </div>
        {/* WhatsApp Confirmation Button */}
        <button
        onClick={handleServiceBooking}
        disabled={sending}
        className="
         w-full
         bg-sky-400
         text-white
         py-4
         rounded-lg
         font-bold
         uppercase
         tracking-wide
         transition-colors
         hover:bg-sky-700
         disabled:bg-gray-400
         disabled:cursor-not-allowed
        "
      >
        {sending
          ? "Opening WhatsApp..."
          : "Confirm on WhatsApp →"}
      </button>

      </div>

    </div>

  </div>
)}
    </section>
  );
};


export default Services;