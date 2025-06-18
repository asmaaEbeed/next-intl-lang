import { useTranslations } from "next-intl";
import ActivatePhoneForm from "./components/ActivatePhoneForm";
const ActivatePhonePage =  () => {
  const t = useTranslations("auth");

  return (
    <>
      <h1 className="text-3xl font-medium mb-4 text-main-blue">
        {t("activateMobile")}
      </h1>
      <ActivatePhoneForm />
    </>
  );
};

export default ActivatePhonePage;
