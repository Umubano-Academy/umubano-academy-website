import React, { useState } from "react";
import { motion } from "framer-motion";

// Partners logos
import p1 from "../../assets/partners/AEGIS-TRUST.jpg";
import p2 from "../../assets/partners/APIE.jpg";
import p3 from "../../assets/partners/Kicukiro-District.jpg";
import p4 from "../../assets/partners/Lef-Pillon-Trust.jpg";
import p5 from "../../assets/partners/MINEDUC.jpg";
import p6 from "../../assets/partners/NCPD.jpg";
import p7 from "../../assets/partners/NESA.png";
import p8 from "../../assets/partners/REB.png";
import p9 from "../../assets/partners/SHHS.png";
import p10 from "../../assets/partners/Souter-Foundation.jpg";
import p11 from "../../assets/partners/The-Big-Give.png";
import p12 from "../../assets/partners/Victoria-League.jpg";

function News() {
  const partners = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12];

  const allNews = [
    {
      title: "Opening of New Academic Term",
      date: "September 10, 2026",
      description:
        "Umubano Academy welcomes students and parents to the new academic term with renewed commitment to excellence.",
    },
    {
      title: "Admissions Now Open",
      date: "August 25, 2026",
      description:
        "Applications are now open for Nursery, Primary, and Secondary levels for the upcoming academic year.",
    },
    {
      title: "Outstanding National Examination Results",
      date: "July 30, 2026",
      description:
        "Our students achieved excellent results in the national examinations, reflecting our quality education.",
    },
    {
      title: "Science Fair 2026",
      date: "July 10, 2026",
      description:
        "Students showcase innovative science projects and experiments to encourage creativity and critical thinking.",
    },
    {
      title: "Sports Day Event",
      date: "June 20, 2026",
      description:
        "A day dedicated to sportsmanship, teamwork, and celebrating our students’ athletic achievements.",
    },
    {
      title: "Cultural Festival",
      date: "June 5, 2026",
      description:
        "Highlighting the rich culture and talents of our students through performances and exhibitions.",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount(allNews.length);

    // Smooth scroll so user sees newly loaded news
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
            Stay informed with the latest updates, events, and important
            announcements from Umubano Academy.
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.slice(0, visibleCount).map((news) => (
            <motion.article
              key={news.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
            >
              <span className="inline-block bg-[#FFDE59] text-blue-900 px-4 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                {news.date}
              </span>

              <div>
                <h3 className="text-xl font-semibold text-[#7ED956] mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600">{news.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Scroll anchor */}
        <div id="news-grid-end" />

        {/* Load More */}
        {visibleCount < allNews.length && (
          <div className="text-center mt-14">
            <button
              onClick={handleLoadMore}
              className="inline-block bg-[#0AB0EE] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#7ED956] transition shadow-lg"
            >
              View All News and Announcements
            </button>
          </div>
        )}

        {/* Partners */}
        <div className="py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-4xl font-bold text-[#FFDE59] mb-12 text-center">
              Our Partners and Government Institutions
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
              {partners.map((logo, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center hover:shadow-xl transition"
                >
                  <img
                    src={logo}
                    alt={`Partner ${i + 1}`}
                    className="max-h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default News;
