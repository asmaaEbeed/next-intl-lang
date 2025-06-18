
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiHandler = async <T>(
  path: string,
  options: RequestInit = {}
): Promise<T> => {
  const cleanPath = path.replace(/^\/|\/$/g, "");
  const url = `${BASE_URL}/${cleanPath}`;

  const config: RequestInit = {
    ...options,
    credentials: "include",
    next: { revalidate: 60 },
  };

  if (!options.headers) {
    config.headers = {
      "Content-Type": "application/json",
    };
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || "An error occurred";
    throw new Error(errorMessage);
  };

  return response.json();
};