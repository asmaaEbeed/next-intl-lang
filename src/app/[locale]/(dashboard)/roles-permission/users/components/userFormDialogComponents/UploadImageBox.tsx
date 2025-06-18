"use client";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FiUpload } from "react-icons/fi";

type UploadImageBoxProps = {
  onFileSelect: (file: File) => void;
  userImage?: string;
};

export default function UploadImageBox({
  onFileSelect,
  userImage,
}: UploadImageBoxProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { t } = useTranslation("dialog");
  const handleDivClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <>
      <div
        onClick={handleDivClick}
        className="relative mx-auto cursor-pointer size-24 gap-2 hover:bg-white/20 md:size-[121px] flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-full"
      >
        {userImage && (
          
            <img
              src={userImage}
              alt="Preview"
              className="h-full w-full rounded-full object-cover border sticky top-0"
            />
          
        )}
        <div className="absolute text-center flex flex-col items-center bg-black/35 font-bold  w-full h-full justify-center rounded-full">
          <FiUpload className="text-xl md:text-2xl text-white" />
          <span className="text-[11px] md:text-sm text-white">
            {t("uploadImage")}
          </span>
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </>
  );
}
