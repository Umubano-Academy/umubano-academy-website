import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";

// Leadership photos (you can replace with real ones later)
import headImg from "../../assets/head.jpg";
import chair from "../../assets/Chair-of-the-UOB.jpg";
import deputy from "../../assets/Deputy Head-Teacher.jpg";
import finance from "../../assets/Office-Finance-Officer (Acting).jpeg";

// value, mission, vission

import vision from "../../assets/vision.png";
import mission from "../../assets/mission.png";
import value from "../../assets/values.png";

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

function About() {
  const partners = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13];

  const leadership = [
    {
      title: "Chair person ",
      name: "Prof. Ndabaga Eugene",
      phone: "+250 780 893 652",
      email: "ndabagav@yahoo.ie",
      img: chair,
    },
    {
      title: "Head Teacher",
      name: "Robert Ukwiyimpundu",
      phone: "+250 783 523 189",
      email: "kerotrub@gmail.com",
      img: headImg,
    },
    {
      title: "Deputy Head Teacher",
      name: "Jean Bosco Turatsinze",
      phone: "+250 726 130 707",
      email: "jturansinze@gmail.com",
      img: deputy,
    },
    {
      title: "Office & Finance Manager (Acting)",
      name: "Emilie Munyakazi",
      phone: "+250 782 029 655",
      email: "emilie@apertnerineducation.org",
      img: finance,
    },
  ];

  const boardCommittees = [
    {
      committee: "Teaching and Learning Committee",
      members: [
        "Dr John Rutaisire - Education Expert (Chair)",
        "Mrs Faith Musyoka Gahamanyi - Nutritionist & Education Expert",
        "Mrs Segolene Numukobwa - IT Expert",
      ],
    },
    {
      committee: "Audit Committee",
      members: [
        "Prof. Eugene Ndabaga (Chair of UOB & Committee Chair)",
        "Mrs Flora Umulisa",
        "Mr Solomon Bugabo - IT Expert",
      ],
    },
    {
      committee: "Finance and Human Resources Committee",
      members: [
        "Mr Jolly Senyange - Accounting & Finance Expert (Treasurer & Chair)",
        "Mrs Jane Kalisa - Human Resource Expert",
        "Mr Nathan Kanyesigye - Education & Finance Expert (Vice-Chair of UOB)",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-[#FFDE59] mb-4">Our Story</h2>
          <p className="text-gray-600 text-lg">
            Umubano Academy (UA) is a private school located in Kigali City,
            Kicukiro District, Kanombe Sector, Kabeza Cell, in Nyarurembo
            Village. It opened its doors in 2013 with nursery and primary, and
            in 2018 added lower secondary. UA follows the Rwandan
            Competence-Based Curriculum while applying international best
            practices.
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
          {/* Vision */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-3xl shadow-lg p-10 text-center"
          >
            <img
              src={vision}
              alt="Vision"
              className="w-16 h-16 object-contain mb-4 mx-auto"
            />
            <h4 className="text-2xl font-bold text-[#7ED956] mb-3">
              Our Vision
            </h4>
            <p className="text-gray-600">
              To empower all students to become peace-loving, creative and
              resilient leaders who strive for excellence.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white rounded-3xl shadow-lg p-10 text-center"
          >
            <img
              src={mission}
              alt="Mission"
              className="w-16 h-16 object-contain mb-4 mx-auto"
            />
            <h4 className="text-2xl font-bold text-[#7ED956] mb-3">
              Our Mission
            </h4>
            <ul className="text-gray-600 text-left list-disc pl-6 space-y-2">
              <li>
                Nurture a welcoming, safe and loving learner-centred environment
              </li>
              <li>Promote high expectations of learners’ academic progress</li>
              <li>
                Support learners through positive behaviour management and SEL
                skills
              </li>
              <li>Foster inclusive practices for all learners</li>
              <li>
                Provide vibrant co-curricular activities promoting creativity
                and teamwork
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg p-12 mb-24"
          id="values"
        >
          <div className="flex flex-col items-center mb-4">
            <img
              src={value}
              alt="Values"
              className="w-16 h-16 object-contain mb-3"
            />
            <h3 className="text-3xl font-bold text-[#7ED956] text-center">
              Our Values
            </h3>
          </div>

          <p className="text-gray-700 mb-6 text-center">
            Peace is at the heart of Umubano Academy. We promote equality,
            togetherness and respect.
          </p>

          <ul className="text-gray-600 space-y-3 list-disc pl-6 max-w-3xl mx-auto">
            <li>
              <b>Problem Solving:</b> Growth mindset, creativity and resilience
            </li>
            <li>
              <b>Excellence:</b> Maximising every student’s potential
            </li>
            <li>
              <b>Achievement:</b> Rewarding progress and success
            </li>
            <li>
              <b>Collaboration:</b> Teamwork and active learning
            </li>
            <li>
              <b>Empathy:</b> Respect, compassion and restorative conflict
              solving
            </li>
          </ul>
        </motion.div>

        {/* School Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-4xl font-bold text-[#FFDE59] mb-8 text-center">
            UA Leadership Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {leadership.map((leader, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-[#7ED956]">
                    {leader.title}
                  </h4>
                  <p className="font-semibold">{leader.name}</p>
                  <p className="text-gray-500">Phone: {leader.phone}</p>
                  <p className="text-gray-500">Email: {leader.email}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Board Members & Committees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-[#7ED956] mb-6 text-center">
            Board Members and Committees
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg">
              <thead className="bg-[#0AB0EE] text-white">
                <tr>
                  <th className="p-4 text-left">Board Committee</th>
                  <th className="p-4 text-left">Board Members</th>
                </tr>
              </thead>
              <tbody>
                {boardCommittees.map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-4 font-semibold">{row.committee}</td>
                    <td className="p-4">
                      <ul className="list-disc pl-6">
                        {row.members.map((m, idx) => (
                          <li key={idx}>{m}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Our Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-4xl font-bold text-[#FFDE59] mb-8 text-center">
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

        {/* School Governance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg p-12"
        >
          <h3 className="text-3xl font-bold text-[#7ED956] mb-4 text-center">
            School Governance
          </h3>
          <p className="text-gray-600 mb-4">
            Umubano Organisation is a National NGO governed by Law n°058/2024 of
            20/06/2024. Its mission is to provide top quality and holistic
            nursery, primary and secondary education.
          </p>
          <ul className="list-decimal pl-6 text-gray-600 space-y-2 mb-6">
            <li>
              Promote education through nursery, primary and secondary schools
            </li>
            <li>Support orphans and vulnerable children</li>
            <li>Promote teacher training and education development</li>
          </ul>
          <p className="text-gray-600 mb-4">
            Umubano Organisation owns Umubano Academy and governs it through its
            Board of nine members.
          </p>
          <div className="bg-gray-100 p-6 rounded-xl">
            <p className="font-semibold">Chairperson of Umubano Organisation</p>
            <p>Prof. Ndabaga Eugene</p>
            <p>Phone: +250 780 893 652</p>
            <p>Email: ndabagav@yahoo.ie</p>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-4xl font-bold text-[#FFDE59] mb-10 text-center">
            Testimonials
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Parent of Nursery",
                text: "Umubano Academy gave my child confidence and love for learning.",
              },
              {
                name: "Parent of Primary",
                text: "Teachers are caring, professional and focused on each child.",
              },
              {
                name: "Parent of Lower Secondary",
                text: "My child improved both academically and socially.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="italic text-gray-600 mb-4">“{t.text}”</p>
                <h4 className="font-bold text-[#7ED956]">{t.name}</h4>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Alumni */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 bg-white rounded-3xl shadow-lg p-12"
        >
          <h3 className="text-3xl font-bold text-[#7ED956] mb-8 text-center">
            Our Alumni
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Alumni 2018",
                text: "Umubano Academy shaped my discipline and leadership skills.",
              },
              {
                name: "Alumni 2020",
                text: "I am proud to say I started my journey at Umubano Academy.",
              },
            ].map((a, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-2xl">
                <p className="italic text-gray-700 mb-3">“{a.text}”</p>
                <h4 className="font-semibold text-blue-900">{a.name}</h4>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Our Policies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-[#0AB0EE] mb-6 text-center">
            Our Policies
          </h3>

          <div className="bg-white rounded-3xl shadow-lg p-10">
            <ul className="list-disc pl-6 text-gray-700 space-y-3 max-w-4xl mx-auto">
              <li>Child protection and safeguarding policy</li>
              <li>Anti-bullying policy</li>
              <li>Health and safety policy</li>
              <li>Academic integrity and discipline policy</li>
              <li>Parent and community engagement policy</li>
              <li>Equal opportunity and inclusion policy</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
