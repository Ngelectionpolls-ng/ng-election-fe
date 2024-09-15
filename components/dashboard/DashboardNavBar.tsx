import { IsCollapsedProps } from "@/types"
import ProfileDropDown from "./ProfileDropDown"

function DashboardNavBar({ isCollapsed }: IsCollapsedProps) {
    const notifications = [
        { id: 1, title: "Result saved successfully", context: "Awaiting Approval" },
        { id: 2, title: "Result saved successfully", context: "Awaiting Approval" },
        { id: 3, title: "Result saved successfully", context: "Awaiting Approval" },
    ]
    return (
        <nav className={`${isCollapsed ? "pl-[80px]" : "pl-[230px]"} fixed bg-white w-full p-4 transition-all duration-300`}>
            <div className=" flex px-4 pt-4 justify-between ">
                <span className="text-xl font-bold">Profile Page</span>
                <div >
                    <ProfileDropDown notifications={notifications} />
                </div>
            </div>
        </nav>
    )
}

export default DashboardNavBar
