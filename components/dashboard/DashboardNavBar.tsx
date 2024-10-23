import { IsCollapsedProps } from "@/types/types"
import ProfileDropDown from "./ProfileDropDown"
import Svg from "../common/Svg"
import { hamburgerIcon } from "@/public/assets/icons"

function DashboardNavBar({ isCollapsed, setShowSidebar }: IsCollapsedProps) {
    const notifications = [
        { id: 1, title: "Result saved successfully", context: "Awaiting Approval" },
        { id: 2, title: "Result saved successfully", context: "Awaiting Approval" },
        { id: 3, title: "Result saved successfully", context: "Awaiting Approval" },
    ]
    const handleSetShowSidebar = () => {
        setShowSidebar((prevState: boolean) => !prevState)
    }
    return (
        <nav className={`${isCollapsed ? "pl-[80px]" : "pl-[230px]"} fixed bg-white w-full p-4 transition-all duration-300`}>
            <div className=" flex px-4 pt-4 justify-between ">
                <span className="text-xl font-bold">Profile Page</span>
                <div className="hidden md:block">
                    <ProfileDropDown notifications={notifications} />
                </div>
                <button className="md:hidden" onClick={handleSetShowSidebar}>
                    <Svg SvgIcon={hamburgerIcon} width={24} height={18} />
                </button>
            </div>
        </nav>
    )
}

export default DashboardNavBar
