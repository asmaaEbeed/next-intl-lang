// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import "@/lib/utils/i18n";
// import JSCookie from "js-cookie";
// import { useTranslation } from "react-i18next";
"use client";

import { usePathname } from "next/navigation";
import { IoLanguageSharp } from "react-icons/io5";
import Link from "next/link";
import { useLocale } from "next-intl";

const ToggleLang = () => {
  // const { i18n } = useTranslation();
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // const toggleLanguage = () => {
  //   const newLang = i18n.language === "en" ? "ar" : "en";
  //   i18n.changeLanguage(newLang);
  //   console.log("Testing new Language", newLang);

  //   // Set both cookie names to ensure compatibility
  //   JSCookie.set("i18nextLng", newLang, { expires: 365 });

  //   // Update DOM attributes directly
  //   document.documentElement.lang = newLang;
  //   document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  //   document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  // };

  // // Prevent hydration mismatch by not rendering language-dependent content until mounted
  // if (!mounted) {
  //   return (
  //     <Button
  //       variant="ghost"
  //       className="flex items-center justify-center cursor-pointer font-semibold w-12 h-12 rounded-[15px] bg-white"
  //       disabled
  //     >
  //       <IoLanguageSharp className="text-gray-900 text-2xl" />
  //     </Button>
  //   );
  // }
  const locale = useLocale();
  const pathname = usePathname();

    // Determine the new locale to switch to
  const newLocale = locale === "en" ? "ar" : "en";

  // Remove current locale segment and replace with new one
  const segments = pathname.split("/");
  segments[1] = newLocale; // change locale segment
  const newPath = segments.join("/");
  
  return (
    // <button
    //   onClick={toggleLanguage}
    //   // variant="ghost"
    //   className="flex items-center justify-center cursor-pointer font-semibold w-12 h-12 rounded-[15px] bg-white hover:bg-gray-50/50 hover:shadow-sm duration-300 transition-all"
    // >
    //   <IoLanguageSharp className="text-gray-900 text-2xl" />
    // </button>
    <Link href={newPath}>
      <IoLanguageSharp className="text-gray-900 text-2xl" />
    </Link>
  );
};

export default ToggleLang;
