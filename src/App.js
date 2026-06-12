import React from "react";
import { Routes, Route } from "react-router-dom";

import TopBar from "./Components/TopBar";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import WhatsAppChat from "./Components/WhatsAppChat";

// Pages
import Home from "./Components/Home";
import CategoryCarousel from "./Components/Categories";
import HomeVision from "./Components/HomeVision";
import Testimonials from "./Components/Testimonials";
import ContactUs from "./Components/ContactUs";
import GoogleMap from "./Components/GoogleMap";

// Create these pages later
import Services from "./Components/Pages/Services";
import ReadingGlasses from "./Components/Pages/Readingg";
import Sunglasses from "./Components/Pages/Sunglases";
import EyewearAccessories from "./Components/Pages/Accessories";
import DesignedFrames from "./Components/Pages/Designedfram";
import Portfolio from "./Components/Pages/Portfolio";
import About from "./Components/Pages/Aboutus";
import Blog from "./Components/Pages/Blog";
import Bookappointment from "./Components/Pages/Bookappointment";
import LensRenewal from "./Components/Pages/LensRenewal";


// Homepage layout
function HomePage() {
  return (
    <>
      <Home />
      <CategoryCarousel />
      <HomeVision />
      <Testimonials />
      <ContactUs />
      <GoogleMap />
    </>
  );
}


function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <TopBar />

      <NavigationBar />

      <Routes>

        <Route path="/ltdoptics" element={<HomePage />} />

        <Route path="/services" element={<Services />} />

        <Route
          path="/reading-glasses"
          element={<ReadingGlasses />}
        />

        <Route
          path="/sunglasses"
          element={<Sunglasses />}
        />

        <Route
          path="/eyewear-accessories"
          element={<EyewearAccessories />}
        />

        <Route
          path="/designed-frames"
          element={<DesignedFrames />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/book-appointment"
          element={<Bookappointment />}
        />
        <Route
          path="/lens-renewal"
          element={<LensRenewal />}
        />
      </Routes>

      <WhatsAppChat />

      <Footer />

    </div>
  );
}

export default App;