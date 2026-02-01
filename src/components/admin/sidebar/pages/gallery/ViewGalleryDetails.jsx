import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../../../../services/api";
import { motion } from "framer-motion";

function ViewGalleryDetails() {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    const res = await api.get(`/api/gallery/gallery-content/${id}`);
    setContent(res.data.gallery_content);
  };

  const fetchImages = async () => {
    const res = await api.get(
      `/api/image/gallery-image?gallery_content_id=${id}`,
    );
    setImages(res.data.items || []);
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await fetchContent();
      await fetchImages();
      setLoading(false);
    };
    load();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold">{content.title}</h2>
        <p className="text-gray-600 mb-6">{content.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.length === 0 && (
            <p className="text-gray-500 col-span-full">No images available</p>
          )}

          {images.map((img) => (
            <motion.div
              key={img.ID}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              
                <img
                  src={`${import.meta.env.VITE_API_BASE_URL || ""}${img.ImageURL}`}
                  alt="Gallery"
                  className="w-full h-48 object-cover cursor-pointer"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/300x200")
                  }
                />
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewGalleryDetails;
