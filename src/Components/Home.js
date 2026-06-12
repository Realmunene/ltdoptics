// components/Home.js
import React, { useEffect, useState } from "react";
import bgVideo from "./Assets/blueblockoptician.mp4";

const Home = () => {
  // Kenya locations
  const [areas, setAreas] = useState({});
  const [counties, setCounties] = useState([]);
  const [constituencies, setConstituencies] = useState([]);
  const [wards, setWards] = useState([]);

  // Step 1 booking details
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedConstituency, setSelectedConstituency] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  // Step control
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Step 2 customer details
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  // Today's date
  const today = new Date().toISOString().split("T")[0];

  // Maximum booking date (1 month ahead)
  const maxDate = new Date(
    new Date().setMonth(new Date().getMonth() + 1)
  )
    .toISOString()
    .split("T")[0];


  // WhatsApp confirmation
  const handleWhatsAppBooking = () => {
    if (
      !fullName ||
      !phone ||
      !email ||
      !appointmentTime
    ) {
      alert("Please fill in all your personal details.");
      return;
    }

const message = `
BLUE BLOCK OPTICS APPOINTMENT REQUEST

* Name: ${fullName}
* Phone: ${phone}
* Email: ${email}

* Location
> County: ${selectedCounty}
> Constituency: ${selectedConstituency}
> Ward: ${selectedWard}

* Service: ${service}

* Appointment Date: ${appointmentDate}

* Appointment Time: ${appointmentTime}

* Budget: ${budget}

_ I would like to confirm my appointment. _
`;
    // Replace with your WhatsApp number
    const whatsappNumber = "254723697616";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };
  // Fetch counties
  useEffect(() => {
    fetch(
      "https://kenyaareadata.vercel.app/api/areas?apiKey=keyPub1569gsvndc123kg9sjhg"
    )
      .then((response) => response.json())
      .then((data) => {
        setAreas(data);
        setCounties(Object.keys(data));
      })
      .catch(() => {});
  }, []);


  // Update constituencies
  useEffect(() => {
    if (selectedCounty && areas[selectedCounty]) {
      setConstituencies(Object.keys(areas[selectedCounty]));
      setSelectedConstituency("");
      setSelectedWard("");
      setWards([]);
    }
  }, [selectedCounty, areas]);


  // Update wards
  useEffect(() => {
    if (
      selectedCounty &&
      selectedConstituency
    ) {
      setWards(
        areas[selectedCounty][selectedConstituency] || []
      );

      setSelectedWard("");
    }
  }, [
    selectedCounty,
    selectedConstituency,
    areas
  ]);


  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative z-10 container mx-auto px-4 md:px-8 py-12 md:py-20">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">


          {/* Hero Left Side */}
          <div className="w-full lg:w-1/2 text-white">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              See the World <br />
              With Perfect
              <span className="text-sky-400">
                {" "}Clarity
              </span>
            </h1>


            <p className="text-lg text-gray-100 mb-6 max-w-xl">
              Blue Block Optics provides professional eye examinations,
              prescription lenses, stylish frames, reading glasses,
              and personalized vision care designed around your lifestyle.
            </p>


            <button className="bg-sky-400 hover:bg-sky-700 px-6 py-3 rounded-lg font-medium transition">
              Book Eye Check Up →
            </button>

          </div>
                    {/* Booking Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

            <div className="w-full lg:max-w-md bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl">

              <h2 className="text-xl font-semibold mb-5 text-gray-800">
                {showConfirmation
                  ? "Confirm Your Appointment"
                  : "Book Your Appointment"}
              </h2>


              {!showConfirmation ? (

                <>
                  {/* Location Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">

                    {/* County */}
                    <div>
                      <label className="text-sm text-gray-600">
                        County
                      </label>

                      <select
                        value={selectedCounty}
                        onChange={(e) =>
                          setSelectedCounty(e.target.value)
                        }
                        className="w-full mt-1 p-3 border rounded-lg bg-white"
                      >
                        <option value="">
                          Select County
                        </option>

                        {counties.map((county) => (
                          <option
                            key={county}
                            value={county}
                          >
                            {county}
                          </option>
                        ))}

                      </select>
                    </div>


                    {/* Constituency */}
                    <div>
                      <label className="text-sm text-gray-600">
                        Constituency
                      </label>

                      <select
                        value={selectedConstituency}
                        onChange={(e) =>
                          setSelectedConstituency(e.target.value)
                        }
                        disabled={!selectedCounty}
                        className="w-full mt-1 p-3 border rounded-lg bg-white disabled:bg-gray-100"
                      >

                        <option value="">
                          Select Constituency
                        </option>

                        {constituencies.map((item) => (
                          <option
                            key={item}
                            value={item}
                          >
                            {item}
                          </option>
                        ))}

                      </select>
                    </div>


                    {/* Ward */}
                    <div>
                      <label className="text-sm text-gray-600">
                        Ward
                      </label>

                      <select
                        value={selectedWard}
                        onChange={(e) =>
                          setSelectedWard(e.target.value)
                        }
                        disabled={!selectedConstituency}
                        className="w-full mt-1 p-3 border rounded-lg bg-white disabled:bg-gray-100"
                      >

                        <option value="">
                          Select Ward
                        </option>

                        {wards.map((ward) => (
                          <option
                            key={ward}
                            value={ward}
                          >
                            {ward}
                          </option>
                        ))}

                      </select>
                    </div>

                  </div>


                  {/* Service */}
                  <div className="mb-4">

                    <label className="text-sm text-gray-600">
                      Service
                    </label>

                    <select
                      value={service}
                      onChange={(e) =>
                        setService(e.target.value)
                      }
                      className="w-full mt-1 p-3 border rounded-lg bg-white"
                    >

                      <option value="">
                        Select Service
                      </option>

                      <option>
                        Eye Examination
                      </option>

                      <option>
                        Prescription Lenses
                      </option>

                      <option>
                        Frame Design
                      </option>

                      <option>
                        Reading Glasses
                      </option>

                      <option>
                        Optical Accessories
                      </option>

                    </select>

                  </div>


                  {/* Appointment Date */}
                  <div className="mb-4">

                    <label className="text-sm text-gray-600">
                      Appointment Date
                    </label>

                    <input
                      type="date"
                      value={appointmentDate}
                      onChange={(e) =>
                        setAppointmentDate(e.target.value)
                      }
                      min={today}
                      max={maxDate}
                      className="w-full mt-1 p-3 border rounded-lg"
                    />

                  </div>


                  {/* Budget */}
                  <div className="mb-6">

                    <label className="text-sm text-gray-600">
                      Budget Range
                    </label>

                    <select
                      value={budget}
                      onChange={(e) =>
                        setBudget(e.target.value)
                      }
                      className="w-full mt-1 p-3 border rounded-lg"
                    >

                      <option value="">
                        Select Budget
                      </option>

                      <option>
                        KSh 1,000 - 2,000
                      </option>

                      <option>
                        KSh 2,000 - 5,000
                      </option>

                      <option>
                        KSh 5,000 - 10,000
                      </option>

                      <option>
                        KSh 10,000+
                      </option>

                    </select>

                  </div>


                  {/* Check Availability */}
                  <button
                    onClick={() => {

                      if (
                        !selectedCounty ||
                        !selectedConstituency ||
                        !selectedWard ||
                        !service ||
                        !appointmentDate ||
                        !budget
                      ) {
                        alert(
                          "Please complete all booking details."
                        );

                        return;
                      }

                      setShowConfirmation(true);

                    }}
                    className="w-full bg-sky-400 hover:bg-sky-700 text-white py-3 rounded-lg font-medium transition"
                  >
                    Check Availability
                  </button>

                </>


              ) : (

                <>
                  {/* Customer Name */}
                  <div className="mb-4">

                    <label className="text-sm text-gray-600">
                      Full Name
                    </label>

                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) =>
                        setFullName(e.target.value)
                      }
                      placeholder="Enter your full name"
                      className="w-full mt-1 p-3 border rounded-lg"
                    />

                  </div>


                  {/* Phone */}
                  <div className="mb-4">

                    <label className="text-sm text-gray-600">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value)
                      }
                      placeholder="07XXXXXXXX"
                      className="w-full mt-1 p-3 border rounded-lg"
                    />

                  </div>
                                    {/* Email */}
                  <div className="mb-4">

                    <label className="text-sm text-gray-600">
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="example@gmail.com"
                      className="w-full mt-1 p-3 border rounded-lg"
                    />

                  </div>


                  {/* Appointment Time */}
                  <div className="mb-5">

                    <label className="text-sm text-gray-600">
                      Preferred Appointment Time
                    </label>

                    <select
                      value={appointmentTime}
                      onChange={(e) =>
                        setAppointmentTime(e.target.value)
                      }
                      className="w-full mt-1 p-3 border rounded-lg bg-white"
                    >

                      <option value="">
                        Select Time
                      </option>

                      <option>08:00 AM</option>
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>01:00 PM</option>
                      <option>02:00 PM</option>
                      <option>03:00 PM</option>
                      <option>04:00 PM</option>
                      <option>05:00 PM</option>

                    </select>

                  </div>


                  {/* Action Buttons */}
                  <div className="flex gap-3">

                    {/* Back Button */}
                    <button
                      onClick={() =>
                        setShowConfirmation(false)
                      }
                      className="w-1/3 bg-gray-500 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition"
                    >
                      Back
                    </button>


                    {/* WhatsApp Confirmation */}
                    <button
                      onClick={handleWhatsAppBooking}
                      className="w-2/3 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
                    >
                      Confirm on WhatsApp
                    </button>

                  </div>

                </>

              )}

            </div>

          </div>

        </div>


        {/* Statistics */}
        <div className="mt-12 pt-6 border-t border-white/20">

          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-white">


            <div className="flex items-center gap-2">

              <span className="text-green-400 text-xl">
                ✔
              </span>

              <span>
                10,000+ Eye Tests Completed
              </span>

            </div>


            <div className="flex items-center gap-2">

              <span className="text-green-400 text-xl">
                ✔
              </span>

              <span>
                Certified Optometrists
              </span>

            </div>


            <div className="flex items-center gap-2">

              <span className="text-green-400 text-xl">
                ✔
              </span>

              <span>
                Premium Lens Technology
              </span>

            </div>


            <div className="flex items-center gap-2">

              <span className="text-green-400 text-xl">
                ✔
              </span>

              <span>
                Same Day Service Available
              </span>

            </div>


          </div>

        </div>


      </div>

    </section>

  );

};


export default Home;