import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/admissions"
              className="bg-[#7ED956] text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#FFDE59] transition shadow-lg"
            >
              Admissions
            </Link>

            <Link
              to="/academic"
              className="border border-white/40 px-8 py-4 rounded-xl font-semibold text-lg text-black bg-[#D9D9D9] hover:bg-[#0AB0EE] hover:text-blue-900 transition"
            >
              Explore our Education
            </Link>

            {/* Redirect to section by ID */}
            <a
              href="#whyus"
              className="border border-white/40 px-8 py-4 rounded-xl font-semibold text-lg text-black bg-[#D9D9D9] hover:bg-[#0AB0EE] hover:text-blue-900 transition"
            >
              Why choose Umubano Academy?
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
