import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const loginSchema = z.object({
  email: z.string({ message: "Email is required" }).trim().email({ message: "invalidEmail" }),
  password: z.string({ message: "Password is required" }).trim().min(6, { message: "passwordLengthValidation" }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
export const loginSchemaResolver = zodResolver(loginSchema);
