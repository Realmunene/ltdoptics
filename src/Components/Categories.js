import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import all images
const context = require.context(
  "./Assets/display",
  false,
  /\.webp$/
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

export default function CategoryCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % categories.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + categories.length) % categories.length);
  };

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  const item = categories[current];

  return (
  <div className="w-full flex justify-center py-6">

    <div className="    relative
    w-full
    max-w-[520px]
    mx-auto
    h-[350px]
    sm:h-[420px]
    lg:h-[520px]">

      <div
        className="
    relative
    h-full
    w-full
    overflow-hidden
    rounded-[28px]
    shadow-[0_30px_80px_rgba(0,0,0,.45)]
        "
      >

        {/* ==========================
            BLURRED BACKGROUND IMAGE
        =========================== */}
        
        <img
  src={item.image}
  alt=""
  loading="lazy"
  decoding="async"
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    scale-125
    blur-3xl
    opacity-70
  "
  style={{
    WebkitMaskImage:
      "linear-gradient(to top, black 50%, rgba(0,0,0,.4) 75%, transparent)",
    maskImage:
      "linear-gradient(to top, black 50%, rgba(0,0,0,.4) 75%, transparent)",
  }}
/>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* ==========================
            MAIN PRODUCT IMAGE
        =========================== */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            p-6
            sm:p-8
          "
        >
          <img
            key={item.image}
            src={item.image}
            alt={item.name}
            className="
              max-h-[82%]
              max-w-[92%]
              object-contain
              rounded-xl
              drop-shadow-[0_15px_40px_rgba(0,0,0,0.45)]
              transition-all
              duration-700
              hover:scale-105
            "
          />
        </div>

        {/* ==========================
            BOTTOM GRADIENT
        =========================== */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/70 to-transparent" />

        {/* ==========================
            CATEGORY NAME
        =========================== */}
        <div className="absolute bottom-8 left-0 right-0 text-center">

          <h2
            className="
              text-3xl
              lg:text-4xl
              font-black
              text-white
              tracking-wide
              drop-shadow-xl
            "
          >
            {item.name}
          </h2>

          {/* Carousel indicators */}
          <div className="mt-5 flex justify-center gap-2">
            {categories.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-sky-400"
                    : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            h-12
            w-12
            rounded-full
            bg-white/90
            shadow-xl
            backdrop-blur
            transition
            hover:scale-110
            hover:bg-sky-500
            hover:text-white
          "
        >
          <ChevronLeft className="mx-auto h-6 w-6" />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            h-12
            w-12
            rounded-full
            bg-white/90
            shadow-xl
            backdrop-blur
            transition
            hover:scale-110
            hover:bg-sky-500
            hover:text-white
          "
        >
          <ChevronRight className="mx-auto h-6 w-6" />
        </button>

      </div>

    </div>

  </div>
  );
}