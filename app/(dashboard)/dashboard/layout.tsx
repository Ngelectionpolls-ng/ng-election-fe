"use client"
import DashboardNavBar from "@/components/dashboard/DashboardNavBar";
import SideBar from "@/components/dashboard/SideBar";
import { useState } from "react";
import Capture from "./_component/Capture";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    return (
        <main className="w-full transition-all duration-300">
            <DashboardNavBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} setShowSidebar={setShowSidebar} />
            <section className={`${isCollapsed ? "md:pl-[80px]" : "md:pl-[230px]"} w-full pt-[100px] transition-all duration-300`}>
                {children}
            </section>
            <Capture />
            <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
        </main>
    );
}
