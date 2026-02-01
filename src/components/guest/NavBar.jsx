import React, { useState } from "react";
import { Menu, X, Mail, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/mylogoes.png";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", type: "route", path: "/" },
    { name: "About Us", type: "route", path: "/aboutus" },
    {
      name: "Education",
      type: "dropdown",
      subLinks: [
        { name: "Teaching and Learning", path: "/academic" },
        { name: "Nursery", path: "/nursery" },
        { name: "Primary", path: "/primary" },
        { name: "Lower Secondary", path: "/lower-secondary" },
      ],
    },
    { name: "Admissions", type: "route", path: "/admissions" },
    { name: "News and Announcement", type: "route", path: "/news-announcement" },
    { name: "School Events and Gallery", type: "route", path: "/gallery" },
    { name: "Contact Us", type: "route", path: "/contactus" },
  ];

  return (
    <>
      {/* 🔶 Top Info Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-[#FFDE59] text-sm">
        <div className="flex items-center gap-6">
          {/* WhatsApp + Phone */}
          <span className="flex items-center gap-2 text-xl text-black font-bold">
            <a
              href="https://wa.me/250783523189"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:scale-110 transition-transform"
            >
              <MessageCircle size={22} />
            </a>
            <a href="tel:+250783523189" className="hover:text-blue-900 transition">
              +250 783 523 189
            </a>
          </span>

          {/* Email */}
          <span className="flex items-center gap-2 text-xl text-black font-bold">
            <Mail size={20} className="text-[#7ED956]" />
            <a
              href="mailto:info@umubanoacademy.rw"
              className="hover:text-blue-900 transition"
            >
              info@umubanoacademy.rw
            </a>
          </span>
        </div>

        <span className="text-xl text-black font-bold">
          Excellence in Education
        </span>
      </div>

      {/* 🔷 Main Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 gap-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Logo" className="w-16 h-16" />
            </Link>

            {/* 🖥 Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {navLinks.map((link) => {
                if (link.type === "route" || link.type === "hash") {
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-gray-700 font-medium hover:text-blue-900 transition whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                  );
                }

                if (link.type === "dropdown") {
                  return (
                    <div key={link.name} className="relative group">
                      <span className="cursor-pointer text-gray-700 font-medium hover:text-blue-900 transition whitespace-nowrap">
                        {link.name}
                      </span>

                      {/* ✅ FIXED DROPDOWN */}
                      <div
                        className="
                          absolute left-0 top-full
                          w-56 bg-white shadow-lg rounded-xl
                          opacity-0 invisible
                          group-hover:opacity-100 group-hover:visible
                          transition-all duration-200
                          z-50
                        "
                      >
                        <div className="py-2">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-6 py-3 hover:bg-blue-100 transition"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </nav>

            {/* Admin Login Button */}
            <Link
              to="/login"
              className="hidden lg:block bg-[#0AB0EE] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition flex-shrink-0"
            >
              Admin Login
            </Link>

            {/* 📱 Mobile Toggle */}
            <button onClick={() => setOpen(!open)} className="lg:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden bg-white shadow-xl"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => {
                  if (link.type === "route" || link.type === "hash") {
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setOpen(false)}
                      >
                        {link.name}
                      </Link>
                    );
                  }

                  if (link.type === "dropdown") {
                    return (
                      <div key={link.name}>
                        <span className="font-semibold">{link.name}</span>
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block pl-4 py-1"
                            onClick={() => setOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    );
                  }

                  return null;
                })}

                <Link
                  to="/login"
                  className="mt-4 text-center bg-[#0AB0EE] text-white py-3 rounded-xl font-medium"
                  onClick={() => setOpen(false)}
                >
                  Admin Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

export default NavBar;