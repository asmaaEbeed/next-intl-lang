"use client";

import { useTranslation } from "react-i18next";
import DialogLayout, { DialogModalProps } from "./DialogLayout";
import { Button } from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";

type DeleteDialogProps = DialogModalProps & {
  title: string;
  description: string;
  note?: string;
  onDelete: () => void;
};

const DeleteDialog = ({
  isOpen,
  onClose,
  title,
  description,
  note,
  onDelete,
}: DeleteDialogProps) => {
  const { t } = useTranslation("dialog");

  return (
    <DialogLayout
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width="max-w-[458px]"
    >
      <p className="text-sm md:text-base text-gray-600 leading-[100%] text-wrap">
        {t(description)}
      </p>

      <p className="text-sm text-main-red leading-[125%] mt-2 text-wrap">
        {note && t(note)}
      </p>

      <div className="flex items-center justify-center gap-4 mt-4">
        <Button variant={"danger"} className="flex-1" onClick={onDelete}>
          {t("delete")}
        </Button>

        <IconButton className="flex-1" onClick={onClose}>
          {t("discard")}
        </IconButton>
      </div>
    </DialogLayout>
  );
};

export default DeleteDialog;
