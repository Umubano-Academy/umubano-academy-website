import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../../services/api";
import Swal from "sweetalert2";

function GalleryContentCreate() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      Swal.fire("Error", "Please fill in all fields", "error");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/api/gallery/gallery-content", {
        title,
        description,
      });

      Swal.fire({
        icon: "success",
        title: "Success",
        text: res.data.message || "Gallery content created successfully",
        timer: 2000,
        showConfirmButton: false,
      });

      // redirect after short delay
      setTimeout(() => navigate("/admin/gallery-content"), 2000);
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message || "Failed to create gallery content",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Create Gallery Content
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0AB0EE] focus:outline-none"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#0AB0EE] focus:outline-none"
              placeholder="Enter description"
              rows={5}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[#0AB0EE] text-white font-semibold py-3 rounded-xl shadow hover:shadow-lg transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Creating..." : "Create Content"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GalleryContentCreate;

