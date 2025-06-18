"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { TopNavItem, topNavItems } from "./topNavData";

const TopNavTitle = () => {
  const { t } = useTranslation("common");

  const pathname = usePathname() ?? "";

  let clean = pathname.startsWith("/app")
    ? pathname.replace(/^\/app(?=\/|$)/, "")
    : pathname;

  if (clean.length > 1 && clean.endsWith("/")) {
    clean = clean.slice(0, -1);
  }

  if (clean === "") clean = "/";

  const navTitle = topNavItems.find((item: TopNavItem) => item.path === clean);

  return (
    <div className="flex items-center">
      <SidebarTrigger className="md:hidden w-[30px] h-[30px] bg-main-blue rounded-lg mx-3 text-white hover:bg-light-blue hover:text-white cursor-pointer" />
      <h1 className="text-2xl md:text-4xl font-medium text-main-blue">
        {navTitle && t(navTitle?.title)}
      </h1>
    </div>
  );
};
export default TopNavTitle;
