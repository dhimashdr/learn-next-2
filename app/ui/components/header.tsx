import { inter, italianno, poppins } from "@/app/ui/fonts";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return <div className="w-full flex py-4 xl:py-8 px-6 xl:px-18">
        <div className={`sm:text-4xl text-xl font-bold ${inter.className} flex-1/2 my-auto`}>
        <Link href="/">/ Dim's Space</Link></div>
        <div className={`flex-1/2 flex flex-row-reverse`}>
            <Image className="border-b-2 border-solid border-white scale-75 md:scale-100" src="/images/bocchi-vibing-lonely.gif" alt="haroo" width={100} height={100} unoptimized></Image>
        </div>
    </div>
}