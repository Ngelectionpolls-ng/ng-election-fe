import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { profileAvatar } from "@/public/assets/images"
import { bellIcon, cloudIcon } from "@/public/assets/icons"
import { DropDownProps } from "@/types"

function ProfileDropDown({notifications}: DropDownProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-7 pr-4">
                <span className="relative w-fit h-fit">
                    <Image src={bellIcon} width={24} height={24} alt="Bell Icon" />
                    <div className="absolute -top-4 -right-3 drop-shadow-custom-dropshadow size-[18px] bg-primary flex justify-center items-center p-1 text-white text-[10px] font-bold rounded-full">{notifications.length}</div>
                 </span>
                <div className="flex items-center gap-2">
                    <div className="size-9 rounded-full overflow-hidden">
                        <Image src={profileAvatar} width={40} height={40} alt="profile image" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="font-bold text-sm">Frank Edoho</span>
                        <span className="text-gray-600 text-xs">PU Agent</span>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="no-scrollbar w-[320px] h-[85vh] max-h-[730px] mr-4 bg-[#EDEDED] overflow-y-scroll">
                <div>
                <DropdownMenuLabel className="flex flex-col gap-1">
                    <div className="size-[90px] rounded-full overflow-hidden"><Image src={profileAvatar} width={120} height={120} alt="Profile avatar" /></div>
                    <span className="font-medium text-base">Frank Edoho</span>
                </DropdownMenuLabel>
                <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col px-2">
                        <span className="text-xs text-primary">Polling Unit</span>
                        <span className="text-sm">PU - IDUMUOGO PRY SCH II</span>
                    </div>
                    <div className="flex flex-col px-2">
                        <span className="text-xs text-primary">Accumulated points</span>
                        <span className="text-sm">0 Points</span>
                    </div>
                    <div className="flex flex-col px-2">
                        <span className="text-xs text-primary">Phone</span>
                        <span className="text-sm">08098876765</span>
                    </div>
                    <div className="flex flex-col px-2">
                        <span className="text-xs text-primary">Email</span>
                        <span className="text-sm">Shebulasilamer@gmail.com</span>
                    </div>
                </div>
                <DropdownMenuSeparator className="my-7" />
                <div className="px-2">
                    <p className="mb-2">Notifications</p>
                    <div>
                        {
                            notifications.map((item) => {
                                return (
                                    <div className="py-4 px-5 bg-white rounded-[10px] flex items-center gap-2 mb-4" key={item.id}>
                                        <div className="bg-primary p-3 rounded-[10px] size-fit">
                                            <Image src={cloudIcon} width={16} height={16} alt="cloud icon" />
                                        </div>
                                        <div className="flex flex-col items-start">
                                            <span className="font-bold text-sm">{item.title}</span>
                                            <span className="text-gray-600 text-xs">{item.context}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default ProfileDropDown
