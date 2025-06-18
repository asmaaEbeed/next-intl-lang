import FilterLayout from "@/components/common/FilterLayout";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

type UsersFilterDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const UsersFilterDialog = ({ isOpen, onClose }: UsersFilterDialogProps) => {
  return (
    <FilterLayout isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <div className="space-y-1">
          <Select>
            <Label className="">Role</Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose Role" />
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
            <Label className="">HealthCare Provider</Label>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="choose (yes/no)" />
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

export default UsersFilterDialog;
