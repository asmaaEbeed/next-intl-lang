"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { FiMoreVertical } from "react-icons/fi";

const TableActionDropdown = ({
  children,
  width,
}: {
  children: React.ReactNode;
  width?: string;
}) => {
  const {
    i18n: { language },
  } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <FiMoreVertical className="h-4 w-4 cursor-pointer" />
        </Button>
      </DropdownMenuTrigger>

      {/* Content */}
      <DropdownMenuContent
        align={language === "en" ? "end" : "start"}
        className={cn(
          "border-none shadow-2xl rounded-b-[20px] p-4 w-full flex flex-col items-center gap-y-2",
          width && width,
          language === "en"
            ? "rounded-tl-[20px] rounded-tr-none"
            : "rounded-tr-[20px] rounded-tl-none"
        )}
        style={{
          boxShadow: "0px 0px 15px 0px #0000001A",
        }}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableActionDropdown;
