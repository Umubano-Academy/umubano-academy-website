import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle, // WhatsApp icon
} from "lucide-react";
import logo from "../../assets/mylogoes.png";

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

function Footer() {
  return (
    <footer className="bg-[#0AB0EE] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Umubano Academy Logo"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-xl font-bold">Umubano Academy</h3>
            </div>
            <p className="leading-relaxed">
              Umubano Academy is dedicated to providing quality education,
              strong values, and a nurturing environment that shapes future
              leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-yellow-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-yellow-400 mt-1" />
                <span>+250 783 523 189</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-yellow-400 mt-1" />
                <span>info@umubanoacademy.rw</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-400 mt-1" />
                <span>
                  Kigali City, Kicukiro District, Kanombe Sector <br />
                  Kabeza Cell, Nyarurembo Village
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              
              {/* Facebook */}
              <a
                href="https://www.facebook.com/umubano.academy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
              >
                <Facebook size={18} />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/AcademyUmubano"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
              >
                <Twitter size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/umubano.academy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-yellow-400 hover:text-blue-900 transition"
              >
                <Instagram size={18} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/250783523189"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-full hover:bg-green-500 hover:text-white transition"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm">
        © {new Date().getFullYear()} Umubano Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
