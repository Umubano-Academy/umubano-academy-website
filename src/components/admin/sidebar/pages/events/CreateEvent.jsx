import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../../../services/api";
import Swal from "sweetalert2";
import { Save } from "lucide-react";

function CreateEvent() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    event_date: "",
    status: "upcoming",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.event_date) {
      Swal.fire("Validation Error", "All fields are required", "warning");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/api/event/", form);

      Swal.fire({
        title: "Success!",
        text: "Event created successfully",
        icon: "success",
        timer: 1800,
        showConfirmButton: false,
      });

      // Redirect to event list
      setTimeout(() => {
        navigate("/admin/events");
      }, 1800);

    } catch (error) {
      Swal.fire(
        "Error!",
        error.response?.data?.message || "Failed to create event",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Create Event</h2>
          <p className="text-gray-500 mt-1">
            Add a new event to the system
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-6"
        >
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
              placeholder="Enter event title"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#0AB0EE] focus:border-transparent"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter event description"
              rows={4}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#0AB0EE] focus:border-transparent"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[#0AB0EE] focus:border-transparent"
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
              className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:ring-2 focus:ring-[#0AB0EE] focus:border-transparent"
            >
              <option value="upcoming">Upcoming</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => navigate("/admin/events")}
              className="px-6 py-3 rounded-xl border text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-[#0AB0EE] text-white px-6 py-3 rounded-xl font-medium shadow hover:shadow-lg hover:scale-[1.02] transition disabled:opacity-50"
            >
              <Save size={18} />
              {loading ? "Saving..." : "Create Event"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default CreateEvent;

