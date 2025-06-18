import { cn } from "@/lib/utils";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "./input";

const SearchInput = ({
  className,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <Input
      className={cn(className, "ps-9")}
      {...props}
      suffix={<IoSearchOutline className="text-gray-300 text-xl leading-5" />}
      search
    />
  );
};

export default SearchInput;
