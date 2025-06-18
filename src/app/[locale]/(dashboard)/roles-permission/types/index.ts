
export type NavbarItem = {
  label: string;
  href: string;
};

// Table Types
export type Role = { 
  id: string;
  role_name: string;
  permissions_count: number;
  users_count: number;
  system_role?: boolean;
  user_role?: boolean;
}

// Users Types
export type User = {
  id: string;
  user_name: string;
  role: string;
  department: string;
  health_care_provider: "no" | "yes";
  email: string;
  phone: string;
  last_password_reset: number;
};

// Health Care Providers Types
export type HealthCareProvider = {
  id: string;
  user_name: string;
  title: string;
  medical_license: string;
  incentivity: string;
  is_pediatric_doctor: "no" | "yes";
  custom_permissions: number;
};

// Departments Types
export type Department = {
  id: string;
  department_name: string;
  examination_slot_duration: number;
  department_type: "system" | "user";
};
export type UserForm = {
  user_image?: File | string;
  role: string;
  user_name: string;
  user_email: string;
  user_department: string;
  phone_number: string;
  mobile_number: string;
  password: string;
  confirm_password: string;
  is_staff: boolean;
  title?: string;
  medical_license?: string;
  is_pediatric_doctor?: boolean;
  user_type?: string;
  prevent_change_password?: boolean;
  user_role: "admin" | "healthcare_provider";
}
