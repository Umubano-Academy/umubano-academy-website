import React, { useEffect, useState } from "react";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../../../../../services/api";
import Swal from "sweetalert2";

function Event() {
  const [events, setEvents] = useState([]);
  const [meta, setMeta] = useState({ page: 1, limit: 10, total: 0 });
  const [loading, setLoading] = useState(false);

  // Fetch events
  const fetchEvents = async (page = 1) => {
    try {
      setLoading(true);
      const res = await api.get(
        `/api/event/?page=${page}&limit=${meta.limit}`
      );

      setEvents(res.data.events || []);
      setMeta({
        page: res.data.page,
        limit: res.data.limit,
        total: res.data.total,
      });
    } catch (error) {
      console.error("Failed to load events", error);
      Swal.fire("Error", "Failed to load events", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents(meta.page);
    // eslint-disable-next-line
  }, []);

  // Delete event
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This event will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        setLoading(true);
        const res = await api.delete(`/api/event/${id}`);

        Swal.fire("Deleted!", res.data.message, "success");

        // Update table without refetch
        const newEvents = events.filter((item) => item.id !== id);
        setEvents(newEvents);
        setMeta((prev) => ({ ...prev, total: prev.total - 1 }));
      } catch (error) {
        Swal.fire("Error!", "Failed to delete event", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  const totalPages = Math.ceil(meta.total / meta.limit);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Events</h2>
            <p className="text-gray-500 mt-1">Manage all events</p>
          </div>

          <Link
            to="/admin/create-event"
            className="inline-flex items-center gap-2 bg-[#0AB0EE] text-white px-6 py-3 rounded-xl font-medium shadow hover:shadow-lg hover:scale-[1.02] transition"
          >
            <Plus size={18} />
            Create Event
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-gray-600 uppercase text-xs tracking-wide">
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Description</th>
                <th className="px-6 py-4 text-left">Event Date</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Created</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-gray-400">
                    Loading events...
                  </td>
                </tr>
              ) : events.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-gray-400">
                    No events available
                  </td>
                </tr>
              ) : (
                events.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b last:border-none hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-500">
                      #{item.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 text-gray-600 max-w-md line-clamp-2">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {item.event_date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === "cancelled"
                            ? "bg-red-100 text-red-600"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        {/* <Link
                          to={`/admin/event-view/${item.id}`}
                          className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                        >
                          <Eye size={16} />
                        </Link> */}
                        <Link
                          to={`/admin/update-event/${item.id}`}
                          className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-500">
              Page {meta.page} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                disabled={meta.page === 1}
                onClick={() => fetchEvents(meta.page - 1)}
                className="px-4 py-2 rounded-lg border text-sm disabled:opacity-40 hover:bg-gray-100 transition"
              >
                Previous
              </button>
              <button
                disabled={meta.page === totalPages}
                onClick={() => fetchEvents(meta.page + 1)}
                className="px-4 py-2 rounded-lg border text-sm disabled:opacity-40 hover:bg-gray-100 transition"
              >
                Next
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Event;
