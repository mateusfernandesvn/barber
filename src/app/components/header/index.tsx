"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-zinc-950 text-white w-full items-center mx-auto">
      <nav className="w-full h-24 flex mx-auto items-center lg:flex-row justify-between px-12 py-3  ">
        <Link
          href="/"
          className="text-red-600 uppercase font-extrabold text-3xl italic"
        >
          A <span className="text-white">Navalha</span>
        </Link>

        <div className="flex items-center gap-6 font-medium hidden lg:flex">
          <Link
            href="/"
            className="hover:text-gray-300 transition-all duration-200"
          >
            Home
          </Link>
          <a
            href="#about"
            className="hover:text-gray-300 transition-all duration-200"
          >
            Sobre nós
          </a>
          <a
            href="#services"
            className="hover:text-gray-300 transition-all duration-200"
          >
            Serviços
          </a>
          <Link
            href="/agendamento"
            className="text-white  bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-200"
          >
            Agendar
          </Link>
        </div>

        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-zinc-950 text-white font-medium  px-6 py-4">
          <Link
            href="/"
            className="block py-2 hover:text-gray-300 transition-all duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <a
            href="#about"
            className="block py-2 hover:text-gray-300 transition-all duration-200"
            onClick={toggleMenu}
          >
            Sobre nós
          </a>
          <a
            href="#services"
            className="block py-2 hover:text-gray-300 transition-all duration-200"
            onClick={toggleMenu}
          >
            Serviços
          </a>
          <Link
            href="/agendamento"
            className="block py-2 hover:text-gray-300 transition-all duration-200 "
            onClick={toggleMenu}
          >
            Agendar
          </Link>
        </div>
      )}
    </header>
  );
}
