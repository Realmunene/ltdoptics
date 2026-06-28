import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import TopBar from "./Components/TopBar";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import WhatsAppChat from "./Components/WhatsAppChat";

// Lazy Loaded Components
const Home = lazy(() => import("./Components/Home"));
const HomeVision = lazy(() => import("./Components/HomeVision"));
const Testimonials = lazy(() => import("./Components/Testimonials"));
const ContactUs = lazy(() => import("./Components/ContactUs"));
const GoogleMap = lazy(() => import("./Components/GoogleMap"));
const Ourservices = lazy(() => import("./Components/Ourservices"));

const Services = lazy(() => import("./Components/Pages/Services"));
const ReadingGlasses = lazy(() => import("./Components/Pages/Readingg"));
const Sunglasses = lazy(() => import("./Components/Pages/Sunglases"));
const EyewearAccessories = lazy(() => import("./Components/Pages/Accessories"));
const DesignedFrames = lazy(() => import("./Components/Pages/Designedfram"));
const About = lazy(() => import("./Components/Pages/Aboutus"));

/* Loading Screen */
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-5">

        <div className="w-12 h-12 border-4 border-sky-400 border-t-transparent rounded-full animate-spin" />

        <p className="text-gray-600 font-semibold tracking-wide">
          Loading...
        </p>

      </div>
    </div>
  );
}

/* Homepage */
function HomePage() {
  return (
    <>
      <Home />
      <Ourservices />
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

      <main className="pt-28 md:pt-32">

        <Suspense fallback={<PageLoader />}>

          <Routes>

            <Route
              path="/ltdoptics"
              element={<Navigate to="/" replace />}
            />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />

            <Route path="/" element={<HomePage />} />

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
              path="/about"
              element={<About />}
            />

          </Routes>

        </Suspense>

      </main>

      <WhatsAppChat />

      <Footer />

    </div>
  );
}

export default App;