import SideBar from "@/components/dashboard/SideBar";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Dashboard | Eyewitness Report Portal",
    description: "Eyewitness Report Portal",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            {children}
            <SideBar />
        </main>
    );
}
