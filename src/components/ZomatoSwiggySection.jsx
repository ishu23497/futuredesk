import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function ZomatoSwiggySection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20 bg-white relative overflow-hidden">
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center items-center bg-gradient-to-r from-orange-500 to-red-400 rounded-3xl p-10 overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-400 rounded-3xl -z-10"></div>
        <motion.div
          className="rounded-3xl shadow-2xl overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.05, rotate: -2, y: -10, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <motion.img
            src="https://futuredesks.com/wp-content/uploads/2024/12/Untitled-design-62.png"
            alt="Zomato Swiggy App"
            className="w-[600px] md:w-[700px] lg:w-[750px] rounded-3xl object-contain"
            whileHover={{ scale: 1.1, transition: { duration: 0.6, ease: "easeInOut" } }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-12"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
          Zomato / Swiggy Multi Vendor <span className="text-orange-600">APP & Website</span>
        </h2>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Build your own food delivery platform like <strong>Swiggy</strong> or <strong>Zomato</strong>.
          Grow your restaurant network with our advanced delivery solution.
        </p>
        <ul className="space-y-4 mb-10 text-gray-700">
          <li className="flex items-center gap-3"><FaCheck className="text-orange-500" /> Android and iOS app for customer</li>
          <li className="flex items-center gap-3"><FaCheck className="text-orange-500" /> Android and iOS app for Restaurant/Delivery boy</li>
          <li className="flex items-center gap-3"><FaCheck className="text-orange-500" /> Master Admin</li>
          <li className="flex items-center gap-3"><FaCheck className="text-orange-500" /> Website</li>
        </ul>
        <motion.a href="https://wa.me/your-number" target="_blank" rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-orange-600 transition">
          BOOK FREE CONSULTATION
        </motion.a>
      </motion.div>
    </section>
  );
}
