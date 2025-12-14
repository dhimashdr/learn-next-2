import dataBuku from "@/app/data/bookData.json";
import Header from "./ui/components/header";
import Cards from "./ui/components/cards";
import { Books } from "./ui/components/cards";
import { Greet } from "./ui/components/filter";
import Footer from "./ui/components/footer";

export default function Home(){
  return <>
    <Header/>
    <div className="w-fit mx-4 md:mx-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {dataBuku.map((buku, index) => {
      return <Cards buku={buku} key={index}/>
    })}
    </div>
    {/* <Books buku={dataBuku[0]}/> */}
    {/* <form action={Greet}>
      <input type="checkbox" name="buku1" id="buku1" value="haha"/>
      <label htmlFor="buku1">Buku 1</label>
      <input type="submit" value="Submit"/>
    </form> */}

    <Footer/>
  </>
}   
