export const fallbackLng = "ar";
export const languages = [
  {
    label: "العربية",
    value: fallbackLng,
  },
  {
    label: "English",
    value: "en",
  },
];
export const cookieName = "i18next";
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    //debug: true,
    supportedLngs: languages.map((i) => i.value),
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
