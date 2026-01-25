import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import primaryHeader from "../../assets/gallery/image6.JPG";
import phaseLeader from "../../assets/gallery/image6.JPG";

function Primary() {
  return (
    <section className="bg-gray-50">
      {/* Header Image */}
      <div className="relative w-full h-64 md:h-96">
        <img src={primaryHeader} alt="Primary" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold">Primary</h1>
          <p className="text-lg">Ages: 6-12</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-[#0AB0EE] mb-4">
            A warm welcome to Umubano Academy Primary!
          </h2>
          <p className="text-gray-700 mb-4">
            Our Primary section develops academic excellence, creativity, and social skills.
          </p>
          <Link
            to="/admissions"
            className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:underline"
          >
            <FileText /> Admission Requirements
          </Link>
        </div>
        <div className="md:w-1/3 text-center">
          <img src={phaseLeader} alt="Phase Leader" className="w-48 h-48 rounded-full object-cover mx-auto mb-2" />
          <p className="font-semibold">Jane Doe</p>
          <p className="text-gray-500">Primary Phase Leader</p>
        </div>
      </div>

      {/* Individualised Learning */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#7ED956] mb-4">Individualised Learning</h2>
        <p className="text-gray-700">
          We cater to each child’s learning pace, interests, and strengths, using personalized support and creative teaching strategies.
        </p>
      </div>
    </section>
  );
}

export default Primary;
