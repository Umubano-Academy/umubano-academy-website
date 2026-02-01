import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import api from "../../../../../services/api";
import Swal from "sweetalert2";

function UpdateImage() {
  const { id } = useParams(); // image ID
  const navigate = useNavigate();
  const location = useLocation();

  // gallery_content_id MUST be passed via route state
  const galleryContentId = location.state?.galleryContentId;

  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

  useEffect(() => {
    if (!galleryContentId) {
      Swal.fire("Error", "Gallery content ID missing", "error");
      navigate(-1);
      return;
    }

    fetchImageFromList();
  }, [id]);

  const fetchImageFromList = async () => {
    try {
      const res = await api.get(
        `/api/image/gallery-image?gallery_content_id=${galleryContentId}`
      );

      const found = res.data.items?.find(
        (img) => String(img.ID) === String(id)
      );

      if (!found) {
        throw new Error("Image not found");
      }

      setImage(found);
    } catch (error) {
      Swal.fire("Error", "Failed to load image", "error");
      navigate(-1);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      Swal.fire("Warning", "Please select a new image", "warning");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      await api.put(`/api/image/gallery-image/${id}`, formData);

      Swal.fire({
        icon: "success",
        title: "Updated",
        text: "Gallery image updated successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate(-1);
    } catch (error) {
      Swal.fire("Error", "Failed to update image", "error");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading image...
      </div>
    );
  }

  if (!image) return null;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Update Gallery Image</h2>

        <img
          src={`${API_URL}${image.ImageURL.startsWith("/") ? "" : "/"}${image.ImageURL}`}
          alt="Gallery"
          className="w-full h-64 object-cover rounded mb-4"
          onError={(e) =>
            (e.target.src =
              "https://via.placeholder.com/400x300?text=Image+Not+Found")
          }
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Update Image
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateImage;
