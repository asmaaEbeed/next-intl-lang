import React from "react";
import Chat from "./Chat";
import SearchInput from "@/components/ui/search-input";
import { cn } from "@/lib/utils";
import { HiUser } from "react-icons/hi2";

const PrivateChatSidebar = () => {
  return (
    <div className="flex items-start gap-x-4">
      <div className="w-[318px] flex flex-col gap-y-3">
        <SearchInput placeholder="Search for user" />
        <div className="flex flex-col gap-y-2">
          <ChatItem active={true} />
          <ChatItem />
          <ChatItem />
        </div>
      </div>
      <div className="flex-1">
        <Chat />
      </div>
    </div>
  );
};

type ChatItemProps = {
  active?: boolean;
};

const ChatItem = ({ active = false }: ChatItemProps) => {
  return (
    <div
      className={cn(
        "p-3 flex items-center gap-x-2 rounded-[15px] cursor-pointer",
        active ? "bg-gray-200" : "bg-gray-50"
      )}
    >
      {/* image */}
      <div
        className={cn(
          "w-10 h-10 rounded-full bg-gray-200 flex flex-col items-center justify-end",
          active ? "bg-gray-50" : "bg-gray-200"
        )}
      >
        <HiUser className="text-[#7A92C4] text-4xl translate-y-[1.5px]" />
      </div>
      {/* name */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-800">John Doe</p>
          <p className="text-xs text-gray-300">12:00</p>
        </div>
        <p className="text-xs text-gray-600 max-w-[190px] truncate line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  );
};
export default PrivateChatSidebar;
