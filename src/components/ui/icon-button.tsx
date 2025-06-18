import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const IconButton = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <Button
      {...props}
      className={cn(
        "bg-[#DBE5FF] hover:bg-[#DBE5FF]/90 text-main-blue flex items-center justify-center rounded-[10px] cursor-pointer w-fit px-4",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default IconButton;
