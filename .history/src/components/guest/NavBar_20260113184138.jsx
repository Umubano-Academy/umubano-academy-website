import React, { useState } from "react"
import { Menu, X, Phone, Mail, GraduationCap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../../assets"
import { Link } from "react-router-dom"

function NavBar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    "Home",
    "About",
    "Academics",
    "Admissions",
    "News",
    "Events",
    "Contact",
  ]

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-[#FFDE59] text-white text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-xl text-black font-medium">
            <Phone size={14} /> +250 782029655
          </span>
          <span className="flex text-xl items-center gap-1  text-black font-medium">
            <Mail size={14} /> info@umubanoacademy.rw
          </span>
        </div>
        <span className=" text-xl  text-[#0AB0EE] font-medium">Excellence in Education</span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-900 text-white flex items-center justify-center rounded-xl">
                <GraduationCap size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">
                  Umubano Academy
                </h1>
                <p className="text-xs text-gray-500">
                  Knowledge • Discipline • Excellence
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="relative text-gray-700 font-medium hover:text-blue-900 transition group"
                >
                  {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex">
              <a
                href="/login"
                className="bg-gradient-to-r from-blue-800 to-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition"
              >
                Sign in
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-blue-900"
            >
              {open ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white shadow-xl"
            >
              <div className="flex flex-col px-6 py-6 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="text-lg font-medium text-gray-700 hover:text-blue-900"
                    onClick={() => setOpen(false)}
                  >
                    {link}
                  </a>
                ))}

                <Link to="login"
                
                  className="mt-4 text-center bg-blue-900 text-white py-3 rounded-xl font-medium"
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default NavBar
