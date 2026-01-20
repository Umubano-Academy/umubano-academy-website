import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";

// Leadership photos (you can replace with real ones later)
import headImg from "../../assets/head.jpg";

// Partners logos
import p1 from "../../assets/partners/AEGIS-TRUST.jpg";
import p2 from "../../assets/partners/APIE.jpg";
import p3 from "../../assets/partners/Kicukiro-District.jpg";
import p4 from "../../assets/partners/Lef-Pillon-Trust.jpg";
import p5 from "../../assets/partners/MINEDUC.jpg";
import p6 from "../../assets/partners/NCPD.jpg";
import p7 from "../../assets/partners/NESA.jpg";
import p8 from "../../assets/partners/REB.jpg";
import p9 from "../../assets/partners/SHHS.";
import p10 from "../../assets/partners/UKAID.jpg";
import p11 from "../../assets/partners/UKAID.jpg";
import p12 from "../../assets/partners/UKAID.jpg";
import p13 from "../../assets/partners/UKAID.jpg";


function About() {
  const leadership = [
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
      img: headImg,
    },
    {
      title: "Office & Finance Manager (Acting)",
      name: "Emilie Munyakazi",
      phone: "+250 782 029 655",
      email: "emilie@apertnerineducation.org",
      img: headImg,
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
            Kicukiro District, Kanombe Sector, Kabeza Cell, in Nyarurembo Village.
            It opened its doors in 2013 with nursery and primary, and in 2018 added
            lower secondary. UA follows the Rwandan Competence-Based Curriculum
            while applying international best practices.
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
            <div className="w-16 h-16 bg-[#FFDE59] text-green-700 flex items-center justify-center rounded-xl mb-4 mx-auto">
              <BookOpen />
            </div>
            <h4 className="text-2xl font-bold text-[#7ED956] mb-3">Our Vision</h4>
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
            <div className="w-16 h-16 bg-[#FFDE59] text-green-700 flex items-center justify-center rounded-xl mb-4 mx-auto">
              <Users />
            </div>
            <h4 className="text-2xl font-bold text-[#7ED956] mb-3">Our Mission</h4>
            <ul className="text-gray-600 text-left list-disc pl-6 space-y-2">
              <li>Nurture a welcoming, safe and loving learner-centred environment</li>
              <li>Promote high expectations of learners’ academic progress</li>
              <li>Support learners through positive behaviour management and SEL skills</li>
              <li>Foster inclusive practices for all learners</li>
              <li>Provide vibrant co-curricular activities promoting creativity and teamwork</li>
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
        >
          <h3 className="text-3xl font-bold text-[#7ED956] mb-4 text-center">
            Our Values
          </h3>
          <p className="text-gray-700 mb-6 text-center">
            Peace is at the heart of Umubano Academy. We promote equality,
            togetherness and respect.
          </p>
          <ul className="text-gray-600 space-y-3 list-disc pl-6 max-w-3xl mx-auto">
            <li><b>Problem Solving:</b> Growth mindset, creativity and resilience</li>
            <li><b>Excellence:</b> Maximising every student’s potential</li>
            <li><b>Achievement:</b> Rewarding progress and success</li>
            <li><b>Collaboration:</b> Teamwork and active learning</li>
            <li><b>Empathy:</b> Respect, compassion and restorative conflict solving</li>
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
            School Leadership
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {leadership.map((leader, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img src={leader.img} alt={leader.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-[#7ED956]">{leader.title}</h4>
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
            Board Members & Committees
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
            <li>Promote education through nursery, primary and secondary schools</li>
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

      </div>
    </section>
  );
}

export default About;
