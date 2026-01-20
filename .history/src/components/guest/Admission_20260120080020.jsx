import React from "react"
import { motion } from "framer-motion"
import {
  FileText,
  ClipboardCheck,
  UserCheck,
  School,
} from "lucide-react"
import { Link } from "react-router-dom"
import finance from "../../assets/Office-Finance-Officer (Acting).jpeg";

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
    { title: "Term Begins", date: "10 September 2026" },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#7ED956] mb-4">
            Admission to Umubano Academy
          </h2>
          <p className="text-gray-600 text-lg">
            Umubano Academy welcomes students who are eager to learn, grow,
            and excel in a supportive and disciplined academic environment.
          </p>
        </motion.div>

        {/* Admission Process */}
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
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Admission Requirements + Download */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#7ED956] rounded-3xl p-10 md:p-14 text-white grid grid-cols-1 md:grid-cols-2 gap-10 mb-24"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Admission Requirements
            </h3>
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
          <h3 className="text-3xl font-bold text-[#7ED956] mb-8 text-center">
            Admissions Contact Person
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            <img
              src={}}
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

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-[#7ED956] text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-800 transition shadow-lg"
          >
            Contact Admissions
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Admission
