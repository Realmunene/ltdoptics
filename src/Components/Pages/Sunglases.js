import React, { useState } from "react";

// IMPORT IMAGES
import img1 from "../Assets/image2/casing1.webp";
import img2 from "../Assets/image2/Sunglasses1.webp";
import img3 from "../Assets/image2/Sunglasses3.webp";
import img4 from "../Assets/image2/Sunglasses4.webp";
import img5 from "../Assets/image2/Sunglasses6.webp";
import img6 from "../Assets/image2/sunglases.webp";

// HERO IMAGE
import heroImage from "../Assets/image2/sungla.webp";

const glassesData = [
  {
    id: 1,
    name: "Carrera 96/S black aviator sunglasses",
    description:
      "They come equipped with dark gray tinted lenses and are paired with an authentic, textured black leather Carrera protective case.",
    images: [img1],
  },
  {
    id: 2,
    name: "Raymax sunglasses",
    description:
      "Feature a modern round silhouette styled with a flat-top double bridge",
    images: [img2],
  },
  {
    id: 3,
    name: "Metal-framed sunglasses",
    description:
      "Feature a sleek, rectangular design and blue mirror lenses.",
    images: [img3],
  },
  {
    id: 4,
    name: "Morel round sunglasses",
    description:
      "Feature a black textured frame and polarized lenses.",
    images: [img4],
  },
  {
    id: 5,
    name: "Black aviator sunglasses (ÖGA model)",
    description:
      "Features a distinct double-bridge design and a dark, textured mesh or woven pattern frame finish.",
    images: [img5],
  },
  {
    id: 6,
    name: "Steve Madden gunmetal aviator sunglasses",
    description:
      "Features blue mirrored lenses and a dark gunmetal metal frame.",
    images: [img6],
  },
];

const Sunglases = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  // Enquiry Popup States
const [showEnquiryForm, setShowEnquiryForm] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);

const [fullName, setFullName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [consent, setConsent] = useState(false);
const [sending, setSending] = useState(false);


// WhatsApp Enquiry Handler
const handleProductEnquiry = () => {

  if (!fullName || !phone || !email) {
    alert("Please fill in all required fields.");
    return;
  }

  if (!consent) {
    alert("Please accept the consent notice before proceeding.");
    return;
  }


  setSending(true);

const whatsappNumber=process.env.REACT_APP_WHATSAPP_NUMBER;

  const whatsappMessage = `
Hello Blue Block Optics,

I would like to enquire about the following product:
Product:${selectedProduct?.name}
Customer Details:
* Name: ${fullName}
* Phone: ${phone}
* Email: ${email}
Additional Message:
${message || "None"}
Kindly provide me with more information.
`;


  const url =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;


  window.open(url, "_blank");


  setTimeout(() => {
    setSending(false);
    setShowEnquiryForm(false);

    // Reset form
    setFullName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setConsent(false);

  }, 1000);

};

  const itemsPerPage = 6;

  // Search only
  const filteredData = glassesData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

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
          <h1 className="text-5xl md:text-6xl font-bold text-white uppercase mb-8">
            Sun Glasses
          </h1>

          <input
            type="text"
            placeholder="Search sunglasses..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-[500px] px-6 py-4 rounded-lg shadow-lg outline-none text-lg"
          />
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
          Explore our premium range of sunglasses, crafted to provide superior UV protection, exceptional visual clarity, and stylish designs. Whether for everyday wear, driving, outdoor adventures, or making a fashion statement, our collection combines comfort, performance, and elegance to keep you looking and feeling your best.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedItems.map((glass) => (
            <div
              key={glass.id}
              className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition"
            >
              <div className="flex flex-col md:flex-row gap-5">

                {/* IMAGE */}
                <div className="w-full md:w-[45%]">
                  <img
                    src={glass.images[0]}
                    alt={glass.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full min-h-[280px] object-cover rounded-xl"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {glass.name}
                  </h2>

                  <p className="text-gray-600 leading-relaxed">
                    {glass.description}
                  </p>
                  <button
  onClick={() => {
    setSelectedProduct(glass);
    setShowEnquiryForm(true);
  }}
  className="
    mt-5
    w-fit
    px-6
    py-2
    rounded-lg
    bg-sky-400
    text-black
    font-semibold
    hover:bg-sky-700
    hover:text-white
    transition
    duration-300
  "
>
  Enquire →
</button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">

            <button
              onClick={() =>
                setPage((prev) => Math.max(prev - 1, 1))
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
        )}
      </section>
{/* ENQUIRY POPUP MODAL */}
{showEnquiryForm && selectedProduct && (
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
    {/* CARD */}
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

      {/* CLOSE BUTTON */}
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

      {/* TITLE */}
      <div className="mb-6">
        <h2 className="text-3xl md:text-5xl font-black uppercase">
          Product <span className="text-sky-400">Enquiry</span>
        </h2>

        <p className="text-gray-600 mt-3">
          You are enquiring about:
        </p>

        <h3 className="text-xl font-bold text-sky-700 mt-1">
          {selectedProduct?.name}
        </h3>
      </div>

      {/* FORM */}
      <div className="space-y-5">

        {/* NAME */}
        <div>
          <label className="font-semibold block mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-sky-400 outline-none"
          />
        </div>

        {/* PHONE */}
        <div>
          <label className="font-semibold block mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="07XXXXXXXX"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-sky-400 outline-none"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="font-semibold block mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-sky-400 outline-none"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="font-semibold block mb-2">
            Message (Optional)
          </label>
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Any specific request..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-sky-400 outline-none"
          />
        </div>

        {/* CONSENT */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 w-5 h-5 accent-sky-400"
          />
          <p className="text-sm text-gray-600">
            I agree to be contacted regarding this product enquiry.
          </p>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleProductEnquiry}
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
            hover:bg-sky-700
            transition
            disabled:bg-gray-400
          "
        >
          {sending ? "Opening WhatsApp..." : "Confirm on WhatsApp →"}
        </button>

      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Sunglases
