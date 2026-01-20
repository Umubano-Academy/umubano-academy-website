import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          className="absolute top-0 left-0 w-[120%] h-[120%] -translate-x-[10%] -translate-y-[10%]"
          src="https://www.youtube.com/embed/1La4QzGeaaQ?autoplay=1&mute=1&loop=1&playlist=1La4QzGeaaQ&controls=0&showinfo=0&modestbranding=1"
          title="School Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <div className="flex flex-col sm:flex-row gap-5 mt-8">
            <Link
              to="/admissions"
              className="group relative overflow-hidden bg-[#7ED956] text-blue-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Admissions</span>
              <span className="absolute inset-0 bg-[#FFDE59] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>

            <Link
              to="/academic"
              className="relative px-10 py-4 rounded-2xl font-semibold text-lg text-white border border-white/40 backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:bg-[#0AB0EE] hover:text-blue-900 hover:scale-105"
            >
              Explore our Education
            </Link>

            <a
              href="#whyus"
              className="relative px-10 py-4 rounded-2xl font-semibold text-lg text-white border border-white/40 backdrop-blur-md bg-white/10 shadow-lg transition-all duration-300 hover:bg-[#0AB0EE] hover:text-blue-900 hover:scale-105"
            >
              Why choose Umubano Academy?
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
