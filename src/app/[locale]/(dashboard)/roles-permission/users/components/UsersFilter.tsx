"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";
import { FaFilter } from "react-icons/fa6";
import IconButton from "@/components/ui/icon-button";
import RolesFilterLayout from "../../components/RolesFilterLayout";
import UsersFilterDialog from "./UsersFilterDialog";
import UserFormDialog from "./UserFormDialog";

const UsersFilter = () => {
  const { t } = useTranslation("roles");
  const [isOpen, setIsOpen] = useState({
    newUser: false,
    filter: false,
  });
  
  const handleCloseDialog = (dialog: string) => {
    setIsOpen({ ...isOpen, [dialog]: false });
  };
  return (
    <>
      <RolesFilterLayout
        label={t("searchForUsers")}
        placeholder={t("enterUserName")}
      >
        <IconButton onClick={() => setIsOpen({ ...isOpen, newUser: true })}>
          <FiPlus size={20} />
          {t("newUser")}
        </IconButton>

        <IconButton onClick={() => setIsOpen({ ...isOpen, filter: true })}>
          <FaFilter size={20} />
          {t("filters")}
        </IconButton>
      </RolesFilterLayout>

      {/* Users Filter Dialog */}
      <UsersFilterDialog
        isOpen={isOpen.filter}
        onClose={() => setIsOpen({ ...isOpen, filter: false })}
      />
      <UserFormDialog
        isOpen={isOpen.newUser}
        onClose={() => handleCloseDialog("newUser")}
        title={t("newUser")}
        apply={() => console.log("test")}
      />
    </>
  );
};

export default UsersFilter;
