import AlertMessage from "@/components/common/AlertMessage";
import ForgetPasswordForm from "./components/ForgetPasswordForm";
import { useTranslations } from "next-intl";

const ForgetPasswordPage = () => {
  const t = useTranslations("auth");
  return (
    <>
      {/* Alert View under condition */}
      <AlertMessage
        type="error"
        title="Mobile Number Not Activated"
        message="You need to activate your mobile number to receive an OTP."
        className="-mt-3 mb-5"
        linkText={t("activateNow")}
        link="/activate-phone"
      />
      <h1 className="text-3xl font-medium mb-4 text-main-blue">
        {t("forgotPassword")}
      </h1>
      <ForgetPasswordForm />
    </>
  );
};

export default ForgetPasswordPage;
