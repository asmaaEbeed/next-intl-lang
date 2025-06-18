"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../lib/utils/i18n";

export const useInitializeI18n = () => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // useEffect(() => {
  //   if (mounted && typeof window !== "undefined") {
  //     // Check for saved language in cookie and set it
  //     const cookieValue = document.cookie
  //       .split("; ")
  //       .find(row => row.startsWith("i18nextLng="))
  //       ?.split("=")[1];
      
  //     if (cookieValue && (cookieValue === "en" || cookieValue === "ar") && cookieValue !== i18n.language) {
  //       i18n.changeLanguage(cookieValue);
  //     }
      
  //     // Update DOM attributes
  //     // document.documentElement.setAttribute("lang", i18n.language);
  //     // document.documentElement.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
  //     // document.body.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
  //   }
  // }, [mounted, i18n]);

  // useEffect(() => {
  //   if (mounted && typeof document !== "undefined") {
  //     document.documentElement.setAttribute("lang", i18n.language);
  //     document.documentElement.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
  //     document.body.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
  //   }
  // }, [i18n.language, mounted]);
};
