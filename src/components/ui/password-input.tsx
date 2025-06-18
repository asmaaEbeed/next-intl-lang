import * as React from "react";

import { cn } from "@/lib/utils";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";

import { Input } from "./input";

const iconStyle = "text-gray-300 text-base leading-5 cursor-pointer select-none";

function PasswordInput({ className, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      className={cn(className)}
      type={showPassword ? "text" : "password"}
      {...props}
      suffix={
        showPassword ? (
          <IoMdEye onClick={handleShowPassword} className={iconStyle} size={20} />
        ) : (
          <IoIosEyeOff onClick={handleShowPassword} className={iconStyle} size={20} />
        )
      }
    />
  );
}

export { PasswordInput };
