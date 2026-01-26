import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../../../services/api";
import { ArrowLeft, Calendar } from "lucide-react";

function ViewDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNewsDetails = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/api/news/${id}`);
      setNews(res.data.news);
    } catch (err) {
      console.error(err);
      setError("Failed to load news details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading news details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        News not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {news.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Calendar size={16} />
            <span>
              Published on{" "}
              {new Date(news.created_at).toLocaleDateString()}
            </span>
          </div>

          {/* Divider */}
          <div className="border-b border-gray-100 mb-6"></div>

          {/* Content */}
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {news.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;

