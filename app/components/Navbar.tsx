"use client";
import { navLinks } from "../../constants";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Button } from "./index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image
        src="/assets/logo.png"
        alt="logo"
        width={124}
        height={32}
        className="contain"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>

        ))}
      </ul>
      <div className="sm:flex hidden">
      <Button name="Let's Talk"/>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 
              dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-slate-600
        absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
        `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-white font-poppins font-normal cursor-pointer text-[16px] mr-0 mb-4`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>

              
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
