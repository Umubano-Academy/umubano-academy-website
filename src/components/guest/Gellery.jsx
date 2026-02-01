import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../services/api"; // your Axios instance

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function Gellery() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all gallery content and their images
  const fetchGallery = async () => {
    try {
      setLoading(true);
      const res = await api.get("/api/gallery/gallery-content");
      const galleryItems = res.data.items;

      // Fetch images for each content
      const itemsWithImages = await Promise.all(
        galleryItems.map(async (item) => {
          try {
            const imgRes = await api.get(
              `/api/image/gallery-image?gallery_content_id=${item.ID}`
            );
            const imgs = imgRes.data.items.map((img) =>
              img.ImageURL.startsWith("/")
                ? `${import.meta.env.VITE_API_BASE_URL}${img.ImageURL}`
                : `${import.meta.env.VITE_API_BASE_URL}/${img.ImageURL}`
            );
            return {
              ...item,
              images: imgs.length ? imgs : ["https://via.placeholder.com/300x200?text=No+Image"],
            };
          } catch (err) {
            return {
              ...item,
              images: ["https://via.placeholder.com/300x200?text=No+Image"],
            };
          }
        })
      );

      setItems(itemsWithImages);
    } catch (error) {
      console.error("Failed to fetch gallery content", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading gallery content...
      </div>
    );
  }

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
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Single preview image */}
              <div
                onClick={() => openModal(item.images, 0)}
                className="relative h-64 cursor-pointer"
              >
                <img
                  src={item.images[0]}
                  alt={item.Title}
                  className="w-full h-full object-cover"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=No+Image")}
                />

                <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition flex items-center justify-center">
                  <span className="text-white font-semibold">View Gallery</span>
                </div>
              </div>

              {/* Title & description */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#7ED956] mb-2">
                  {item.Title}
                </h3>
                <p className="text-gray-600">{item.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center"
          >
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
                      onError={(e) => (e.target.src = "https://via.placeholder.com/800x600?text=No+Image")}
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

export default Gellery
