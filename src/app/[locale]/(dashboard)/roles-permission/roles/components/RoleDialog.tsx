import { useTranslation } from "react-i18next";

import DialogLayout, {
  DialogModalProps,
} from "@/components/common/dialog/DialogLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type RoleDialogProps = DialogModalProps & {
  role_name?: string;
  button_text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const RoleDialog = ({
  isOpen,
  onClose,
  title,
  role_name = "",
  button_text,
  onChange,
  onSubmit,
}: RoleDialogProps) => {
  const { t } = useTranslation("roles");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <DialogLayout
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width="max-w-[410px]"
    >
      <form
        className="w-full flex flex-col gap-y-3 md:gap-y-4"
        onSubmit={handleSubmit}
      >
        <p className="text-sm md:text-base text-gray-600 leading-[100%]">
          {t("enterRoleNameToCreateNewOne")}
        </p>

        <div className="flex flex-col gap-y-1">
          <Label className="text-sm text-dark-text font-normal leading-[100%]">
            {t("roleName")}
          </Label>
          <Input
            value={role_name}
            placeholder={t("enterRoleName")}
            onChange={onChange}
          />
        </div>

        <Button variant={"auth"} className="w-full" type="submit">
          {t(button_text)}
        </Button>
      </form>
    </DialogLayout>
  );
};

export default RoleDialog;
