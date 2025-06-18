import ChartPie from "../../../../public/images/sidebar/chart-pie.svg";
import ListCheck from "../../../../public/images/sidebar/list-check.svg";
import Calendar from "../../../../public/images/sidebar/calendar-day.svg";
import PatientInjured from "../../../../public/images/sidebar/user-injured.svg";
import ScalpelPath from "../../../../public/images/sidebar/scalpel-path.svg";
import HospitalBed from "../../../../public/images/sidebar/hospital-bed.svg";
import CalculatorBill from "../../../../public/images/sidebar/calculator-bill.svg";
import PadlockCheck from "../../../../public/images/sidebar/padlock-check.svg";
import Settings from "../../../../public/images/sidebar/settings.svg";
import LightEmergency from "../../../../public/images/sidebar/light-emergency.svg";
import Logs from "../../../../public/images/sidebar/logs.svg";
import Procedures from "../../../../public/images/sidebar/procedures.svg";
import ListTree from "../../../../public/images/sidebar/list-tree.svg";

export type SidebarItem = {
  label: string;
  icon: string;
  href?: string;
  hasNotifications?: boolean;
  list?: { label: string; href: string }[];
};
export const sidebarItems: SidebarItem[] = [
  {
    label: "Dashboard",
    icon: ChartPie,
    href: "/dashboard",
    hasNotifications: true,
  },
  {
    label: "Visits management",
    icon: ListCheck,
    href: "#",
    hasNotifications: true,
  },
  {
    label: "Appointments",
    icon: Calendar,
    href: "#",
    hasNotifications: false,
  },
  {
    label: "Patients List",
    icon: PatientInjured,
    href: "#",
  },
  {
    label: "In-Patients List",
    icon: Procedures,
    href: "#",
  },
  {
    label: "Operation Rooms",
    icon: ScalpelPath,
    href: "#",
  },
  {
    label: "Procedures",
    icon: HospitalBed,
    href: "#",
  },
  {
    label: "Emergency",
    icon: LightEmergency,
    href: "#",
  },
  {
    label: "Multi Payer",
    icon: CalculatorBill,
    list: [
      { label: "Invoices", href: "/payments" },
      { label: "Fulfillment", href: "#" },
    ],
  },
  {
    label: "Roles & Users",
    icon: PadlockCheck,
    href: "/roles-permission/roles",
  },
  {
    label: "System Data",
    icon: ListTree,
    list: [
      { label: "Item Setup", href: "/item-setup" },
      { label: "Insurance Companies", href: "#" },
      { label: "Packages", href: "#" },
    ],
  },
  {
    label: "System Preferences",
    icon: Settings,
    href: "#",
  },
  {
    label: "Logs",
    icon: Logs,
    list: [{ label: "Visits", href: "#" }],
  },
];
