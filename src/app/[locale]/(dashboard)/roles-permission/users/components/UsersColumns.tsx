"use client";

import { ColumnDef } from "@tanstack/react-table";
import { User } from "../../types";
import IdNumber from "@/components/common/table/IdNumber";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import TableActionDropdown from "@/components/common/table/TableActionDropdown";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { dropdownItemStyle } from "../../roles/components/RolesColumns";
import { Switch } from "@/components/ui/switch";
import DeleteDialog from "@/components/common/dialog/DeleteDialog";
import { useState } from "react";
import ForceChangePasswordDialog from "./ForceChangePasswordDialog";
import ResetPasswordDialog from "./ResetPasswordDialog";
import AdminResetPasswordDialog from "./AdminResetPasswordDialog";
import UserFormDialog from "./UserFormDialog";

export const usersColumns: ColumnDef<User>[] = [
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
    accessorKey: "role",
    header: "role",
    enableSorting: true,
  },
  {
    accessorKey: "department",
    header: "department",
    enableSorting: true,
  },
  {
    accessorKey: "health_care_provider",
    header: "healthCareProvider",
    enableSorting: true,
  },
  {
    accessorKey: "email",
    header: "email",
    enableSorting: true,
  },
  {
    accessorKey: "phone",
    header: "phone",
    enableSorting: true,
  },
  {
    accessorKey: "last_password_reset",
    header: "lastPasswordReset",
    cell: ({ row }) => <LastPassword days={row.original.last_password_reset} />,
    enableSorting: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionDropdown user={row.original} />,
  },
];

const ActionDropdown = ({ user }: { user: User }) => {
  const { t } = useTranslation("roles");
  const [isOpen, setIsOpen] = useState({
    deleteUser: false,
    forceChangePassword: false,
    resetPassword: false,
    adminResetPassword: false,
    userForm: false,
  });

  // handle Open Dialog
  const handleOpenDialog = (dialog: string) => {
    setIsOpen({ ...isOpen, [dialog]: true });
  };

  // handle Close Dialog
  const handleCloseDialog = (dialog: string) => {
    setIsOpen({ ...isOpen, [dialog]: false });
  };

  return (
    <>
      <TableActionDropdown width="!min-w-[304px]">
        <DropdownMenuItem
          className={dropdownItemStyle}
          onClick={() => handleOpenDialog("userForm")}
        >
          {t("editUserDetails")}
        </DropdownMenuItem>

        <DropdownMenuItem
          className={cn(
            dropdownItemStyle,
            "flex items-center justify-between !cursor-auto"
          )}
        >
          {t("dis-activate")}
          <Switch onClick={(e) => e.stopPropagation()} />
        </DropdownMenuItem>

        <DropdownMenuItem
          className={cn(
            dropdownItemStyle,
            "flex items-center justify-between !cursor-auto"
          )}
        >
          {t("preventChangePassword")}
          <Switch onClick={(e) => e.stopPropagation()} />
        </DropdownMenuItem>

        <DropdownMenuItem
          className={dropdownItemStyle}
          onClick={() => handleOpenDialog("forceChangePassword")}
        >
          {t("forceChangePassword")}
        </DropdownMenuItem>

        <DropdownMenuItem
          className={dropdownItemStyle}
          onClick={() => handleOpenDialog("resetPassword")}
        >
          {t("resetPassword(email)")}
        </DropdownMenuItem>

        <DropdownMenuItem
          className={dropdownItemStyle}
          onClick={() => handleOpenDialog("adminResetPassword")}
        >
          {t("resetPassword(admin)")}
        </DropdownMenuItem>

        <DropdownMenuItem
          className={cn(dropdownItemStyle, "!text-main-red")}
          onClick={() => handleOpenDialog("deleteUser")}
        >
          {t("deleteUser")}
        </DropdownMenuItem>
      </TableActionDropdown>

      {/* Reset Password Modal */}
      <ResetPasswordDialog
        isOpen={isOpen.resetPassword}
        onClose={() => handleCloseDialog("resetPassword")}
        apply={() => console.log(user.id)}
      />

      {/* Force Change Password Modal */}
      <ForceChangePasswordDialog
        isOpen={isOpen.forceChangePassword}
        onClose={() => handleCloseDialog("forceChangePassword")}
        apply={() => console.log(user.id)}
      />

      {/* Admin Reset Password Modal */}
      <AdminResetPasswordDialog
        isOpen={isOpen.adminResetPassword}
        onClose={() => handleCloseDialog("adminResetPassword")}
        user_id={user.id}
      />

      {/* Delete User Modal */}
      <DeleteDialog
        isOpen={isOpen.deleteUser}
        onClose={() => handleCloseDialog("deleteUser")}
        title="deleteUser"
        description="areYouSureYouWantToDeleteThisUser"
        onDelete={() => console.log("delete")}
      />

      {/* User Form Modal */}
      <UserFormDialog
        isOpen={isOpen.userForm}
        onClose={() => handleCloseDialog("userForm")}
        title="editUserDetail"
        apply={() => console.log("test")}
      />
    </>
  );
};
// Last Password Text
const LastPassword = ({ days }: { days: number }) => {
  const { t } = useTranslation("table");

  return (
    <span
      className={cn(
        "text-gray-600 text-sm leading-5",
        days > 30 ? "text-red-500" : "text-green-500"
      )}
    >
      {days} {t("daysAgo")}
    </span>
  );
};
