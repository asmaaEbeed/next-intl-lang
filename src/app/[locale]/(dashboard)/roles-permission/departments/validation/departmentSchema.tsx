import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const departmentSchema = z.object({
  department_name: z.string().min(1, { message: "Department name is required" }),
  examination_slot_duration: z.string().min(1, { message: "Examination slot duration is required" }),
});

export type DepartmentSchemaType = z.infer<typeof departmentSchema>;
export const departmentResolver = zodResolver(departmentSchema);