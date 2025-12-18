import bookData from "@/app/data/bookData.json";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BooksByGenre({params} : {params : Promise<{ genre: string }>}){
    const { genre } = await params

    return <>
        <div>{genre}</div>
    </>
}