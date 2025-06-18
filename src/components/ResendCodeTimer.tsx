import { FC, useEffect, useState } from "react";
import { FormDescription } from "@/components/ui/form";

interface ResendCodeTimerProps {
  onResend: () => void;
  resendDelay: number;
  t?: (key: string) => string
}

const ResendCodeTimer: FC<ResendCodeTimerProps> = ({
  onResend,
  resendDelay,
  t
  
}) => {
  const [secondsLeft, setSecondsLeft] = useState(resendDelay);

  useEffect(() => {
    if (secondsLeft === 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const handleResend = () => {
    onResend();
    setSecondsLeft(resendDelay);
  };

  return (
    <FormDescription className="text-gray-300 text-sm leading-5">
      {t ? t("notReceiveTheCodeYet" ) : "Not receive the code yet?"}{" "}
      {secondsLeft > 0 ? (
        <span className="text-gray-500 font-medium">
          {t && t("resendIn")} {secondsLeft} {secondsLeft !== 1 && t ? t("seconds") : "second"}
        </span>
      ) : (
        <button
          type="button"
          onClick={handleResend}
          className="text-main-blue cursor-pointer hover:underline font-medium transition-all"
        >
          {t ? t("resend" ) : "Resend"}
        </button>
      )}
    </FormDescription>
  );
};

export default ResendCodeTimer;
