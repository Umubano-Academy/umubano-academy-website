import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../../../../services/api";

function CreateNews() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content) {
      Swal.fire({
        icon: "warning",
        title: "Missing fields",
        text: "Please fill in all fields",
      });
      return;
    }

    try {
      setLoading(true);

      await api.post("/api/news/", {
        title: formData.title,
        content: formData.content,
      });

      Swal.fire({
        icon: "success",
        title: "News Created 🎉",
        text: "The news has been published successfully",
        confirmButtonColor: "#0AB0EE",
      }).then(() => {
        navigate("/admin"); // back to dashboard
      });

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong while creating news",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Create News
          </h2>
          <p className="text-gray-500 mt-1">
            Publish a new update or announcement
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              News Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter news title"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#0AB0EE] focus:outline-none"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              News Content
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={6}
              placeholder="Write the news content here..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:ring-2 focus:ring-[#0AB0EE] focus:outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-xl bg-[#0AB0EE] text-white font-medium shadow hover:shadow-lg transition disabled:opacity-60"
            >
              {loading ? "Publishing..." : "Publish News"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNews;

