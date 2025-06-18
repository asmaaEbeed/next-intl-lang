import { almarai, inter, poppins, publicSans, rubik } from "@/lib/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { StoreProvider } from "./StoreProvider";
import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "HIS Application",
  description: "HIS Application",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const dir = locale === "ar" ? "rtl" : "ltr";
  console.log("locale", locale, dir);

  // const cookieStore = await cookies();
  // const lang = cookieStore.get("i18nextLng")?.value || "en";
  // const dir = lang === "ar" ? "rtl" : "ltr";
  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${rubik.variable} ${poppins.variable} ${inter.variable}  ${publicSans.variable}  ${almarai.variable} antialiased`}
      >
        <StoreProvider>
          <NextIntlClientProvider>
            {children}
            <Toaster
              position={locale === "ar" ? "bottom-left" : "bottom-right"}
              theme="light"
              richColors
            />
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
