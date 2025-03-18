
import Image from "next/image";
import styles from "./style.module.css";
import Slider from "@/components/slider/Slider";
import Link from "next/link";
import Cors from "@/components/homecors/Cors";
import { delay } from "@/components/lip/delay";

import Hero from "@/components/Home/Hero";
import HeroTwo from "@/components/Home/HeroTwo";
const page = async () => {
  await delay(2000);
  return (
    <>
      <Hero/>
      <Slider />
     <HeroTwo/>
      <Cors />
    </>
  );
};

export default page;
