import React from "react"
import { motion } from "framer-motion"
import heroImage from "../../assets/gallery/image_12.jpg"
import { Link } from "react-router-dom"

function Hero() {
  return (
    <section
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
            <Link
              to="news"
              className="border border-white/40 px-8 py-4 rounded-xl font-semibold text-lg text-black bg-[#D9D9D9] hover:bg-[#0AB0EE] hover:text-blue-900 transition"
            >
              Why choose Umubano Academy?
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

