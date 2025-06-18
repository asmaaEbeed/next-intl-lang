"use client";

import FilterLayout from "@/components/common/FilterLayout";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

type HealthCareFilterDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HealthCareFilterDialog = ({
  isOpen,
  onClose,
}: HealthCareFilterDialogProps) => {
  const { t } = useTranslation("roles");

  return (
    <FilterLayout isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <div className="space-y-1">
          <Select>
            <Label className="">{t("title")}</Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t("chooseTitle")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Select>
            <Label className="">{t("department")}</Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t("chooseDepartment")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Select>
            <Label className="">{t("incentive")}</Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t("chooseIncentive")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Select>
            <Label className="">{t("isPediatricDoctor")}</Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={t("choosePediatricDoctor")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </FilterLayout>
  );
};

export default HealthCareFilterDialog;
