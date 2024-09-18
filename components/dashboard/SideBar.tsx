"use client"
import { logoutIcon } from "@/public/assets/icons";
import { IsCollapsedProps } from "@/types";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Svg from "../common/Svg";

function SideBar({isCollapsed, setIsCollapsed}:IsCollapsedProps) {
    const sideBarContent = [
        { id: 1, name: "Dashboard", icon1: "/assets/icons/house-icon.svg", icon2: "/assets/icons/house-icon-green.svg", path: "/dashboard" },
        { id: 2, name: "Election Map", icon1: "/assets/icons/puzzle-icon.svg", icon2: "/assets/icons/puzzle-icon-green.svg", path: "/dashboard/election-map" },
        { id: 3, name: "Media Gallery", icon1: "/assets/icons/piechart-icon.svg", icon2: "/assets/icons/piechart-icon-green.svg", path: "/dashboard/media-gallery" },
        { id: 4, name: "Eyewitness Reports", icon1: "/assets/icons/chat-icon.svg", icon2: "/assets/icons/chat-icon-green.svg", path: "/dashboard/eyewitness-report" },
        { id: 5, name: "News", icon1: "/assets/icons/paper.svg", icon2: "/assets/icons/paper-green.svg", path: "/dashboard/news" },
    ];

    const pathname = usePathname();
    function isActiveBar(path: string) {
        return pathname === path;
    }

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <aside className={`fixed flex flex-col items-center top-0 h-screen bg-primary px-2 py-6 transition-all duration-300 ${isCollapsed ? "w-[80px]" : "w-[230px]"}`}>
            <Image src={`${!isCollapsed ? "/ng-election-logo-2.png" : "/ng-election-logo-4.svg"}`} width={145} height={100} alt="" className="transition-all duration-300" />
            <div className="flex flex-col w-full justify-between h-full">
                <div className="mt-10 w-full px-2">
                    <div className={`flex ${isCollapsed && 'flex-col-reverse gap-2'} w-full justify-between items-center text-[#A5E2AC] text-sm font-medium`}>
                        Menu
                        <div className="size-5 flex items-center justify-center bg-lightGreen rounded-md hover:bg-lightGreen/80">
                            <button onClick={toggleCollapse}>
                                <ChevronLeft color="white" size={16} className={`${isCollapsed ? "rotate-180" : ""} transition-all duration-300`} />
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-5">
                        {sideBarContent.map((item) => (
                            <Link
                                href={item.path}
                                className={`group flex items-center gap-2 px-4 py-3 font-medium border-[0.4px] border-[#A5E2AC] rounded-[16px] hover:text-primary hover:bg-white hover:border-none transition-all duration-300 ${isActiveBar(item.path) ? 'bg-white border-none text-primary' : 'text-white'}`}
                                key={item.id}
                                title={item.name}
                            >
                                <Image
                                    src={isActiveBar(item.path) ? item.icon2 : `${item.icon1}`}
                                    height={16}
                                    width={16}
                                    alt=""
                                    className="group-hover:hidden"
                                />
                                <Image
                                    src={item.icon2}
                                    width={16}
                                    height={16}
                                    alt=""
                                    className="hidden group-hover:inline"
                                />
                                {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
                            </Link>
                        ))}

                    </div>
                </div>
                <div className="w-full px-2">
                    <Link
                        href={"#"}
                        className={`flex items-center gap-2 px-4 py-3 text-white font-medium ${isCollapsed && "border-[0.4px] border-[#A5E2AC] rounded-[16px] hover:text-primary hover:bg-white hover:border-none"} hover:text-white/80`}
                        title="Logout"
                    >
                        <Svg width={'16px'} height={'16px'} SvgIcon={logoutIcon} />
                        {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
                    </Link>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
