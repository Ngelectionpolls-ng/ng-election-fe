
import Image from "next/image";

export default function GoogleButton(){
    return (
        <button
            // variant={"outline"}
            className="flex justify-center p-1 rounded-md gap-2 border border-[#E4E4E7] text-sm">
            <Image src={'/assets/icons/google.png'} alt="" width={20} height={20}/>
            Sign-up with Google
        </button>
    );
}