"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  const { i18n } = useTranslation();
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-[#DBE5FF] data-[state=unchecked]:bg-gray-200 focus-visible:border-ring focus-visible:ring-ring/50  inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "data-[state=checked]:bg-main-blue data-[state=unchecked]:bg-gray-700 pointer-events-none block size-[23px] rounded-full ring-0 transition-transform "
          , i18n.language === "en" ? " data-[state=unchecked]:translate-x-[-5px] data-[state=checked]:translate-x-[calc(100%-7px)]" : " data-[state=unchecked]:translate-x-[-10px] data-[state=checked]:translate-x-[calc(100%-15px)]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
