import { inter, italianno, poppins } from "@/app/ui/fonts";
import Image from "next/image";

export default function Header(){
    return <div className="w-full flex py-8 px-20">
        <div className={`sm:text-4xl text-xl font-bold ${inter.className} flex-1/2 my-auto`}>/ Dim's Space</div>
        <div className={`flex-1/2 flex flex-row-reverse`}>
            <Image className="border-b-2 border-solid border-white" src="/images/bocchi-vibing-lonely.gif" alt="haroo" width={100} height={100} unoptimized></Image>
        </div>
    </div>
}