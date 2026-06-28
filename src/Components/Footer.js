// components/Footer.js
import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, faInstagram, faTwitter, faTiktok, faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import logo from "./Assets/blue block logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-sky-700 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            {/* Logo */}
          <Link to="/ltdoptics" className="flex items-center gap-2 mb-4">
  <img
    src={logo}
    alt="Blue Block Logo"
    loading="lazy"
    decoding="async"
    className="h-8 sm:h-10 lg:h-12 w-auto object-contain rounded-lg flex-shrink-0"
  />

  <h3 className="font-black uppercase leading-none whitespace-nowrap text-lg sm:text-xl lg:text-2xl">
    <span className="text-sky-600">BlueBlock</span>
    <span className="text-red-600">Optics</span>
  </h3>
</Link>
            <p className="text-gray-400 mb-4">
              Premium eyewear for every style and need. See the world clearly with Blue Block Optics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition">
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to='/services' className="text-gray-400 hover:text-sky-400 transition">Ourservices</Link></li>
              <li><Link to='/about' className="text-gray-400 hover:text-sky-400 transition">About Us</Link></li>
    
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to='/reading-glasses' className="text-gray-400 hover:text-sky-400 transition">Reading Glasses</Link></li>
              <li><Link to='/sunglasses' className="text-gray-400 hover:text-sky-400 transition">Sunglasses</Link></li>
              <li><Link to='/eyewear-accessories' className="text-gray-400 hover:text-sky-400 transition">Eyewear Accessories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-blue-400 mt-1" />
                <span className="text-gray-400 leading-relaxed">Beach Road, Ukunda/Diani, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faPhone} className="text-sky-400" />
                <span className="text-gray-400">+2547 2369 7616</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-sky-400" />
                <span className="text-gray-400 break-all">blueblockoptics@gmail.com</span>
              </li>
            </ul>
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