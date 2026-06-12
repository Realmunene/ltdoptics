import React from "react";
import menImage from "./Assets/images/pexels-cottonbro-6616123.jpg";
import femaleImage from "./Assets/images/female glasses.jpg";
import kidsImage from "./Assets/images/kidsglasses.jpg";
import budgetImage from "./Assets/images/budgeted glass.jpg";
import premiumImage from "./Assets/images/premium.jpg";

const sections = [
  {
    title: "Male Glasses",
    description:
      "Discover eyewear designed to match your lifestyle and vision needs. From professional frames to everyday prescription glasses, our eye examinations, custom lens prescriptions, and carefully selected optical accessories help men enjoy clear and comfortable vision.",
    image: menImage,
    reverse: false,
  },
  {
    title: "Female Glasses",
    description:
      
    "Explore elegant eyewear solutions tailored for style, comfort, and visual clarity. Our comprehensive eye check-ups, prescription lenses, designer frames, reading glasses, and optical accessories ensure every woman finds the perfect combination of fashion and function.",
    image: femaleImage,
    reverse: true,
  },
  {
    title: "Kids Glasses",
    description:
      "Healthy vision is essential for learning and development. We provide professional eye examinations for children, durable prescription glasses, comfortable reading solutions, and child-friendly frames designed to keep young eyes protected and seeing clearly every day.",
    image: kidsImage,
    reverse: false,
  },
  {
    title: "Budget Glasses",
    description:
      "Quality eye care should be accessible to everyone. Our budget-friendly collection includes affordable prescription glasses, reading glasses, and essential optical accessories, all backed by professional eye examinations and accurate lens prescriptions.",
    image: budgetImage,
    reverse: true,
  },
  {
    title: "Premium Glasses",
    description:
      "Experience superior vision with our premium eyewear collection. Combining advanced lens technology, expertly designed frames, comprehensive eye examinations, and high-quality optical accessories, our premium range delivers exceptional comfort, clarity, and style.",
    image: premiumImage,
    reverse: false,
  },
];

const HomeVision = () => {
  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } min-h-[500px]`}
        >
          {/* Content Section */}
          <div className="flex w-full lg:w-1/2 items-center justify-center px-8 py-12 lg:px-16">
            <div className="max-w-lg">
              <h1 className="mb-4 text-4xl font-bold text-gray-900">
                {section.title}
              </h1>

              <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                {section.description}
              </p>

              <button className="rounded-md bg-sky-400 px-6 py-3 text-black transition hover:bg-sky-500">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={section.image}
              alt={section.title}
              className="h-[350px] w-full object-cover lg:h-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeVision;