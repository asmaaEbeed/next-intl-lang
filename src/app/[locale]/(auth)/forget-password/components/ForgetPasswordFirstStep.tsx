"use client";

import { Control, UseFormWatch } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ForgetPasswordSchemaType } from "../validation/ForgetPasswordSchema";
import { useTranslations } from "next-intl";

interface ForgetPasswordFirstStepProps {
  control: Control<ForgetPasswordSchemaType>;
  watch: UseFormWatch<ForgetPasswordSchemaType>;
}

const ForgetPasswordFirstStep: React.FC<ForgetPasswordFirstStepProps> = ({
  control,
  watch,
}) => {
  const t = useTranslations("auth");
  return (
    <>
      <FormField
        control={control}
        name="method"
        render={({ field }) => (
          <div className="flex gap-2 mt-5 w-full">
            <Button
              variant={
                field.value === "email" ? "default_main_blue" : "notActive"
              }
              onClick={() => field.onChange("email")}
              className="w-1/2"
              type="button"
            >
              <MdEmail />
              {t("email")}
            </Button>
            <Button
              variant={
                field.value === "phone" ? "default_main_blue" : "notActive"
              }
              onClick={() => field.onChange("phone")}
              className="w-1/2"
              type="button"
            >
              <FaPhoneSquareAlt />
              {t("phone")}
            </Button>
          </div>
        )}
      />
      

      {watch("method") === "email" && (
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("email")}</FormLabel>
              <FormControl>
                <Input placeholder={t("enterEmail")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {watch("method") === "phone" && (
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
    </>
  );
};

export default ForgetPasswordFirstStep;
