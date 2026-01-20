import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Calendar } from "lucide-react"

function Contact() {
  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* LEFT: Get in Touch + Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl font-bold text-[#0AB0EE] mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-lg">
                Contact Umubano Academy for admissions, inquiries, or general information.
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-900/10 text-blue-900 flex items-center justify-center rounded-2xl">
                <Phone size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0AB0EE]">Phone Number</h4>
                <p className="text-gray-600 mt-1">+250 782029655</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-900/10 text-blue-900 flex items-center justify-center rounded-2xl">
                <Mail size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0AB0EE]">Email Address</h4>
                <p className="text-gray-600 mt-1">info@umubanoacademy.rw</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-900/10 text-blue-900 flex items-center justify-center rounded-2xl">
                <MapPin size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0AB0EE]">School Location</h4>
                <p className="text-gray-600 mt-1">Kigali City, Kicukiro District, Kanombe Sector</p>
                <p className="text-gray-600">Kabeza Cell, Nyarurembo Village</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-[#0AB0EE] mb-4">
              Upcoming Events
            </h3>

            {[
              { title: "Parents Meeting", date: "20 Feb 2026" },
              { title: "Sports Day", date: "05 Mar 2026" },
              { title: "Cultural Day", date: "22 Mar 2026" },
            ].map((event, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="w-12 h-12 bg-[#7ED956]/20 text-[#7ED956] flex items-center justify-center rounded-xl">
                  <Calendar size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-900">
                    {event.title}
                  </h4>
                  <p className="text-gray-600 mt-1">{event.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-2xl"
        >
          <iframe
            title="Umubano Academy Location"
            src="https://www.google.com/maps?q=Kabeza,Kicukiro,Kigali,Rwanda&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
