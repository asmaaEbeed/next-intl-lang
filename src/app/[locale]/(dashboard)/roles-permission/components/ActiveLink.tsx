"use client";

import Link from "next/link";
import { usePathname } from "@/i18n/navigation";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { NavbarItem } from "../types";

const ActiveLink = ({ item }: { item: NavbarItem }) => {
  const pathname = usePathname();
  const { t } = useTranslation("roles");

  return (
    <Link
      href={item.href}
      key={item.label}
      className={cn(
        "pb-4 text-xs sm:text-sm leading-4 text-gray-600",
        item.href === pathname &&
          "relative after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[2px] after:bg-main-blue after:rounded-full"
      )}
    >
      {t(item.label)}
    </Link>
  );
};

export default ActiveLink;
