import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import Logo from "../../../../public/images/sidebar/hospital-logo.png";

const AppSidebarHeader =  () => {
  const  t  =  useTranslations("common");

  return (
    <SidebarHeader className="flex items-center gap-y-6 pt-[30px] px-3">
      <div className="flex items-center gap-x-2">
        <Image
          src={Logo}          alt="logo"
          width={30}
          height={30}
          className="size-9 object-cover"
        />

        <h1 className="text-lg font-semibold group-data-[state=collapsed]:hidden">
          Hospital Name
        </h1>
      </div>

      <div className="flex group-data-[state=collapsed]:flex-col items-center justify-between w-full">
        <span className="text-[#868899] text-sm leading-[18px] transition-opacity duration-200 group-data-[state=collapsed]:hidden">
          {t("collapse")}
        </span>
        <SidebarTrigger className="w-[30px] h-[30px]" />
      </div>
    </SidebarHeader>
  );
};

export default AppSidebarHeader;
