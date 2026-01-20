import React from "react";
import { Link } from "react-router-dom";
import { FileText, Download } from "lucide-react";

// Images for school levels
import nurseryImg from "../../assets/gallery/image_6.jpg";
import primaryImg from "../../assets/gallery/image_6.jpg";
import secondaryImg from "../../assets/gallery/image_6.jpg";

// PDFs for Student Add-ons
import primaryPdf from "../../assets/addons/Primary-Enrolment-Handout-2025.pdf";
import secondaryPdf from "../../assets/addons/Secondary-Enrolment-Handout-2025-2026.pdf";

// Partners logo
import partnersLogo from "../../assets/partners/logo.png";

function Academic() {
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
      link: "/education/primary",
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

  // Student Add-ons
  const addons = [
    { title: "Primary & Nursery", file: primaryPdf },
    { title: "Secondary", file: secondaryPdf },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

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
                    <Link to={level.link} className="text-blue-900 hover:underline">{level.name}</Link>
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
            <Link key={level.name} to={level.link} className="group relative block">
              <img src={level.img} alt={level.name} className="w-full h-56 object-cover rounded-2xl transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/25 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-xl font-semibold">{level.name}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Student Add-ons */}
        <div className="bg-[#0AB0EE] rounded-3xl p-10 text-white mb-16">
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
        </div>

        {/* Partners Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <img src={partnersLogo} alt="Partner Logo" className="h-16" />
          <img src={partnersLogo} alt="Partner Logo" className="h-16" />
          <img src={partnersLogo} alt="Partner Logo" className="h-16" />
          <img src={partnersLogo} alt="Partner Logo" className="h-16" />
        </div>

      </div>
    </section>
  );
}

export default Academic;
