import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// shared/base fields
const baseUser = z
  .object({
    user_image: z.string().optional(),
    role: z.string().min(1, "roleIsRequired"),
    user_name: z.string().min(1, "userNameIsRequired"),
    user_email: z
      .string({ message: "User email is required" })
      .email({ message: "invalidEmail" }),
    user_department: z.string().min(1, "departmentIsRequired"),
    phone_number: z
      .string()
      .trim()
      .regex(/^01[0-2,5]{1}[0-9]{8}$/, "invalidPhone"),
    mobile_number: z
      .string()
      .trim()
      .regex(/^01[0-2,5]{1}[0-9]{8}$/, "invalidMobileNumber"),
    password: z
      .string({ message: "Password is required" })
      .min(6, { message: "confirmPasswordLengthValidation" }),
    confirm_password: z
      .string({ message: "Confirm password is required" })
      .min(6, { message: "confirmPasswordLengthValidation" }),
    is_staff: z.boolean().optional(),
    method: z.enum(["administrative", "provider"], {
      required_error: "You must select user type",
    }),
    title: z.string().optional(),
    medical_license: z.string().optional(),
    is_pediatric_doctor: z.boolean().optional(),
    prevent_change_password: z.boolean(),
    user_type: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Passwords must match
    if (data.password !== data.confirm_password) {
      ctx.addIssue({
        path: ["confirm_password"],
        code: "custom",
        message: "passwordDontMatch",
      });
    }

    // Title required if method is "provider"
    if (data.method === "provider" && (!data.title || data.title.trim() === "")) {
      ctx.addIssue({
        path: ["title"],
        code: "custom",
        message: "titleIsRequired",
      });
    }
    // medical_license required if method is "provider"
    if (data.method === "provider" && (!data.medical_license || data.medical_license.trim() === "")) {
      ctx.addIssue({
        path: ["medical_license"],
        code: "custom",
        message: "medicalLicenseIsRequired",
      });
    }

    // medical_license required if method is "provider"
    if (!data.is_staff && (!data.user_type || data.user_type.trim() === "")) {
      ctx.addIssue({
        path: ["user_type"],
        code: "custom",
        message: "userTypeIsRequired",
      });
    }

    
  });

// // extend for healthcare providers
// const providerExtra = z.object({
//   title: z.string({ message: "Title is required" }),
//   medical_license: z.string({ message: "Medical license is required" }),
//   is_pediatric_doctor: z.boolean().optional(),
//   user_type: z.string({ message: "User type is required" }),
//   prevent_change_password: z.boolean().optional(),
// });

// const adminSchema = baseUser.extend({
//   user_role: z.literal("admin"),
// });

// const providerSchema = baseUser
//   .extend({ user_role: z.literal("healthcare_provider") })
//   .merge(providerExtra);

// export const userSchema = z.discriminatedUnion("user_role", [
//   adminSchema,
//   providerSchema,
// ]);

export type UserSchemaType = z.infer<typeof baseUser>;
export const userSchemaResolver = zodResolver(baseUser);
