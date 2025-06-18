"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { maskPhone } from "@/app/[locale]/(auth)/utils/maskUtils";
import ResendCodeTimer from "@/components/ResendCodeTimer";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TForgetPasswordSteps } from "../types";
import {
  forgetPasswordSchemaResolver,
  ForgetPasswordSchemaType,
} from "../validation/ForgetPasswordSchema";
import ForgetPasswordFirstStep from "./ForgetPasswordFirstStep";
import ForgetPasswordSteps from "./ForgetPasswordSteps";
import {  useTranslations } from "next-intl";

const steps: TForgetPasswordSteps[] = [
  { number: 1, name: "method" },
  { number: 2, name: "otp" },
  { number: 3, name: "reset" },
];

const ForgetPasswordForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

    const t = useTranslations("auth");
  const router = useRouter();
  const form = useForm<ForgetPasswordSchemaType>({
    defaultValues: {
      method: "email",
      email: "",
      phone: "",
      otp: "",
      password: "",
      confirmPassword: "",
    },
    resolver: forgetPasswordSchemaResolver,
    mode: "onTouched",
    shouldUnregister: false,
  });
  const watch = form.watch;

  const { handleSubmit, control, clearErrors, trigger } = form;

  const handleNext = async () => {
    const fieldName =
      currentStep === 1
        ? watch("method") === "email"
          ? "email"
          : "phone"
        : "otp";
    const isValid = await trigger(fieldName);
    if (!isValid) return;

    clearErrors();

    setCurrentStep(currentStep + 1);
  };

  const onSubmit = async (data: ForgetPasswordSchemaType) => {
    console.log("final payload", data);
  };

  return (
    <>
      <ForgetPasswordSteps steps={steps} currentStep={currentStep} />
      <Form {...form}>
        <form
          className="flex flex-col gap-5 items-center justify-between max-w-full  mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {currentStep === 1 && (
            <ForgetPasswordFirstStep control={control} watch={watch} />
          )}

          {currentStep === 2 && (
            <FormField
              control={control}
              name="otp"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center gap-3">
                  <FormLabel className="!text-dark-text !font-regular text-sm leading-5">
                    {t("enterOtp")} {" " + t(watch("method"))}
                  </FormLabel>
                  <div className="text-2xl text-center  w-full mb-3" dir="ltr">
                    {watch("method") === "phone" &&
                      maskPhone(watch("phone") ?? "")}
                  </div>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup
                      className="space-x-4 gap-y-2 w-full"
                      dir="ltr"
                    >
                      <InputOTPSlot index={0} className="rounded-md border-l" />
                      <InputOTPSlot index={1} className="rounded-md border-l" />
                      <InputOTPSlot index={2} className="rounded-md border-l" />
                      <InputOTPSlot index={3} className="rounded-md border-l" />
                      <InputOTPSlot index={4} className="rounded-md border-l" />
                      <InputOTPSlot index={5} className="rounded-md border-l" />
                    </InputOTPGroup>
                  </InputOTP>

                  <ResendCodeTimer
                    onResend={() => {
                      console.log("Resending code...");
                    }}
                    resendDelay={60}
                    t={t}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          {currentStep === 3 && (
            <>
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("newPassword")}</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder={t("enterNewPassword")}
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("confirmNewPassword")}</FormLabel>
                    <FormControl>
                      <PasswordInput
                        placeholder={t("enterConfirmPassword")}
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {currentStep < steps.length ? (
            <Button
              type="button"
              variant="auth"
              onClick={handleNext}
              className="w-full mt-4"
            >
              {currentStep === 1 ? t("sendCode") : t("verify")}
            </Button>
          ) : (
            <Button
              type="submit"
              variant="auth"
              className="w-full mt-4"
              onClick={() => {
                toast.success("Password changed successfully");
                router.push("/login");
              }}
            >
              {t("confirmChanges")}
            </Button>
          )}
        </form>
      </Form>
    </>
  );
};

export default ForgetPasswordForm;
