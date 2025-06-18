// components/pagination/Pagination.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Table } from "@tanstack/react-table"; 
import IconButton from "@/components/ui/icon-button";

type Props<TData> = {
  table: Table<TData>;
  language?: "en" | "ar";
};

function getPaginationRange(
  current: number,
  total: number
): (number | "...")[] {
  const delta = 1;
  const range: (number | "...")[] = [];

  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1);

  if (left > 2) range.push("...");

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < total - 1) range.push("...");

  if (total > 1) range.push(total);

  return range;
}

export function Pagination<TData>({ table, language = "en" }: Props<TData>) {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();
  const pages = getPaginationRange(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-2 py-4 flex-wrap">
      {/* Previous */}
      <IconButton
        className="!px-2 !py-2"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {language === "ar" ? (
          <MdOutlineKeyboardArrowRight className="!w-7 !h-7" />
        ) : (
          <MdOutlineKeyboardArrowLeft className="!w-7 !h-7" />
        )}
      </IconButton>

      {/* Page Numbers */}
      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 text-muted-foreground">
            ...
          </span>
        ) : (
          <Button
            key={index}
            variant={currentPage === page ? "default_main_blue" : "notActive"}
            size="icon"
            onClick={() => table.setPageIndex((page as number) - 1)}
            className="w-9 h-9 font-semibold"
          >
            {page}
          </Button>
        )
      )}

      {/* Next */}
      <IconButton
        className="!px-2 !py-2"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {language === "ar" ? (
          <MdOutlineKeyboardArrowLeft className="!w-7 !h-7" />
        ) : (
          <MdOutlineKeyboardArrowRight className="!w-7 !h-7" />
        )}
      </IconButton>
    </div>
  );
}
