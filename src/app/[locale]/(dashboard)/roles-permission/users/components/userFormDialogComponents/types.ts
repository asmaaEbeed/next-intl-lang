import { Control, UseFormWatch } from "react-hook-form";
import { UserSchemaType } from "../../validation/userSchema";

export interface CommonDataProps {
  control: Control<UserSchemaType>;
  watch?: UseFormWatch<UserSchemaType>;
  editMode?: boolean;
  t: (key: string) => string;
}