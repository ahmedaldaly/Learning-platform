
import { delay } from "@/components/lip/delay";
import Link from "next/link";
import Form from "./Form";
const page = async() => {
   await delay(2000);
  return (
    <>
    <div className="flex w-full mt-36 justify-center ">
     <div className="text-center">
     <h1 className="text-3xl font-bold  text-gray-500 mb-3.5">أنشىء حسابك المجاني</h1>
     <p className="text-2xl">هل لديك حساب على إدراك ؟ <Link className="text-[#43BFC7] font-bold" href='/login'>تسجيل الدخول</Link></p>
     </div>
    </div>
     <Form/>
    </>
  )
}

export default page