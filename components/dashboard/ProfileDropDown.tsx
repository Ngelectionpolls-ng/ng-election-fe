import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { profileAvatar } from "@/public/assets/images"

function ProfileDropDown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><div className="flex items-center gap-2">
                <div className="size-9 rounded-full overflow-hidden">
                    <Image src={profileAvatar} width={40} height={40} alt="profile image" />
                </div>
                <div className="flex flex-col items-start">
                    <span className="font-bold text-sm">Frank Edoho</span>
                    <span className="text-gray-600 text-xs">PU Agent</span>
                </div>
            </div></DropdownMenuTrigger>
            <DropdownMenuContent className="w-[320px] h-[85vh] max-h-[730px] mr-4 bg-[#EDEDED]">
                <DropdownMenuLabel className="flex flex-col gap-1">
                    <div className="size-[90px] rounded-full overflow-hidden"><Image src={profileAvatar} width={120} height={120} alt="Profile avatar" /></div>
                    <span className="font-medium text-base">Frank Edoho</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem> */}
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default ProfileDropDown
