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

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <Link to="/ltdoptics" className="flex items-center">
            <img
              src={logo}
              alt="Blue Block Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">

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
              to="/portfolio"
              className="text-gray-700 hover:text-sky-600 transition"
            >
              Portfolio
            </Link>


            <Link
              to="/about"
              className="text-gray-700 hover:text-sky-600 transition"
            >
              About Us
            </Link>


            <Link
              to="/blog"
              className="text-gray-700 hover:text-sky-600 transition"
            >
              Blog
            </Link>

          </div>


          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">

            <Link
              to="/book-appointment"
              className="bg-sky-400 text-white px-5 py-2 rounded-lg hover:bg-sky-700 transition"
            >
              Book Appointment
            </Link>


            <Link
              to="/lens-renewal"
              className="border-2 border-sky-400 text-sky-600 px-5 py-2 rounded-lg hover:bg-sky-600 hover:text-white transition"
            >
              Lens Renewal
            </Link>

          </div>


          {/* Mobile Hamburger / Close Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
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
              to="/portfolio"
              onClick={closeMobileMenu}
              className="block py-3 text-gray-700 hover:text-sky-600"
            >
              Portfolio
            </Link>


            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block py-3 text-gray-700 hover:text-sky-600"
            >
              About Us
            </Link>


            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className="block py-3 text-gray-700 hover:text-sky-600"
            >
              Blog
            </Link>


            <div className="flex flex-col gap-3 mt-4">

              <Link
                to="/book-appointment"
                onClick={closeMobileMenu}
                className="bg-sky-400 text-white text-center px-5 py-3 rounded-lg hover:bg-sky-700"
              >
                Book Appointment
              </Link>


              <Link
                to="/lens-renewal"
                onClick={closeMobileMenu}
                className="border-2 border-sky-400 text-sky-600 text-center px-5 py-3 rounded-lg hover:bg-sky-600 hover:text-white"
              >
                Lens Renewal
              </Link>

            </div>

          </div>

        )}

      </div>
    </nav>
  );
};

export default NavigationBar;