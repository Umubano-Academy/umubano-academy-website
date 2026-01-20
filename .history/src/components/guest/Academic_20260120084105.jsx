import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

// Example photos
import NurseryPhoto from "../../assets/";
// import PrimaryPhoto from "../../assets/education/primary.jpg";
// import SecondaryPhoto from "../../assets/education/secondary.jpg";
// import PhaseLeader1 from "../../assets/education/leader1.jpg";
// import PhaseLeader2 from "../../assets/education/leader2.jpg";
// import PhaseLeader3 from "../../assets/education/leader3.jpg";

// Admission requirements link
const admissionLink = "/admissions"; // adjust route to your Admissions page

function Academic() {
  const schoolLevels = [
    { section: "Nursery", grade: "Pre-K - K2", age: "3-5", description: "Foundation for early learning", photo: NurseryPhoto, link: "/education/nursery" },
    { section: "Primary", grade: "Grade 1 - Grade 6", age: "6-12", description: "Core academic development", photo: PrimaryPhoto, link: "/education/primary" },
    { section: "Lower Secondary", grade: "Grade 7 - Grade 9", age: "13-15", description: "Preparation for higher education", photo: SecondaryPhoto, link: "/education/lower-secondary" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0AB0EE] mb-4">Education at Umubano Academy</h2>
          <p className="text-gray-600 text-lg">
            Umubano Academy offers a holistic education focused on academic excellence, moral values, creativity, and personalized learning.
          </p>
        </motion.div>

        {/* Drop-down links for levels */}
        <div className="flex justify-center gap-6 mb-12">
          {schoolLevels.map((level, idx) => (
            <Link
              key={idx}
              to={level.link}
              className="bg-[#7ED956] text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              {level.section}
            </Link>
          ))}
        </div>

        {/* Sections on main Education page */}
        <motion.div className="space-y-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Curriculum offered at Umubano Academy</h3>
            <p className="text-gray-700">Our curriculum integrates academic excellence with co-curricular activities to nurture well-rounded learners.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Assessment Approaches</h3>
            <p className="text-gray-700">We employ continuous assessment, examinations, and portfolio reviews to track student progress.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Co-curricular activities</h3>
            <p className="text-gray-700">Sports, arts, music, and clubs are integrated to develop creativity, leadership, and teamwork.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Approaches to Teaching and Learning</h3>
            <p className="text-gray-700">Our teaching uses a learner-centered approach, personalized learning plans, and innovative methods to enhance engagement and understanding.</p>
          </div>
        </motion.div>

        {/* School Levels Table */}
        <motion.div className="overflow-x-auto mb-12">
          <h3 className="text-3xl font-bold text-[#7ED956] mb-6 text-center">School Levels</h3>
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
                <tr key={i} className="border-b hover:bg-gray-100 transition">
                  <td className="p-4 font-semibold">
                    <Link to={level.link} className="text-blue-700 underline">{level.section}</Link>
                  </td>
                  <td className="p-4">{level.grade}</td>
                  <td className="p-4">{level.age}</td>
                  <td className="p-4">{level.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* School Photos */}
        <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {schoolLevels.map((level, i) => (
            <Link key={i} to={level.link}>
              <img src={level.photo} alt={level.section} className="rounded-2xl shadow-lg w-full h-48 object-cover hover:scale-105 transition" />
            </Link>
          ))}
        </motion.div>

        {/* Partners Logos */}
        <motion.div className="flex flex-wrap justify-center items-center gap-8">
          <img src="/assets/partners/logo1.png" alt="Partner 1" className="h-16 object-contain" />
          <img src="/assets/partners/logo2.png" alt="Partner 2" className="h-16 object-contain" />
          <img src="/assets/partners/logo3.png" alt="Partner 3" className="h-16 object-contain" />
          <img src="/assets/partners/logo4.png" alt="Partner 4" className="h-16 object-contain" />
          {/* Add more logos as needed */}
        </motion.div>
      </div>
    </section>
  );
}

export default Academic;
