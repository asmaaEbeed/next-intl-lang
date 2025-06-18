import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/common/appSidebar/AppSidebar";
import TopNav from "@/components/common/topNav/TopNav";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />

        <main className="bg-[#F8F7FA] flex-1 px-4 md:px-6 overflow-x-auto">
          <TopNav />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};
export default DashboardLayout;
