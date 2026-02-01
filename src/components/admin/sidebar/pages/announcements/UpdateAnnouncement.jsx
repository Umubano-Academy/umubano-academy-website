import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../../../services/api";
import Swal from "sweetalert2";

function UpdateAnnouncement() {
  const { id } = useParams(); // Get announcement ID from URL
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  // ============================
  // Fetch announcement by ID
  // ============================
  const fetchAnnouncement = async () => {
    try {
      const res = await api.get(`/api/announcement/${id}`);
      const announcement = res.data; // API returns the announcement object directly

      setForm({
        title: announcement.Title || "",
        content: announcement.Content || "",
      });
    } catch (error) {
      Swal.fire("Error", "Failed to load announcement details", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncement();
    // eslint-disable-next-line
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    try {
      await api.put(`/api/announcement/${id}`, {
        title: form.title,
        content: form.content,
      });

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Announcement updated successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/admin/announcement"); // Redirect to list
    } catch (error) {
      Swal.fire("Error", "Failed to update announcement", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading announcement...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Update Announcement</h2>
          <p className="text-gray-500 mt-1">
            Update announcement title and content
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-[#0AB0EE] focus:ring-[#0AB0EE]"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              name="content"
              rows={6}
              value={form.content}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-[#0AB0EE] focus:ring-[#0AB0EE]"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/announcement")}
              className="px-6 py-3 rounded-xl border text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 rounded-xl bg-[#0AB0EE] text-white font-medium hover:bg-blue-700 transition disabled:opacity-50"
            >
              {saving ? "Updating..." : "Update Announcement"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateAnnouncement;
