import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import ProviderFields from "./ProviderFields";
import { CommonDataProps } from "./types";

const CommonFields: React.FC<CommonDataProps> = ({ control, watch, t }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 items-start mt-4">
        <FormField
          control={control}
          name="user_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("userEmail")}</FormLabel>
              <FormControl>
                <Input placeholder={t("enterEmail")} {...field} type="email" />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="user_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("userName")}</FormLabel>
              <FormControl>
                <Input placeholder={t("enterName")} {...field} type="text" />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        <FormField
          control={control}
          name="user_department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("userDepartment")}</FormLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("chooseDepartment")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Department 1</SelectItem>
                  <SelectItem value="2">Department 2</SelectItem>
                  <SelectItem value="3">Department 3</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("phoneNumber")}</FormLabel>
              <FormControl>
                <Input placeholder={t("enterPhone")} {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="mobile_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("mobileNumber")}</FormLabel>
              <FormControl>
                <Input placeholder={t("enterMobile")} {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start mb-8  pb-6 ">
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("userPassword")}</FormLabel>
              <FormControl>
                <PasswordInput placeholder={t("enterPassword")} {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("confirmUserPassword")}</FormLabel>
              <FormControl>
                <PasswordInput placeholder={t("enterPassword")} {...field} />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />
        <Controller
          control={control}
          name="prevent_change_password"
          render={({ field }) => (
            <div className="flex items-center gap-2 h-full">
              <span>{t("preventChangePassword")}</span>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                className="mx-2"
              />
            </div>
          )}
        />
      </div>

      <FormField
        control={control}
        name="method"
        render={({ field }) => (
          <div className="flex gap-2 mt-5 w-full">
            <Button
              variant={
                field.value === "administrative"
                  ? "default_main_blue"
                  : "notActive"
              }
              onClick={() => field.onChange("administrative")}
              className="w-auto"
              type="button"
            >
              {t("administrative")}
            </Button>
            <Button
              variant={
                field.value === "provider" ? "default_main_blue" : "notActive"
              }
              onClick={() => field.onChange("provider")}
              className="w-auto"
              type="button"
            >
              {t("healthCarePrivider")}
            </Button>
          </div>
        )}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <FormField
          control={control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("userRole")}</FormLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={t("chooseRole")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Doctor</SelectItem>
                  <SelectItem value="2">Nurse</SelectItem>
                  <SelectItem value="3">Admin</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Controller
          control={control}
          name="is_staff"
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <span>{t("isStaff")}</span>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                className="mx-2"
              />
            </div>
          )}
        />
        {watch && !watch("is_staff") && (
          <FormField
            control={control}
            name="user_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("userType")}</FormLabel>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("selectUserType")} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">Doctor</SelectItem>
                    <SelectItem value="2">Nurse</SelectItem>
                    <SelectItem value="3">Receptionist</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        )}
      </div>
      {watch && watch("method") === "provider" && (
        <ProviderFields control={control} t={t} />
      )}
    </>
  );
};

export default CommonFields;
