"use client";
import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import cookie from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const Form = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/v1/api/auth/register", {
        email,
        username: userName,
        password,
      });
      cookie.set("token", response.data.user.token);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
    initial={{x:-150}}
    whileInView={{x:0}}
    transition={{duration:0.5}}
    className="w-1/3 max-xl:w-[90%] text-center mx-auto">
      <form onSubmit={handleSubmit} className="mt-7">
        <label className="block text-start font-bold text-gray-600">ادخل اسمك كاملا</label>
        <input onChange={(e) => setUserName(e.target.value)} className="w-full h-12 rounded-md mt-3 border border-gray-600 p-2" type="text" />
        <label className="block text-start font-bold text-gray-600 mt-4">البريد الالكتروني</label>
        <input onChange={(e) => setEmail(e.target.value)} className="w-full h-12 rounded-md mt-3 border border-gray-600 p-2" type="email" />
        <label className="block text-start font-bold text-gray-600 mt-4">كلمة المرور</label>
        <input onChange={(e) => setPassword(e.target.value)} className="w-full h-12 rounded-md mt-3 border border-gray-600 p-2" type="password" />
        <button type="submit" className="w-full h-12 rounded-3xl text-white mt-6 bg-[#3EA99F] hover:bg-[#2e8f88] transition">سجل الان</button>
      </form>
      <p className="my-5">او</p>
      <Link href="http://localhost:8000/v1/api/auth/google">
        <button className="w-64 h-12 border border-gray-500 text-sm flex gap-2 text-gray-600 cursor-pointer rounded-md justify-center items-center mx-auto hover:bg-gray-100 transition">
          <FcGoogle className="text-2xl" /> عن طريق جوجل
        </button>
      </Link>
    </motion.div>
  );
};

export default Form;