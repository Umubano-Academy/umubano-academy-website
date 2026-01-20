import React from 'react';
import { motion } from 'framer-motion';

function WhyChooseUs() {
  return (
    <div className="flex justify-center px-4 py-18">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-xl max-w-xl p-10 text-center hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Card Header */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold text-gray-800">
            Why Choose Umubano Academy?
          </h3>
        </div>

        {/* Card Content */}
        <p className="text-gray-600 text-lg leading-relaxed">
          We focus on academic excellence, strong moral values, personalized support, 
          and innovative learning methods to help each student achieve their full potential.
        </p>

        {/* Optional Highlight / Badge */}
        <div className="mt-8 inline-block bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
          Excellence & Innovation
        </div>
      </motion.div>
    </div>
  );
}

export default WhyChooseUs;
