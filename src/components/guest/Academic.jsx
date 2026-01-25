import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

// PDFs
// import  from "../../assets/addons/.pdf"
import secondaryPdf from "../../assets/addons/Secondary-Enrolment-Handout-2025-2026.pdf";
import primaryPdf from "../../assets/addons/Primary-Enrolment-Handout-2025.pdf";

// Images for school levels
import nurseryImg from "../../assets/gallery/image7.jpg";
import primaryImg from "../../assets/gallery/image5.jpg";
import secondaryImg from "../../assets/gallery/image1.jpg";

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
    {
      activity: "Term I",
      start: "08/09/2025",
      end: "19/12/2025",
      duration: "15 weeks",
    },
    { activity: "Term I Holidays", start: "-", end: "-", duration: "2 weeks" },
    {
      activity: "Term II",
      start: "05/01/2026",
      end: "03/04/2026",
      duration: "13 weeks",
    },
    { activity: "Term II Holidays", start: "-", end: "-", duration: "2 weeks" },
    {
      activity: "Term III",
      start: "20/04/2026",
      end: "03/07/2026",
      duration: "11 weeks",
    },
    {
      activity: "Term III Holidays",
      start: "-",
      end: "-",
      duration: "2 months",
    },
  ];

  // Table data for school levels (keep your original style)
  const schoolLevels = [
    {
      name: "Nursery",
      grade: "KG1 - KG3",
      age: "Ages 3-5",
      description:
        "Foundation stage focusing on play-based learning and social skills.",
      img: nurseryImg,
      link: "/education/nursery",
    },
    {
      name: "Primary",
      grade: "Grade 1 - Grade 6",
      age: "Ages 6-12",
      description:
        "Building literacy, numeracy and social skills in a supportive environment.",
      img: primaryImg,
      link: "/primary",
    },
    {
      name: "Lower Secondary",
      grade: "S1 - S3",
      age: "Ages 13-15",
      description:
        "Preparing students for senior secondary with a broad curriculum and life skills.",
      img: secondaryImg,
      link: "/education/lower-secondary",
    },
  ];

  const addons = [
    { title: "Primary & Nursery", file: primaryPdf },
    { title: "Secondary", file: secondaryPdf },
  ];

  const academicActivities = [
    {
      title: "Curriculum offered at Umubano Academy",
      content: (
        <>
          <p>
            At Umubano Academy we use the Rwandan Competence Based Curriculum
            and embed international inputs such as ICT integration,
            learner-centred approaches and creative arts.
          </p>
          <p className="mt-3">
            The core purpose of UA is to provide an inclusive, rigorous learning
            environment that develops motivated, creative and independent
            learners with strong social values.
          </p>
          <p className="mt-3">
            Teachers receive regular CPD, and parents are actively engaged
            because children thrive best when parents and teachers work
            together.
          </p>
          <p className="mt-3">
            At the core of our ethos is the belief that each child is unique and
            should be viewed from a strengths-based perspective.
          </p>
        </>
      ),
    },
    {
      title: "Co-curricular Activities",
      content: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Free Space:</strong> Mentorship for boys and girls
            separately.
          </li>
          <li>
            <strong>Circle Meetings:</strong> House-based learner meetings led
            by P6 and S3 leaders.
          </li>
          <li>
            <strong>Whole School House System:</strong> Promotes belonging,
            leadership and role models.
          </li>
          <li>Itorero – Rwandan cultural values and patriotism</li>
          <li>Clubs and Sports</li>
          <li>Creative Arts</li>
          <li>Trips and Outings</li>
          <li>Careers Guidance</li>
          <li>Guest Speakers</li>
          <li>Competitions and Special Performances</li>
        </ul>
      ),
    },
    {
      title: "Teaching and Learning Approaches",
      content: (
        <>
          <p>
            Teaching and learning at UA is learner-centred and aligned with the
            Competence-Based Curriculum.
          </p>
          <p className="mt-3">
            Education for Positive Peace strategies help learners grow
            holistically.
          </p>
          <p className="mt-3">
            Inclusive planning, differentiation and data-driven instruction
            ensure no learner is left behind.
          </p>
        </>
      ),
    },
    {
      title: "Assessments",
      content: (
        <>
          <p>
            Assessment is an integral part of instruction and guides decisions
            for learners, teachers and parents.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Assessment for learning</li>
            <li>Assessment of learning (mid-term, end-of-unit, end-of-term)</li>
            <li>
              Term one set by school, term two by district, term three by NESA
              (except candidate classes)
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Personalised Target Setting and Progress Tracking",
      content: (
        <>
          <p>
            Teachers use prior attainment data to set ambitious but realistic
            targets for every learner.
          </p>
          <p className="mt-3">
            Targets are based on 5 core subjects at Primary level and 9 at Lower
            Secondary level.
          </p>
          <p className="mt-3 font-semibold">
            Learners never set failing targets — targets must motivate success.
          </p>
        </>
      ),
    },
  ];

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
            Academic Calendar and Teaching and Learning Resources
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
                  className={
                    row.activity.includes("Holidays")
                      ? "bg-[#FFDE59]"
                      : "border-b"
                  }
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
          <h3 className="text-3xl font-bold mb-8">
            Teaching and Learning Resources and Approaches
          </h3>
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

        {/* Activities Section – Accordion Style */}
        <div className="max-w-4xl mx-auto mb-16 py-14">
          <h2 className="text-3xl font-bold text-center text-[#0AB0EE] mb-10">
            Teaching, Learning and Student Development
          </h2>

          <div className="space-y-4">
            {academicActivities.map((item, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-2xl shadow-md p-6"
              >
                <summary className="cursor-pointer list-none flex justify-between items-center text-lg font-semibold text-[#7ED956]">
                  {item.title}
                  <span className="transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>

                <div className="mt-4 text-gray-700 leading-relaxed">
                  {item.content}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
        {/* End Activities Section */}

        {/* School Levels Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse bg-white rounded-2xl shadow-lg">
            <thead className="bg-[#0AB0EE] text-white">
              <tr>
                <th className="p-4 text-left">Section</th>
                <th className="p-4 text-left">Grade Levels</th>
                <th className="p-4 text-left">Recommended Age</th>
                <th className="p-4 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {schoolLevels.map((level, i) => (
                <tr key={i} className="border-b">
                  <td className="p-4 font-semibold">
                    <Link
                      to={level.link}
                      className="text-blue-900 hover:underline"
                    >
                      {level.name}
                    </Link>
                  </td>
                  <td className="p-4">{level.grade}</td>
                  <td className="p-4">{level.age}</td>
                  <td className="p-4">{level.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* School Levels Images */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
  {schoolLevels.map((level) => (
    <Link
      key={level.name}
      to={level.link}
      className="group block"
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={level.img}
          alt={level.name}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 text-center">
        <h4 className="text-xl font-semibold text-[#0AB0EE]">
          {level.name}
        </h4>
        <p className="text-sm text-gray-600">
          {level.grade} · {level.age}
        </p>
      </div>
    </Link>
  ))}
</div>


        {/* Our Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-4xl font-bold text-[#FFDE59] mb-8 text-center py-14">
            Our Partners
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
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
    </section>
  );
}

export default Academic;