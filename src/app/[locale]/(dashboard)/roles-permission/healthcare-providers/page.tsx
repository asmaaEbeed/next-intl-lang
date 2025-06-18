import HealthCareFilter from "./components/HealthCareFilter";
import { healthCareColumns } from "./components/HealthCareColumns";
import { HealthCareProvider } from "../types";
import DataTable from "@/components/common/table/DataTable";

const data: HealthCareProvider[] = [
  {
    id: "1",
    user_name: "John Doe",
    title: "Dr.",
    medical_license: "1234567890",
    incentivity: "100",
    is_pediatric_doctor: "yes",
    custom_permissions: 10,
  },
];

const page = () => {
  return (
    <>
      <HealthCareFilter />
      <div className="mt-4">
        <DataTable columns={healthCareColumns} data={data} />
      </div>
    </>
  );
};

export default page;
