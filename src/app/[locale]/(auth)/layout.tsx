import Image from "next/image";
import AuthImageBackground from "../../../../public/images/auth/auth-bg.jpg";
import HospitalLogo from "../../../../public/images/auth/hospital-logo.png";
// import { cookies } from "next/headers";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
// import { serverTranslation } from "@/lib/utils/serverTranslation";

const AuthLayout =  ({ children }: { children: React.ReactNode }) => {
  // const { t, lang } = await serverTranslation("auth");
  const t = useTranslations("auth");
    const locale = useLocale();
    const lang  = locale === "en" ? "ar" : "en";
  
  // const cookieStore = await cookies();
  //   const lang = cookieStore.get("i18nextLng")?.value || "en";
  return (
    <div className="relative min-h-screen py-12 flex flex-col justify-center">
      <div className="relative z-10 w-full h-full flex flex-col items-center md:items-start justify-center md:ps-[169px] px-4 sm:px-0">
        <div className="w-full sm:w-[424px] max-w-[424px] rounded-[18px]">
          {/*Form Header*/}
          <div className="bg-main-blue h-[89px] rounded-t-[18px] flex items-center justify-center gap-x-3">
            <Image
              src={HospitalLogo}
              alt="hospital-logo"
              width={55}
              height={55}
            />

            <h2 className={cn("text-white font-bold leading-[11px] tracking-wide", lang === "en" && " font-poppins ")}>
              {t("hospitalName")}
            </h2>
          </div>

          {/* Form Body */}
          <div className="bg-white px-8 pt-9 pb-6  rounded-b-[18px] relative ">
            {children}
            <div className="mt-10 flex items-center justify-center">
              <span className="leading-[11px] tracking-wide text-gray-300 ">
                {t("poweredBy")}
                <span className="text-main-blue font-medium">
                  Med LightHouse
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={AuthImageBackground}
        alt="auth-image-background"
        fill
        quality={90}
        className={cn(lang === "ar" && "-scale-x-100")}
      />

      <div className="absolute left-[50%] top-[95%] translate-x-[-50%] text-white">
        <span className={cn(" whitespace-nowrap", lang === "en" && " font-poppins ")}>
          © 2025 [NAME]. {t("allRightsReserved")}
        </span>
      </div>
    </div>
  );
};

export default AuthLayout;
