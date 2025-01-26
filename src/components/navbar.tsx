"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);       // for mobile menu
  const [isCartOpen, setIsCartOpen] = useState(false); // for cart dropdown
  const [searchOpen, setSearchOpen] = useState(false); // for toggling search on mobile

  // Track scrolling to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Framer Motion variants for mobile menu
  const menuVariants: Variants = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  // Framer Motion variants for cart dropdown
  const cartVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Example cart items (empty for now)
  const cartItems: any[] = [];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-green-900"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text"
        >
          <SchoolIcon className="mr-2 text-green-500" fontSize="large" />
          I-EDUKO
        </a>

        {/* Search bar (Desktop only) */}
        <div className="hidden lg:flex items-center flex-1 mx-6">
          <input
            type="text"
            placeholder="Hledat..."
            className="w-[300px] px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Desktop Menu & Cart */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center gap-8">
            {/* Dropdown for "INTERAKTIVNÍ CVIČENÍ" */}
            <li className="relative group">
              {/* Odkaz + Šipka dolů (trojúhelník) */}
              <a
                href="/InteraktivniCviceni"
                className="relative transition-all duration-300 group-hover:text-green-600 flex items-center"
              >
                INTERAKTIVNÍ CVIČENÍ
                {/* Trojúhelník vedle textu */}
                <span className="ml-1">▼</span>
                {/* Spodní linková animace */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
              </a>

              {/* Submenu, zobrazí se při hoveru */}
              <div
                className="absolute left-0 top-full min-w-[180px] bg-white 
                           text-green-900 rounded shadow-lg py-2 
                           opacity-0 translate-y-1 pointer-events-none 
                           group-hover:opacity-100 group-hover:translate-y-0 
                           group-hover:pointer-events-auto transition-all 
                           duration-300 z-50"
              >
                <ul>
                  <li>
                    <a
                      href="/InteraktivniCviceni/Ekonomika"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      Ekonomika
                    </a>
                  </li>
                  <li>
                    <a
                      href="/InteraktivniCviceni/Pravo"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      Právo
                    </a>
                  </li>
                  <li>
                    <a
                      href="/InteraktivniCviceni/Biologie"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      Biologie
                    </a>
                  </li>
                  <li>
                    <a
                      href="/InteraktivniCviceni/Komunikace"
                      className="block px-4 py-2 hover:bg-green-100"
                    >
                      Komunikace
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="#Knihy"
                className="relative group transition-all duration-300"
              >
                NAŠE KNIHY
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
            <li>
              <a
                href="https://www.eduko.cz/cz/seminare-2024-25/"
                className="relative group transition-all duration-300"
              >
                SEMINÁŘE
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
           
            <li>
              <a
                href="https://eduko.elmg.net"
                className="relative group transition-all duration-300"
              >
                e-EDUKO
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          </ul>

          {/* Cart */}
          <div
            className="relative"
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => setIsCartOpen(false)}
          >
            <a
              href="#kosik"
              className="text-green-600 hover:text-green-800 transition flex items-center"
            >
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon fontSize="large" />
              </Badge>
            </a>

            {/* Cart Dropdown */}
            <AnimatePresence>
              {isCartOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-lg p-4 z-50"
                  variants={cartVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{ pointerEvents: isCartOpen ? "auto" : "none" }}
                >
                  <h3 className="text-lg font-semibold mb-2">Váš košík</h3>
                  {cartItems.length === 0 ? (
                    <p className="text-sm">Košík je prázdný.</p>
                  ) : (
                    <ul>
                      {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-between mb-1">
                          <span>
                            {item.name} x{item.quantity}
                          </span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href="#kosik"
                    className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition"
                  >
                    Pokračovat k nákupu
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center lg:hidden space-x-4">
          {/* Search icon toggle on mobile - green */}
          <motion.button
            className="focus:outline-none text-green-600 hover:text-green-800 transition"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle search"
            whileTap={{ scale: 0.9 }}
          >
            <SearchIcon fontSize="large" />
          </motion.button>

          {/* Shopping Cart on Mobile */}
          <div
            className="relative"
            onMouseEnter={() => setIsCartOpen(true)}
            onMouseLeave={() => setIsCartOpen(false)}
          >
            <a
              href="#kosik"
              className="text-green-600 hover:text-green-800 transition flex items-center"
            >
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon fontSize="large" />
              </Badge>
            </a>

            {/* Cart Dropdown (Mobile) */}
            <AnimatePresence>
              {isCartOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg p-4 z-50"
                  variants={cartVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{ pointerEvents: isCartOpen ? "auto" : "none" }}
                >
                  <h3 className="text-lg font-semibold mb-2">Váš košík</h3>
                  {cartItems.length === 0 ? (
                    <p className="text-sm">Košík je prázdný.</p>
                  ) : (
                    <ul>
                      {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-between mb-1">
                          <span>
                            {item.name} x{item.quantity}
                          </span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <a
                    href="#kosik"
                    className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition"
                  >
                    Pokračovat k nákupu
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? "×" : "☰"}
          </motion.button>
        </div>
      </div>

      {/* Mobile Full-Width Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className={`lg:hidden w-full px-4 py-3 bg-white shadow-md ${
              isScrolled ? "pt-4" : "pt-[1rem]"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="text"
              placeholder="Hledat..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-green-500 
                         text-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-green-600 to-green-500 text-white flex flex-col items-center justify-center space-y-6 text-xl"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Optional informational text */}
            <p className="text-center px-6 text-base md:text-lg mb-4">
              Vítejte v I-EDUKOA! Vyberte si z možností níže
              a objevte více o našich vzdělávacích materiálech.
            </p>

            {/* 
              Jednoduchý seznam odkazů pro mobilní menu,
              pokud chcete replikovat dropdown i pro mobil, je potřeba jiná logika.
            */}
            <a
              href="/InteraktivniCviceni"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200 transition"
            >
              INTERAKTIVNÍ CVIČENÍ
            </a>
            <a
              href="#knihy"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200 transition"
            >
              NAŠE KNIHY
            </a>
            <a
              href="https://www.eduko.cz/cz/seminare-2024-25/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200 transition"
            >
              SEMINÁŘE
            </a>
            <a
              href="#informace"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200 transition"
            >
              INFORMACE
            </a>
          
            <a
              href="https://eduko.elmg.net"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200 transition"
            >
              e-EDUKO
            </a>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-3xl"
              aria-label="Close menu"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
