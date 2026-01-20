import React from "react"
import { motion } from "framer-motion"
import { FileText, Download } from "lucide-react"

// PDFs
import primaryPdf from "../../assets/addons/Primary-&Nursery-Enrolment-Handout-2025-2026026.pdf"
import secondaryPdf from "../../assets/addons/Secondary-Enrolment-Handout-2025-2026.pdf"

function Academic() {
  const calendar = [
    { activity: "Term I", start: "08/09/2025", end: "19/12/2025", duration: "15 weeks" },
    { activity: "Term I Holidays", start: "-", end: "-", duration: "2 weeks" },
    { activity: "Term II", start: "05/01/2026", end: "03/04/2026", duration: "13 weeks" },
    { activity: "Term II Holidays", start: "-", end: "-", duration: "2 weeks" },
    { activity: "Term III", start: "20/04/2026", end: "03/07/2026", duration: "11 weeks" },
    { activity: "Term III Holidays", start: "-", end: "-", duration: "2 months" },
  ]

  const addons = [
    { title: "Primary & Nursery", file: primaryPdf },
    { title: "Secondary", file: secondaryPdf },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-[#0AB0EE] mb-4">
            Academic Calendar & Student Add-ons
          </h2>
          <p className="text-gray-600 text-lg">
            Stay up-to-date with all school events, exams, and important dates.
            Download important documents for your academic journey.
          </p>
        </motion.div>

        {/* Calendar Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto mb-24"
        >
          <table className="w-full border-collapse bg-white rounded-2xl shadow-lg">
            <thead className="bg-[#0AB0EE] text-white">
              <tr>
                <th className="p-4 text-left">Activity</th>
                <th className="p-4 text-left">Start Date</th>
                <th className="p-4 text-left">End Date</th>
                <th className="p-4 text-left">Duration</th>
              </tr>
            </thead>
            <tbody>
              {calendar.map((row, i) => (
                <tr
                  key={i}
                  className={row.activity.includes("Holidays") ? "bg-[#FFDE59]" : "border-b"}
                >
                  <td className="p-4 font-semibold">{row.activity}</td>
                  <td className="p-4">{row.start}</td>
                  <td className="p-4">{row.end}</td>
                  <td className="p-4">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Student Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0AB0EE] rounded-3xl p-10 text-white"
        >
          <h3 className="text-3xl font-bold mb-8">Student Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addons.map((item, index) => (
              <a
                key={index}
                href={item.file}
                download
                className="flex items-center justify-between bg-white/10 hover:bg-[#FFDE59] hover:text-blue-900 transition px-6 py-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText />
                  <span className="font-semibold">{item.title}</span>
                </div>
                <Download />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Academic
