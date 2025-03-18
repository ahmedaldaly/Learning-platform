"use client";
import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import cookie from "js-cookie";
import Link from "next/link";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    try {
      const response = await axios.post(
        "http://localhost:8000/v1/api/auth/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data.user); // طباعة الرد من الخادم

      await cookie.set("token", response.data.user.token);
      toast.success("تم تسجيل الدخول بنجاح!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 3000); // الانتقال بعد 3 ثوانٍ
    } catch (err) {
      toast.error("تحقق من بياناتك!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <motion.div
      initial={{ x: -150 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-1/3 max-xl:w-[90%] h-auto text-center mx-auto"
    >
      <ToastContainer position="top-right" autoClose={3000} /> {/* إضافته هنا */}
      <div className="mt-6">
        <form onSubmit={handleSubmit} className="mt-7">
          <div className="text-start my-8">
            <label htmlFor="email" className="font-bold text-gray-600">
              البريد الإلكتروني
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 rounded-md mt-3 border border-gray-600 px-2"
              type="email"
              id="email"
              required
            />
          </div>
          <div className="text-start">
            <label htmlFor="password" className="font-bold text-gray-600">
              كلمة المرور
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 rounded-md mt-3 border border-gray-600 px-2"
              type="password"
              id="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full h-12 rounded-3xl text-white mt-10 bg-[#3EA99F] hover:bg-[#2e857e] transition"
          >
            سجل الآن
          </button>
        </form>
        <p className="my-5">أو</p>
        <Link href="http://localhost:8000/v1/api/auth/google">
          <button className="w-64 h-12 border border-gray-500 text-sm flex gap-2 text-gray-600 cursor-pointer rounded-md justify-center items-center mx-auto hover:bg-gray-100 transition">
            <FcGoogle className="text-2xl" /> عن طريق جوجل
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Form;
