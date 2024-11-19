import { tiktok, twitterX } from "@/public/assets/icons"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Svg from "../common/Svg"

function Footer() {
    return (
        <footer className="bg-[#0A491C] flex justify-center py-20 max-w-full lg:px-10 text-white px-[10%]">
            <div className="w-full px-[10%]">
                <div className="flex items-center justify-center gap-2">
                    <div className="bg-white h-[1px] w-full"></div>
                    <div className="text-light-green font-bold flex gap-1">Nigeria<span className="text-white"> Election</span><span>Poll<sup className="text-white text-[8px] ml-[2px]">TM</sup></span> </div>
                    <div className="bg-white h-[1px] w-full"></div>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-between my-8 text-base md:px-7">
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <h4 className="font-bold mb-1">Organisation</h4>
                        <Link href={"#"} className="hover:underline">Our mission</Link>
                        <Link href={"#"} className="hover:underline">Our Methodology</Link>
                        <Link href={"#"} className="hover:underline">FAQs</Link>
                        <Link href={"#"} className="hover:underline">Volunteers and Partners</Link>
                    </div>
                    <div className="flex flex-col items-center md:items-start mt-5 md:mt-0 gap-3">
                        <h4 className="font-bold mb-1">Legal</h4>
                        <Link href={"#"} className="hover:underline">Privacy</Link>
                        <Link href={"#"} className="hover:underline">Terms & Condition</Link>
                        <Link href={"#"} className="hover:underline">Cookies Policy</Link>
                        <Link href={"#"} className="hover:underline">Contact Us</Link>
                    </div>
                    <div className="flex flex-col items-center md:items-start mt-5 md:mt-0 gap-3">
                        <h4 className="font-bold mb-1">Elections</h4>
                        <Link href={"#"} className="hover:underline">Election Result</Link>
                        <Link href={"#"} className="hover:underline">Eyewitness</Link>
                        <Link href={"#"} className="hover:underline">News</Link>
                        <Link href={"#"} className="hover:underline">Publications</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-center gap-8 md:flex-row md:px-7">
                    <Image src={"/assets/images/footerImage.png"} className="w-[190px]" width={232} height={100} alt="" />
                    <div className="flex gap-4">
                        <div className="size-10 bg-white flex items-center justify-center rounded-full">
                            <Facebook color="#000" />
                        </div>
                        <div className="size-10 bg-white flex items-center justify-center rounded-full">
                            <Svg SvgIcon={tiktok} width={'24px'} height={'24px'} />
                        </div>
                        <div className="size-10 bg-white flex items-center justify-center rounded-full">
                            <Instagram color="#000" />
                        </div>
                        <div className="size-10 bg-white flex items-center justify-center rounded-full">
                            <Svg SvgIcon={twitterX} width={'24px'} height={'24px'} />
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-white mt-7 mb-2 md:px-7"></div>
                <small className="flex justify-center mt-4">
                    NGElectionspolls©️ 2024 - All rights reserved
                </small>
            </div>
        </footer>
    )
}

export default Footer
