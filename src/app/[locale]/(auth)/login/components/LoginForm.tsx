"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import AlertMessage from "@/components/common/AlertMessage";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import {
  loginSchemaResolver,
  LoginSchemaType,
} from "../validation/LoginSchema";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { t } = useTranslation("auth");
  const router = useRouter();
  const form = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: loginSchemaResolver,
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {/* View under condition */}
        <AlertMessage
          type="error"
          title={t("somethingWentWrong")}
          message={t("incorrectEmailOrPassword")}
        />
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("email")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={t("enterEmail")}
                  {...field}
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("password")}</FormLabel>
              <FormControl>
                <PasswordInput placeholder={t("enterPassword")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Link
            href="/forget-password"
            className="text-main-blue  leading-3 tracking-wide"
          >
            {t("forgotPassword")}
          </Link>
        </div>

        <Button type="submit" className="w-full mt-4" variant="auth" onClick={() => router.push("/dashboard")}>
          {t("login")}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
