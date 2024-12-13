

import Image from "next/image";
import Link from "next/link";

export default function SiteIcon(){
    return (
        <Link href="/">
            <Image src={"/Nigelctionpolls 4.svg"} width={250} height={50} alt='NG Election logo' className='w-[140px] h-auto' />
        </Link>
    );
}