import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import all images and sort them numerically
const context = require.context(
  "./Assets/image2",
  false,
  /\.(png|jpe?g|svg)$/
);

const images = context
  .keys()
  .sort((a, b) => {
    const getNumber = (file) => {
      const match = file.match(/\d+/);
      return match ? parseInt(match[0], 10) : Number.MAX_SAFE_INTEGER;
    };

    return getNumber(a) - getNumber(b);
  })
  .map((file) => context(file));

// Category names
const categoryNames = [
  "Full Rim",
  "Semi-rimless",
  "Rimless",
  "Browline",
  "Butterfly",
  "Cat Eye",
  "Geometric",
  "Rectangle",
  "Goggle",
  "Semi-rimless",
  "Rimless",
  "Browline",
  "Butterfly",
  "Cat Eye",
  "Geometric",
  "Rectangle",
  "Goggle",
  "Semi-rimless",
  "Rimless",
  "Browline",
  "Butterfly",
  "Cat Eye",
  "Geometric",
  "Rectangle",
  "Goggle",
  
];

const categories = categoryNames.map((name, index) => ({
  name,
  image: images[index],
}));

const arrowStyle =
  "absolute z-20 flex h-10 w-8 sm:h-12 sm:w-10 lg:h-16 lg:w-12 items-center justify-center transition shadow-sm";

export default function CategoryCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleItems = 8;

  const move = (direction) => {
    setStartIndex(
      (prev) =>
        (prev + direction + categories.length) % categories.length
    );
  };

  const displayedItems = Array.from(
    { length: visibleItems },
    (_, i) => categories[(startIndex + i) % categories.length]
  );

  return (
    <div className="w-full bg-gray-100 py-6 px-4">
      <div className="relative flex items-center">

        {/* Left Arrow */}
        <button
          onClick={() => move(-1)}
          className={`${arrowStyle} left-0 bg-gray-300 hover:bg-gray-400 rounded-r-md`}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
        </button>

        {/* Categories */}
        <div className="mx-10 sm:mx-12 lg:mx-14 flex w-full justify-between gap-3 sm:gap-4 overflow-hidden">
          {displayedItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] flex-col items-center"
            >
              <div className="flex h-7 w-14 sm:h-28 sm:w-28 lg:h-36 lg:w-36 items-center justify-center rounded-3xl bg-grey-100 shadow-sm overflow-hidden">
                <img
                 src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base font-semibold text-gray-900">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => move(1)}
          className={`${arrowStyle} right-0 bg-white border hover:bg-gray-100 rounded-l-md`}
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
        </button>

      </div>
    </div>
  );
}