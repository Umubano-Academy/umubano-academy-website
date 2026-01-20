import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Gallery Images
import Image1 from "../../assets/gallery/image_1.jpg";
import Image2 from "../../assets/gallery/image_2.jpg";
import Image3 from "../../assets/gallery/image_3.jpg";
import Image4 from "../../assets/gallery/image_4.jpg";
import Image5 from "../../assets/gallery/image_5.jpg";
import Image6 from "../../assets/gallery/image_6.jpg";
import Image7 from "../../assets/gallery/image_7.jpg";
import Image8 from "../../assets/gallery/image_8.jpg";
import Image9 from "../../assets/gallery/image_9.jpg";
import Image10 from "../../assets/gallery/image_10.jpg";

function Event() {
  const items = [
    {
      title: "Academic Excellence Awards",
      description: "Celebrating outstanding academic performance and dedication to learning.",
      image: Image1,
    },
    {
      title: "Cultural & Talent Day",
      description: "Showcasing creativity, culture, and talent among our students.",
      image: Image2,
    },
    {
      title: "Sports & Physical Activities",
      description: "Encouraging teamwork, discipline, and physical well-being.",
      image: Image3,
    },
    {
      title: "Community Engagement",
      description: "Students participating in community service and social responsibility.",
      image: Image4,
    },
    {
      title: "Science & Innovation Fair",
      description: "Promoting innovation, critical thinking, and creativity.",
      image: Image5,
    },
    {
      title: "Graduation Ceremony",
      description: "Honoring our students’ academic journey and achievements.",
      image: Image6,
    },
    {
      title: "Cultural & Talent Day",
      description: "Showcasing creativity, culture, and talent among our students.",
      image: Image7,
    },
    {
      title: "Sports & Physical Activities",
      description: "Encouraging teamwork, discipline, and physical well-being.",
      image: Image8,
    },
    {
      title: "Community Engagement",
      description: "Students participating in community service and social responsibility.",
      image: Image9,
    },
    {
      title: "Science & Innovation Fair",
      description: "Promoting innovation, critical thinking, and creativity.",
      image: Image10,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
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

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className="px-3">
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-900/30 group-hover:bg-blue-900/50 transition"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#7ED956] mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}

export default Event;
