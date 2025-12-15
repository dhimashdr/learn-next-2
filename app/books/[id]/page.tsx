import dataBuku from "@/app/data/bookData.json";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function DetailBuku({ params }: PageProps){
    const { id } = await params
    const book = dataBuku.find((book) => book.isbn === id)
    
    return <>
        <div className="h-screen flex">
            <div className="m-auto text-center items-center">
                <p className="text-xl font-bold">PAGE UNDER CONSTRUCTION</p>
                <br />
                <Image className="mx-auto" src="/images/bocchi.gif" alt="bocchi" width={200} height={200} unoptimized/>
                <br />
                <p>YOU CAN SEARCH <span className="text-blue-300">{book?.title}</span> REVIEWS ON <span className="text-yellow-300">GOODREADS</span></p>
                <br />
                <Link href="\">
                    <div className="bg-pink-800/60 rounded-full font-bold text-xl w-fit mx-auto p-2 px-6">BACK TO HOME</div>
                </Link>
            </div>
        </div>
    </>
}