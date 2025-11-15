import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://futuredesks.com/wp-content/uploads/2024/12/drivemod.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/Stack-foods-1.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/demandium.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/egrocer-1.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/news-app-1.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/ebroker.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/GroFresh.png",
  "https://futuredesks.com/wp-content/uploads/2024/12/6Cash.png",
];

export default function MobileShowcaseCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // every 3 sec
    return () => clearInterval(interval);
  }, []);

  const getImage = (offset) => {
    const newIndex = (index + offset + images.length) % images.length;
    return images[newIndex];
  };

  return (
    <section className="relative bg-gradient-to-b from-indigo-50 to-white py-24 overflow-hidden flex flex-col items-center text-center">
      {/* 🔶 Orange semi-circle background */}
      <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-orange-500 rounded-[450px] -z-10 opacity-90"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
        Transforming Ideas Into Mobile Experiences
      </h2>

      <div className="relative flex justify-center items-center w-full max-w-7xl h-[600px]">
        <AnimatePresence>
          {/* Left image */}
          <motion.img
            key={`left-${getImage(-1)}`}
            src={getImage(-1)}
            alt="Left App"
            className="absolute w-[220px] md:w-[260px] rounded-[2rem] drop-shadow-lg opacity-80 left-[12%] scale-90"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8, scale: 0.9 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Center image */}
          <motion.img
            key={`center-${getImage(0)}`}
            src={getImage(0)}
            alt="Center App"
            className="absolute w-[260px] md:w-[320px] z-10 rounded-[2rem] drop-shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Right image */}
          <motion.img
            key={`right-${getImage(1)}`}
            src={getImage(1)}
            alt="Right App"
            className="absolute w-[220px] md:w-[260px] rounded-[2rem] drop-shadow-lg opacity-80 right-[12%] scale-90"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8, scale: 0.9 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
