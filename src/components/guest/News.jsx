import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import api from "../../services/api"; // adjust path if needed

function News() {
  const [allItems, setAllItems] = useState([]); // combined news + announcements
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(false);

  // Fetch news and announcements
  const fetchAll = async () => {
    try {
      setLoading(true);

      const [newsRes, announcementRes] = await Promise.all([
        api.get("/api/news/"),
        api.get("/api/announcement/")
      ]);

      // Safely handle null or missing items
      const news = Array.isArray(newsRes?.data?.items) ? newsRes.data.items : [];
      const announcements = Array.isArray(announcementRes?.data?.items)
        ? announcementRes.data.items
        : [];

      // Map news
      const newsItems = news.map((item) => ({
        id: item.ID,
        title: item.Title,
        content: item.Content,
        date: item.CreatedAt,
        type: "News"
      }));

      // Map announcements
      const announcementItems = announcements.map((item) => ({
        id: item.ID,
        title: item.Title,
        content: item.Content,
        date: item.CreatedAt,
        type: "Announcement"
      }));

      // Combine and sort by date descending
      const combined = [...newsItems, ...announcementItems].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );

      setAllItems(combined);

    } catch (error) {
      console.error("Failed to fetch news or announcements", error);
      setAllItems([]); // prevent stale state
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount(allItems.length);

    setTimeout(() => {
      document
        .getElementById("news-grid-end")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#7ED956] mb-4">
            News and Announcements
          </h2>
          <p className="text-gray-600 text-lg">
            Stay informed with the latest updates, events, and important announcements from Umubano Academy.
          </p>
        </motion.div>

        {/* News + Announcements Grid */}
        {loading ? (
          <p className="text-center text-gray-500">
            Loading news and announcements...
          </p>
        ) : allItems.length === 0 ? (
          <p className="text-center text-gray-400 text-lg py-16">
            No news or announcements available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allItems.slice(0, visibleCount).map((item) => (
              <motion.article
                key={`${item.type}-${item.id}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
              >
                <span className="inline-block bg-[#FFDE59] text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                  {new Date(item.date).toLocaleDateString()} - {item.type}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-[#7ED956] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Scroll anchor */}
        <div id="news-grid-end" />

        {/* Load More */}
        {visibleCount < allItems.length && allItems.length > 0 && (
          <div className="text-center mt-14">
            <button
              onClick={handleLoadMore}
              className="inline-block bg-[#0AB0EE] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#7ED956] transition shadow-lg"
            >
              View All News and Announcements
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default News;
