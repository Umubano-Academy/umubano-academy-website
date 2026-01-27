import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import nurseryHeader from "../../assets/gallery/image6.JPG";
import phaseLeader from "../../assets/gallery/image6.JPG";

function Nusary() {
  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-[420px]">
        <img
          src={nurseryHeader}
          alt="Nursery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Nursery
          </h1>
          <p className="text-lg md:text-xl">Ages 3 – 5</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* Welcome + Phase Leader */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Welcome */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#0AB0EE] mb-4">
              A Warm Welcome to Umubano Academy Nursery
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our Nursery section provides a safe, nurturing, and joyful
              environment where young learners develop early literacy,
              numeracy, creativity, and social confidence through play-based
              learning.
            </p>

            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-[#0AB0EE] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#7ED956] transition shadow"
            >
              <FileText size={18} /> Admission Requirements
            </Link>
          </div>

          {/* Phase Leader */}
          <div className="text-center bg-white rounded-2xl shadow-md p-8">
            <img
              src={phaseLeader}
              alt="Nursery Phase Leader"
              className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
            />
            <p className="font-semibold text-lg">Jane Doe</p>
            <p className="text-gray-500">Nursery Phase Leader</p>
          </div>
        </div>

        {/* Individualised Learning */}
        <div className="bg-white rounded-3xl shadow-md p-10">
          <h3 className="text-3xl font-bold text-[#7ED956] mb-4">
            Individualised Learning
          </h3>
          <p className="text-gray-700 leading-relaxed max-w-3xl">
            Each child is supported at their own pace through personalised
            activities, attentive guidance, and creative play that builds
            confidence, curiosity, and a lifelong love of learning.
          </p>
        </div>


        {/* Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <h4 className="text-4xl font-bold text-[#0AB0EE] mb-2">1 : 2</h4>
            <p className="text-gray-600 text-lg">
              Staff to Student Support Ratio
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 text-center">
            <h4 className="text-4xl font-bold text-[#0AB0EE] mb-2">28 Students</h4>
            <p className="text-gray-600 text-lg">
              Maximum Students per Class
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Nusary;
