"use client";
import { useTranslation } from "@/app/i18n/client";
import FeatureToursImages from "./feature-tours-images";
import { AnimatePresence, motion } from "framer-motion";

export default function FeatureTours({ params: lng }: { params: string }) {
  const { t } = useTranslation(lng);
  return (
    <section id={"features_tours"}>
      <div className="py-20 bg-[#1c1c1c] radius-for-skewed">
        <div className="container px-4 mx-auto">
          <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
            <motion.div
              className="text-center lg:text-left rtl:lg:text-right"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeatType: "reverse" }}
            >
              <p className="text-primary font-bold text-4xl">{t("Tours")}</p>
              <h2 className="text-base lg:text-xl font-bold font-heading text-white mt-4">
                {t("ToursFeatures")}
              </h2>
            </motion.div>
          </div>
          <FeatureToursImages lng={lng} />
        </div>
      </div>
    </section>
  );
}
