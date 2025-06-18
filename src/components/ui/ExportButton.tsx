import { TbFileExport } from "react-icons/tb";
import IconButton from "@/components/ui/icon-button";

const ExportButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton onClick={onClick}>
      <TbFileExport size={25} className="text-2xl" />
    </IconButton>
  );
};

export default ExportButton;
