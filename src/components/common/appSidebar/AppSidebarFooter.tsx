"use client";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { useRouter } from "@/i18n/navigation";

const AppSidebarFooter = () => {
  const router = useRouter();

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="bg-white/10 rounded-md p-3 group-data-[state=collapsed]:p-1 w-full m-0 text-white">
            <div className="w-10 h-10 group-data-[state=collapsed]:w-7 group-data-[state=collapsed]:h-7 group-data-[state=collapsed]:my-2  group-data-[state=collapsed]:pt-2 rounded-full overflow-hidden text-center bg-white/80 flex justify-center pt-3  mb-1">
              <FaUserAlt className="text-3xl group-data-[state=collapsed]:text-xl text-light-blue text-opacity-30" />
            </div>
            <div className=" flex items-center justify-between group-data-[state=collapsed]:my-2">
              <div className="text-start group-data-[state=collapsed]:hidden">
                <span className="block text-sm text-gray-200">Doctor</span>
                <h6>User Name</h6>
              </div>
              <button
                className="bg-white/20 hover:bg-white/30 transition-colors rounded-full p-2 cursor-pointer group-data-[state=collapsed]:p-1"
                onClick={() => router.push("/login")}
              >
                <MdOutlineLogout className="text-xl group-data-[state=collapsed]:text-lg" />
              </button>
            </div>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default AppSidebarFooter;
