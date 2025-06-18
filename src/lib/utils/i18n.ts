"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
// Arabic translations
import arAuth from "@/locales/ar/auth.json";
import arCommon from "@/locales/ar/common.json";
import arRoles from "@/locales/ar/roles.json";
import arDialog from "@/locales/ar/dialog.json";
import arTable from "@/locales/ar/table.json";
import arValidationErrors from "@/locales/ar/validationErrors.json";

// English translations
import enAuth from "@/locales/en/auth.json";
import enCommon from "@/locales/en/common.json";
import enRoles from "@/locales/en/roles.json";
import enDialog from "@/locales/en/dialog.json";
import enTable from "@/locales/en/table.json";
import enValidationErrors from "@/locales/en/validationErrors.json";

const resources = {
  en: {
    auth: enAuth,
    common: enCommon,
    roles: enRoles,
    dialog: enDialog,
    table: enTable,
    validationErrors: enValidationErrors,
  },
  ar: {
    auth: arAuth,
    common: arCommon,
    roles: arRoles,
    dialog: arDialog,
    table: arTable,
    validationErrors: arValidationErrors,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  ns: ["auth", "common", "roles", "dialog", "table", "validationErrors"],
  defaultNS: "common",
});

export default i18n;
