<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> f85e012c202c72b1bf533f737166d8666c638c26
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
