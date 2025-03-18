'use client'
import React from 'react'
import { motion } from "framer-motion";
const HeroTwo = () => {
  return (
    <div>
         <div className="w-full  grid grid-cols-2 max-md:grid-cols-1 max-md:gap-10 grid-rows-2 gap-5 homebg justify-center max-md:p-5 max-md:pt-20 p-32 max-xl:px-14 ">
        <div>

          <motion.div
          initial={{y:150}}
          whileInView={{y:0}}
          transition={{duration:0.5}}
          className="bg-[#060642] max-xl:w-[350px] max-md:w-full max-md:mx-auto max-md:mb-10 h-[200px] rounded-4xl w-[500px] p-8 pt-20 relative ">
            <img
              className="w-56 top-[-100px] right-0 absolute"
              src="https://satr.codes/assets/images/guest-page/arabic-content.webp"
              alt=""
            />
            <div className="">
              <h1 className="text-2xl font-bold ">
                محتوى متكامل باللغة العربية
              </h1>
              <p className="text-gray-600">
                جميع محتوى منصة سطر متاح باللغة العربية، في أبرز مجالات التقنية
                والبرمجة.
              </p>
            </div>
          </motion.div>

          <motion.div
           initial={{y:150}}
           whileInView={{y:0}}
           transition={{duration:0.5}}
          className="bg-[#060642] max-xl:w-[350px] max-md:w-full max-md:mx-auto max-md:mb-10 mt-44 gap h-[200px] rounded-4xl w-[500px] p-8 pt-20 relative ">
            <img
              className="w-56 top-[-100px] right-0 absolute"
              src="https://satr.codes/modern-tech.f6054053a2babebad541fbf82bd20237.svg"
              alt=""
            />
            <div className="">
              <h1 className="text-2xl font-bold">محتوى مجاني ودائم</h1>
              <p className="text-gray-600">
                إتاحة الوصول لجميع المحتوى التعليمي: المسارات، الدورات،
                الكيفيات؛ مجانًا وبشكل دائم!
              </p>
            </div>
          </motion.div>
        </div>

        <div className=" max-md:mt-[500px]">

          <motion.div
           initial={{y:150}}
           whileInView={{y:0}}
           transition={{duration:0.5}}
          className="bg-[#060642] mt-34 max-xl:w-[350px] max-md:w-full max-md:mx-auto max-md:mb-10 h-[200px] rounded-4xl w-[500px] p-8 pt-20 relative ">
            <img
              className="w-56 top-[-150px] right-0 absolute"
              src="https://satr.codes/free-content.8e1d2b624ec88c9252c35647fa7dd6d9.svg"
              alt=""
            />
            <div className="">
              <h1 className="text-2xl font-bold">تعلم أحدث التقنيات</h1>
              <p className="text-gray-600">
                محتوى تعليمي متجدّد بأحدث الممارسات التقنية لمواكبة متطلبات سوق
                العمل.
              </p>
            </div>
          </motion.div>

          <motion.div
           initial={{y:150}}
           whileInView={{y:0}}
           transition={{duration:0.5}}
          className="bg-[#060642] max-xl:w-[350px] max-md:w-full max-md:mx-auto max-md:mb-10 mt-32 h-[200px] rounded-4xl w-[500px] p-8 pt-20 relative ">
            <img
              className="w-56 top-[-100px] right-0 absolute"
              src="data:image/webp;base64,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"
              alt=""
            />
            <div className="">
              <h1 className="text-2xl font-bold">
                تعلّم في أي وقت ومن أي مكان!
              </h1>
              <p className="text-gray-600">
                فرصة الوصول للمحتوى التعليمي في مختلف الأوقات ومن أيّ مكان.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HeroTwo