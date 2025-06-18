"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import RolesFilterLayout from "../../components/RolesFilterLayout";
import IconButton from "@/components/ui/icon-button";
import { FiPlus } from "react-icons/fi";
import DepartmentDialog from "./DepartmentDialog";

const DepartmentsFilter = () => {
  const { t } = useTranslation("roles");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RolesFilterLayout
        label={t("searchForDepartments")}
        placeholder={t("enterDepartmentName")}
      >
        <IconButton onClick={() => setIsOpen(true)}>
          <FiPlus size={20} />
          {t("newDepartment")}
        </IconButton>
      </RolesFilterLayout>

      <DepartmentDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={t("newDepartment")}
      />
    </>
  );
};

export default DepartmentsFilter;
