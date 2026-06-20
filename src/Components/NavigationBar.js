// Components/NavigationBar.js

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import logo from "./Assets/blue block logo.png";

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownTimeout = useRef(null);

  // Keep dropdown open
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setIsDropdownOpen(true);
  };

  // Close dropdown with delay
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 250);
  };

  // Close mobile menu after clicking links
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const [showPopup, setShowPopup] = useState(false);
  const [serviceType, setServiceType] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
const openPopup = (type) => {
  setServiceType(type);
  setShowPopup(true);
};


const handleWhatsAppConfirm = () => {

const message = `
Hello Blue Block Optics,
I would like to request: ${serviceType}
* Full Name: ${fullName}
* Phone Number: ${phone}
* Email: ${email}
* Preferred Time: ${time}
* Notes: ${notes}
Thank you.
`;

const whatsappNumber=process.env.REACT_APP_WHATSAPP_NUMBER; 

const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

setShowPopup(false);
};
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/ltdoptics" className="flex items-center gap-1 sm:gap-2 lg:gap-3">
          <img
            src={logo}
            alt="Blue Block Logo"
            className="
              h-9 
              sm:h-9 
              lg:h-11 
              w-auto 
              object-contain 
              flex-shrink-0
            "
          />
              <span
          className="
            font-ostrich-black
            tracking-tight
            leading-none
            whitespace-nowrap
            animate-wave
            text-4xl
            sm:text-4xl
            lg:text-6xl
          "
        >
          <span className="text-sky-600">BLUE BLOCK </span>
          <span className="text-red-600">OPTICS</span>
        </span>
        </Link>
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">

            <Link
              to="/services"
              className="text-gray-700 hover:text-sky-600 transition"
            >
              Our Services
            </Link>


            {/* Visual Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >

              <button className="flex items-center gap-1 text-gray-700 hover:text-sky-600 transition">
                <span>Visual Products</span>
                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </button>


              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg py-2 z-50">

                  <Link
                    to="/reading-glasses"
                    className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                  >
                    Reading Glasses
                  </Link>


                  <Link
                    to="/sunglasses"
                    className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                  >
                    Sunglasses
                  </Link>


                  <Link
                    to="/eyewear-accessories"
                    className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                  >
                    Eyewear Accessories
                  </Link>


                  <Link
                    to="/designed-frames"
                    className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600"
                  >
                    Designed Frames
                  </Link>

                </div>
              )}

            </div>

            <Link
              to="/about"
              className="text-gray-700 hover:text-sky-600 transition"
            >
              About Us
            </Link>
          </div>


          {/* Desktop Buttons */}
          <div className="hidden xl:flex gap-3">

            <button
            onClick={() => openPopup("Eye Checkup Appointment")}
            className="bg-sky-400 text-white px-5 py-2 rounded-lg hover:bg-sky-700 transition"
            >
            Book Appointment
            </button>
            <button
            onClick={() => openPopup("Lens Renewal")}
            className="border-2 border-sky-400 text-sky-600 px-5 py-2 rounded-lg hover:bg-sky-600 hover:text-white transition"
            >
            Lens Renewal
            </button>

          </div>


          {/* Mobile Hamburger / Close Button */}
          <button
            className="xl:hidden text-2xl text-sky-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
            />
          </button>

        </div>


        {/* Mobile Menu */}
        {isMobileMenuOpen && (

          <div className="md:hidden border-t pb-4">

            <Link
              to="/services"
              onClick={closeMobileMenu}
              className="block py-3 text-gray-700 hover:text-sky-600"
            >
              Our Services
            </Link>


            <div className="pl-4">

              <Link
                to="/reading-glasses"
                onClick={closeMobileMenu}
                className="block py-2 text-gray-700 hover:text-sky-600"
              >
                Reading Glasses
              </Link>


              <Link
                to="/sunglasses"
                onClick={closeMobileMenu}
                className="block py-2 text-gray-700 hover:text-sky-600"
              >
                Sunglasses
              </Link>


              <Link
                to="/eyewear-accessories"
                onClick={closeMobileMenu}
                className="block py-2 text-gray-700 hover:text-sky-600"
              >
                Eyewear Accessories
              </Link>


              <Link
                to="/designed-frames"
                onClick={closeMobileMenu}
                className="block py-2 text-gray-700 hover:text-sky-600"
              >
                Designed Frames
              </Link>
            </div>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block py-3 text-gray-700 hover:text-sky-600"
            >
              About Us
            </Link>
            <div className="flex flex-col gap-3 mt-4">
              <button
                onClick={() => openPopup("Eye Checkup Appointment")}
                className="bg-sky-400 text-white px-5 py-2 rounded-lg hover:bg-sky-700 transition"
              >
                Book Appointment
              </button>
              <button
                onClick={() => openPopup("Lens Renewal")}
                className="border-2 border-sky-400 text-sky-600 px-5 py-2 rounded-lg hover:bg-sky-600 hover:text-white transition"
              >
                Lens Renewal
              </button>
            </div>
          </div>
        )}
      </div>
        {showPopup && (
        <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShowPopup(false)}
        >

        <div
        className="bg-[#f3f1eb] max-w-lg w-full p-8 rounded-2xl shadow-2xl relative border border-sky-200"
        onClick={(e)=>e.stopPropagation()}
        >

        <button
        onClick={()=>setShowPopup(false)}
        className="absolute top-4 right-5 text-3xl hover:rotate-90 transition"
        >
        ×
        </button>
        <h2 className="text-3xl font-black uppercase mb-8">
        Confirm Your
        <span className="text-sky-400">
         {serviceType}
        </span>
        </h2>
        <div className="space-y-4">
        <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e)=>setFullName(e.target.value)}
        className="w-full border p-3 rounded-lg"
        />
        <input
        type="tel"
placeholder="07XXXXXXXX"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full border p-3 rounded-lg"
        />
        <input
        type="email"
placeholder="example@gmail.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-3 rounded-lg"
        />
        <select
value={time}
onChange={(e)=>setTime(e.target.value)}
className="w-full border p-3 rounded-lg"
>

<option value="">Select Time</option>
<option>08:00 AM</option>
<option>09:00 AM</option>
<option>10:00 AM</option>
<option>11:00 AM</option>
<option>12:00 PM</option>
<option>02:00 PM</option>
<option>03:00 PM</option>
<option>04:00 PM</option>

        </select>
        <textarea
        placeholder="Additional Notes (optional)"
        value={notes}
        onChange={(e)=>setNotes(e.target.value)}
        className="w-full border p-3 rounded-lg h-24"
        />
       <button
onClick={handleWhatsAppConfirm}
className="
w-full
bg-sky-400
hover:bg-sky-700
text-white
font-bold
py-4
rounded-lg
transition
"
>
Confirm on WhatsApp →
       </button>

       </div>

       </div>

       </div>
       )}
    </nav>
  );
};

export default NavigationBar;