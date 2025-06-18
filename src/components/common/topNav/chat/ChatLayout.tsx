"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import PrivateChatSidebar from "./PrivateChatSidebar";
import Chat from "./Chat";
import { useTranslation } from "react-i18next";

const tabs = [
  {
    label: "department",
    value: "department",
    notification: true,
  },
  {
    label: "private",
    value: "private",
  },
];
const ChatLayout = () => {
  const { t } = useTranslation("dialog");
  const [activeTab, setActiveTab] = useState("department");

  return (
    <div className="w-full flex flex-col gap-y-6">
      <nav className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-7 border-b-2 border-gray-200">
        {tabs.map((tab) => (
          <div className="flex items-center gap-x-2" key={tab.value}>
            <span
              className={cn(
                "pb-4 text-xs sm:text-sm leading-4 text-gray-600 cursor-pointer",
                activeTab === tab.value &&
                  "relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-main-blue after:rounded-full"
              )}
              onClick={() => setActiveTab(tab.value)}
            >
              {t(tab.label)}
            </span>
            {tab.notification && (
              <div className="size-4 md:size-5 bg-main-red text-white text-xs md:text-[12px] font-poppins font-medium text-center rounded-full mb-4">
                6
              </div>
            )}
          </div>
        ))}
      </nav>

      {activeTab === "department" && <Chat />}
      {activeTab === "private" && <PrivateChatSidebar />}
    </div>
  );
};

export default ChatLayout;
