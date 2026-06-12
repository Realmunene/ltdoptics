// components/Carousel.js - Grid Version
import React from 'react';

const Carousel = ({ 
  totalImages = 9, 
  imageExtension = 'png',
  imageDirectory = '/Assets/images/'
}) => {
  // Image names exactly as shown in your sample
  const imageNames = [
    "What's New",
    "Breakfast Combos",
    "Breakfast Sandwiches",
    "Breakfast Sides",
    "Combos",
    "Hamburgers",
    "Chicken Sandwiches",
    "Chicken Nuggets & Tenders",
    "Veggie Options"
  ];

  const getImagePath = (index) => {
    return `${imageDirectory}img${index + 1}.${imageExtension}`;
  };

  return (
    <div className="w-full">
      {/* Grid Layout - Shows all images in responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {Array.from({ length: totalImages }, (_, index) => (
          <div key={index} className="group">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-800">
              <img 
                src={getImagePath(index)} 
                alt={imageNames[index]}
                className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Image Name Below */}
            <div className="text-center mt-3">
              <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold">
                {imageNames[index]}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;