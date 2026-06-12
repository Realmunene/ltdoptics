// components/GoogleMap.js
import React from "react";

const GoogleMap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Find Us <span className="text-blue-600">Here</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Visit our Office
          </p>
        </div>

        {/* Google Map */}
        <div className="rounded-lg overflow-hidden shadow-xl">
          <iframe
            title="Blue Block Optics Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.6743451979205!2d39.569859799999996!3d-4.283337299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184045002d958b8d%3A0x4b4f70028db77aec!2sBlue%20Block%20Optics!5e0!3m2!1sen!2ske!4v1781252212837!5m2!1sen!2ske"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Address */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            <strong>Blue Block Optics</strong>
            <br />
            Beach Road, Ukunda/Diani, Kenya
            <br />
            Located along the highway for easy access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;