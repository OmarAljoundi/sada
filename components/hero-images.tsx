"use client";
import Image from "next/image";
import Paris from "../public/paris.jpg";
import Roma from "../public/rooma.jpg";
import Sea from "../public/sea.jpg";
import Adv from "../public/adv.jpg";
import { motion } from "framer-motion";
import { heroImagesItems, heroImagesContainer } from "./framer-motion";

const HeroImages = () => {
  return (
    <>
      <motion.ul
        className="w-full lg:w-1/2 px-4  grid grid-cols-12 gap-x-4 gap-y-2"
        variants={heroImagesContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={heroImagesItems}
          className="col-span-6 lg:col-span-3"
        >
          <Image
            className="w-full  h-64 p-2 object-cover rounded-3xl  shadow-primary bg-white "
            src={Paris}
            alt=""
            quality={100}
          />
        </motion.div>
        <motion.div
          variants={heroImagesItems}
          className="col-span-6 lg:col-span-9"
        >
          <Image
            className="w-full  h-64 p-2 object-cover rounded-3xl  shadow-primary bg-white "
            src={Roma}
            alt=""
            quality={100}
          />
        </motion.div>

        <motion.div
          variants={heroImagesItems}
          className="col-span-6 lg:col-span-9"
        >
          <Image
            className="w-full h-64 p-2 object-cover rounded-3xl  shadow-primary bg-white "
            alt=""
            src={Adv}
            quality={100}
          />
        </motion.div>
        <motion.div
          variants={heroImagesItems}
          className="col-span-6 lg:col-span-3"
        >
          <Image
            className="w-full   h-64 p-2 object-cover rounded-3xl  shadow-primary bg-white "
            src={Sea}
            alt=""
            quality={100}
          />
        </motion.div>
      </motion.ul>
    </>
  );
};

export default HeroImages;
