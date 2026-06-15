import React, { useState } from "react";

// IMPORT IMAGES
import img1 from "../Assets/images/slide1.jpg";
import img1a from "../Assets/images/slide1.jpg";
import img1b from "../Assets/images/slide1.jpg";
import img1c from "../Assets/images/slide1.jpg";

import img2 from "../Assets/images/slide1.jpg";
import img2a from "../Assets/images/slide1.jpg";
import img2b from "../Assets/images/slide1.jpg";
import img2c from "../Assets/images/slide1.jpg";

import img3 from "../Assets/images/slide1.jpg";
import img3a from "../Assets/images/slide1.jpg";
import img3b from "../Assets/images/slide1.jpg";
import img3c from "../Assets/images/slide1.jpg";

import img4 from "../Assets/images/slide1.jpg";
import img4a from "../Assets/images/slide1.jpg";
import img4b from "../Assets/images/slide1.jpg";
import img4c from "../Assets/images/slide1.jpg";

import img5 from "../Assets/images/slide1.jpg";
import img5a from "../Assets/images/slide1.jpg";
import img5b from "../Assets/images/slide1.jpg";
import img5c from "../Assets/images/slide1.jpg";

import img6 from "../Assets/images/slide1.jpg";
import img6a from "../Assets/images/slide1.jpg";
import img6b from "../Assets/images/slide1.jpg";
import img6c from "../Assets/images/slide1.jpg";

// HERO IMAGE
import heroImage from "../Assets/images/slide1.jpg";

const glassesData = [
  {
    id: 1,
    name: "Classic Reading Glasses",
    price: 25,
    description:
      "Comfortable lightweight reading glasses designed for everyday reading.",
    date: "2025-01-15",
    images: [img1, img1a, img1b, img1c],
  },
  {
    id: 2,
    name: "Premium Vision Readers",
    price: 40,
    description:
      "Premium quality reading glasses with anti-reflective lenses.",
    date: "2025-02-10",
    images: [img2, img2a, img2b, img2c],
  },
  {
    id: 3,
    name: "Modern Reader Pro",
    price: 35,
    description:
      "Stylish modern frames perfect for reading and daily wear.",
    date: "2025-03-08",
    images: [img3, img3a, img3b, img3c],
  },
  {
    id: 4,
    name: "Smart Lens Reader",
    price: 50,
    description:
      "Advanced reading glasses with enhanced clarity and comfort.",
    date: "2025-04-01",
    images: [img4, img4a, img4b, img4c],
  },
  {
    id: 5,
    name: "Elegant Reader",
    price: 29,
    description:
      "Elegant lightweight reading glasses for professionals.",
    date: "2025-05-18",
    images: [img5, img5a, img5b, img5c],
  },
  {
    id: 6,
    name: "Vision Max",
    price: 60,
    description:
      "Premium high-end reading glasses for superior vision.",
    date: "2025-06-01",
    images: [img6, img6a, img6b, img6c],
  },
];

const Sunglases = () => {
  const [sortType, setSortType] = useState("low-high");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

// Product popup
const [selectedGlass, setSelectedGlass] = useState(null);

// Product image preview inside modal
const [activeImage, setActiveImage] = useState(null);

  const itemsPerPage = 6;

  // SEARCH + SORT
  const filteredData = glassesData
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortType) {
        case "low-high":
          return a.price - b.price;
        case "high-low":
          return b.price - a.price;
        case "a-z":
          return a.name.localeCompare(b.name);
        case "old-new":
          return new Date(a.date) - new Date(b.date);
        case "new-old":
          return new Date(b.date) - new Date(a.date);
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(
    filteredData.length / itemsPerPage
  );

  const displayedItems = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-sky-800 uppercase mb-8">
            Sun-Glasses
          </h1>

          {/* SEARCH + SORT */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input
              type="text"
              placeholder="Search reading glasses..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full md:w-[500px] px-6 py-4 rounded-lg shadow-lg outline-none text-lg"
            />

            <select
              value={sortType}
              onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
              }}
              className="px-6 py-4 rounded-lg shadow-lg text-lg outline-none"
            >
              <option value="low-high">
                Price: Low to High
              </option>
              <option value="high-low">
                Price: High to Low
              </option>
              <option value="a-z">A - Z</option>
              <option value="old-new">
                Old to New
              </option>
              <option value="new-old">
                New to Old
              </option>
            </select>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
          Explore our premium range of reading glasses,
          crafted to provide maximum comfort, sharper
          clarity, and elegant designs. Whether for
          everyday reading, office use, or stylish wear,
          our collection ensures functionality meets
          fashion.
        </p>
      </section>

      {/* 2 X 3 GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedItems.map((glass) => (
            <div
              key={glass.id}
              className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row gap-5">
                {/* LEFT IMAGES */}
                <div className="w-full md:w-[45%]">
                  {/* MAIN IMAGE */}
                  <img
                    src={glass.images[0]}
                    alt={glass.name}
                    className="w-full h-52 object-cover rounded-xl"
                  />

                  {/* THUMBNAILS */}
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {glass.images
                      .slice(1)
                      .map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt="thumbnail"
                          className="h-20 w-full object-cover rounded-lg"
                        />
                      ))}
                  </div>
                </div>

                {/* DETAILS */}
                <div className="flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {glass.name}
                </h2>

                <p className="text-blue-600 text-xl font-semibold mb-4">
                ${glass.price}
                </p>

                <p className="text-gray-600 leading-relaxed">
                {glass.description}
                </p>

                {/* BUY BUTTON */}
                <button
                  className="mt-5 w-fit px-6 py-2 rounded-lg bg-sky-400 text-black font-semibold hover:bg-sky-700 transition-colors duration-300"
                  >
                  Buy With Us
                  </button>
                  </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-3 mt-12">
          <button
            onClick={() =>
              setPage((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            {"<"}
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-10 h-10 rounded-full ${
                page === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            {">"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sunglases
