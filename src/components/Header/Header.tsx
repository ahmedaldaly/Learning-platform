"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import { CiLogout } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropUp } from "react-icons/md";
import axios from "axios";
import { BaseUrl } from "../BaseUrl";
import { motion } from "framer-motion";
const Header = () => {
  const [token, setToken] = useState<string | null>(null);
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    // جلب التوكن من الكوكيز
    const tokenFromCookie = cookie.get("token");
    setToken(tokenFromCookie || null);

    // دالة لجلب بيانات المستخدم
    const fetchUserData = async () => {
      try {
        if (!tokenFromCookie) return; // إذا لم يكن هناك توكن، لا تقم بإرسال الطلب

        const response = await axios.get(`${BaseUrl}/user/token`, {
          headers: {
            authorization: `Bearer ${tokenFromCookie}`,
          },
        });

        setUser(response.data);
      
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchUserData(); // استدعاء الدالة مرة واحدة داخل useEffect
  }, []); 
  const handleLogout = () => {
    cookie.remove("token");
    setToken(null);
    setUser(null);
   window.location.href ='/' // إعادة التوجيه إلى الصفحة الرئيسية بعد تسجيل الخروج
  };
  console.log(user);
  return (
    <motion.div
    initial={{y:-150,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.5}}
    className="w-[60%] rounded-md max-xl:w-[80%] max-xl:left-[10%] max-xl:right-[10%]  z-20  items-center px-5 flex justify-between fixed h-24 left-[20%] right-[20%] top-7 bg-[#13082F]">
      <div className=" flex gap-10">
        <Link href='/'>
        <img
          src="https://satr.codes/satr-dark-logo-without-name.5a7f23cd8141aca2d297abda78880cee.svg"
          alt=""
          />
          </Link>
        <Link href="/corses">دواراتنا</Link>
      </div>

      <div>
        {token ? (
          <div>
            <div className="flex gap-2.5 items-center ">
              <p>اهلا بك</p>
              {menu ? (
                <span className="cursor-pointer" onClick={() => setMenu(!menu)}>
                  <MdArrowDropUp />
                </span>
              ) : (
                <span className="cursor-pointer" onClick={() => setMenu(!menu)}>
                  <IoMdArrowDropdown />
                </span>
              )}
              {menu && (
                <div className="w-52 h-auto p-5 bg-opacity-50 backdrop-blur-sm bg-white left-0 absolute top-22 rounded-2xl">
               {user?.isAdmin && (
                  <Link href="/admin">
                    <button className="block w-full text-left px-4 py-2 text-green-300 hover:bg-[#18aeb1] rounded-lg transition">
                      لوحة التحكم
                    </button>
                  </Link>
                )}
                <button
                  className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-600 hover:text-white rounded-lg transition"
                  onClick={handleLogout}
                >
                  <CiLogout className="inline-block mr-2" />
                  تسجيل الخروج
                </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {" "}
            <Link href="/register">
              {" "}
              <button className="w-36 h-10 bg-[#18aeb1] rounded-md text-white cursor-pointer max-sm:w-24">
                انشاء حساب
              </button>
            </Link>
            <Link href="/login">
              {" "}
              <button className="w-28 h-10 max-md:hidden mr-4  rounded-md text-[#18aeb1] border-1 border-[#18aeb1] cursor-pointer">
                {" "}
                تسجيل دخول
              </button>
            </Link>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
