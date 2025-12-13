import Image from "next/image";
import { inter } from "@/app/ui/fonts";
import { StarIcon } from "@heroicons/react/16/solid";

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

export default function Cards({buku} : Books){
    return <div className="bg-linear-to-b from-red-950/40 to-cyan-950/40 flex shrink-0 rounded-xl drop-shadow-lg drop-shadow-background">
        <div className="relative shrink-0">
            <Image alt={buku.title} src={buku.cover} width={180} height={240} className="rounded-r-xl rounded-bl-xl h-full"></Image>
        </div>
        <div className={`${inter.className} mx-auto mt-4 w-1/2`}>
            <p className="font-black text-xl">{buku.title}</p>
            <p className="text-xs"><span className="text-red-200">{buku.author}</span> | <span className="text-blue-200">{buku.pages} hlm</span></p>
            <br />
            <p className="text-sm">{buku.blurb}</p>
            <br />
            <div className="flex items-end-safe">
                <div className="flex gap-2 flex-wrap flex-2/3">
                    {buku.genre.map((g, i) => {
                    return <div className="bg-slate-600 w-fit p-1 rounded-sm text-xs font-medium" key={i}>{g}</div>
                    })}
                </div>
                <div className="flex-1/3 text-sm h-fit">
                    <p className="text-right"><span className="font-bold text-xl">{buku.rate}</span>/5
                    <StarIcon className="text-yellow-500 h-5 w-5 align-text-bottom inline-block"/>
                    </p>
                </div>
            </div>
        </div>
    </div>
}