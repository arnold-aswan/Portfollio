"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="fixed w-full h-20 shadow-xl z-[100] bg-slate-50">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h1 className="text-indigo-400">A.A</h1>

        <div>
          <ul className="hidden md:flex">
            <Link href={"/"}>
              <li className="nav__links">Home</li>
            </Link>
            <Link href={"/"}>
              <li className="nav__links">About</li>
            </Link>
            <Link href={"/"}>
              <li className="nav__links">Skills</li>
            </Link>
            <Link href={"/"}>
              <li className="nav__links">Contact</li>
            </Link>
          </ul>

          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
          }>
          <div className="flex w-full items-center justify-between">
            <div>
              <h1 className="text-indigo-400">A.A</h1>
            </div>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ">
              <AiOutlineClose />
            </div>
          </div>

          <div className="border-b border-gray-300 my-4 ">
            <p className="w-[85%] md:w-[90%] py-4 ">
              Let&#39;s build something legendary together
            </p>
          </div>

          <div className="py-4 flex flex-col ">
            <ul className="uppercase ">
              <Link href={"/"}>
                <li className="nav__links__mobile ">Home</li>
              </Link>
              <Link href={"/"}>
                <li className="nav__links__mobile ">About</li>
              </Link>
              <Link href={"/"}>
                <li className="nav__links__mobile ">Skills</li>
              </Link>
              <Link href={"/"}>
                <li className="nav__links__mobile ">Projects</li>
              </Link>
              <Link href={"/"}>
                <li className="nav__links__mobile ">Contact</li>
              </Link>
            </ul>

            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#5651e5] ">
                Let&#39;s connect
              </p>
              <div
                className="flex items-center justify-between my-4 sm:w-[80
                %]">
                <div className="nav__icons__mobile">
                  <FaLinkedinIn />
                </div>
                <div className="nav__icons__mobile">
                  <FaGithub />
                </div>
                <div className="nav__icons__mobile">
                  <AiOutlineMail />
                </div>
                <div className="nav__icons__mobile">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
