import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faGlasses,
  faHeart,
  faCheckCircle,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

import heroImage1 from "../Assets/image2/frontofice.webp";
import heroImage2 from "../Assets/images/femaleglasses.webp";
import heroImage3 from "../Assets/image2/blueblockshop.webp";
import heroImage4 from "../Assets/image2/blueblock12.webp";

const Aboutus = () => {
  const images = [
    heroImage1,
    heroImage2,
    heroImage3,
    heroImage4,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">

      {/* Hero Section */}
      <section className="relative h-[75vh] min-h-[500px] flex items-center justify-center">

        {/* Background Slider */}
        <div className="absolute inset-0 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6 text-sm md:text-base">
            <FontAwesomeIcon icon={faEye} />
            <span>Serving the Community Since October 2023</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Blue Block Optics
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Premium eyewear, professional optical care, and personalized
            service designed to help you experience the world with clarity.
          </p>

        </div>

      </section>


      {/* Our Story */}
      <section className="py-14 md:py-20">

        <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-6">
              Our Story
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              At Blue Block Optics, we believe that vision is one of life’s
              greatest gifts. Every smile you see, every memory you create,
              and every moment you experience begins with clear and healthy eyesight.
            </p>

            <p className="text-gray-600 leading-8 mb-5">
              Established in October 2023, our optical center was founded with
              a mission to provide the people of Ukunda, Diani, and the Kenyan
              Coast with premium eyewear, reliable optical solutions, and
              exceptional customer care.
            </p>

            <p className="text-gray-600 leading-8">
              From stylish frames and reading glasses to sunglasses, lens
              renewal, and eyewear accessories, we take time to understand
              every customer’s lifestyle, vision needs, and personal style.
            </p>

          </div>


          {/* Feature Card */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-10">

            <div className="space-y-8">

              <div className="flex gap-4">
                <FontAwesomeIcon
                  icon={faGlasses}
                  className="text-sky-700 text-3xl mt-1"
                />

                <div>
                  <h3 className="font-bold text-xl">
                    Premium Eyewear
                  </h3>

                  <p className="text-gray-600">
                    Carefully selected frames and lenses combining comfort,
                    quality, and modern fashion.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-sky-700 text-3xl mt-1"
                />

                <div>
                  <h3 className="font-bold text-xl">
                    Personal Care
                  </h3>

                  <p className="text-gray-600">
                    Friendly support and personalized attention from the
                    moment you walk through our doors.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-sky-700 text-3xl mt-1"
                />

                <div>
                  <h3 className="font-bold text-xl">
                    Trusted Quality
                  </h3>

                  <p className="text-gray-600">
                    We are committed to providing dependable optical
                    solutions that improve your everyday vision.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Vision & Mission */}
      <section className="bg-grey-700 py-14 md:py-16">

        <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8">

          <div className="bg-sky-300 rounded-3xl p-6 md:p-8 shadow-lg">

            <FontAwesomeIcon
              icon={faBullseye}
              className="text-black text-4xl mb-5"
            />

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-900 leading-8">
              To become the most trusted provider of comprehensive optical
              care and premium eyewear solutions along Kenya's coast,
              helping people see the world with confidence and clarity.
            </p>

          </div>


          <div className="bg-sky-300 rounded-3xl p-6 md:p-8 shadow-lg">

            <FontAwesomeIcon
              icon={faHeart}
              className="text-black text-4xl mb-5"
            />

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-900 leading-8">
              To provide exceptional eyewear products, professional optical
              services, and personalized customer care while maintaining the
              highest standards of quality, affordability, and trust.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Aboutus;