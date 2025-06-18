"use client";

import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
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
import {
  departmentResolver,
  DepartmentSchemaType,
} from "../validation/departmentSchema";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

type DepartmentDialogProps = DialogModalProps & {
  department_name?: string;
};

const DepartmentDialog = ({
  isOpen,
  onClose,
  title,
}: DepartmentDialogProps) => {
  const { t } = useTranslation("dialog");

  const form = useForm<DepartmentSchemaType>({
    defaultValues: {
      department_name: "",
      examination_slot_duration: "",
    },
    resolver: departmentResolver,
  });
  const { handleSubmit, control } = form;

  const onSubmit = (data: DepartmentSchemaType) => {
    console.log(data);
  };

  return (
    <DialogLayout
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width="max-w-[410px]"
    >
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={control}
            name="department_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("departmentName")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("enterDepartmentName")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="examination_slot_duration"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between w-full">
                  <FormLabel>{t("examinationSlotDuration")}</FormLabel>
                  <Switch />
                </div>
                <FormControl>
                  <Input
                    placeholder={t("enterExaminationSlotDuration")}
                    type="number"
                    {...field}
                    suffix={
                      <span className="text-sm text-gray-500">
                        {t("minutes")}
                      </span>
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" variant="auth">
            {t("save")}
          </Button>
        </form>
      </Form>
    </DialogLayout>
  );
};

export default DepartmentDialog;
