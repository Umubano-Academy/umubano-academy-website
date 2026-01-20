import React from "react"
import { motion } from "framer-motion"
import { FileText, Download } from "lucide-react"

// PDFs
// import  from "../../assets/addons/.pdf"
import secondaryPdf from "../../assets/addons/Secondary-Enrolment-Handout-2025-2026.pdf"
import primaryPdf from "../../assets/addons/Primary-Enrolment-Handout-2025.pdf"


// Images for school levels
import nurseryImg from "../../assets/gallery/image_6.jpg";
import primaryImg from "../../assets/gallery/image_6.jpg";
import secondaryImg from "../../assets/gallery/image_6.jpg";

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
import p12 from "../../assets/partners/UA-LOGO.png";
import p13 from "../../assets/partners/Victoria-League.jpg";

function Academic() {
    const partners = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13];
  const calendar = [
    { activity: "Term I", start: "08/09/2025", end: "19/12/2025", duration: "15 weeks" },
    { activity: "Term I Holidays", start: "-", end: "-", duration: "2 weeks" },
    { activity: "Term II", start: "05/01/2026", end: "03/04/2026", duration: "13 weeks" },
    { activity: "Term II Holidays", start: "-", end: "-", duration: "2 weeks" },
    { activity: "Term III", start: "20/04/2026", end: "03/07/2026", duration: "11 weeks" },
    { activity: "Term III Holidays", start: "-", end: "-", duration: "2 months" },
  ]


   // Table data for school levels (keep your original style)
    const schoolLevels = [
      {
        name: "Nursery",
        grade: "KG1 - KG3",
        age: "Ages 3-5",
        description: "Foundation stage focusing on play-based learning and social skills.",
        img: nurseryImg,
        link: "/education/nursery",
      },
      {
        name: "Primary",
        grade: "Grade 1 - Grade 6",
        age: "Ages 6-12",
        description: "Building literacy, numeracy and social skills in a supportive environment.",
        img: primaryImg,
        link: "/primary",
      },
      {
        name: "Lower Secondary",
        grade: "S1 - S3",
        age: "Ages 13-15",
        description: "Preparing students for senior secondary with a broad curriculum and life skills.",
        img: secondaryImg,
        link: "/education/lower-secondary",
      },
    ];

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
            Academic Calendar  Student Add-ons
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

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-[#0AB0EE] mb-4">Education at Umubano Academy</h1>
          <p className="text-gray-700 text-lg">
            At Umubano Academy, we provide a holistic, student-centered learning experience that develops academic excellence, character, and creativity at every stage.
          </p>
        </div>

        {/* New Sections */}
        <div className="space-y-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-[#7ED956] mb-2">Curriculum offered at Umubano Academy</h2>
            <p className="text-gray-700">
              Our curriculum integrates academic rigor, co-curricular activities, and personalized learning strategies to ensure all students reach their potential.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#7ED956] mb-2">Assessment Approaches</h2>
            <p className="text-gray-700">
              We use continuous assessment, projects, and personalized feedback to track progress and support every child’s development.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#7ED956] mb-2">Co-curricular activities</h2>
            <p className="text-gray-700">
              Students enjoy sports, music, arts, and community service to develop creativity, teamwork, and leadership skills.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#7ED956] mb-2">Approaches to Teaching and Learning</h2>
            <p className="text-gray-700">
              Our teaching is child-centered, inclusive, and uses modern technology and methods to encourage critical thinking and problem-solving.
            </p>
          </div>
        </div>



        

      </div>
    </section>
  )
}

export default Academic
