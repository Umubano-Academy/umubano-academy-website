import React from "react"
import { motion } from "framer-motion"
import {
  FileText,
  ClipboardCheck,
  UserCheck,
  School,
  Download,
  Phone,
  Mail,
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

  const programmes = [
    "General Scholarship programme",
    "Girl Circle Scholarship programme",
    "Inclusion and Special Education Needs (SEN)",
    "Whole School feeding programme",
    "After school care",
    "Summer camp",
    "Learning tours",
    "School Infrastructural project",
    "Library project",
    "Creative Arts project",
    "Southhampstead High School: Think Global Act Local project",
    "Grille Foundation - ICT in classrooms",
    "Lef Pillon Foundation : SEN & UA Leadership Funding",
    "Science Room",
    "Girls Room",
    "Water purifying and dining project",
    "Teacher Training (CPD)",
    "UA Leadership Training",
  ]

  const apieProjects = [
    "Enhancing Quality Instructions in Pre-primary (EQUIP) (Emilie)",
    "Education for Positive Peace (E4PP) (Emilie)",
    "Maximising Potential (MaxPo) pilot (Emilie)",
    "Personal Social Health and Education (PSHE) Syllabus (Emilie)",
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-[#7ED956] mb-4">
            Admission to Umubano Academy
          </h2>
          <p className="text-gray-600 text-lg">
            Umubano Academy welcomes students who are eager to learn, grow,
            and excel in a supportive and disciplined academic environment.
          </p>
        </div>

        {/* Download Requirements */}
        <div className="flex justify-center mb-16">
          <a
            href="/documents/admission-requirements.pdf"
            download
            className="flex items-center gap-3 bg-[#FFDE59] px-6 py-4 rounded-xl font-semibold text-blue-900 hover:bg-yellow-300 transition"
          >
            <Download /> Download Admission Requirements / Babyeyi
          </a>
        </div>

        {/* Admission Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-[#7ED956] text-white flex items-center justify-center rounded-2xl">
                {step.icon}
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-3">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Important Dates */}
        <div className="bg-gray-100 rounded-3xl p-10 mb-24">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">
            Important Admission Dates
          </h3>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>• Applications Open: January</li>
            <li>• Application Deadline: March</li>
            <li>• Interviews & Assessments: April</li>
            <li>• Admission Results: May</li>
            <li>• School Opening: September</li>
          </ul>
        </div>

        {/* Contact Person */}
        <div className="bg-[#7ED956] rounded-3xl p-10 text-white mb-24 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Admissions Contact Person
            </h3>
            <p className="text-xl mb-3 font-semibold">Mrs. Jane Uwimana</p>
            <p className="flex items-center gap-3 mb-2">
              <Phone /> +250 7xx xxx xxx
            </p>
            <p className="flex items-center gap-3">
              <Mail /> admissions@umubanoacademy.rw
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/admissions-officer.jpg"
              alt="Admissions Officer"
              className="w-48 h-48 object-cover rounded-full border-4 border-white"
            />
          </div>
        </div>

        {/* Programmes and Projects */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-[#7ED956] mb-6">
            Programmes and Projects at Umubano Academy
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-700 mb-12">
            {programmes.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          <h4 className="text-2xl font-bold text-blue-900 mb-4">
            APIE Projects Piloted at Umubano Academy
          </h4>
          <ul className="space-y-2 text-lg text-gray-700">
            {apieProjects.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Admission
