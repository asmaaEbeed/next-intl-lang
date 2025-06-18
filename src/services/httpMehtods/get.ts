import { apiHandler } from "../apiHandler";

export const get = async <T>(
  path: string,
  queryParams?: Record<string, string | number | boolean | string[]>
): Promise<T> => {
  const queryString = queryParams
    ? "?" +
      new URLSearchParams(
        Object.entries(queryParams).map(([key, value]) => [key, String(value)])
      ).toString()
    : "";

  const url = `${path}${queryString}`;

  return await apiHandler<T>(url);
};
