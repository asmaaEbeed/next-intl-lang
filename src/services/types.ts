export type Method = "GET" | "POST" | "PUT" | "DELETE";
export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T | null;
};

export type TFormPrimitive = string | number | boolean | File | null | undefined;
export type TFormObject = { [key: string]: TFormPrimitive  };
export type TFormValue = TFormPrimitive | TFormObject | TFormPrimitive[] | TFormObject[];

export interface IFormData {
  [key: string]: TFormValue;
};