'use client'
import React from 'react'
import Link from 'next/link'
import styles from "../../app/(puplic)/style.module.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="home w-full  flex-wrap overflow-hidden gap-18 flex justify-center items-center h-[90vh]">
        <div className="text-wrap max-lg:hidden">
          <motion.h1
          initial={{x:100,opacity:0}}
          whileInView={{x:0, opacity:1}}
          transition={{duration:0.5}}
          className="text-4xl font-bold">تعلم البرمجة!</motion.h1>
          <motion.p
           initial={{x:100,opacity:0}}
           whileInView={{x:0, opacity:1}}
           transition={{duration:1}}
          className=" text-xl my-5">
            بكل سهولة ومن أيّ مكان؛ بادر بصناعة حلول تقنية للعالم.
          </motion.p>
          <Link href="/corses">
            {" "}
            <motion.button
             initial={{y:100,opacity:0}}
             whileInView={{y:0, opacity:1}}
             transition={{duration:1}}
            className={styles.ptn}> ابدء التعلم</motion.button>
          </Link>
        </div>
        <motion.div
         initial={{x:-300,opacity:0}}
         whileInView={{x:0, opacity:1}}
         transition={{duration:0.5}}
        className="">
          <div className="bg-white/30 max-xl:mt-14 backdrop-blur-md w-[500px] max-sm:w-[90%] max-sm:mt-24 max-sm:mx-auto  max-sm:pl-5 max-sm:h-[250px] h-[300px] pt-14 rounded-3xl border-white border-1  relative flex justify-center items-center">
            <img
              src="/screen.webp"
              alt="Description of the image"
              width={400}
              height={400}
              className="relative z-[1]"
            />
            <img
              className="absolute bottom-[-30px] left-[-30px]  z-[2]"
              src="/key.webp"
              alt="Description of the image"
              width={400}
              height={400}
            />
            
            <motion.img
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute top-22 left-0 z-[3]"
              src="/mous.webp"
              alt="Description of the image"
              width={100}
              height={100}
            />
          </div>
          <div className="text-wrap text-center w-full hidden max-lg:block mt-10 ">
            <h1 className="text-4xl  font-bold">تعلم البرمجة بكل سهوله</h1>
            <Link href="/corses">
              {" "}
              <button className={styles.ptn}> ابدء التعلم</button>
            </Link>
          </div>
        </motion.div>
      </div>
  )
}

export default Hero