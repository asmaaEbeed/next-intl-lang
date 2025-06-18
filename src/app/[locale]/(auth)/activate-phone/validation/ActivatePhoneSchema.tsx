import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const activatePhoneSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^01[0-2,5]{1}[0-9]{8}$/, "invalidPhone")
    .optional(),

  otp: z
    .string({ message: "otpRequired" })
    .trim()
    .min(6, { message: "otpLength" }),
});

export type ActivatePhoneSchemaType = z.infer<typeof activatePhoneSchema>;
export const ActivatePhoneSchemaResolver = zodResolver(activatePhoneSchema);
