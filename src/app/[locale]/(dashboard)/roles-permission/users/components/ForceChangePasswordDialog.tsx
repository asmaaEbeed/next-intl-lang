import DialogLayout, {
  DialogModalProps,
} from "@/components/common/dialog/DialogLayout";
import { Button } from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { useTranslation } from "react-i18next";

type ForceChangePasswordDialogProps = DialogModalProps & {
  apply: () => void;
};

const ForceChangePasswordDialog = ({
  isOpen,
  onClose,
  apply,
}: ForceChangePasswordDialogProps) => {
  const { t } = useTranslation("dialog");

  return (
    <DialogLayout
      isOpen={isOpen}
      onClose={onClose}
      title="Force Change Password"
      width="max-w-[458px]"
    >
      <p className="text-sm md:text-base text-gray-600 leading-[100%] text-wrap">
        {t("forceChangePasswordDescription")}
      </p>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button variant="auth" className="flex-1" onClick={apply}>
          {t("apply")}
        </Button>

        <IconButton className="flex-1" onClick={onClose}>
          {t("discard")}
        </IconButton>
      </div>
    </DialogLayout>
  );
};

export default ForceChangePasswordDialog;
