
export default function ProfileSetup({name, percentage}){
    return (
        <div className="w-full md:w-1/2 flex space-x-2 mt-4 items-center">

            <div className="text-xs text-gray-700 font-semibold w-10 h-full flex items-center">{percentage}</div>

            <div className="flex flex-col space-y-2 flex-1 h-full">
                <h6 className="text-[10px] text-gray-700">{name}</h6>
                <div className="w-full rounded-full h-1 bg-black/10 flex items-center">
                    <div className={`h-1 bg-green-900`} style={{width: percentage}}></div>
                    <div className="w-[12px] h-2 scale-150 -ml-[6px] bg-green-900"></div>
                </div>
            </div>
            
        </div>
    );  
}