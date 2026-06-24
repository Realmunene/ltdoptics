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
  "absolute top-1/2 -translate-y-1/2 z-20 flex h-12 w-10 lg:h-16 lg:w-12 items-center justify-center transition shadow-lg";

export default function CategoryCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleItems = 1;

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
    <div className="w-full py-6 px-4">
      <div className="relative flex items-center">

        {/* Left Arrow */}
        <button
          onClick={() => move(-1)}
          className={`${arrowStyle} left-0 text-red-800`}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
        </button>

        {/* Categories */}
        <div className="w-full px-4 sm:px-8 lg:px-12 flex justify-center overflow-hidden">
  {displayedItems.map((item, index) => (
    <div
      key={`${item.name}-${index}`}
      className="flex flex-col items-center w-full"
    >
      <div
        className="
          flex
    w-full
    max-w-[500px]
    h-[280px]
    sm:h-[380px]
    lg:h-[500px]
    items-center
    justify-center
    rounded-lg
    bg-white
    shadow-2xl
    overflow-hidden
        "
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-contain"
        />
      </div>

      <p className="mt-4 text-center text-2xl font-black tracking-wide text-white">
  {item.name}
</p>
    </div>
  ))}
</div>

        {/* Right Arrow */}
        <button
          onClick={() => move(1)}
          className={`${arrowStyle} right-0 text-red-800`}
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
        </button>

      </div>
    </div>
  );
}