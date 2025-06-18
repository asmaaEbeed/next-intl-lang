"use client";

import Image, { StaticImageData } from "next/image";
import MessageIcon from "../../../../public/images/topnav/mesage-icon.png";
import NotificationIcon from "../../../../public/images/topnav/notification-icon.png";
import ToggleLang from "./toggleLang";
import { useState } from "react";
import NotificationsSidebar from "./notifications/NotificationsSidebar";
import ChatSidebar from "./chat/ChatSidebar";

type TopNavItem = {
  icon: string | StaticImageData;
  hasNotifications?: boolean;
  notificationsCount?: number;
  onClick?: () => void;
};

const TopNavIcons = () => {
  const [isOpen, setIsOpen] = useState({
    notification: false,
    message: false,
  });

  const topNavItems: TopNavItem[] = [
    {
      icon: NotificationIcon,
      hasNotifications: true,
      notificationsCount: 3,
      onClick: () => setIsOpen({ ...isOpen, notification: true }),
    },
    {
      icon: MessageIcon,
      hasNotifications: true,
      notificationsCount: 3,
      onClick: () => setIsOpen({ ...isOpen, message: true }),
    },
  ];

  return (
    <>
      <div className="flex items-center space-x-4">
        {topNavItems.map((item, index) => (
          <div className="relative" key={index}>
            <button
              className="relative p-3 rounded-2xl bg-white hover:bg-gray-50/50 hover:shadow-sm duration-300 transition-all cursor-pointer"
              onClick={item.onClick}
            >
              <Image
                src={item.icon}
                alt="Notification"
                width={24}
                height={24}
              />
              {item.hasNotifications && (
                <span className="absolute -bottom-1 -left-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center leading-0">
                  {item.notificationsCount}
                </span>
              )}
            </button>
          </div>
        ))}
        <ToggleLang />
      </div>

      {/* Notification  */}
      <NotificationsSidebar
        isOpen={isOpen.notification}
        onClose={() => setIsOpen({ ...isOpen, notification: false })}
      />

      {/* Chat Sidebar */}
      <ChatSidebar
        isOpen={isOpen.message}
        onClose={() => setIsOpen({ ...isOpen, message: false })}
      />
    </>
  );
};

export default TopNavIcons;
