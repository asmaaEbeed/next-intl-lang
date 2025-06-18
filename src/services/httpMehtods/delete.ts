import { apiHandler } from "../apiHandler";

export const del = async (path: string) => {
  return await apiHandler(path, {
    method: "DELETE",
  });
};