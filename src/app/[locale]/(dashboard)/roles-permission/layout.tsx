import ActiveLink from "./components/ActiveLink";
import { NavbarItem } from "./types";

const navbarList: NavbarItem[] = [
  {
    label: "roles",
    href: "/roles-permission/roles/",
  },
  {
    label: "users",
    href: "/roles-permission/users/",
  },
  {
    label: "healthCareProviders",
    href: "/roles-permission/healthcare-providers/",
  },
  {
    label: "departments",
    href: "/roles-permission/departments/",
  },
];

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-4 md:mt-6">
      <nav className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-7 border-b-2 border-gray-200">
        {navbarList.map((item: NavbarItem) => (
          <ActiveLink key={item.label} item={item} />
        ))}
      </nav>

      <main className="bg-white rounded-[15px] py-4 md:py-6 lg:py-[30px] mt-2 min-h-[calc(100vh-10rem)]">
        {children}
      </main>
    </div>
  );
};

export default layout;
