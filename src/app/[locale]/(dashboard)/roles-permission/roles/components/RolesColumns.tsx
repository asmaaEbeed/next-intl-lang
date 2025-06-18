"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AiFillExclamationCircle } from "react-icons/ai";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Role } from "../../types";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useState } from "react";
import RoleDialog from "./RoleDialog";
import DeleteDialog from "@/components/common/dialog/DeleteDialog";
import RoleForm from "./RoleForm";
import IdNumber from "@/components/common/table/IdNumber";
import TableActionDropdown from "@/components/common/table/TableActionDropdown";
import TextCell from "@/components/common/table/TextCell";

export const rolesColumns: ColumnDef<Role>[] = [
  {
    accessorKey: "id",
    header: "id",
    cell: ({ row }) => <IdNumber id={row.original.id} />,
    enableSorting: true,
  },
  {
    accessorKey: "role_name",
    header: "roleName",
    enableSorting: true,
  },
  {
    accessorKey: "permissions_count",
    header: "permissions",
    cell: ({ row }) => (
      <TextCell value={row.original.permissions_count} text="permissions" />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "users_count",
    header: "users",
    cell: ({ row }) => (
      <TextCell value={row.original.users_count} text="users" />
    ),
    enableSorting: true,
  },
  {
    id: "system_role",
    cell: ({ row }) => <SystemRole role={row.original} />,
    enableSorting: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionDropdown role={row.original} />,
  },
];

export const dropdownItemStyle =
  "cursor-pointer bg-gray-50 text-gray-700 !text-sm !leading-5 rounded-[10px] p-[10px] w-full";

const ActionDropdown = ({ role }: { role: Role }) => {
  const { t } = useTranslation("roles");

  const [isOpen, setIsOpen] = useState({
    editPermission: false,
    renameRole: false,
    deleteRole: false,
  });
  const [roleName, setRoleName] = useState(role.role_name);

  return (
    <>
      <TableActionDropdown width="w-[242px]">
        {role.user_role && role.user_role === true ? (
          <>
            <DropdownMenuItem
              className={dropdownItemStyle}
              onClick={() => setIsOpen({ ...isOpen, editPermission: true })}
            >
              {t("editPermission")}
            </DropdownMenuItem>

            <DropdownMenuItem
              className={cn(dropdownItemStyle)}
              onClick={() => setIsOpen({ ...isOpen, renameRole: true })}
            >
              {t("renameRole")}
            </DropdownMenuItem>

            <DropdownMenuItem
              className={cn(dropdownItemStyle, "!text-main-red")}
              onClick={() => setIsOpen({ ...isOpen, deleteRole: true })}
            >
              {t("deleteRole")}
            </DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem className={dropdownItemStyle}>
            {t("viewPermission")}
          </DropdownMenuItem>
        )}
      </TableActionDropdown>

      {/* Rename Role Dialog */}
      <RoleDialog
        isOpen={isOpen.renameRole}
        onClose={() => setIsOpen({ ...isOpen, renameRole: false })}
        title="renameRole"
        role_name={roleName}
        button_text="rename"
        onChange={(e) => setRoleName(e.target.value)}
        onSubmit={() => console.log(roleName)}
      />

      {/* Delete Role Dialog */}
      <DeleteDialog
        isOpen={isOpen.deleteRole}
        onClose={() => setIsOpen({ ...isOpen, deleteRole: false })}
        title="deleteRole"
        description="areYouSureYouWantToDeleteThisRole"
        note="deleteRoleNote"
        onDelete={() => console.log("delete")}
      />

      {/* Edit Permission Dialog */}
      <RoleForm
        isOpen={isOpen.editPermission}
        onClose={() => setIsOpen({ ...isOpen, editPermission: false })}
      />
    </>
  );
};

// System Role
const SystemRole = ({ role }: { role: Role }) => {
  const { t } = useTranslation("roles");
  if (!role.system_role) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-[5px] px-[10px] bg-gray-100 rounded-full w-fit">
      <AiFillExclamationCircle className="text-gray-600 text-lg" />
      <span className="text-sm text-gray-600 font-medium leading-5">
        {t("cannotBeEdited")}
      </span>
    </div>
  );
};
