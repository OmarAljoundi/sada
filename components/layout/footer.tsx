import Image from "next/image";
import Logo from "../../public/sada-logo.png";
import { useTranslation } from "@/app/i18n";

export default async function Footer({ params: lng }: { params: string }) {
  const { t } = await useTranslation(lng);
  return (
    <section className="wave">
      <div className="py-20 bg-[#1c1c1c] radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mb-6 lg:mb-20">
            <div className="mb-6 w-full lg:w-1/5">
              <a
                className="text-white text-3xl font-bold leading-none"
                href="#"
              >
                <Image src={Logo} alt="" />
              </a>
            </div>
            <div className="mb-5 w-full lg:w-1/5">
              <p className="text-gray-400 leading-loose">{t("Footer")}</p>
            </div>
            <div className="w-full lg:w-3/5 flex flex-wrap -mx-3 justify-end">
              <div className="mb-6 w-full md:w-1/2 lg:w-1/4 lg:mr-6 px-3">
                <h5 className="mb-4 font-bold text-gray-50">{t("Office")}</h5>
                <p className="text-gray-400 leading-loose">
                  Oman, Muscat - Al Seeb J4RJ+57V, AL Mabella
                </p>
              </div>
              <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3">
                <h5 className="mb-4 font-bold text-gray-50">{t("Contacts")}</h5>
                <p className="text-gray-400">Ali@sada.travel</p>
                <p className="text-gray-400"> +96899022491</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <p className="text-sm text-gray-400">© {t("Rights")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
