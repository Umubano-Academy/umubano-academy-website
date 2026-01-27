import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, ChevronDown } from "lucide-react";

// Leadership photos (you can replace with real ones later)
import headImg from "../../assets/head.JPG";
import deputy from "../../assets/Deputy Head-Teacher.JPG";
import finance from "../../assets/Office-Finance-Officer (Acting).jpeg";
import chair from "../../assets/Chair-of-the-UOB.jpg";

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
import p12 from "../../assets/partners/Victoria-League.jpg";
import p13 from "../../assets/partners/Victoria-League.jpg";

function AccordionItem({ policy }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
      >
        <span className="font-semibold text-gray-800">{policy.title}</span>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {open && <p className="text-gray-600 pb-4">{policy.description}</p>}
    </div>
  );
}

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  const partners = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p13];

  const programmes = [
    {
      name: "General Scholarship programme",
      type: "Scholarship",
      description:
        "Provides financial support to talented students from vulnerable families to ensure access to quality education.",
    },
    {
      name: "Girl Circle Scholarship programme",
      type: "Scholarship",
      description:
        "Supports girls’ education through mentorship, financial aid, and leadership development initiatives.",
    },
    {
      name: "Inclusion and Special Education Needs (SEN)",
      type: "Special Needs",
      description:
        "Provides tailored academic, emotional, and social support to learners with special educational needs.",
    },
    {
      name: "Whole School feeding programme",
      type: "Programmes",
      description:
        "Ensures all learners receive daily nutritious meals to improve health, attendance, and academic performance.",
    },
    {
      name: "After school care",
      type: "Extra-Curricular",
      description:
        "Offers a safe and structured environment after school hours with supervised learning and recreational activities.",
    },
    {
      name: "Summer camp",
      type: "Extra-Curricular",
      description:
        "Provides enriching holiday programmes focused on creativity, teamwork, and personal development.",
    },
    {
      name: "Learning tours",
      type: "Extra-Curricular",
      description:
        "Organises educational trips to expose learners to real-world learning experiences beyond the classroom.",
    },
    {
      name: "School Infrastructural project",
      type: "Infrastructure",
      description:
        "Improves school facilities to create a safe, inclusive, and conducive learning environment.",
    },
    {
      name: "Library project",
      type: "Infrastructure",
      description:
        "Develops a well-resourced library to promote reading culture, research skills, and independent learning.",
    },
    {
      name: "Creative Arts project",
      type: "Extra-Curricular",
      description:
        "Encourages artistic expression through music, drama, visual arts, and creative performances.",
    },
    {
      name: "Southhampstead High School: Think Global Act Local project",
      type: "Programmes",
      description:
        "A global partnership project promoting international collaboration, citizenship, and local impact.",
    },
    {
      name: "Grille Foundation - ICT in classrooms",
      type: "Infrastructure",
      description:
        "Enhances digital learning by equipping classrooms with ICT tools and modern teaching technology.",
    },
    {
      name: "Lef Pillon Foundation : SEN & UA Leadership Funding",
      type: "Special Needs",
      description:
        "Supports inclusive education initiatives and leadership development through targeted funding.",
    },
    {
      name: "Science Room",
      type: "Infrastructure",
      description:
        "Provides a fully equipped science laboratory to enhance practical learning and scientific inquiry.",
    },
    {
      name: "Girls Room",
      type: "Infrastructure",
      description:
        "Creates a safe and supportive space dedicated to girls’ wellbeing and personal development.",
    },
    {
      name: "Water purifying and dining project",
      type: "Infrastructure",
      description:
        "Ensures access to clean drinking water and safe dining facilities for all learners.",
    },
    {
      name: "Teacher Training (CPD)",
      type: "CPD",
      description:
        "Continuous Professional Development programmes aimed at improving teaching quality and pedagogy.",
    },
    {
      name: "UA Leadership Training",
      type: "CPD",
      description:
        "Builds leadership capacity among staff through structured training and mentorship programmes.",
    },

    // ===== APIE PROJECTS =====
    {
      name: "Enhancing Quality Instructions in Pre-primary (EQUIP)",
      type: "Programmes",
      description:
        "Improves teaching quality in pre-primary education through teacher training and instructional support.",
    },
    {
      name: "Education for Positive Peace (E4PP)",
      type: "Programmes",
      description:
        "Promotes peace education, social cohesion, and positive values across the school community.",
    },
    {
      name: "Maximising Potential (MaxPo) pilot",
      type: "Programmes",
      description:
        "Supports learners in unlocking their full academic and personal potential through targeted interventions.",
    },
    {
      name: "Personal Social Health and Education (PSHE) Syllabus",
      type: "Programmes",
      description:
        "Strengthens learners’ wellbeing, health awareness, and social-emotional learning skills.",
    },
  ];

  const typeColors = {
    Scholarship: "bg-yellow-200 text-yellow-800",
    "Special Needs": "bg-red-200 text-red-800",
    Programmes: "bg-blue-200 text-blue-800",
    Infrastructure: "bg-green-200 text-green-800",
    "Extra-Curricular": "bg-purple-200 text-purple-800",
    CPD: "bg-pink-200 text-pink-800",
  };

  const leadership = [
    {
      title: "Head Teacher",
      name: "Robert Ukwiyimpundu",
      phone: "+250 783 523 189",
      email: "kerotrub@gmail.com",
      img: headImg,
    },
    {
      title: "Deputy Head Teacher(acting)",
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
        "Mrs Faith Musyoka Gahamanyi - Nutritionist and Education Expert",
        "Mrs Segolene Numukobwa - IT Expert",
      ],
    },
    {
      committee: "Audit Committee",
      members: [
        "Prof. Eugene Ndabaga (Chair of UO Board  and Committee Chair)",
        "Mrs Flora Umulisa",
        "Mr Solomon Bugabo - IT Expert",
      ],
    },
    {
      committee: "Finance and Human Resources Committee",
      members: [
        "Mr Jolly Senyange - Accounting & Finance Expert (Treasurer and Chair)",
        "Mrs Jane Kalisa - Human Resource Expert",
        "Mr Nathan Kanyesigye - Education & Finance Expert (Vice-Chair of UO Board )",
      ],
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
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
            Village. It opened its doors in 2013 with two sections; nursery and
            primary. In 2018 it started a third section which is Lower
            Secondary. The school was established by A Partner in Education
            (APIE), an international NGO from the UK, and it is governed by
            Umubano Organisation, a local NGO based in Kigali. UA follows the
            Rwandan Competence-Based Curriculum and at the same time delivers
            this utilising international best practices and approaches.
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
              <p>
                Nurture a welcoming, safe and loving learner-centred environment
              </p>
              <p>Promote high expectations of learners’ academic progress</p>
              <p>
                Support learners through positive behaviour management and SEL
                skills
              </p>
              <p>Foster inclusive practices for all learners</p>
              <p>
                Provide vibrant co-curricular activities promoting creativity
                and teamwork
              </p>
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
            <p>
              <b>
                {" "}
                <strong className=" text-[#7ED956] text-xl ">P</strong>roblem
                Solving:
              </b>{" "}
              Growth mindset, creativity and resilience
            </p>
            <p>
              <b>
                <strong className=" text-[#7ED956] text-xl ">E</strong>
                xcellence:
              </b>{" "}
              Maximising every student’s potential
            </p>
            <p>
              <b>
                <strong className=" text-[#7ED956] text-xl ">A</strong>
                chievement:
              </b>{" "}
              Rewarding progress and success
            </p>
            <p>
              <b>
                <strong className=" text-[#7ED956] text-xl ">C</strong>
                ollaboration:
              </b>{" "}
              Teamwork and active learning
            </p>
            <p>
              <b>
                <strong className=" text-[#7ED956] text-xl ">E</strong>mpathy:
              </b>{" "}
              Respect, compassion and restorative conflict solving
            </p>
          </ul>
        </motion.div>
        {/* School Governance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg p-12"
        >
          <h3 className="text-3xl font-bold text-[#7ED956] mb-6 text-center">
            School Governance
          </h3>

          <p className="text-gray-600 mb-6">
            Umubano Organisation owns Umubano Academy and governs it through its
            Board of nine members.
          </p>

          <p className="text-gray-600 mb-4">
            Umubano Organisation is a National Non-governmental Organisation
            governed by its constitution act and the Law n° 058/2024 of
            20/06/2024 governing Non-governmental Organisations. The
            organisation’s mission is to provide top quality and holistic
            nursery,primary and secondary education to children. Its objectives
            are:
          </p>
          <p className="text-gray-600 mb-4">
            1. Promote Education through establishment of Nurser, primary and
            secondary school <br />
            2. Help orphans and vulnerable children from severely disadvantaged
            background to attend the school <br />
            3. Carry on any other activities that contribute to the promotion of
            education in general, such as training of teachers, etc
          </p>

          {/* Chairperson Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Image & Title */}
            <div className="flex flex-col items-center text-center">
              <img
                src={chair}
                alt="Chairperson Prof. Ndabaga Eugene"
                className="w-48 h-64 object-cover rounded-2xl shadow-md mb-6"
              />
              <h3 className="text-2xl font-bold text-blue-900 mt-1">
                Prof. Ndabaga Eugene
              </h3>
              <p className="text-[#7ED956] font-semibold mt-1">
                Chairperson of Board of Umubano Organisation
              </p>
            </div>

            {/* Info / Contact */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-blue-900  pb-2">
                Contact Information
              </h4>

              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold text-blue-900">Phone:</span>{" "}
                  +250 780 893 652
                </p>
                <p>
                  <span className="font-semibold text-blue-900">Email:</span>{" "}
                  ndabagav@yahoo.ie
                </p>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl">
                <p className="font-semibold text-blue-900">
                  Academic and Leadership Role
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Associate Professor of Education Management, Policy and
                  Planning at the University of Rwanda – College of Education.
                </p>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-blue-900 pb-2">
                Biography
              </h4>

              <p className="text-gray-700 leading-relaxed">
                Prof. Ndabaga Eugene is an Associate Professor of Education
                Management, Policy and Planning at the University of Rwanda
                College of Education and a visiting scholar at the University of
                California, USA.
              </p>

              <p className="text-gray-700 leading-relaxed">
                He holds a Bachelor’s degree in Philosophy (First Class / Magna
                Cum Laude) from Urbaniana University, Rome, as well as a
                Master’s degree and Doctorate in Education Management, Policy
                and Planning from the University of Bath, United Kingdom.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Beyond teaching, Prof. Ndabaga serves as the Director of
                Research and Innovation at the University of Rwanda College of
                Education, contributing significantly to policy development,
                academic leadership, and educational reform.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Board Members & Committees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 mt-8"
        >
          <h3 className="text-3xl font-bold text-[#7ED956] mb-6 text-center">
            Umubano Organisation Board members and Board Sub-Committees
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
                          <p key={idx}>{m}</p>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {leadership.map((leader, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6 text-center space-y-2">
                  <h4 className="text-xl font-bold text-[#7ED956]">
                    {leader.title}
                  </h4>

                  <p className="font-semibold text-lg">{leader.name}</p>

                  <p className="text-gray-500">
                    Phone:{" "}
                    <a
                      href={`tel:${leader.phone}`}
                      className="hover:text-blue-700 transition-colors"
                    >
                      {leader.phone}
                    </a>
                  </p>

                  <p className="text-gray-500">
                    Email:{" "}
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${leader.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {leader.email}
                    </a>
                  </p>
                </div>
              </div>
            ))}
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

          <div className="bg-white rounded-3xl shadow-lg p-6 max-w-4xl mx-auto">
            {[
              {
                title: "Child Protection and Safeguarding Policy",
                description:
                  "Ensures all children are protected from harm and abuse. Staff are trained to report and prevent any risks.",
              },
              {
                title: "Anti-Bullying Policy",
                description:
                  "Promotes a safe and respectful environment. Incidents of bullying are taken seriously and addressed immediately.",
              },
              {
                title: "Health and Safety Policy",
                description:
                  "Maintains a safe school environment with proper safety procedures, regular inspections, and first aid training.",
              },
              {
                title: "Academic Integrity and Discipline Policy",
                description:
                  "Encourages honesty, responsibility, and ethical behavior in all academic activities.",
              },
              {
                title: "Parent and Community Engagement Policy",
                description:
                  "Promotes active participation of parents and community members in school activities and decision-making.",
              },
              {
                title: "Equal Opportunity and Inclusion Policy",
                description:
                  "Ensures all students have access to quality education regardless of background, gender, or ability.",
              },
            ].map((policy, i) => (
              <AccordionItem key={i} policy={policy} />
            ))}
          </div>
        </motion.div>

        {/* Programmes & Projects - Clean Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-[#7ED956] mb-8 text-center">
            Programmes and Projects at Umubano Academy
          </h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl shadow-lg">
              <thead className="bg-[#FFDE59] text-blue-900">
                <tr>
                  <th className="p-4 text-left">Programme / Project</th>
                  <th className="p-4 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {programmes.map((item, i) => (
                  <tr
                    key={i}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 flex items-center gap-3 font-semibold text-blue-900">
                      {/* Optional: colored dot indicator */}
                      <span
                        className={`w-3 h-3 rounded-full ${typeColors[item.type]}`}
                      ></span>
                      {item.name}
                    </td>
                    <td className="p-4 text-gray-700">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
