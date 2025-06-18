import { IFormData, TFormPrimitive, TFormValue } from "./types";

const isFile = (value: unknown): value is File => value instanceof File;

const isPrimitive = (value: unknown): value is TFormPrimitive => {
  return ["string", "number", "boolean"].includes(typeof value);
};

export const appendFormData = (
  formData: FormData,
  key: string,
  value: TFormValue
) => {
  if (value === null || value === undefined) return;

  try {
    if (isFile(value)) {
      formData.append(key, value, value.name);
    } else if (Array.isArray(value)) {
    value.forEach((item, idx) => {
      if (item === null || item === undefined) return;

      if (isFile(item)) {
        formData.append(`${key}[${idx}]`, item, item.name);
      } else if (isPrimitive(item)) {
        formData.append(`${key}[${idx}]`, String(item));
      } else if (typeof value === "object") {
        Object.entries(item).forEach(([subKey, subValue]) => {
          appendFormData(formData, `${key}[${idx}][${subKey}]`, subValue);
          });
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const formDataBuilder = (data: IFormData) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    appendFormData(formData, key, value);
  });

  return formData;
};
