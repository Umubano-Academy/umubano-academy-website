import React from "react"
import { motion } from "framer-motion"
import { Calendar, FileText, Download } from "lucide-react"

function Academic() {
  const events = [
    { month: "January", event: "New Term Begins" },
    { month: "March", event: "Mid-Term Exams" },
    { month: "June", event: "End of Term / Report Cards" },
    { month: "July", event: "Summer Vacation" },
    { month: "September", event: "New Term Begins" },
    { month: "December", event: "Final Exams & Closing Ceremony" },
  ]

  const addons = [
    { title: "Student Handbook", file: "#" },
    { title: "Exam Schedule", file: "#" },
    { title: "Holiday Calendar", file: "#" },
    { title: "Course Materials", file: "#" },
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
            Academic Calendar & Student Adons
          </h2>
          <p className="text-gray-600 text-lg">
            Stay up-to-date with all school events, exams, and important dates.
            Easily download resources and student add-ons to help your academic journey.
          </p>
        </motion.div>

        {/* Calendar Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {events.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#0AB0EE] text-[#FFDE59] flex items-center justify-center rounded-xl">
                  <Calendar />
                </div>
                <h4 className="text-xl font-semibold text-blue-900">
                  {item.month}
                </h4>
              </div>
              <p className="text-gray-600">{item.event}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Student Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#FFDE59] rounded-3xl p-10 text-white"
        >
          <h3 className="text-3xl font-bold mb-8">Student Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addons.map((item, index) => (
              <a
                key={index}
                href={item.file}
                className="flex items-center justify-between bg-white/10 hover:bg-yellow-400 hover:text-blue-900 transition px-6 py-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText />
                  <span className="font-semibold text-[#0AB0EE]">{item.title}</span>
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
