import { useTranslation } from "@/app/i18n";
import Globe from "./globe";

export default async function CallToAction({
  params: lng,
}: {
  params: string;
}) {
  const { t } = await useTranslation(lng);
  return (
    <section className="py-20 bg-[#1c1c1c]" id={"call_to_action"}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-center -mx-4">
          <div className="mb-16 lg:mb-0 max-w-2xl  px-4 lg:text-left rtl:lg:text-right text-center w-full">
            <h2 className="mb-4 text-4xl md:text-5xl text-white font-bold font-heading">
              {t("FormTitle")}
            </h2>
            <p className="mb-8 text-gray-500 leading-loose">
              {t("FromDescription")}
            </p>
          </div>

          <div className="w-full px-4">
            <div className="mx-auto lg:mr-0 lg:ml-auto">
              <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                <form>
                  <div className="mb-6">
                    <h4 className="text-2xl">{t("ContactInfo")}</h4>
                  </div>
                  <div className="mb-4 grid gap-4 -mx-2">
                    <div className="mb-4 lg:mb-0 w-full px-2">
                      <input
                        className="py-3 px-3  bg-white border rounded w-full"
                        type="text"
                        placeholder={t("NamePlaceholder")}
                      />
                    </div>
                    <div className="w-full px-2">
                      <input
                        className="py-3 px-3 w-full bg-white border rounded"
                        type="text"
                        placeholder={t("PhonePlaceholder")}
                      />
                    </div>
                  </div>

                  <button className="mb-4 py-4 w-full rounded text-sm bg-primary hover:bg-primary/70 text-white font-bold leading-normal transition duration-200">
                    {t("SubmitButton")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
