"use client";
import Image from "next/image";

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
            src={"home/paris.jpg"}
            alt=""
            quality={100}
            width={640}
            height={300}
          />
        </motion.div>
        <motion.div
          variants={heroImagesItems}
          className="col-span-6 lg:col-span-9"
        >
          <Image
            className="w-full  h-64 p-2 object-cover rounded-3xl  shadow-primary bg-white "
            src={"home/rooma.jpg"}
            alt=""
            width={640}
            height={300}
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
            width={640}
            height={300}
            src={"home/adv.jpg"}
            quality={100}
          />
        </motion.div>
        <motion.div
          variants={heroImagesItems}
          className="col-span-6 lg:col-span-3"
        >
          <Image
            className="w-full   h-64 p-2 object-cover rounded-3xl  shadow-primary bg-white "
            src={"home/sea.jpg"}
            width={640}
            height={300}
            alt=""
            quality={100}
          />
        </motion.div>
      </motion.ul>
    </>
  );
};

export default HeroImages;
