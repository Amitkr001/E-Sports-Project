import React, { useState } from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { RiSearch2Line, RiMenu3Line, RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Navbar className="border-b-2 h-18 flex justify-between items-center">
      <Link to={"/"}>
        <img
          src={logoImg}
          alt="logo"
          className="h-16 w-16"
          style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))" }}
        />
      </Link>

      <div className="flex items-center">
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            className="hidden lg:inline"
          />
        </form>
        <RiSearch2Line className="ml-2" />
      </div>

      <div className="lg:hidden">
        {!isOpen ? (
          <RiMenu3Line className="text-gray-600 text-2xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <RiCloseLine className="text-gray-600 text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      <div className={`lg:flex ${isOpen ? 'flex flex-col mt-4' : 'hidden'}`}>
        <Link to={"/events"} className="text-gray-600 hover:text-gray-800 lg:mr-4 block lg:inline">
          Events
        </Link>
        <Link to={"/Blogs"} className="text-gray-600 hover:text-gray-800 lg:mr-4 block lg:inline">
          Blogs
        </Link>
        <Link to={"/about"} className="text-gray-600 hover:text-gray-800 block lg:inline">
          About
        </Link>
      </div>

      <Link to="/Signin">
        <button
          className={`bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-4 rounded-full transition duration-300 ${
            isHovered ? "animate-border" : ""
          }`}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          Sign In
        </button>
      </Link>
    </Navbar>
  );
}