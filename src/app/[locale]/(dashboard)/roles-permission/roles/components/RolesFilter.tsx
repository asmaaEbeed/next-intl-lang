"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";
import IconButton from "@/components/ui/icon-button";
import RolesFilterLayout from "../../components/RolesFilterLayout";
import RoleDialog from "./RoleDialog";

const RolesFilter = () => {
  const { t } = useTranslation("roles");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RolesFilterLayout
        label={t("searchForRoles")}
        placeholder={t("enterRoleName")}
      >
        <IconButton onClick={() => setIsOpen(true)}>
          <FiPlus size={20} />
          {t("newRole")}
        </IconButton>
      </RolesFilterLayout>

      {/* New Role Dialog */}
      <RoleDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="newRole"
        button_text="create"
        onChange={() => {}}
        onSubmit={() => {}}
      />
    </>
  );
};

export default RolesFilter;
