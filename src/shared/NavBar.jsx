import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Services", "Contact"];

  return (
    <nav className="bg-[#f7f2ef] py-4 px-6 md:px-16 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center text-gray-800">
          <img className="w-12" src={logo} alt="" />
          <span className="text-xl">partex</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="hover:text-yellow-600 transition cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden absolute  mt-4 top-10 right-10 w-48 space-y-2 bg-white rounded shadow px-4 py-4 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li
              onClick={() => setIsOpen(!isOpen)}
              key={link}
              className="hover:text-yellow-600 transition cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
