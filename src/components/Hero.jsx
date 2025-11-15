import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const subVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.8 } },
};
const buttonsVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { delay: 0.45, duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="hero-bg relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* 🔹 Future Desks Logo (top center) */}
      <img
        src="https://futuredesks.com/wp-content/uploads/2024/12/Untitled-design-58.png"
        alt="Future Desks Logo"
        className="absolute top-8 left-1/2 -translate-x-1/2 w-36 md:w-48 object-contain"
      />

      {/* 🔹 Main Hero Content */}
      <div className="w-full max-w-6xl mx-auto px-6 mt-32">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-[#12121b] leading-tight"
          variants={headingVariants}
          initial="hidden"
          animate="show"
        >
          Build Your First Mobile App
          <br />
          <span className="block">With US</span>
        </motion.h1>

        <motion.p
          className="mt-8 text-gray-500 max-w-2xl mx-auto text-lg md:text-xl"
          variants={subVariants}
          initial="hidden"
          animate="show"
        >
          If you also want to make an APP for your startup then book a free consultancy
          today and let's start your startup together.
        </motion.p>

        <motion.div
          className="mt-10 flex items-center justify-center gap-6"
          variants={buttonsVariants}
          initial="hidden"
          animate="show"
        >
          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-500 text-white font-medium shadow-md hover:scale-105 transition"
          >
            <FaWhatsapp /> <span>Message us on Whatsapp</span>
          </a>

          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white font-medium shadow-md hover:scale-105 transition"
          >
            <FaInstagram /> <span>Message us on Instagram</span>
          </a>
        </motion.div>

        {/* 🔹 Decorative SVGs */}
        <div className="absolute left-8 top-1/3 opacity-40">
          <svg width="60" height="60">
            <path d="M0 30 L50 30" stroke="#111" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute right-8 top-1/3 opacity-40">
          <svg width="60" height="60">
            <circle cx="30" cy="30" r="20" stroke="#111" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* 🔹 Floating WhatsApp Button (bottom-right) */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </section>
  );
}
