"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { navLinks } from "@/constants";
import Socials from "./Socials";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const classes = "nav__icons__mobile";

  const handleNav = () => {
    setNav(!nav);
  };

  const handleShadow = () => {
    if (window.scrollY >= 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShadow);
  }, []);

  const navigation = navLinks.map((link, clas) => {
    return (
      <Link href={link.path} key={link.path}>
        <li className="nav__links">{link.name}</li>
      </Link>
    );
  });

  return (
    <nav
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-slate-50"
          : "fixed w-full h-20 z-[100] bg-slate-50"
      }>
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <h1 className="text-purple">A.A</h1>

        <div>
          <ul className="hidden md:flex">
            {navLinks.map((link) => (
              <Link href={link.path} key={link.path}>
                <li className="nav__links">{link.name}</li>
              </Link>
            ))}
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
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-10 px-5 ease-in duration-500 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
          }>
          <div className="flex w-full items-center justify-between">
            <div>
              <h1 className="text-purple">A.A</h1>
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
              {navLinks.map((link) => (
                <Link href={link.path} key={link.path}>
                  <li onClick={handleNav} className="nav__links__mobile ">
                    {link.name}
                  </li>
                </Link>
              ))}
            </ul>

            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-purple ">
                Let&#39;s connect
              </p>
              <div
                className="flex items-center justify-between gap-4 my-4 sm:w-[80
                %]">
                <Socials className={classes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
