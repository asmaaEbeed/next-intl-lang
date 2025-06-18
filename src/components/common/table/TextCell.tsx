import { useTranslation } from "react-i18next";

const TextCell = ({
  value,
  text,
}: {
  value: string | number;
  text: string;
}) => {
  const { t } = useTranslation("table");

  return (
    <span className="text-gray-600 text-sm leading-5">
      {value} {t(text)}
    </span>
  );
};

export default TextCell;
