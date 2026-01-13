import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";
import staff1 from "../../assets/head.jpg";
import staff2 from "../../assets/head.jpg";

function About() {
  const staff = [
    { name: "Alice Uwimana", role: "Principal", img: staff1 },
    { name: "John Mukasa", role: "Head Teacher", img: staff2 },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story / History */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-[#FFDE59] mb-4">Our Story</h2>
          <p className="text-gray-600 text-lg">
            Umubano Academy was founded with the goal of providing quality
            education rooted in strong moral values. Over the years, we have
            nurtured students to excel academically, socially, and morally,
            shaping future leaders of our community and beyond.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <div className="w-16 h-16 bg-[#FFDE59] text-green-700 flex items-center justify-center rounded-xl mb-4">
              <BookOpen />
            </div>
            <h4 className="text-2xl font-bold text-[#7ED956] mb-3">
              Our Vision
            </h4>
            <p className="text-gray-600">
              To be recognized as a leading educational institution fostering
              excellence, innovation, and holistic development in every student.
            </p>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <div className="w-16 h-16 bg-[#FFDE59] text-green-700 flex items-center justify-center rounded-xl mb-4">
              <Users />
            </div>
            <h4 className="text-2xl font-bold text-[#7ED956] mb-3">
              Our Mission
            </h4>
            <p className="text-gray-600">
              We will achieve our Vision by….
… equipping girls and boys with the critical thinking, cooperative learning, life skills, and
academic competencies to solve problems.
            </p>
          </motion.div>
        </motion.div>

        {/* Staff Listing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-28"
        >
          <h3 className="text-4xl font-bold text-[#FFDE59] mb-4 text-center">
            Meet Our Staff
          </h3>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Our dedicated team of professionals is committed to nurturing
            excellence, discipline, and lifelong learning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition" />
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h4 className="text-2xl font-semibold text-[#7ED956]">
                    {member.name}
                  </h4>
                  <p className="text-gray-500 mt-1">{member.role}</p>

                  <div className="mt-4 w-12 h-1 bg-[#7ED956] mx-auto rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values / Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#D9D9D9] text-[#7ED956] rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            Why Choose Umubano Academy?
          </h3>
          <p className="text-gray-900 max-w-3xl mx-auto text-lg">
            We focus on academic excellence, strong moral values, personalized
            support, and innovative learning methods to help each student
            achieve their full potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
