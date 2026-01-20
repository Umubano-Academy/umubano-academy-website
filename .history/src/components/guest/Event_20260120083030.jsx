import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example images
import Image1 from "../../assets/gallery/image_1.jpg";
import Image2 from "../../assets/gallery/image_2.jpg";
import Image3 from "../../assets/gallery/image_3.jpg";
import Image4 from "../../assets/gallery/image_4.jpg";
import Image5 from "../../assets/gallery/image_5.jpg";
import Image6 from "../../assets/gallery/image_6.jpg";

function Event() {
  // Each event has multiple images but same title & description
  const items = [
    {
      title: "Academic Excellence Awards",
      description: "Celebrating outstanding academic performance and dedication to learning.",
      images: [Image1, Image2],
    },
    {
      title: "Cultural & Talent Day",
      description: "Showcasing creativity, culture, and talent among our students.",
      images: [Image3, Image4],
    },
    {
      title: "Sports & Physical Activities",
      description: "Encouraging teamwork, discipline, and physical well-being.",
      images: [Image5, Image6],
    },
    // Add more events as needed
  ];

  // Settings for react-slick slider inside each card
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <section id="events" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#7ED956] mb-4">
            School Events and Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Explore moments from Umubano Academy’s academic, cultural, and extracurricular activities.
          </p>
        </motion.div>

        {/* Event Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition"
            >
              {/* Slider for this event */}
              <Slider {...sliderSettings}>
                {item.images.map((img, i) => (
                  <div key={i} className="relative h-64 overflow-hidden">
                    <img
                      src={img}
                      alt={item.title}
                      className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-900/30 hover:bg-blue-900/50 transition"></div>
                  </div>
                ))}
              </Slider>

              {/* Event title & description */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#7ED956] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Event;
