import { bellIcon } from "@/public/assets/icons"
import { profileAvatar } from "@/public/assets/images"
import { IsCollapsedProps } from "@/types"
import Image from "next/image"
import ProfileDropDown from "./ProfileDropDown"

function DashboardNavBar({ isCollapsed }: IsCollapsedProps) {
    return (
        <nav className={`${isCollapsed ? "pl-[80px]" : "pl-[230px]"} fixed bg-white w-full p-4 transition-all duration-300`}>
            <div className=" flex px-4 pt-4 justify-between ">
                <span className="text-xl font-bold">Profile Page</span>
                <div className="flex items-center gap-7 pr-4">
                    <button className="relative w-fit h-fit">
                        <Image src={bellIcon} width={24} height={24} alt="Bell Icon" />
                        <div className="absolute -top-4 -right-3 drop-shadow-custom-dropshadow size-[18px] bg-primary flex justify-center items-center p-1 text-white text-[10px] font-bold rounded-full">{"54"}</div>
                    </button>
                    <ProfileDropDown />
                </div>
            </div>
        </nav>
    )
}

export default DashboardNavBar
