"use client"
import DashboardNavBar from "@/components/dashboard/DashboardNavBar";
import SideBar from "@/components/dashboard/SideBar";
import { useState } from "react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    return (
        <main className="w-full">
            <DashboardNavBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <section className={`${isCollapsed ? "pl-[80px]" : "pl-[230px]"} w-full pt-[100px] transition-all duration-300`}>
                {children}
            </section>
            <SideBar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </main>
    );
}
