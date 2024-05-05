import React from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { RiSearch2Line } from "react-icons/ri";

export default function Header() {
  return (
    <Navbar className="border-b-2 h-18 flex justify-between items-center">
      <Link to={"/"}>
        <img
          src={logoImg}
          alt="logo"
          className="h-16 w-16"
          style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))" }}
        ></img>
      </Link>

      <div className="flex items-center">
        <form >
          <TextInput
            type="text"
            placeholder="Search..."
            className="hidden lg:inline"
          />
        </form>
        <RiSearch2Line className="ml-2" />
      </div>

      <Link to={"/events"}>
        <span className="">events</span>
      </Link>
      <Link to={"/blog"}>
        <span className="">Blogs</span>
      </Link>
      <Link to={"/about"}>
        <span className="">About</span>
      </Link>
    </Navbar>
  );
}
