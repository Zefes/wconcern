import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react"; 

const Rodape = () => {
  return (
    <footer className="bg-teal-900 text-white py-12 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
        
        {/* Logo da Empresa */}
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0">
                <Image 
                    src="/icons/logo.png" 
                    alt="Logo AYUC"
                    width={250}
                    height={50}
                    className="cursor-pointer"
                    />
            </Link>
        </div>

        {/* Social Media */}
        <div className="mt-4 md:mt-0 text-center">
          <h3 className="font-semibold"> Redes Social </h3>
          <div className="flex space-x-4 mt-2">

          <a href="#" className="w-8 h-8">
              <Image src="/icons/facebook.png" alt="facebook" width={32} height={32} />
            </a>
            <a href="#" className="w-8 h-8">
              <Image src="/icons/twitter.png" alt="Twitter" width={32} height={32} />
            </a>
            <a href="#" className="w-8 h-8">
              <Image src="/icons/linkidin.png" alt="LinkedIn" width={32} height={32} />
            </a>
            <a href="#" className="w-8 h-8">
              <Image src="/icons/Instagram.png" alt="Instagram" width={32} height={32} />
            </a>
          </div>
        </div>

        {/* Endereço e Contato */}
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <h3 className="font-semibold">WeConsern - Sede</h3>
          <p className="flex items-center justify-center md:justify-start">
            <MapPin size={20} className="mr-2 text-white" /> Bairro Josina Machel, Avenida 25 de Junho, Rua Kwameh Nkrumah, Cidade de Tete, Moçambique
          </p>
          {/* Telefones em linha */}
          <div className="flex justify-center md:justify-start space-x-6 mt-2">
            <p className="flex items-center">
              <Phone size={20} className="mr-2 text-white" /> (+258) 841919000
            </p>
            <p className="flex items-center">
              <Phone size={20} className="mr-2 text-white" /> (+258) 829201900
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © Copyright 2025 Weconcern. Design:{" "}
        <a href="#" className="text-orange-500 hover:underline">Agência Signus</a>
      </div>
    </footer>
  );
};

export default Rodape;
