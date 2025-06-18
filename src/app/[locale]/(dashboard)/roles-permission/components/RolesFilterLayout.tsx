"use client";

import TableFilterLayout from "@/components/common/table/TableFilterLayout";
import SearchInput from "@/components/ui/search-input";
import ItemsPerPageSelect from "@/components/common/table/ItemsPerPageSelect";
import ExportButton from "@/components/ui/ExportButton";
import ExportDialog from "@/components/common/dialog/ExportDialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";

interface RolesFilterProps {
  placeholder: string;
  label: string;
  children: React.ReactNode;
}

const RolesFilterLayout = ({ placeholder, label, children }: RolesFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableFilterLayout className="px-4 md:px-6 lg:px-7">
        <div className="flex flex-col items-start gap-y-2">
          <Label>{label}</Label>
          <SearchInput
            placeholder={placeholder}
            className="w-full max-w-[363px] min-w-[260px] sm:min-w-[363px]"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Select items per page */}
          <ItemsPerPageSelect />
          {/* Export Popup Trigger */}
          <ExportButton onClick={() => setIsOpen(true)} />

          {/* Children */}
          {children}
        </div>
      </TableFilterLayout>

      {/* Export Dialog */}
      <ExportDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default RolesFilterLayout;
