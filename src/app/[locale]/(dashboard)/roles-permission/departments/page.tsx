import DepartmentsFilter from "./components/DepartmentsFilter";
import { departmentColumns } from "./components/DepartmentsColumns";
import { Department } from "../types";
import DataTable from "@/components/common/table/DataTable";

const departments: Department[] = [
  {
    id: "1",
    department_name: "Department 1",
    examination_slot_duration: 10,
    department_type: "system",
  },
  {
    id: "2",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "3",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "4",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "5",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "6",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "7",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "8",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "9",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "10",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "11",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "12",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "13",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "14",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "15",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "16",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "17",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "18",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "19",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "20",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "21",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "22",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "23",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "24",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "25",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "26",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "27",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "28",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "29",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "30",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "31",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "32",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "33",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "34",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "35",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "36",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "37",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "38",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "39",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "40",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "41",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "42",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "43",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "44",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  },
  {
    id: "45",
    department_name: "Department 2",
    examination_slot_duration: 10,
    department_type: "user",
  }

];

const page = () => {
  return (
    <>
      <DepartmentsFilter />
      <div className="mt-4">
        <DataTable columns={departmentColumns} data={departments} />
      </div>
    </>
  );
};

export default page;
