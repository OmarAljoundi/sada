"use client";
import { useTranslation } from "@/app/i18n/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Faqs({ params: lng }: { params: string }) {
  const { t } = useTranslation(lng);

  return (
    <section>
      <div className="py-20 bg-[#1c1c1c] radius-for-skewed">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-xl mx-auto text-center">
            <h2 className="text-white text-5xl font-bold">{t("Faq")}</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {(
              t(`QA`, { returnObjects: true }) as {
                question: string;
                answer: string;
              }[]
            ).map(({ answer, question }, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full px-4 mb-8 bg-white rounded-bl-3xl rounded-t-3xl"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="mb-6 flex items-center">
                      <span className="ltr:mr-4 rtl:ml-4 inline-block p-3 rounded-full bg-primary">
                        <svg
                          className="w-6 h-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          ></path>
                        </svg>
                      </span>
                      <h3 className="text-xl font-bold">{question}</h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className=" leading-loose text-lg text-black">
                      {answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
