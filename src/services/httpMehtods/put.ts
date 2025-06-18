import { apiHandler } from "../apiHandler";
import { formDataBuilder } from "../formDataBuilder";
import { IFormData } from "../types";

export const put = async (
  path: string,
  data: IFormData,
  options: RequestInit = {}
) => {
  const formData = formDataBuilder(data);

  return await apiHandler(path, {
    method: "PUT",
    body: formData,
    ...options,
  });
};