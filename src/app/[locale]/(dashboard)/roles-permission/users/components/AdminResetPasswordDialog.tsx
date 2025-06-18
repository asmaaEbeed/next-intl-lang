"use client";

import DialogLayout, {
  DialogModalProps,
} from "@/components/common/dialog/DialogLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

type AdminResetPasswordDialogProps = DialogModalProps & {
  user_id: string;
};

const adminResetPasswordSchema = z
  .object({
    user_id: z.string(),
    new_password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirm_new_password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: "Passwords do not match",
    path: ["confirm_new_password"],
  });

export type AdminResetPasswordSchemaType = z.infer<
  typeof adminResetPasswordSchema
>;
export const adminResetPasswordSchemaResolver = zodResolver(
  adminResetPasswordSchema
);

const AdminResetPasswordDialog = ({
  isOpen,
  onClose,
  user_id,
}: AdminResetPasswordDialogProps) => {
  const { t } = useTranslation("dialog");

  const form = useForm<AdminResetPasswordSchemaType>({
    defaultValues: {
      user_id: user_id,
      new_password: "",
      confirm_new_password: "",
    },
    resolver: adminResetPasswordSchemaResolver,
  });
  const { handleSubmit, control } = form;

  const onSubmit = (data: AdminResetPasswordSchemaType) => {
    console.log(data);
  };

  return (
    <DialogLayout
      isOpen={isOpen}
      onClose={onClose}
      title="resetPassword"
      width="max-w-[458px]"
    >
      <p className="text-sm md:text-base text-gray-600 leading-[100%] text-wrap mb-6">
        {t("enterNewPassword")}
      </p>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={control}
            name="new_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("newPassword")}</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder={t("enterNewPassword")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirm_new_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("confirmNewPassword")}</FormLabel>
                <FormControl>
                  <PasswordInput
                    placeholder={t("enterNewPassword")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="auth" className="w-full mt-3" type="submit">
            {t("reset")}
          </Button>
        </form>
      </Form>
    </DialogLayout>
  );
};

export default AdminResetPasswordDialog;
