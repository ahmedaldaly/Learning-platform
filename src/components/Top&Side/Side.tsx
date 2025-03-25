"use client";
import React, { useState } from "react";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { IoMdAdd,IoMdBook  } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { TiWorld } from "react-icons/ti";
const Side = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={`h-full px-7 overflow-hidden fixed top-0 backdrop-blur-sm bg-white/10 shadow-md transition-all duration-300 ${
        menu ? "w-44" : "w-20"
      }`}
    >
      <div
        className="text-2xl absolute right-2 top-3"
        onClick={() => setMenu(!menu)}
      >
        <RiArrowLeftDoubleFill />
      </div>

      <Link
        href="/admin/user"
        className=" mt-14 text-2xl flex items-center mb-2.5  gap-2 hover:text-orange-500 hover:scale-105 duration-200"
      >
        <span className="">
          <FaRegUser />
        </span>
        <span className={`${menu ? "block" : "hidden"}`}>User</span>
      </Link>
      <hr />

      <Link
        href="/admin/addcategory"
        className=" mt-5 text-2xl flex items-center mb-2.5  gap-2 hover:text-orange-500 hover:scale-105 duration-200"
      >
        <span className="">
          <IoMdAdd />
        </span>
        <span className={`${menu ? "block" : "hidden"}`}>Category</span>
      </Link>
      <hr />
      <Link
        href="/admin/allcategory"
        className=" mt-5 text-2xl flex items-center mb-2.5  gap-2 hover:text-orange-500 hover:scale-105 duration-200"
      >
        <span className="">
          <BiCategory />
        </span>
        <span className={`${menu ? "block" : "hidden"}`}>Category</span>
      </Link>
      <hr />
      <Link
        href="/admin/addcorses"
        className=" mt-5 text-2xl flex items-center mb-2.5  gap-2 hover:text-orange-500 hover:scale-105 duration-200"
      >
        <span className="">
          <IoMdAdd />
        </span>
        <span className={`${menu ? "block" : "hidden"}`}>Corses</span>
      </Link>
      <hr />
      <Link
        href="/admin/allcorses"
        className=" mt-5 text-2xl flex items-center mb-2.5  gap-2 hover:text-orange-500 hover:scale-105 duration-200"
      >
        <span className="">
          <IoMdBook  />
        </span>
        <span className={`${menu ? "block" : "hidden"}`}>Corses</span>
      </Link>
        <Link
        href="/"
        className=" mt-5 text-2xl flex items-center mb-2.5  gap-2 hover:text-orange-500 hover:scale-105 duration-200"
      >
        <span className="">
          <TiWorld  />
        </span>
        <span className={`${menu ? "block" : "hidden"}`}>Home</span>
      </Link>
    </div>
  );
};

export default Side;
