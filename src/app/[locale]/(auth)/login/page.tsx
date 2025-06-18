import { useTranslations } from "next-intl";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  const t = useTranslations("auth");
  return (
    <>
      <h1 className="text-3xl font-medium mb-4 text-main-blue">{t("login")}</h1>
      <LoginForm />
    </>
  );
};

export default LoginPage;
