import Loader from "@/components/common/Loader";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect("/dashboard/");
  return <Loader />;
}
