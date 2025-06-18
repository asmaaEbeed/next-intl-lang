import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  suffix?: React.ReactNode;
  search?: boolean;
}

function Input({ className, type, search, suffix, ...props }: InputProps) {
  return (
    <div className="flex gap-2 items-center flex-1 relative">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-gray-200 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        style={{
          boxShadow: "0px 1px 2px 0px #1018280D",
        }}
        {...props}
      />
      <div className={cn("absolute z-10", search ? "start-3" : "end-3")}>
        {suffix}
      </div>
    </div>
  );
}

export { Input };
