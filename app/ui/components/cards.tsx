import Image from "next/image";
import { inter } from "@/app/ui/fonts";
import { StarIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface BooksInfo{
    title: string,
    cover: string,
    author: string,
    blurb: string,
    pages: number,
    genre: Array<string>,
    types: string,
    rate: number,
    isbn: string
}

interface Books{
    buku: BooksInfo
};

export function Books({buku}: Books){
    return <>
        <p>{buku.title}</p>
    </>
}

export function BookCard({buku} : Books){
    return <div className="flex">
        <div className="h-80 w-full">
            <Image alt={buku.title} src={buku.cover} width={180} height={240}/>
        </div>
        <div className="p-2">
            <p>Hello</p>
        </div>
    </div>
}

export default function Cards({buku} : Books){
    return <div className="bg-linear-to-b from-red-950/40 to-cyan-950/40 flex rounded-lg md:rounded-xl drop-shadow-lg drop-shadow-background h-42 md:h-58 lg:h-60 items-center-safe">
        <div className="flex-1/3 relative h-full w-full">
            <Image alt={buku.title} src={buku.cover} fill className="rounded-r-lg rounded-bl-lg lg:rounded-r-xl lg:rounded-bl-xl w-fit object-cover object-center"></Image>
        </div>
        <div className={`${inter.className} mx-auto p-4 w-1/2 flex-2/3`}>
            <p className="font-black text-sm md:text-xl">{buku.title}</p>
            <p className="text-[0.5rem] md:text-xs mb-2 md:mb-4"><span className="text-red-200">{buku.author}</span> | <span className="text-blue-200">{buku.pages} hlm</span></p>
            <p className="text-[0.5rem] md:text-sm mb-2 md:mb-4">{buku.blurb}</p>
            <div className="flex items-end-safe">
                <div className="flex gap-1 flex-wrap flex-2/3 text-[0.5rem] md:text-xs">
                    {buku.genre.map((g, i) => {
                    return <div key={i} className="bg-slate-600 w-fit p-1 rounded-sm font-medium">{g}</div>
                    })}
                </div>
                <div className="flex-1/3 text-sm h-fit">
                    <p className="text-right text-[0.5rem] md:text-sm"><span className="font-bold text-xs md:text-xl">{buku.rate}</span>/5
                    <StarIcon className="text-yellow-500 h-3 w-3 lg:h-6 lg:w-6 align-text-bottom inline-block"/>
                    </p>
                </div>
            </div>
        </div>
    </div>
}