import React, { useEffect, useState } from "react";
import api from "../../../../../services/api";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

function CreateImage() {
  const [galleryContents, setGalleryContents] = useState([]);
  const [galleryContentId, setGalleryContentId] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // FETCH GALLERY CONTENT
  // =========================
  useEffect(() => {
    const fetchGalleryContent = async () => {
      try {
        const res = await api.get("/api/gallery/gallery-content");
        setGalleryContents(res.data.items || []);
      } catch {
        setError("Failed to load gallery contents");
      } finally {
        setFetching(false);
      }
    };

    fetchGalleryContent();
  }, []);

  // =========================
  // IMAGE PREVIEW
  // =========================
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // =========================
  // SUBMIT FORM
  // =========================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!galleryContentId || !image) {
      setError("Please select gallery content and upload an image");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("gallery_content_id", galleryContentId);
      formData.append("image", image);

      await api.post("/api/image/gallery-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ✅ Sweet Alert Success
      Swal.fire({
        icon: "success",
        title: "Upload Successful",
        text: "Gallery image uploaded successfully!",
        confirmButtonColor: "#0AB0EE",
      });

      // ✅ Reset Form
      setGalleryContentId("");
      setImage(null);
      setPreview(null);
      e.target.reset();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // UI
  // =========================
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Upload Gallery Image
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-xl mb-4 text-sm">
            {error}
          </div>
        )}

        {fetching ? (
          <p className="text-center text-gray-500">
            Loading gallery contents...
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Gallery Selector */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gallery Content
              </label>
              <select
                value={galleryContentId}
                onChange={(e) => setGalleryContentId(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-[#0AB0EE] focus:outline-none"
                required
              >
                <option value="">-- Select Gallery --</option>
                {galleryContents.map((item) => (
                  <option key={item.ID} value={item.ID}>
                    {item.Title}
                  </option>
                ))}
              </select>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gallery Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-xl p-3"
                required
              />
            </div>

            {/* Image Preview */}
            {preview && (
              <div className="flex justify-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="h-48 w-full object-cover rounded-2xl shadow-md"
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0AB0EE] text-white py-3 rounded-2xl font-semibold text-lg shadow hover:shadow-xl transition disabled:opacity-50"
            >
              {loading ? "Uploading..." : "Upload Image"}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export default CreateImage;
