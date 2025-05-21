import Image from "next/image";
import SlideListe from "./slides/slideliste";
import Quemsomos from "./components/inicio/quemsomos";
import DestaqueLista from "./components/inicio/destaque";
import DesenvolvimentoCumunitario from "./components/inicio/comunitario";


export default function Home() {
  return (
    <div className="">
        <SlideListe />
      <main className="max-w-[1500px] mx-auto px-6">
        <Quemsomos />  

        <DestaqueLista /> 

        <DesenvolvimentoCumunitario />


      </main>
    </div>
  );
}
