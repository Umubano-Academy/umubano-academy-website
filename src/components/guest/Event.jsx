import React, { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/gallery/image1.JPG";
import image2 from "../../assets/gallery/image2.JPG";
import image3 from "../../assets/gallery/image3.JPG";
import image4 from "../../assets/gallery/image4.JPG";
import image5 from "../../assets/gallery/image5.JPG";
import image6 from "../../assets/gallery/image6.JPG";

/* Modal arrows (outside image) */
const ModalArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === "next" ? "-right-16" : "-left-16"
    } top-1/2 -translate-y-1/2 bg-[#7ED956] text-white w-12 h-12 rounded-full shadow-xl hover:bg-green-700 transition z-50`}
  >
    {direction === "next" ? "❯" : "❮"}
  </button>
);

function Event() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const items = [
    {
      title: "Academic Excellence Awards",
      description: "Celebrating outstanding academic performance.",
      images: [image1, image2],
    },
    {
      title: "Cultural & Talent Day",
      description: "Showcasing creativity and culture.",
      images: [image3, image4],
    },
    {
      title: "Sports & Physical Activities",
      description: "Encouraging teamwork and fitness.",
      images: [image5, image6],
    },
    {
      title: "Sports & Physical Activities",
      description: "Encouraging teamwork and fitness.",
      images: [image5, image6],
    },
  ];

  const modalSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: startIndex,
    arrows: true,
    nextArrow: <ModalArrow direction="next" />,
    prevArrow: <ModalArrow direction="prev" />,
  };

  const openModal = (imgs, index) => {
    setImages(imgs);
    setStartIndex(index);
    setIsOpen(true);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7ED956] mb-4">
            School Events and Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Explore moments from Umubano Academy life.
          </p>
        </div>

        {/* Cards */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {items.map((item, idx) => (
    <div
      key={idx}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      {/* Single preview image */}
      <div
        onClick={() => openModal(item.images, 0)}
        className="relative h-64 cursor-pointer"
      >
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition flex items-center justify-center">
          <span className="text-white font-semibold">
            View Gallery
          </span>
        </div>
      </div>

      {/* Title & description */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-[#7ED956] mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            {/* Stop close when clicking image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl px-16"
            >
              <Slider {...modalSettings}>
                {images.map((img, i) => (
                  <div key={i} className="flex justify-center">
                    <img
                      src={img}
                      alt="Gallery view"
                      className="w-full max-h-[80vh] object-contain rounded-xl"
                    />
                  </div>
                ))}
              </Slider>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Event;
