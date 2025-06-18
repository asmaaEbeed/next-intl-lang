import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, CheckCircle2Icon, InfoIcon } from "lucide-react";
import React from "react";

type AlertType = "error" | "success" | "info";

interface AlertMessageProps {
  type?: AlertType;
  title: string;
  message: string;
  className?: string;
  link?: string;
  linkText?: string;
}

const iconMap = {
  error: <AlertCircleIcon size={20} color="white" />,
  success: <CheckCircle2Icon size={20} color="white" />,
  info: <InfoIcon size={20} color="white" />,
};

const bgColorMap = {
  error: "bg-main-red",
  success: "bg-green-600",
  info: "bg-blue-500",
};

const containerBgMap = {
  error: "bg-main-red/15",
  success: "bg-green-100",
  info: "bg-blue-100",
};
const titleMap = {
  error: "text-main-red",
  success: "text-green-600",
  info: "text-blue-500",
};

const AlertMessage: React.FC<AlertMessageProps> = ({
  type = "info",
  title,
  message,
  className = "",
  link = "#",
  linkText = "",
}) => {
  return (
    <Alert
      className={`flex items-center gap-x-3 ${containerBgMap[type]} ${className}`}
    >
      <div className={`${bgColorMap[type]} p-2 rounded-full`}>
        {iconMap[type]}
      </div>
      <div>
        <AlertTitle className={`${titleMap[type]} mb-1`}>{title}</AlertTitle>
        <AlertDescription>
          <span className="leading-tight">{message}</span>
          <Link href={link} className={`${titleMap[type]}  underline`}>
            {linkText}
          </Link>
        </AlertDescription>
      </div>
    </Alert>
  );
};

export default AlertMessage;
