"use client";

import { ColumnDef } from "@tanstack/react-table";
import { HealthCareProvider } from "../../types";
import IdNumber from "@/components/common/table/IdNumber";
import TextCell from "@/components/common/table/TextCell";
import TableActionDropdown from "@/components/common/table/TableActionDropdown";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { dropdownItemStyle } from "../../roles/components/RolesColumns";
import RoleForm from "../../roles/components/RoleForm";

export const healthCareColumns: ColumnDef<HealthCareProvider>[] = [
  {
    accessorKey: "id",
    header: "id",
    cell: ({ row }) => <IdNumber id={row.original.id} />,
    enableSorting: true,
  },
  {
    accessorKey: "user_name",
    header: "userName",
    enableSorting: true,
  },
  {
    accessorKey: "title",
    header: "title",
    enableSorting: true,
  },
  {
    accessorKey: "medical_license",
    header: "medicalLicense",
    enableSorting: true,
  },
  {
    accessorKey: "incentivity",
    header: "incentive",
    enableSorting: true,
  },
  {
    accessorKey: "is_pediatric_doctor",
    header: "isPediatricDoctor",
    enableSorting: true,
  },
  {
    accessorKey: "custom_permissions",
    header: "customPermissions",
    cell: ({ row }) => (
      <TextCell
        value={row.original.custom_permissions}
        text="customPermissions"
      />
    ),
    enableSorting: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionDropdown healthCareProvider={row.original} />,
  },
];

const ActionDropdown = ({
  healthCareProvider,
}: {
  healthCareProvider: HealthCareProvider;
}) => {
  const { t } = useTranslation("roles");
  console.log(healthCareProvider);

  const [isOpen, setIsOpen] = useState({
    editPermission: false,
    editDetails: false,
  });

  // handle Open Dialogs
  const handleOpenDialog = (dialog: string) => {
    setIsOpen({ ...isOpen, [dialog]: true });
  };

  return (
    <>
      <TableActionDropdown width="w-[242px]">
        <DropdownMenuItem
          className={dropdownItemStyle}
          onClick={() => handleOpenDialog("editPermission")}
        >
          {t("customPermission")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className={dropdownItemStyle}
          onClick={() => handleOpenDialog("editDetails")}
        >
          {t("editDetails")}
        </DropdownMenuItem>
      </TableActionDropdown>
      <RoleForm
        isOpen={isOpen.editPermission}
        onClose={() => setIsOpen({ ...isOpen, editPermission: false })}
      />
    </>
  );
};
