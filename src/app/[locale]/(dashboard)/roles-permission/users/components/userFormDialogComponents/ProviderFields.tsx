import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CommonDataProps } from "./types";

const ProviderFields: React.FC<CommonDataProps> = ({ control, t }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 items-start">
      <FormField
        control={control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("title")}</FormLabel>
            <FormControl>
              <Input placeholder={t("enterTitle")} {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="medical_license"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("medicalLicense")}</FormLabel>
            <FormControl>
              <Input placeholder={t("enterMedicalLicense")} {...field} />
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="is_pediatric_doctor"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t("isPediatricDoctor")}</FormLabel>

            <FormControl className="mt-2">
              <RadioGroup
                value={String(field.value)} // convert boolean to string for the UI
                onValueChange={(value) => field.onChange(value === "true")}
                onBlur={field.onBlur}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="true" id="option-one" />
                  <Label htmlFor="option-one">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="false" id="option-two" />
                  <Label htmlFor="option-two">No</Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ProviderFields;
