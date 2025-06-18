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
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ActivatePhoneSchemaResolver,
  ActivatePhoneSchemaType,
} from "../validation/ActivatePhoneSchema";

import { maskPhone } from "@/app/[locale]/(auth)/utils/maskUtils";
import ResendCodeTimer from "@/components/ResendCodeTimer";
import { useTranslations } from "next-intl";

const ActivatePhoneForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
 
  const t = useTranslations("auth");
  const form = useForm<ActivatePhoneSchemaType>({
    defaultValues: {
      phone: "",
      otp: "",
    },
    resolver: ActivatePhoneSchemaResolver,
    mode: "onTouched",
    shouldUnregister: false,
  });
  const { handleSubmit, control, trigger, clearErrors } = form;
  const watch = form.watch;
  const handleNext = async () => {
    console.log(watch("phone"));
    const fieldName = currentStep === 1 ? "phone" : "otp";
    const isValid = await trigger(fieldName);
    if (!isValid) return;

    clearErrors();

    setCurrentStep(currentStep + 1);
  };
  const onSubmit = (data: ActivatePhoneSchemaType) => {
    console.log(data);
  };
  return (
    <>
      <Form {...form}>
        <form
          className="flex flex-col gap-5 items-center justify-between max-w-full  mt-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          {currentStep === 1 && (
            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("phone")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("enterPhone")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {currentStep === 2 && (
            <FormField
              control={control}
              name="otp"
              render={({ field }) => (
                <FormItem className="flex flex-col items-center justify-center gap-3">
                  <FormLabel className="!text-dark-text !font-regular text-sm leading-5">
                    {t("enterOtp")}
                  </FormLabel>
                  <div className="text-2xl text-center  w-full mb-3 " dir="ltr">
                    {maskPhone(watch("phone") ?? "")}
                  </div>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="space-x-4 gap-y-2 w-full" dir="ltr">
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

          {currentStep === 1 && (
            <Button
              type="button"
              variant="auth"
              onClick={handleNext}
              className="w-full mt-7"
            >
              {t("sendCode")}
            </Button>
          )}
          {currentStep === 2 && (
            <Button type="submit" variant="auth" className="w-full mt-7">
              {t("verify")}
            </Button>
          )}
        </form>
      </Form>
    </>
  );
};

export default ActivatePhoneForm;
