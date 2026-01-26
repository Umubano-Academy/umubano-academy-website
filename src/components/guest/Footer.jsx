import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import logo from "../../assets/partners/UA-LOGO.png";

// Import the same navLinks array
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
];

function Footer() {
  return (
    <footer className="bg-[#0AB0EE] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Umubano Academy Logo"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-xl font-bold text-white">Umubano Academy</h3>
            </div>
            <p className="text-white leading-relaxed">
              Umubano Academy is dedicated to providing quality education,
              strong values, and a nurturing environment that shapes future
              leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => {
                if (link.type === "route" || link.type === "id") {
                  return (
                    <li key={link.name}>
                      <a
                        href={link.path.startsWith("/") ? link.path : `#${link.path}`}
                        className="hover:text-yellow-400 transition"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                }

                if (link.type === "dropdown") {
                  return (
                    <li key={link.name}>
                      <span className="font-semibold">{link.name}</span>
                      <ul className="pl-4 mt-2 space-y-2">
                        {link.subLinks.map((sub) => (
                          <li key={sub.name}>
                            <a
                              href={sub.path}
                              className="hover:text-yellow-400 transition"
                            >
                              {sub.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }

                return null;
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-yellow-400 mt-1" />
                <span>+250 782029655</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-yellow-400 mt-1" />
                <span>info@umubanoacademy.rw</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-1" />
                <span>Kigali City, Kicukiro District, Kabeza</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Umubano Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
