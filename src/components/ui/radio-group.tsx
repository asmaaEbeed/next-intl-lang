"use client";

import * as React from "react";
import { FaCheck } from "react-icons/fa";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/utils/i18n";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  const { i18n } = useTranslation();
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border-3 shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className={cn("relative -ml-1 -mt-1 flex items-center justify-center w-[19px] h-[19px] text-white bg-main-blue rounded-full",
          i18n.language === "ar" && "-mr-1" 
        )}
      >
        <FaCheck className="text-white bg-main-blue rounded-full absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 outline-0" />
        {/* <CircleIcon className="fill-main-blue absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 outline-0" /> */}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
