import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import api from "../../services/api";

function Contact() {
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  // Fetch upcoming events
  const fetchUpcomingEvents = async () => {
    try {
      setLoadingEvents(true);
      const res = await api.get("/api/event/");
      const upcoming = (res.data.events || []).filter(
        (event) => event.status === "upcoming",
      );
      setEvents(upcoming);
    } catch (error) {
      console.error("Failed to load events", error);
    } finally {
      setLoadingEvents(false);
    }
  };

  useEffect(() => {
    fetchUpcomingEvents();
  }, []);

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
                Contact Umubano Academy for admissions, inquiries, or general
                information.
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-900/10 text-blue-900 flex items-center justify-center rounded-2xl">
                <Phone size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0AB0EE]">
                  Phone Number
                </h4>
                <p className="text-gray-600 mt-1">+250 783523189</p>
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
                <p className="text-gray-600 mt-1">info@umubanoacademy.rw</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="w-14 h-14 bg-blue-900/10 text-blue-900 flex items-center justify-center rounded-2xl">
                <MapPin size={26} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0AB0EE]">
                  School Location
                </h4>
                <p className="text-gray-600 mt-1">
                  Kigali City, Kicukiro District, Kanombe Sector
                </p>
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

            {loadingEvents ? (
              <p className="text-gray-500">Loading upcoming events...</p>
            ) : events.length === 0 ? (
              <p className="text-gray-500">No upcoming events at the moment</p>
            ) : (
              events.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <div className="w-12 h-12 bg-[#7ED956]/20 text-[#7ED956] flex items-center justify-center rounded-xl">
                    <Calendar size={22} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-900">
                      {event.title}
                    </h4>

                    {/* ✅ Description added */}
                    <p className="text-gray-600 mt-1 line-clamp-2">
                      {event.description}
                    </p>

                    <p className="text-gray-500 mt-1 text-sm">
                      {new Date(event.event_date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))
            )}
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
            src="https://www.google.com/maps?q=24H9%2BR3%20Kigali&z=18&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
            allowFullScreen
          ></iframe>
        </motion.div>

        <a
          href="https://maps.app.goo.gl/AkwAPM3iwwkm2sVt5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-[#0AB0EE] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
}
export default Contact;
