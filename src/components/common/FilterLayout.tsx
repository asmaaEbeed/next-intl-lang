import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { FaFilter } from "react-icons/fa";
import { FiX } from "react-icons/fi";

type FilterLayoutProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const FilterLayout = ({ isOpen, onClose, children }: FilterLayoutProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation("dialog");

  return (
    <div
      className={cn(
        "fixed inset-0 bg-black/50 z-50 transition-all duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />
      <div
        className={cn(
          "fixed top-0 end-0 h-full w-full max-w-[488px] bg-white shadow-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <FaFilter size={24} className="text-main-blue" />

              <h4
                className={cn(
                  "text-xl md:text-3xl text-main-blue",
                  language === "ar" ? "font-semibold" : "font-medium"
                )}
              >
                {t("filters")}
              </h4>
            </div>

            <button
              onClick={onClose}
              className="bg-gray-50 hover:bg-gray-100 w-11 h-11 rounded-full flex items-center justify-center text-main-blue transition-all duration-200 cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          <main className="mt-9 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default FilterLayout;
