import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../../../../../services/api";
import Swal from "sweetalert2";

function AnnouncementLists() {
  const [announcements, setAnnouncements] = useState([]);
  const [meta, setMeta] = useState({ page: 1, limit: 10, total: 0 });
  const [loading, setLoading] = useState(false);

  // ============================
  // Fetch announcements
  // ============================
  const fetchAnnouncements = async (page = 1) => {
    try {
      setLoading(true);
      const res = await api.get(
        `/api/announcement?page=${page}&limit=${meta.limit}`
      );

      const items = Array.isArray(res.data.items) ? res.data.items : [];
      const metaData = res.data.meta || { page: 1, limit: 10, total: 0 };

      setAnnouncements(items);
      setMeta(metaData);
    } catch (error) {
      console.error("Failed to load announcements", error);
      setAnnouncements([]);
      setMeta({ page: 1, limit: 10, total: 0 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements(meta.page);
    // eslint-disable-next-line
  }, []);

  // ============================
  // Delete announcement
  // ============================
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This announcement will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        setLoading(true);
        const res = await api.delete(`/api/announcement/${id}`);
        Swal.fire(
          "Deleted!",
          res.data.message || "Announcement deleted",
          "success"
        );

        // Refresh table safely
        const newAnnouncements = (announcements || []).filter(
          (item) => item.ID !== id
        );
        setAnnouncements(newAnnouncements);
        setMeta((prev) => ({
          ...prev,
          total: Math.max((prev.total || 0) - 1, 0),
        }));
      } catch (error) {
        Swal.fire("Error!", "Failed to delete announcement", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  // Safely calculate totalPages
  const totalPages =
    meta && meta.limit
      ? Math.ceil((meta.total || 0) / (meta.limit || 1))
      : 1;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Announcements</h2>
            <p className="text-gray-500 mt-1">Manage all announcements</p>
          </div>

          <Link
            to="/admin/create-announcement"
            className="inline-flex items-center gap-2 bg-[#0AB0EE] text-white px-6 py-3 rounded-xl font-medium shadow hover:shadow-lg hover:scale-[1.02] transition"
          >
            <Plus size={18} />
            Create Announcement
          </Link>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-gray-600 uppercase text-xs tracking-wide">
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Title</th>
                <th className="px-6 py-4 text-left">Content</th>
                <th className="px-6 py-4 text-left">Created</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="py-12 text-center text-gray-400">
                    Loading announcements...
                  </td>
                </tr>
              ) : !announcements || announcements.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-12 text-center text-gray-400">
                    No announcements available
                  </td>
                </tr>
              ) : (
                (announcements || []).map((item) => (
                  <tr
                    key={item.ID}
                    className="border-b last:border-none hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-500">
                      #{item.ID}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.Title}
                    </td>
                    <td className="px-6 py-4 text-gray-600 max-w-md line-clamp-2">
                      {item.Content}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(item.CreatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/admin/update-announcement/${item.ID}`}
                          className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(item.ID)}
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
              Page {meta.page || 1} of {totalPages}
            </p>
            <div className="flex gap-2">
              <button
                disabled={meta.page <= 1}
                onClick={() => fetchAnnouncements((meta.page || 1) - 1)}
                className="px-4 py-2 rounded-lg border text-sm disabled:opacity-40 hover:bg-gray-100 transition"
              >
                Previous
              </button>
              <button
                disabled={meta.page >= totalPages}
                onClick={() => fetchAnnouncements((meta.page || 1) + 1)}
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

export default AnnouncementLists;
