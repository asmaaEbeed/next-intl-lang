"use client";

import { useTranslation } from "react-i18next";
import {
  BsFiletypeCsv,
  BsFiletypePdf,
  BsPrinter,
  BsFileEarmarkExcel,
} from "react-icons/bs";

import DialogLayout, { DialogModalProps } from "./DialogLayout";

type ExportDialogProps = DialogModalProps & {};

const buttonStyles = "flex items-center justify-center gap-x-2 bg-gray-50 hover:bg-gray-50/90 transition-all duration-300 rounded-[6px] py-4 w-full text-gray-800 text-sm leading-[22px] cursor-pointer";

const ExportDialog = ({ isOpen, onClose }: ExportDialogProps) => {
  const { t } = useTranslation("dialog");

  return (
    <DialogLayout
      isOpen={isOpen}
      onClose={onClose}
      title={"exportFile"}
      width="max-w-[455px]"
    >
      <div className="flex flex-col items-start gap-y-4">
        <p className="text-gray-600 text-sm md:text-base">
          {t("exportDialogDescription")}
        </p>

        <div className="grid grid-cols-2 gap-4 w-full">
          <button className={buttonStyles}>
            <BsFiletypePdf size={22} />
            <p className="">PDF</p>
          </button>

          <button className={buttonStyles}>
            <BsFiletypeCsv size={22} />
            <p className="">CSV</p>
          </button>

          <button className={buttonStyles}>
            <BsFileEarmarkExcel size={22} />
            <p className="">Excel</p>
          </button>

          <button className={`${buttonStyles} bg-main-orange text-white hover:bg-main-orange/90`}>
            <BsPrinter size={22} />
            <p className="">Print</p>
          </button>
        </div>

        <p className="text-main-red text-[12px] text-center">
          {t("exportDialogNote")}
        </p>
      </div>
    </DialogLayout>
  );
};

export default ExportDialog;
