import React from 'react'

function WhyCooseUs() {
  return (
    {/* Values / Why Choose Us */} 
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#D9D9D9] text-[#7ED956] rounded-3xl p-12 text-center" > 
    <h3 className="text-3xl font-bold mb-6"> Why Choose Umubano Academy? </h3> 
    <p className="text-gray-900 max-w-3xl mx-auto text-lg"> We focus on academic excellence, strong moral values, personalized support, and innovative learning methods to help each student achieve their full potential. </p>
     </motion.div>
  )
}

export default WhyCooseUs
