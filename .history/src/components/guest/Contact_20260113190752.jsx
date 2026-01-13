import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"

function Contact() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-4xl font-bold text-[#0AB0EE] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            We would love to hear from you. Contact Umubano Academy for
            admissions, inquiries, or general information.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* Contact Info List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-900/10 text-blue-900 flex items-center justify-center rounded-2xl">
                <Phone size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0AB0EE]">
                  Phone Number
                </h4>
                <p className="text-gray-600 mt-1">+250 782029655</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-900/10 text-blue-900 flex items-center justify-center rounded-2xl">
                <Mail size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0AB0EE]">
                  Email Address
                </h4>
                <p className="text-gray-600 mt-1">
                  info@umubanoacademy.rw
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-900/10 text-blue-900 flex items-center justify-center rounded-2xl">
                <MapPin size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900">
                  School Location
                </h4>
                <p className="text-gray-600 mt-1">
                  Kigali City, Kicukiro District, Kabeza
                </p>
              </div>
            </div>
          </motion.div>

          {/* Premium Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl p-10"
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-8">
              Our team will respond as soon as possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-900"
            ></textarea>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full bg-blue-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition shadow-xl"
            >
              <Send size={20} />
              Send Message
            </button>
          </motion.form>
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
