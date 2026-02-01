import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../../services/api";
import Swal from "sweetalert2";

function CreateAnnouncement() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      Swal.fire("Error", "Please fill in all fields", "warning");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/api/announcement/", { title, content });
      Swal.fire("Success", "Announcement created successfully!", "success");

      // Redirect to announcement list
      navigate("/admin/announcement-lists");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to create announcement", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-[#0AB0EE] mb-6">Create Announcement</h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0AB0EE]"
              placeholder="Enter announcement title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Content</label>
            <textarea
              rows={5}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#0AB0EE]"
              placeholder="Enter announcement content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#0AB0EE] text-white py-3 rounded-xl font-medium shadow hover:shadow-lg transition ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Creating..." : "Create Announcement"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAnnouncement;

