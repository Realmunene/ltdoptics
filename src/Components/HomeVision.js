import React, { useState } from "react";
import menImage from "./Assets/images/Men.webp";
import femaleImage from "./Assets/images/femaleglasses.webp";
import kidsImage from "./Assets/images/kidsglasses.webp";
import budgetImage from "./Assets/images/budgeted.webp";
import premiumImage from "./Assets/images/premium.webp";

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
  // Popup states
const [showEnquiryForm, setShowEnquiryForm] = useState(false);
const [selectedSection, setSelectedSection] = useState(null);

// Form states
const [fullName, setFullName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [consent, setConsent] = useState(false);
const [sending, setSending] = useState(false);


// WhatsApp Enquiry
const handleVisionEnquiry = () => {

  if (!fullName.trim()) {
    alert("Please enter your full name.");
    return;
  }

  if (!phone.trim()) {
    alert("Please enter your phone number.");
    return;
  }

  if (!email.trim()) {
    alert("Please enter your email address.");
    return;
  }

  if (!consent) {
    alert("Please agree to the consent notice.");
    return;
  }


  setSending(true);

const whatsappNumber=process.env.REACT_APP_WHATSAPP_NUMBER;


  const whatsappMessage = `
Hello Blue Block Optics,
I would like to enquire about your eyewear category.
Category:${selectedSection?.title}
Customer Details:
* Name:${fullName}
* Phone:${phone}
* Email:${email}
Additional Message:
${message.trim() || "No additional message."}
Kindly provide more information regarding available options, pricing and recommendations.
Thank you.
`;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;


  window.open(
    whatsappURL,
    "_blank",
    "noopener,noreferrer"
  );


  setTimeout(() => {

    setSending(false);

    setShowEnquiryForm(false);

    setSelectedSection(null);

    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setConsent(false);

  }, 1000);

};
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
              <h1 className="mb-4 text-4xl font-black text-gray-900">
                {section.title}
              </h1>

              <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                {section.description}
              </p>
              
              <button
                onClick={() => {
                  setSelectedSection(section);
                  setShowEnquiryForm(true);
                }}
                className="
                 rounded-md
                 bg-sky-400
                 px-6
                 py-3
                 font-semibold
                 text-black
                  transition
                 duration-300
                  hover:bg-sky-700
                 hover:text-white
                "
              >
                Enquire More →
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
      {/* HOME VISION ENQUIRY POPUP */}
{showEnquiryForm && selectedSection && (
  <div
    className="
      fixed inset-0
      bg-black/70
      backdrop-blur-sm
      z-[60]
      flex items-center justify-center
      p-2 md:p-4
    "
    onClick={() => setShowEnquiryForm(false)}
  >

    {/* Popup Card */}
    <div
      className="
        bg-[#f5f3ee]
        w-full
        max-w-2xl
        max-h-[90vh]
        overflow-y-auto
        relative
        border border-gray-400
        shadow-2xl
        rounded-2xl
        p-6 md:p-10
      "
      onClick={(e) => e.stopPropagation()}
    >

      {/* Close Button */}
      <button
        onClick={() => setShowEnquiryForm(false)}
        className="
          sticky
          top-0
          ml-auto
          block
          text-4xl
          font-light
          bg-[#f5f3ee]
          z-20
          hover:rotate-90
          transition-transform
          duration-300
        "
      >
        ×
      </button>


      {/* Heading */}
      <div className="mb-8">

        <h2 className="
          text-3xl md:text-5xl
          font-black
          uppercase
          leading-tight
        ">
          Explore
          <span className="text-sky-400">
            {" "}Eyewear
          </span>
        </h2>

        <p className="text-gray-600 mt-3 text-lg">
          You are enquiring about:
        </p>

        <h3 className="text-xl font-bold text-sky-700 mt-1">
          {selectedSection.title}
        </h3>

      </div>


      {/* Form Fields */}
      <div className="space-y-5">


        {/* Full Name */}
        <div>
          <label className="font-semibold mb-2 block">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) =>
              setFullName(e.target.value)
            }
            className="
              w-full
              border border-gray-300
              rounded-lg
              px-4 py-3
              outline-none
              focus:border-sky-400
            "
          />
        </div>


        {/* Phone Number */}
        <div>
          <label className="font-semibold mb-2 block">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="07XXXXXXXX"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="
              w-full
              border border-gray-300
              rounded-lg
              px-4 py-3
              outline-none
              focus:border-sky-400
            "
          />
        </div>


        {/* Email Address */}
        <div>
          <label className="font-semibold mb-2 block">
            Email Address
          </label>

          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              border border-gray-300
              rounded-lg
              px-4 py-3
              outline-none
              focus:border-sky-400
            "
          />
        </div>


        {/* Additional Message */}
        <div>
          <label className="font-semibold mb-2 block">
            Additional Message (Optional)
          </label>

          <textarea
            rows="4"
            placeholder="Tell us your preferred style, frame type, or any specific requirements..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            className="
              w-full
              border border-gray-300
              rounded-lg
              px-4 py-3
              outline-none
              resize-none
              focus:border-sky-400
            "
          />
        </div>


        {/* Consent */}
        <div className="flex items-start gap-3">

          <input
            type="checkbox"
            checked={consent}
            onChange={(e) =>
              setConsent(e.target.checked)
            }
            className="
              mt-1
              w-5 h-5
              accent-sky-400
            "
          />

          <p className="text-sm text-gray-600">
            By proceeding, you agree that Blue Block Optics may contact you regarding your eyewear enquiry and provide recommendations based on your request.
          </p>

        </div>


        {/* WhatsApp Button */}
        <button
          onClick={handleVisionEnquiry}
          disabled={sending}
          className="
            w-full
            bg-sky-400
            text-white
            py-4
            rounded-lg
            font-bold
            uppercase
            tracking-wide
            transition-colors
            hover:bg-sky-700
            disabled:bg-gray-400
            disabled:cursor-not-allowed
          "
        >
          {sending
            ? "Opening WhatsApp..."
            : "Confirm on WhatsApp →"}
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
};

export default HomeVision;