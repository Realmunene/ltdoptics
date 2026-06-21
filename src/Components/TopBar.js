// components/TopBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-10 md:h-12 z-50 bg-gray-900 text-white px-4 md:px-8 shadow-md">
      <div className="container mx-auto h-full flex justify-between items-center">
        
        {/* Left side - Contact and Email */}
        <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
            <span>+2547 2369 7616</span>
          </div>

          <div className="hidden sm:flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
            <span>blueblockoptics@gmail.com</span>
          </div>
        </div>

        {/* Right side - Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>

          <a href="#" className="hover:text-blue-400 transition-colors">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>

          <a href="#" className="hover:text-blue-400 transition-colors">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>

          <a href="#" className="hover:text-blue-400 transition-colors">
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;