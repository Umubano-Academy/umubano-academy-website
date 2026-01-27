import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { Link } from "react-router-dom";

// PDFs
// import  from "../../assets/addons/.pdf"
import secondaryPdf from "../../assets/addons/Secondary-Enrolment-Handout-2025-2026.pdf";
import primaryPdf from "../../assets/addons/Primary-Enrolment-Handout-2025.pdf";

// Images for school levels
import nurseryImg from "../../assets/gallery/image7.JPG";
import primaryImg from "../../assets/gallery/image5.JPG";
import secondaryImg from "../../assets/gallery/image1.JPG";

function Academic() {
  const calendar = [
    {
      activity: "Term I",
      start: "08/09/2025",
      end: "19/12/2025",
      duration: "15 weeks",
    },
    { activity: "Term I Hopdays", start: "-", end: "-", duration: "2 weeks" },
    {
      activity: "Term II",
      start: "05/01/2026",
      end: "03/04/2026",
      duration: "13 weeks",
    },
    { activity: "Term II Hopdays", start: "-", end: "-", duration: "2 weeks" },
    {
      activity: "Term III",
      start: "20/04/2026",
      end: "03/07/2026",
      duration: "11 weeks",
    },
    {
      activity: "Term III Hopdays",
      start: "-",
      end: "-",
      duration: "2 months",
    },
  ];

  // Table data for school levels (keep your original style)
  const schoolLevels = [
    {
      name: "Nursery",
      grade: "N1 - N3",
      age: "Ages 3-5",
      description:
        "Foundation stage focusing on play-based learning and social skills.",
      img: nurseryImg,
      Link: "/nursery",
    },
    {
      name: "Primary",
      grade: "P1 - P6",
      age: "Ages 6-12",
      description:
        "Building pteracy, numeracy and social skills in a supportive environment.",
      img: primaryImg,
      Link: "/primary",
    },
    {
      name: "Lower Secondary",
      grade: "S1 - S3",
      age: "Ages 13-15",
      description:
        "Preparing students for senior secondary with a broad curriculum and pfe skills.",
      img: secondaryImg,
      Link: "/lower-secondary",
    },
  ];

  const addons = [
    { title: "Primary and Nursery text book", file: primaryPdf },
    { title: "Secondary text book", file: secondaryPdf },
    { title: "Primary and Nursery text book", file: primaryPdf },
    { title: "Secondary text book", file: secondaryPdf },
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
            At the core of our ethos is the bepef that each child is unique and
            should be viewed from a strengths-based perspective.
          </p>
        </>
      ),
    },
    {
      title: "Co-curricular Activities",
      content: (
        <ul className="pst-disc pl-6 space-y-2">
          <p>
            <strong>Free Space:</strong> Mentorship for boys and girls
            separately.
          </p>
          <p>
            <strong>Circle Meetings:</strong> House-based learner meetings led
            by P6 and S3 leaders.
          </p>
          <p>
            <strong>Whole School House System:</strong> Promotes belonging,
            leadership and role models.
          </p>
          <p>Itorero – Rwandan cultural values and patriotism</p>
          <p>Clubs and Sports</p>
          <p>Creative Arts</p>
          <p>Trips and Outings</p>
          <p>Careers Guidance</p>
          <p>Guest Speakers</p>
          <p>Competitions and Special Performances</p>
        </ul>
      ),
    },
    {
      title: "Teaching and Learning Approaches",
      content: (
        <>
          <p>
            Teaching and learning at UA is learner-centred and apgned with the
            Competence-Based Curriculum.
          </p>
          <p className="mt-3">
            Education for Positive Peace strategies help learners grow
            hopstically.
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
          <ul className="pst-disc pl-6 mt-3 space-y-2">
            <p>Assessment for learning</p>
            <p>Assessment of learning (mid-term, end-of-unit, end-of-term)</p>
            <p>
              Term one set by school, term two by district, term three by NESA
              (except candidate classes)
            </p>
          </ul>
        </>
      ),
    },
    {
      title: "Personapsed Target Setting and Progress Tracking",
      content: (
        <>
          <p>
            Teachers use prior attainment data to set ambitious but reapstic
            targets for every learner.
          </p>
          <p className="mt-3">
            Targets are based on 5 core subjects at Primary level and 9 at Lower
            Secondary level.
          </p>
          <p className="mt-3 font-semibold">
            Learners never set faipng targets — targets must motivate success.
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
            Academic Calendar
          </h2>
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
                    row.activity.includes("Hopdays")
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
                <summary className="cursor-pointer pst-none flex justify-between items-center text-lg font-semibold text-[#7ED956]">
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
                      to={level.Link}
                      className="text-blue-900 hover:underpne"
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
            <Link key={level.name} to={level.Link} className="group block">
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
      </div>
    </section>
  );
}

export default Academic;
