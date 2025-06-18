// import { cookies } from "next/headers";
// import { getServerTranslation } from "../i18n/server";

// export const serverTranslation = async (fileName: string) => {
//   const cookieStore = await cookies();
//   const lang = cookieStore.get("i18nextLng")?.value || "en";
//   const { t } = await getServerTranslation(lang, fileName);
//   return { t, lang, dir: lang === "ar" ? "rtl" : "ltr" };
// };
