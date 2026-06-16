import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import local images
import slide1 from "./Assets/images/slide1.jpg";
import slide2 from "./Assets/images/slide2.jpg";
import slide3 from "./Assets/images/slide3.jpg";
import slide4 from "./Assets/images/slide4.jpg";
import slide5 from "./Assets/images/slide5.jpg";

const categories = [
  {
    name: "Full Rim",
    image: slide1,
  },
  {
    name: "Semi-rimless",
    image: slide2,
  },
  {
    name: "Rimless",
    image: slide3,
  },
  {
    name: "Browline",
    image: slide4,
  },
  {
    name: "Butterfly",
    image: slide5,
  },
  {
    name: "Cat Eye",
    image: slide1,
  },
  {
    name: "Geometric",
    image: slide2,
  },
  {
    name: "Rectangle",
    image: slide3,
  },
  {
    name: "Goggle",
    image: slide4,
  },
];

export default function CategoryCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleItems = 8;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  const displayedItems = [];

  for (let i = 0; i < visibleItems; i++) {
    displayedItems.push(
      categories[(startIndex + i) % categories.length]
    );
  }

  return (
    <div className="w-full bg-gray-100 py-6 px-4">
  <div className="relative flex items-center">

    {/* Left Arrow */}
    <button
      onClick={handlePrev}
      className="absolute left-0 z-20 flex 
      h-10 w-8 sm:h-12 sm:w-10 lg:h-16 lg:w-12
      items-center justify-center 
      bg-gray-300 hover:bg-gray-400 transition 
      rounded-r-md shadow-sm"
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
          <div className="flex h-24 w-24 sm:h-28 sm:w-28 lg:h-36 lg:w-36 items-center justify-center rounded-full bg-white shadow-sm">
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain"
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
      onClick={handleNext}
      className="absolute right-0 z-20 flex 
      h-10 w-8 sm:h-12 sm:w-10 lg:h-16 lg:w-12
      items-center justify-center 
      bg-white border hover:bg-gray-100 transition 
      rounded-l-md shadow-sm"
    >
      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7" />
    </button>

  </div>
</div>
  );
}