"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import SearchInput from "@/components/ui/search-input";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";

type RoleFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Permission = {
  id: number;
  mainPermission: string;
  subPermissions: string[];
};

const permissions: Permission[] = [
  {
    id: 1,
    mainPermission: "invoice",
    subPermissions: ["pending offline payment", "pending online payment"],
  },
  {
    id: 2,
    mainPermission: "appointment",
    subPermissions: ["pending", "confirmed", "cancelled"],
  },
  {
    id: 3,
    mainPermission: "patient",
    subPermissions: ["pending", "confirmed", "cancelled"],
  },
  {
    id: 4,
    mainPermission: "doctor",
    subPermissions: ["pending", "confirmed", "cancelled"],
  },
  {
    id: 5,
    mainPermission: "hospital",
    subPermissions: ["pending", "confirmed", "cancelled"],
  },
];

// actions under each sub permission
const actions = ["Approve", "Delete", "Edit"];

const RoleForm = ({ isOpen, onClose }: RoleFormProps) => {
  const {
    t,
    i18n: { language },
  } = useTranslation("roles");

  return (
    <aside
      className={cn(
        "fixed inset-0 bg-black/50 z-50 transition-all duration-300",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Clickable overlay to trigger close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Panel */}
      <div
        className={cn(
          "fixed top-0 end-0 h-full w-full max-w-5xl bg-white shadow-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6">
            <h4
              className={cn(
                "text-xl md:text-3xl text-main-blue",
                language === "ar" ? "font-semibold" : "font-medium"
              )}
            >
              Role Name
            </h4>

            <button
              onClick={onClose}
              className="bg-gray-50 hover:bg-gray-100 w-11 h-11 rounded-full flex items-center justify-center text-main-blue transition-all duration-200 cursor-pointer"
            >
              <FiX className="text-xl" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="w-full flex items-end justify-between gap-2 flex-wrap">
              <div className="flex flex-col items-start gap-y-1">
                <Label className="text-sm text-dark-text font-normal leading-[100%]">
                  {t("searchForPermission")}
                </Label>

                <SearchInput
                  placeholder={t("searchForPermission")}
                  className="sm:w-[363px]"
                />
              </div>

              <Button variant="auth" className="w-[140px]">
                {t("save")}
              </Button>
            </div>

            <div className="mt-5">
              {permissions.map((perm: Permission) => {
                return <PermissionItem key={perm.id} permission={perm} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

const PermissionItem = ({ permission }: { permission: Permission }) => {
  const { i18n: { language } } = useTranslation("roles");
  const [state, setState] = useState(() => {
    const init: Record<
      string,
      { checked: boolean; actions: Record<string, boolean> }
    > = {};
    permission.subPermissions.forEach((sub) => {
      init[sub] = {
        checked: false,
        actions: { approve: false, delete: false, edit: false },
      };
    });
    return init;
  });

  const mainChecked = useMemo(
    () =>
      Object.values(state).every(
        (s) => s.checked && Object.values(s.actions).every(Boolean)
      ),
    [state]
  );

  // Toggle main permission
  const onMainChange = (checked: boolean) => {
    const updated: typeof state = {};
    Object.keys(state).forEach((sub) => {
      updated[sub] = { checked, actions: {} };
      actions.forEach((act) => {
        updated[sub].actions[act] = checked;
      });
    });
    setState(updated);
  };

  // Toggle sub-permission row
  const onSubChange = (subKey: string, checked: boolean) => {
    setState((prev) => ({
      ...prev,
      [subKey]: {
        checked,
        actions: Object.fromEntries(actions.map((act) => [act, checked])),
      },
    }));
  };

  // Toggle individual action
  const onActionChange = (subKey: string, act: string, checked: boolean) => {
    setState((prev) => ({
      ...prev,
      [subKey]: {
        checked: Object.values({
          ...prev[subKey].actions,
          [act]: checked,
        }).every(Boolean),
        actions: { ...prev[subKey].actions, [act]: checked },
      },
    }));
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Main Permission Header */}
      <div
        className={cn(
          "w-full flex items-center justify-between py-4 ps-7 pe-4 bg-gray-50 cursor-pointer transition-colors hover:bg-gray-100",
          isOpen ? "rounded-t-[10px]" : "rounded-none"
        )}
      >
        <div className="flex items-center gap-x-2">
          <Checkbox
            id={permission.mainPermission}
            checked={mainChecked}
            onCheckedChange={(val) => onMainChange(Boolean(val))}
          />
          <Label
            htmlFor={permission.mainPermission}
            className="text-sm text-gray-600 font-medium leading-4 capitalize"
          >
            {permission.mainPermission}
          </Label>
        </div>

        <IoIosArrowBack
          onClick={toggleOpen}
          className={cn(
            "text-xl text-main-blue transition-transform duration-200",
            isOpen ? "-rotate-90" : "rotate-0"
          )}
        />
      </div>

      {/* Dropdown Content */}
      <div
        className={cn(
          "bg-white overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        {permission.subPermissions.map((subPermission: string) => (
          <div
            className="flex flex-col gap-y-1 border-b border-gray-100 last:border-b-0 py-5 "
            key={subPermission}
          >
            <div className="flex items-center gap-x-2 ps-9">
              <Checkbox
                id={`${permission.mainPermission}-${subPermission}`}
                checked={state[subPermission].checked}
                onCheckedChange={(val) =>
                  onSubChange(subPermission, Boolean(val))
                }
              />
              <Label
                htmlFor={`${permission.mainPermission}-${subPermission}`}
                className="capitalize"
              >
                {subPermission}
              </Label>
            </div>

            <div className="ps-10 flex items-end gap-x-1">
              <div
                className={cn(
                  "w-[22px] h-8 border-b-2 border-gray-200",
                  language === "ar" ? "rounded-br-[10px] border-r-2" : "rounded-bl-[10px] border-l-2"
                )}
              />

              <div className="flex items-center gap-x-5 md:gap-x-[30px]">
                {actions.map((act) => (
                  <div key={act} className="flex items-center gap-1">
                    <Checkbox
                      id={`${permission.mainPermission}-${subPermission}-${act}`}
                      checked={state[subPermission].actions[act]}
                      onCheckedChange={(val) =>
                        onActionChange(subPermission, act, Boolean(val))
                      }
                    />
                    <Label
                      htmlFor={`${permission.mainPermission}-${subPermission}-${act}`}
                    >
                      {act}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoleForm;
