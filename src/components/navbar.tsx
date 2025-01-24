"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Cart Icon
import Badge from "@mui/material/Badge"; // Badge for cart count

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // State for cart dropdown

  // Tracking scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Framer Motion animations for mobile menu
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

  // Framer Motion animations for cart dropdown
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

  // Example cart items (you can replace this with actual cart data)
  const cartItems: any[] = [
    // Example item
    // { id: 1, name: "Book Title", quantity: 2, price: 19.99 },
  ];

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
          className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text"
        >
          EDUKO
        </a>

        {/* Search bar */}
        <div className="hidden lg:flex items-center flex-1 mx-6">
          <input
            type="text"
            placeholder="Hledat..."
            className="w-[300px] px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Desktop Menu and Cart */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Navigation Links */}
          <ul className="flex items-center gap-8">
          <li>
              <a
                href="/InteraktivniCviceni"
                className="relative group transition-all duration-300"
              >
                INTERAKTIVNÍ CVIČENÍ
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#knihy"
                className="relative group transition-all duration-300"
              >
                NAŠE KNIHY
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#seminare"
                className="relative group transition-all duration-300"
              >
                SEMINÁŘE
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          
            <li>
              <a
                href="#kontakt"
                className="relative group transition-all duration-300"
              >
                KONTAKT
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#e-eduko"
                className="relative group transition-all duration-300"
              >
                e-EDUKO
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          {/* Shopping Cart */}
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
                        <li
                          key={item.id}
                          className="flex justify-between mb-1"
                        >
                          <span>
                            {item.name} x{item.quantity}
                          </span>
                          <span>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
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
          {/* Shorter Search Bar on Mobile */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Hledat..."
              className="w-full px-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>

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

            {/* Cart Dropdown */}
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
                        <li
                          key={item.id}
                          className="flex justify-between mb-1"
                        >
                          <span>
                            {item.name} x{item.quantity}
                          </span>
                          <span>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-green-500 text-white flex flex-col items-center justify-center space-y-6 text-xl"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <a
              href="#knihy"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200 transition"
            >
              NAŠE KNIHY
            </a>
            <a
              href="#seminare"
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
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-200 transition"
            >
              KONTAKT
            </a>
            <a
              href="#e-eduko"
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
