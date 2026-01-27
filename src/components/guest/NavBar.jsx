import React, { useState } from "react";
import { Menu, X, PhoneCall, Mail, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/mylogoes.png";
import { Link } from "react-router-dom";

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
    { name: "News and Announcement", type: "hash", path: "/#news" },
    { name: "School Events and Gallery", type: "hash", path: "/#events" },
    { name: "Contact Us", type: "hash", path: "/#contact" },
  ];

  return (
    <>
      {/* Top Info Bar */}
      {/* Top Info Bar */}
<div className="hidden md:flex justify-between items-center px-8 py-2 bg-[#FFDE59] text-sm">
  <div className="flex items-center gap-6">
    
    {/* Phone + WhatsApp */}
    <span className="flex items-center gap-2 text-xl text-black font-bold">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/250783523189"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:scale-110 transition-transform"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      <a
        href="tel:+250783523189"
        className="hover:text-blue-900 transition"
      >
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


      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Logo" className="w-16 h-16" />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                if (link.type === "route" || link.type === "hash") {
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className="text-gray-700 font-medium hover:text-blue-900 transition"
                    >
                      {link.name}
                    </Link>
                  );
                }

                if (link.type === "dropdown") {
                  return (
                    <div key={link.name} className="relative group">
                      <span className="cursor-pointer text-gray-700 font-medium">
                        {link.name}
                      </span>
                      <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition z-50">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-6 py-3 hover:bg-blue-100"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return null;
              })}

              {/* ✅ Admin Login Button Desktop */}
              <Link
                to="/login"
                className="ml-6 bg-[#0AB0EE] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition"
              >
                Admin Login
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} className="lg:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
                        <span>{link.name}</span>
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block pl-4"
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

                {/* ✅ Admin Login Mobile */}
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
