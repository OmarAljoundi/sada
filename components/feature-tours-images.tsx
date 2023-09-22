"use client";

import { useTranslation } from "@/app/i18n/client";
import { imagesArray } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect, FC } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const FeatureToursImages: FC<{ lng: string }> = ({ lng }) => {
  const [index, setIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t } = useTranslation(lng);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
      });
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <div className="flex flex-wrap -mx-4 mb-4" ref={ref}>
        {imagesArray.map((item, imageIndex) => (
          <motion.div
            className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4"
            key={imageIndex}
            animate={controls}
            initial={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: item.dely,
            }}
          >
            <div className="relative h-80 mb-5 mx-auto rounded-lg group">
              <Image
                className=" w-full relative h-full rounded-lg object-cover"
                src={item.src}
                alt=""
              />
              <div
                className={cn(
                  "absolute inset-0 bg-primary  rounded-lg transition-all duration-500",
                  index === imageIndex ? "opacity-80" : "opacity-20"
                )}
              ></div>

              {index !== imageIndex && (
                <button
                  className="bg-black/50 font-semibold text-white w-full shadow-primary px-4 py-6 text-xl  left-0 right-0  z-50 absolute p-6  bottom-0 items-start "
                  onClick={() => setIndex(imageIndex)}
                >
                  {t("ShowDetails")}
                </button>
              )}

              <div
                className={cn(
                  "absolute inset-0 p-6 flex flex-col items-start transition-all duration-700",
                  index === imageIndex ? "opacity-75" : " opacity-0"
                )}
              >
                <span className="text-white text-lg bg-[#101010] px-2 text-center block w-full rounded-lg mb-4">
                  {t(item.title)}
                </span>
                <p className="mb-auto text-base lg:text-base text-white font-bold text-center">
                  {t(item.description)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default FeatureToursImages;
