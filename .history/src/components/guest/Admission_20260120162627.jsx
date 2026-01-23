
import { motion } from "framer-motion"
import { FileText, ClipboardCheck, UserCheck, School } from "lucide-react"
import { Link } from "react-router-dom"
import finance from "../../assets/Office-Finance-Officer (Acting).jpeg"
import { useState } from "react"


function Admission() {

  
  const steps = [
    {
      title: "Application Submission",
      description:
        "Parents or guardians complete and submit the admission application form.",
      icon: <FileText />,
    },
    {
      title: "Document Verification",
      description:
        "Required academic and personal documents are reviewed by the admissions office.",
      icon: <ClipboardCheck />,
    },
    {
      title: "Assessment & Interview",
      description:
        "Applicants may be invited for an assessment or interview where applicable.",
      icon: <UserCheck />,
    },
    {
      title: "Enrollment Confirmation",
      description:
        "Successful applicants receive an admission offer and complete enrollment.",
      icon: <School />,
    },
  ]

  const requirements = [
    "Completed admission application form",
    "Copy of birth certificate",
    "Previous school report or academic records",
    "Two recent passport-size photographs",
    "Transfer letter (if applicable)",
    "Parent or guardian identification copy",
  ]

  const dates = [
    { title: "Applications Open", date: "01 June 2026" },
    { title: "Application Deadline", date: "30 July 2026" },
    { title: "Next Term Begins", date: "10 September 2026" },
  ]

  const programmes = [
    { name: "General Scholarship programme", type: "Scholarship" },
    { name: "Girl Circle Scholarship programme", type: "Scholarship" },
    { name: "Inclusion and Special Education Needs (SEN)", type: "Special Needs" },
    { name: "Whole School feeding programme", type: "Programmes" },
    { name: "After school care", type: "Extra-Curricular" },
    { name: "Summer camp", type: "Extra-Curricular" },
    { name: "Learning tours", type: "Extra-Curricular" },
    { name: "School Infrastructural project", type: "Infrastructure" },
    { name: "Library project", type: "Infrastructure" },
    { name: "Creative Arts project", type: "Extra-Curricular" },
    { name: "Southhampstead High School: Think Global Act Local project", type: "Programmes" },
    { name: "Grille Foundation - ICT in classrooms", type: "Infrastructure" },
    { name: "Lef Pillon Foundation : SEN & UA Leadership Funding", type: "Special Needs" },
    { name: "Science Room", type: "Infrastructure" },
    { name: "Girls Room", type: "Infrastructure" },
    { name: "Water purifying and dining project", type: "Infrastructure" },
    { name: "Teacher Training (CPD)", type: "CPD" },
    { name: "UA Leadership Training", type: "CPD" },
  ]

  const apieProjects = [
    { name: "Enhancing Quality Instructions in Pre-primary (EQUIP) (Emilie)", type: "Programmes" },
    { name: "Education for Positive Peace (E4PP) (Emilie)", type: "Programmes" },
    { name: "Maximising Potential (MaxPo) pilot (Emilie)", type: "Programmes" },
    { name: "Personal Social Health and Education (PSHE) Syllabus (Emilie)", type: "Programmes" },
  ]

  const typeColors = {
    Scholarship: "bg-yellow-200 text-yellow-800",
    "Special Needs": "bg-red-200 text-red-800",
    Programmes: "bg-blue-200 text-blue-800",
    Infrastructure: "bg-green-200 text-green-800",
    "Extra-Curricular": "bg-purple-200 text-purple-800",
    CPD: "bg-pink-200 text-pink-800",
  }


  const programmes = [
  {
    name: "General Scholarship programme",
    type: "Scholarship",
    description: "Provides financial support to talented students from vulnerable families."
  },
  {
    name: "Girl Circle Scholarship programme",
    type: "Scholarship",
    description: "Supports girls’ education through mentorship, fees support, and leadership training."
  },
  {
    name: "Inclusion and Special Education Needs (SEN)",
    type: "Special Needs",
    description: "Ensures learners with special needs get tailored academic and emotional support."
  },
  {
    name: "Whole School feeding programme",
    type: "Programmes",
    description: "Provides daily meals to improve attendance, health, and learning outcomes."
  },
  // continue for others...
]


  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-[#7ED956] mb-8 text-center">
            Admission
          </h2>
          <p className="text-gray-600 text-lg">
            Umubano Academy welcomes students who are eager to learn, grow,
            and excel in a supportive and disciplined academic environment.
          </p>
        </motion.div>


        {/* Admission Requirements + Download */}

        <h3 className="text-3xl font-bold text-[#0AB0EE] mb-8 text-center">
              Admission Requirements
            </h3>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#7ED956] rounded-3xl p-10 md:p-14 text-white grid grid-cols-1 md:grid-cols-2 gap-10 mb-24"
        >
          <div>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-400 text-xl font-bold">✓</span>
                  <span className="text-xl">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-4">
              Download Admission Requirements
            </h4>
            <p className="text-gray-200 text-lg mb-6">
              Click the icon below to download the admission requirements document.
            </p>
            <a
              href="/docs/admission-requirements.pdf"
              download
              className="flex items-center gap-3 bg-[#FFDE59] text-blue-900 px-6 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition w-fit"
            >
              <FileText />
              Download Admission Requirements / Babyeyi
            </a>
          </div>
        </motion.div>

        {/* Admission Process */}

        <h3 className="text-3xl font-bold text-[#0AB0EE] mb-8 text-center">
              Admission Process
            </h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7ED956] text-white flex items-center justify-center rounded-2xl">
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-3">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        

        {/* Important Dates */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-[#0AB0EE] mb-8 text-center">
            Important Dates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dates.map((d, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
                <h4 className="font-semibold text-blue-900 text-lg mb-2">
                  {d.title}
                </h4>
                <p className="text-gray-600">{d.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Admissions Contact Person */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg p-12 mb-24"
        >
          <h3 className="text-3xl font-bold text-[#0AB0EE] mb-8 text-center">
              Contact Person
            </h3>
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            <img
              src={finance}
              alt="Admissions Officer"
              className="w-40 h-40 object-cover rounded-full shadow-md"
            />
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-blue-900">
                Emilie Munyakazi
              </h4>
              <p className="text-gray-600 mb-2">Admissions Officer</p>
              <p className="text-gray-600">Phone: +250 782 029 655</p>
              <p className="text-gray-600">Email: emilie@apertnerineducation.org</p>
            </div>
          </div>
        </motion.div>

        {/* Programmes & Projects Table with Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 overflow-x-auto"
        >
          <h3 className="text-3xl font-bold text-[#7ED956] mb-8 text-center">
            Programmes and Projects at Umubano Academy
          </h3>
          <table className="min-w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-[#0AB0EE] text-white">
              <tr>
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">Programme / Project</th>
                <th className="p-4 text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              {programmes.map((item, i) => (
                <motion.tr
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: "#f0fdf4" }}
                  className={`border-b transition-colors duration-300 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <td className="p-4 font-semibold">{i + 1}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${typeColors[item.type]}`}>
                      {item.type}
                    </span>
                  </td>
                </motion.tr>
              ))}
              <tr className="bg-gray-100">
                <td colSpan={3} className="p-4 font-bold text-blue-900 text-center">
                  APIE Projects Piloted at Umubano Academy
                </td>
              </tr>
              {apieProjects.map((item, i) => (
                <motion.tr
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: "#eef6ff" }}
                  className={`border-b transition-colors duration-300 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="p-4 font-semibold">-</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${typeColors[item.type]}`}>
                      {item.type}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  )
}

export default Admission
