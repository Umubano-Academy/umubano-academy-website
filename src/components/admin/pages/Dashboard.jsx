import React, { useEffect, useState } from "react";
import { Eye, Pencil, Trash2, Plus } from "lucide-react";
import api from "../../../services/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Dashboard() {
  const [news, setNews] = useState([]);
  const [meta, setMeta] = useState({ page: 1, limit: 10, total: 0 });
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const fetchNews = async (page = 1) => {
    try {
      setLoading(true);
      const res = await api.get(`/api/news/?page=${page}&limit=${meta.limit}`);
      setNews(res.data.items);
      setMeta(res.data.meta);
    } catch (error) {
      console.error("Failed to load news", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(meta.page);
  }, []);

  const totalPages = Math.ceil(meta.total / meta.limit);

  // ======================
  // DELETE NEWS
  // ======================
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This news will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      setDeletingId(id);
      await api.delete(`/api/news/${id}`);

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "News deleted successfully",
        timer: 1800,
        showConfirmButton: false,
      });

      // Refresh list
      fetchNews(meta.page);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete news",
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Umubano Academy News
            </h2>
            <p className="text-gray-500 mt-1">
              Manage all published news and updates
            </p>
          </div>

          <Link
            to="/admin/createnews"
            className="inline-flex items-center gap-2 bg-[#0AB0EE] text-white px-6 py-3 rounded-xl font-medium shadow hover:shadow-lg hover:scale-[1.02] transition"
          >
            <Plus size={18} />
            Create News
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
                    Loading news...
                  </td>
                </tr>
              ) : news.length === 0 ? (
                <tr>
                  <td colSpan="5" className="py-12 text-center text-gray-400">
                    No news available
                  </td>
                </tr>
              ) : (
                news.map((item) => (
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

                    <td className="px-6 py-4 text-gray-600 max-w-md">
                      <p className="line-clamp-2">{item.Content}</p>
                    </td>

                    <td className="px-6 py-4 text-gray-500">
                      {new Date(item.CreatedAt).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <Link
                          to={`/admin/news/${item.ID}`}
                          title="View"
                          className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                        >
                          <Eye size={16} />
                        </Link>

                        <button
                          title="Edit"
                          className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition"
                        >
                          <Pencil size={16} />
                        </button>

                        <button
                          title="Delete"
                          disabled={deletingId === item.ID}
                          onClick={() => handleDelete(item.ID)}
                          className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition disabled:opacity-50"
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
                onClick={() => fetchNews(meta.page - 1)}
                className="px-4 py-2 rounded-lg border text-sm disabled:opacity-40 hover:bg-gray-100 transition"
              >
                Previous
              </button>

              <button
                disabled={meta.page === totalPages}
                onClick={() => fetchNews(meta.page + 1)}
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

export default Dashboard;
