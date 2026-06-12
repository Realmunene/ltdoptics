// components/Footer.js
import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, faInstagram, faTwitter, faTiktok, faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo from "./Assets/blue block logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            {/* Logo */}
          <Link to="/ltdoptics" className="flex items-center">
            <img
              src={logo}
              alt="Blue Block Logo"
              className="h-10 w-auto object-contain rounded-lg"
            /> 
            <h3 className=" text-2xl font-bold ">
              Blue<span className="text-blue-400"> Block Optics</span>
            </h3>
          </Link>
            <p className="text-gray-400 mb-4">
              Premium eyewear for every style and need. See the world clearly with Blue Block Optics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Ourservices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Visual products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Blog</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Reading Glasses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Sunglasses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Eyewear Accessories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Lens Renewal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-400 mt-1" />
                <span className="text-gray-400">Beach Road, Ukunda/Diani, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
                <span className="text-gray-400">+2547 2369 7616</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
                <span className="text-gray-400">blueblockoptics@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-6 pb-6">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-3">Get exclusive offers and updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 BlueBlockOptics. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer