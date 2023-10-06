"use client";
import HeroImages from "./hero-images";
import { Button } from "./ui/button";
import { useTranslation } from "@/app/i18n/client";
import { AnimatePresence, motion } from "framer-motion";

export default function HomeHero({ params: lng }: { params: string }) {
  const { t } = useTranslation(lng);

  return (
    <AnimatePresence>
      <section className="relative bg-[#1c1c1c] overflow-hidden" id={"home"}>
        <div className="relative pt-12 lg:pt-20 pb-20 z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
                <div className="w-full text-center lg:text-left">
                  <div className="max-w-md mx-auto lg:mx-0">
                    <motion.h2
                      className="mb-3 text-4xl lg:text-4xl text-primary rtl:lg:text-right rtl:text-center font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className=" ">{t("HeroTitle")}</span>
                    </motion.h2>
                  </div>
                  <div className="max-w-sm mx-auto lg:mx-0">
                    <motion.p
                      className="mb-6 text-gray-400 leading-loose rtl:lg:text-right rtl:text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {t("HeroDescription1")}
                    </motion.p>
                    <div className="rtl:text-right">
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full
                     lg:w-auto py-2 px-6 leading-loose bg-primary hover:bg-primary/50
                      text-white font-semibold rounded-l-xl 
                       rounded-t-xl transition duration-200"
                      >
                        {t("HeroAction")}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
              <HeroImages />
            </div>
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}
