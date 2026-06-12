// components/TopBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2 px-4 md:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* Left side - Contact and Email */}
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
            <span>+2547 2369 7616</span>
          </div>
          <div className="flex items-center space-x-2">
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
  )
}
export default TopBar