// // src/lib/i18n/server.ts
// import i18next from "i18next";
// import resourcesToBackend from "i18next-resources-to-backend";

// export async function getServerTranslation(locale: string, namespace: string) {
//   const i18nInstance = i18next.createInstance();

//   await i18nInstance
//     .use(
//       resourcesToBackend((lng: string, ns: string) =>
//         import(`@/locales/${lng}/${ns}.json`).then((res) => res.default)
//       )
//     )
//     .init({
//       lng: locale,
//       fallbackLng: "en",
//       supportedLngs: ["en", "ar"],
//       ns: [namespace],
//       defaultNS: namespace,
//       interpolation: {
//         escapeValue: false,
//       },
//     });

//   return {
//     t: i18nInstance.getFixedT(locale, namespace),
//     lang: locale,
//     dir: locale === "ar" ? "rtl" : "ltr",
//   };
// }
