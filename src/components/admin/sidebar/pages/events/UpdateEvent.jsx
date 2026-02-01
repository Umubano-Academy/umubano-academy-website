import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../../../../../services/api";
import Swal from "sweetalert2";

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
    event_date: "",
    status: "upcoming",
  });

  // ============================
  // Fetch event by ID
  // ============================
  const fetchEvent = async () => {
    try {
      const res = await api.get(`/api/event/${id}`);
      const event = res.data.event;

      setForm({
        title: event.title || "",
        description: event.description || "",
        event_date: event.event_date || "",
        status: event.status || "upcoming",
      });
    } catch (error) {
      Swal.fire("Error", "Failed to load event details", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
    // eslint-disable-next-line
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);
    try {
      await api.put(`/api/event/${id}`, form);

      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Event updated successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/admin/events");
    } catch (error) {
      Swal.fire("Error", "Failed to update event", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading event...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Update Event</h2>
          <p className="text-gray-500 mt-1">
            Update event details and status
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Title
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

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-[#0AB0EE] focus:ring-[#0AB0EE]"
            />
          </div>

          {/* Event Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Date
            </label>
            <input
              type="date"
              name="event_date"
              value={form.event_date}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-[#0AB0EE] focus:ring-[#0AB0EE]"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-2 focus:border-[#0AB0EE] focus:ring-[#0AB0EE]"
            >
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Link
              to="/admin/events"
              className="px-6 py-3 rounded-xl border text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 rounded-xl bg-[#0AB0EE] text-white font-medium hover:bg-blue-700 transition disabled:opacity-50"
            >
              {saving ? "Updating..." : "Update Event"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEvent;
