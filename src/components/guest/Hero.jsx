import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import headteacherVideo from "../../assets/headvideo.mp4";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={headteacherVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-blue-900/30"></div>

      {/* Bottom Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-7xl mx-auto px-6 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            {/* School Motto */}
             <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Shaping Future Leaders Through{" "}
            <span className="text-[#FFDE59]">Excellence in Education</span>
          </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/admissions"
                className="bg-[#7ED956] text-blue-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#8ff06a]"
              >
                Admissions
              </Link>

              <Link
                to="/academic"
                className="px-10 py-4 rounded-2xl font-semibold text-lg text-white border border-white/40 backdrop-blur-md bg-white/10 shadow-xl transition-all duration-300 hover:bg-[#0AB0EE] hover:text-blue-900 hover:scale-105"
              >
                Explore our Education
              </Link>

              <a
                href="#whyus"
                className="px-10 py-4 rounded-2xl font-semibold text-lg text-white border border-white/40 backdrop-blur-md bg-white/10 shadow-xl transition-all duration-300 hover:bg-[#0AB0EE] hover:text-blue-900 hover:scale-105"
              >
                Why choose Umubano Academy?
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;



// import React from "react"
// import { motion } from "framer-motion"
// import heroImage from "../../assets/gallery/image_12.jpg"

// function Hero() {
//   return (
//     <section
//       className="relative h-screen flex items-center"
//       style={{
//         backgroundImage: `url(${heroImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-2xl text-white"
//         >

//           <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//             Shaping Future Leaders Through{" "}
//             <span className="text-[#FFDE59]">Excellence in Education</span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-200 mb-10">
//             Umubano Academy is committed to nurturing disciplined, innovative,
//             and confident learners through quality education, strong values,
//             and a supportive learning environment.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4">
//             <a
//               href="/admission"
//               className="bg-[#7ED956] text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#FFDE59] transition shadow-lg"
//             >
//               Admission&Requirement
//             </a>

//             <a
//               href="/academic"
//               className="border border-white/40 px-8 py-4 rounded-xl font-semibold text-lg text-black bg-[#D9D9D9] hover:bg-[#0AB0EE] hover:text-blue-900 transition"
//             >
//               Explore Academics
//             </a>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Hero
