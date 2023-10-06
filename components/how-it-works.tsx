import { useTranslation } from "@/app/i18n";

export default async function HowItWorks({ params: lng }: { params: string }) {
  const { t } = await useTranslation(lng);
  return (
    <section id={"how_it_works"}>
      <div className="py-20 bg-[#1c1c1c] radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 mx-auto max-w-md text-center">
            <span className="text-primary font-bold">
              {t("BookStepsTitle")}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-white">
              {t("BookStepsDescription")}
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="py-10 px-6 bg-white shadow rounded text-center">
                <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-primary/10 rounded text-2xl text-primary font-bold">
                  1
                </span>
                <h3 className="mb-4 text-xl font-bold font-heading ">
                  {t("BookStepsTitleOne")}
                </h3>
                <p className="text-gray-500 leading-loose">
                  {t("BookStepsDescriptionOne")}
                </p>
              </div>
            </div>
            <div className="mb-8 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="py-10 px-6 bg-white shadow rounded text-center">
                <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-primary/10 rounded text-2xl text-primary font-bold">
                  2
                </span>
                <h3 className="mb-4 text-xl font-bold font-heading">
                  {t("BookStepsTitleTwo")}
                </h3>
                <p className="text-gray-500 leading-loose">
                  {t("BookStepsDescriptionTwo")}
                </p>
              </div>
            </div>
            <div className="w-full md:w-full lg:w-1/3 px-4">
              <div className="py-10 px-6 bg-white shadow rounded text-center">
                <span className="mb-6 w-16 h-16 inline-flex justify-center items-center bg-primary/10 rounded text-2xl text-primary font-bold">
                  3
                </span>
                <h3 className="mb-4 text-xl font-bold font-heading">
                  {t("BookStepsTitleThree")}
                </h3>
                <p className="text-gray-500 leading-loose">
                  {t("BookStepsDescriptionThree")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
