"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { CollapsibleContent, Collapsible } from "@/components/ui/collapsible";
import { SidebarItem, sidebarItems } from "./sidebarData";
import AppSidebarFooter from "./AppSidebarFooter";
// import { useTranslation } from "react-i18next";
import {useTranslations } from 'next-intl';
import { useRouter } from "@/i18n/navigation";

const AppSidebarContent = () => {
  const pathname = usePathname() ?? "";

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          {sidebarItems.map((item) => {
            const isLinkActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return item.list ? (
              <SidebarItemWithList
                key={item.label}
                item={item}
                isLinkActive={isLinkActive}
              />
            ) : (
              <SingleSidebarItem
                key={item.label}
                item={item}
                isLinkActive={isLinkActive}
                hasNotifications={Boolean(item.hasNotifications)}
              />
            );
          })}
          <AppSidebarFooter />
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
};

export default AppSidebarContent;

const SingleSidebarItem = ({
  item,
  isLinkActive,
  hasNotifications,
}: {
  item: SidebarItem;
  isLinkActive: boolean;
  hasNotifications: boolean;
}) => {
  const router = useRouter();
  const t = useTranslations("common");

  return (
    <SidebarMenuItem key={item.label}>
      <SidebarMenuButton
        isActive={isLinkActive}
        onClick={() => item.href && router.push(item.href)}
      >
        <div className="flex items-center justify-between gap-3 w-full">
          <div className="flex items-center gap-3">
            <Image src={item.icon} alt={item.label} width={20} height={20} />
            <span className="leading-[22px] text-[15px]">{t(item.label)}</span>
          </div>

          {hasNotifications && (
            <SidebarMenuBadge className="bg-main-red w-4 h-4 rounded-full leading-0 text-[10px] relative font-rubik">
              1
            </SidebarMenuBadge>
          )}
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const SidebarItemWithList = ({
  item,
}: // isLinkActive,
{
  item: SidebarItem;
  isLinkActive: boolean;
}) => {
  const t = useTranslations("common");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <SidebarMenuItem key={item.label}>
      <SidebarMenuButton onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between gap-3 w-full">
          <div className="flex items-center gap-3">
            <Image src={item.icon} alt={item.label} width={20} height={20} />
            <span className="flex-1 leading-[22px] text-[15px]">
              {t(item.label)}
            </span>
          </div>
          {item.list && (
            <ChevronRight
              className={`h-6 w-6 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
            />
          )}
        </div>
      </SidebarMenuButton>

      <Collapsible open={isOpen}>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.list?.map((listItem) => (
              <SidebarMenuSubItem key={listItem.label}>
                <SidebarMenuSubButton
                  isActive={listItem.href === pathname}
                  onClick={() => router.push(listItem.href)}
                >
                  <div className="flex items-center gap-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#EC8038]" />
                    <span>{t(listItem.label)}</span>
                  </div>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
};
