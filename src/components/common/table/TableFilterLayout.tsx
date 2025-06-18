import { cn } from "@/lib/utils";

const TableFilterLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-end justify-between flex-wrap gap-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default TableFilterLayout;
