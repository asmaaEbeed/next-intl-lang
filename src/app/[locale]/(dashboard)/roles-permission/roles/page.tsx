import DataTable from "@/components/common/table/DataTable";
import RolesFilter from "./components/RolesFilter";
import { rolesColumns } from "./components/RolesColumns";
import { Role } from "../types";

const data: Role[] = [
    {
      id: "1",
      role_name: "Admin",
      permissions_count: 10,
      users_count: 10,
      system_role: true,
      user_role: false,
    },
    {
      id: "2",
      role_name: "User",
      permissions_count: 10,
      users_count: 10,
      system_role: true,
      user_role: true,
    },
    {
      id: "3",
      role_name: "Guest",
      permissions_count: 10,
      users_count: 10,
      system_role: false,
      user_role: true,
    },
];
const Roles = () => {
  return (
    <>
      <RolesFilter />
      <div className="mt-4">
        <DataTable columns={rolesColumns} data={data} />
      </div>
    </>
  );
};

export default Roles;
