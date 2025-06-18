"use client";

import { useState } from "react";
import IdNumber from "@/components/common/table/IdNumber";
import { Department } from "../../types";
import { ColumnDef } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { AiFillExclamationCircle } from "react-icons/ai";
import TableActionDropdown from "@/components/common/table/TableActionDropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { dropdownItemStyle } from "../../roles/components/RolesColumns";
import DeleteDialog from "@/components/common/dialog/DeleteDialog";
import { cn } from "@/lib/utils";
import DepartmentDialog from "./DepartmentDialog";

export const departmentColumns: ColumnDef<Department>[] = [
  {
    accessorKey: "id",
    header: "id",
    cell: ({ row }) => <IdNumber id={row.original.id} />,
    enableSorting: true,
  },
  {
    accessorKey: "department_name",
    header: "departmentName",
    enableSorting: true,
  },
  {
    accessorKey: "examination_slot_duration",
    header: "examinationSlotDuration",
    enableSorting: true,
  },
  {
    id: "department_type",
    cell: ({ row }) => <DepartmentType department={row.original} />,
    enableSorting: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionDropdown department={row.original} />,
  },
];

const ActionDropdown = ({ department }: { department: Department }) => {
  const { t } = useTranslation("roles");

  const [isOpen, setIsOpen] = useState({
    editDepartment: false,
    deleteDepartment: false,
  });

  if (department.department_type === "system") return null;

  return (
    <>
      <TableActionDropdown width="w-[242px]">
        <DropdownMenuItem
          className={dropdownItemStyle}
          onClick={() => setIsOpen({ ...isOpen, editDepartment: true })}
        >
          {t("editDepartment")}
        </DropdownMenuItem>

        <DropdownMenuItem
          className={cn(dropdownItemStyle, "text-main-red")}
          onClick={() => setIsOpen({ ...isOpen, deleteDepartment: true })}
        >
          {t("deleteDepartment")}
        </DropdownMenuItem>
      </TableActionDropdown>

      {/* Edit Department Dialog */}
      <DepartmentDialog
        isOpen={isOpen.editDepartment}
        onClose={() => setIsOpen({ ...isOpen, editDepartment: false })}
        title={t("editDepartment")}
      />

      {/* Delete Department Dialog */}
      <DeleteDialog
        isOpen={isOpen.deleteDepartment}
        onClose={() => setIsOpen({ ...isOpen, deleteDepartment: false })}
        title={"deleteDepartment"}
        description={"deleteDepartmentConfirmation"}
        note={"deleteDepartmentNote"}
        onDelete={() => console.log("delete")}
      />
    </>
  );
};

// department type
const DepartmentType = ({ department }: { department: Department }) => {
  const { t } = useTranslation("roles");
  if (department.department_type === "user") return null;

  return (
    <div className="flex items-center justify-center gap-2 py-[5px] px-[10px] bg-gray-100 rounded-full w-fit">
      <AiFillExclamationCircle className="text-gray-600 text-lg" />
      <span className="text-sm text-gray-600 font-medium leading-5">
        {t("cannotBeEdited")}
      </span>
    </div>
  );
};
