import { apiHandler } from "../apiHandler";
import { formDataBuilder } from "../formDataBuilder";
import { IFormData } from "../types";

export const post = async (
  path: string,
  data: IFormData,
  options: RequestInit = {}
) => {
  const formData = formDataBuilder(data);

  return await apiHandler(path, {
    method: "POST",
    body: formData,
    ...options,
  });
};