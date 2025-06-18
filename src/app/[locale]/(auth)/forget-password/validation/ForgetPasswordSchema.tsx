import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const forgetPasswordSchema = z.object({
    method: z.enum(["email", "phone"], {
      required_error: "You must select a login method",
    }),
    email: z
      .string()
      .trim()
      .email("invalidEmail")
      .optional(),

    phone: z
      .string()
      .trim()
      .regex(/^01[0-2,5]{1}[0-9]{8}$/, "invalidPhone")
      .optional(),
  otp: z
    .string({ message: "OTP is required" })
    .trim()
    .min(6, { message: "otpLength" }),
  password: z
    .string({ message: "Password is required" })
    .min(6, { message: "passwordLengthValidation" }),
  confirmPassword: z
    .string({ message: "Confirm password is required" })
    .min(6, { message: "confirmPasswordLengthValidation" })
}).superRefine((data, ctx) => {
    if (data.method === "email") {
      if (!data.email) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["email"],
          message: "Email is required",
        });
      }
    } else {
      if (!data.phone) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["phone"],
          message: "Phone is required",
        });
      }
    }

    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "passwordNotMatch",
      });
    }
  });


export type ForgetPasswordSchemaType = z.infer<typeof forgetPasswordSchema>;
export const forgetPasswordSchemaResolver = zodResolver(forgetPasswordSchema);
