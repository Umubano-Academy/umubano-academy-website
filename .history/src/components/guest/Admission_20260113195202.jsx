import React from "react"
import { motion } from "framer-motion"
import {
  FileText,
  ClipboardCheck,
  UserCheck,
  School,
} from "lucide-react"
import { Link } from "react-router-dom"

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
            Admissions & Enrollment
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

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#7ED956] rounded-3xl p-10 md:p-14 text-white grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Admission Requirements
            </h3>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-4">
              Begin Your Child’s Journey
            </h4>
            <p className="text-gray-200 mb-8">
              Contact our admissions office today to learn more about
              enrollment and application procedures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="#contact"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition text-center"
              >
                Contact Admissions
              </Link>
              
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Admission
