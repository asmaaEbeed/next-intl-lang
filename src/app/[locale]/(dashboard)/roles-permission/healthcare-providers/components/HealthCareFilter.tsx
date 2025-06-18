"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import RolesFilterLayout from "../../components/RolesFilterLayout";
import IconButton from "@/components/ui/icon-button";
import { FaFilter } from "react-icons/fa";
import HealthCareFilterDialog from "./HealthCareFilterDialog";

const HealthCareFilter = () => {
  const { t } = useTranslation("roles");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <RolesFilterLayout
        label={t("searchForHealthCareProviders")}
        placeholder={t("enterKeyword")}
      >
        <IconButton onClick={() => setIsOpen(true)}>
          <FaFilter size={20} />
          {t("filters")}
        </IconButton>
      </RolesFilterLayout>

      {/* HealthCare Filter Dialog */}
      <HealthCareFilterDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default HealthCareFilter;
