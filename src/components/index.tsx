"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaChalkboardTeacher,
  FaChartLine,
  FaLaptopCode,
  FaProjectDiagram,
  FaTools,
  FaUserGraduate,
  FaNewspaper,
  FaBookOpen,
  FaTasks,
  FaCloud,
  FaSyncAlt,
} from "react-icons/fa";

const HeroSection = () => {
  // Rychlý přehled položky (s původním pozadím a hover efektem)
  const menuItems = [
    { icon: <FaNewspaper />, title: "Novinky 2024" },
    { icon: <FaBook />, title: "Učebnice" },
    { icon: <FaChalkboardTeacher />, title: "Semináře / Webináře" },
    { icon: <FaChartLine />, title: "Ekonomika za katedrou" },
    { icon: <FaLaptopCode />, title: "Aktivace online učebnic" },
    { icon: <FaTools />, title: "Elektronické výukové materiály" },
    { icon: <FaUserGraduate />, title: "Vstup podpora e-EDUKO" },
    { icon: <FaProjectDiagram />, title: "Z lavice do akce!" },
  ];

  // Nový blok se 4 statistikami (bez pozadí, bez hover), 2x2 grid na mobilu
  const statsData = [
    {
      icon: <FaBookOpen />,
      label: "500+ Publikací",
      description: "Bohatá knihovna moderních učebnic a materiálů",
    },
    {
      icon: <FaTasks />,
      label: "1000+ ",
      description: "Interaktivních cvičení pro efektivnější učení",
    },
    {
      icon: <FaCloud />,
      label: "Online učebnice",
      description: "Čtečka Flexibook kde je můžete spravovat i offline.",
    },
    {
      icon: <FaSyncAlt />,
      label: "Pravidelný update",
      description: "Vždy aktuální a relevantní obsah",
    },
  ];

  return (
    <section className="relative bg-gray-900 text-white py-12 sm:py-20 lg:py-28 flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-20 min-h-screen">
      

      <div className="relative flex flex-col items-center w-full max-w-7xl mt-12 z-10">
        {/* Textová a obrázková část (Hero) */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full flex-wrap">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left flex-1"
          >
            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Učebnice • Semináře • Elektronické výukové materiály • Interaktivní cvičení
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight text-green-600 ">
              Zlepšujeme vzdělávání <br />
              moderními nástroji
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-md sm:max-w-lg mx-auto lg:mx-0 mt-4">
              Nabízíme moderní řešení pro učitele, studenty i instituce –
              učebnice, semináře a elektronické výukové materiály.
            </p>
            <div className="flex flex-col gap-4 mt-4 justify-center items-center lg:flex-row lg:justify-start lg:items-start">
  <a
    href="/InteraktivniCviceni"
    className="w-full max-w-xs px-5 py-2  sm:py-3 border-2 border-green-600 text-white font-medium rounded-full bg-green-600 hover:text-white transition text-center"
  >
    Interaktivní cvičení →
  </a>
  <a
    href="#contact"
    className="w-full max-w-xs px-5 py-2  sm:py-3 border-2 border-green-600 text-green-600 font-medium rounded-full hover:bg-green-600 hover:text-white transition text-center"
  >
    Aktivovat knihy na Flexibooku →
  </a>
</div>

          </motion.div>

          {/* Pravá strana s obrázkem */}
          <div className="relative flex justify-center items-center w-full lg:w-1/2">
          <motion.img
  src="/imgs/book10.png"
  alt="Eduko ilustrace"
  className="relative z-20 w-[600px] h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[700px] object-contain sm:scale-100 lg:left-[80px]"
  style={{ transform: 'scale(1.2)' }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
/>

          </div>
          
        </div>

        {/* 1) Rychlý přehled (nahoře) */}
        <div className="w-full max-w-5xl mt-12 lg:mt-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-left">
            Rychlý přehled
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: -5,
                  boxShadow: "0 10px 20px rgba(16, 185, 129, 0.5)",
                }}
                className="flex flex-col items-center bg-gray-800 rounded-3xl p-6 shadow-lg transition-transform duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                <a
                  href={`#${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="relative flex flex-col items-center z-10"
                >
                  <div className="text-green-600 text-4xl mb-4 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 2) Naše klíčové body (dole) - zarovnání vlevo */}
        <div className="w-full max-w-5xl mt-16 lg:mt-24">
          {/* Nadpis sekce vlevo */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold text-white text-left mb-4"
          >
            Naše klíčové body
          </motion.h2>

          {/* Podnadpis sekce vlevo */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gray-300 text-left max-w-3xl mb-16 mt-4"
          >
            Přinášíme to nejlepší pro vaše vzdělávání – srozumitelně,
            interaktivně a vždy aktuálně.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // 2 sloupce na nejmenších displejích, 4 sloupce od lg
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {statsData.map(({ icon, label, description }, index) => (
              <div key={index} className="flex flex-col items-start gap-3">
                <div className="text-green-600 text-4xl">{icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {label}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 max-w-xs">
                  {description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
