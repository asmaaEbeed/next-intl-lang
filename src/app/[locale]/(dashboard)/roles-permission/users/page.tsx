import DataTable from "@/components/common/table/DataTable";
import UsersFilter from "./components/UsersFilter";
import { User } from "../types";
import { usersColumns } from "./components/UsersColumns";

const data: User[] = [
  {
    id: "1",
    user_name: "John Doe",
    role: "Admin",
    department: "IT",
    health_care_provider: "yes",
    email: "john.doe@example.com",
    phone: "12344567890",
    last_password_reset: 30,
  },
  {
    id: "2",
    user_name: "Jane Doe",
    role: "User",
    department: "HR",
    health_care_provider: "no",
    email: "jane.doe@example.com",
    phone: "1234567890",
    last_password_reset: 30,
  },
  {
    id: "3",
    user_name: "John Doe",
    role: "Admin",
    department: "IT",
    health_care_provider: "yes",
    email: "john.doe@example.com",
    phone: "12345678490",
    last_password_reset: 40,
  },
];

const Users = () => {
  return (
    <>
      <UsersFilter />
      <div className="mt-4">
        <DataTable columns={usersColumns} data={data} />
      </div>
    </>
  );
};

export default Users;
