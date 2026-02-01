import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../../../services/api";
import Swal from "sweetalert2";

function UpdateContent() {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch current content details
  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/api/gallery/gallery-content/${id}`);
        setTitle(res.data.Title || res.data.title);
        setDescription(res.data.Description || res.data.description);
      } catch (error) {
        Swal.fire("Error", "Failed to load gallery content", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [id]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      Swal.fire("Warning", "Please fill all fields", "warning");
      return;
    }

    try {
      setLoading(true);
      const res = await api.put(`/api/gallery/gallery-content/${id}`, {
        title,
        description,
      });
      Swal.fire("Success", res.data.message, "success").then(() => {
        navigate("/admin/gallery-CONTENT");
      });
    } catch (error) {
      Swal.fire("Error", "Failed to update gallery content", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="bg-white rounded-3xl shadow-md p-10 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Update Gallery Content
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0AB0EE]"
              placeholder="Enter title"
              disabled={loading}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0AB0EE]"
              placeholder="Enter description"
              rows={4}
              disabled={loading}
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0AB0EE] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7ED956] transition shadow-lg"
            >
              {loading ? "Updating..." : "Update Content"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateContent;
