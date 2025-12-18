import dataBuku from "@/app/data/bookData.json";
import Header from "./ui/components/header";
import Cards from "./ui/components/cards";
import Footer from "./ui/components/footer";
import Link from "next/link";

export default function Home(){
  return <>
    <div className="w-fit mx-4 md:mx-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {dataBuku.map((buku, index) => {
      return <Link href={`/books/${buku.isbn}`} key={index}><Cards buku={buku}/></Link>
    })}
    </div>
  </>
}   
