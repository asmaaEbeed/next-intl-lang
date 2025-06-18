"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";

export type DialogModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  width?: string;
  children?: React.ReactNode;
};

const DialogLayout = ({
  isOpen,
  onClose,
  title,
  width,
  children,
}: DialogModalProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation("dialog");
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [closing, setClosing] = useState(false);

  // Handle open/close state for animation
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setClosing(false);
    } else if (shouldRender) {
      setClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setClosing(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  // Close on Escape key and click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (shouldRender) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shouldRender, onClose]);

  if (!shouldRender) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        {/* Clickable overlay to trigger close */}
        <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

        {/* Modal Panel */}
        <div
          className={`relative z-10 w-full ${width} rounded-xl bg-white px-5 py-6 mx-4`}
          style={{
            animation: `${
              closing ? "fadeOut" : "fadeIn"
            } 0.3s ease-out forwards`,
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <h4
              className={cn(
                "text-xl md:text-3xl text-main-blue",
                language === "ar" ? "font-semibold" : "font-medium"
              )}
            >
              {title && t(title)}
            </h4>
            <button
              onClick={onClose}
              className="bg-gray-50 w-11 h-11 rounded-full flex items-center justify-center text-main-blue transition cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Body */}
          <div className="mt-2 md:mt-3 max-h-[80vh] overflow-y-auto px-3">{children}</div>
        </div>
      </div>

      {/* Inline keyframes definition */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.95);
          }
        }
      `}</style>
    </>
  );
};

export default DialogLayout;
