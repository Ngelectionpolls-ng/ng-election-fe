// import { tiktok, twitterX } from "../../public/assets/icons"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Svg from "../commons/ui/Svg"

function Footer() {
    return (
        <>
            <div className="h-[200px] w-screen flex items-center justify-center" style={{backgroundImage: "url('/assets/home/nigeria-bg.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <h4 className="text-white uppercase text-center text-xl font-bold">Nigeria can be great again</h4>
            </div>
            <footer className="bg-[#0A491C] flex justify-center py-16 w-screen text-white">
                <div className="w-[1104px]">
                    <div className="flex items-center justify-center gap-2">
                        <div className="bg-white h-[1px] w-full"></div>
                        <div className="text-green-500 font-bold flex gap-1">Nigeria<span className="text-white"> Election</span><span className="text-green-500">Poll<sup className="text-white text-[8px] ml-[2px]">TM</sup></span> </div>
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
                            {/* <div className="size-10 bg-white flex items-center justify-center rounded-full">
                                <Svg SvgIcon={tiktok} width={'24px'} height={'24px'} />
                            </div> */}
                            <div className="size-10 bg-white flex items-center justify-center rounded-full">
                                <Instagram color="#000" />
                            </div>
                            {/* <div className="size-10 bg-white flex items-center justify-center rounded-full">
                                <Svg SvgIcon={twitterX} width={'24px'} height={'24px'} />
                            </div> */}
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-white mt-7 mb-2 md:px-7"></div>
                    <div className="flex justify-between w-full text-white">
                        <span className="text-xs">NGElectionspolls©️ 2024 - All rights reserved</span>
                        <span className="text-xs">Cookies policy Legal information Sitemap All articles</span>
                    </div>
                </div>
            </footer>
        </>
        
    )
}

export default Footer
