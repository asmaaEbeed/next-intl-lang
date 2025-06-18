"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";

type Props = {
  lang: string;
  dir: "ltr" | "rtl";
  children: React.ReactNode;
};

export const TranslationReady = ({ lang, dir, children }: Props) => {
  const { i18n } = useTranslation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      if (document.documentElement.dir !== dir) {
        document.documentElement.dir = dir;
      }

      if (i18n.language !== lang) {
        i18n.changeLanguage(lang).finally(() => setReady(true));
      } else {
        setReady(true);
      }
    }
  }, [i18n, i18n.isInitialized, lang, dir]);

  if (!ready) return <Loader />;

  return <>{children}</>;
};
