// app/(dashboard)/layout.tsx
import Topbar from "@/components/topbar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // nested layout: html/body yo'q
  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      <Topbar />
      <div className="flex mx-20 mx-auto">
        {/* <Sidebar /> */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
