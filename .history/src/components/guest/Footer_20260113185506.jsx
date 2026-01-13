import React from "react"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  GraduationCap,
} from "lucide-react"
import logo from "../../assets/UALOGO.png"

function Footer() {
  return (
    <footer className="bg-[#0AB0EE] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Umubano Academy Logo" className="w-16 h-16 object-contain" />
              <h3 className="text-xl font-bold text-white">
                Umubano Academy
              </h3>
            </div>
            <p className="text-white leading-relaxed">
              Umubano Academy is dedicated to providing quality education,
              strong values, and a nurturing environment that shapes future
              leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                "Home",
                "About Us",
                "Academics",
                "Admissions",
                "News",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(" ", "")}`}
                    className="hover:text-yellow-400 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Contact Us
            </h4>
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
                <span>
                  Kigali City, Kicukiro District, Kabeza
                </span>
              </li>
            </ul>
          </div>

          {/* Motto & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Our Motto
            </h4>
            <p className="italic mb-6">
              “Knowledge, Discipline & Excellence”
            </p>

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
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Umubano Academy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
