import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";

const Navbar = () => {
    return(
        <nav className="w-full fixed top-0 left-0 pt-2 pb-0 border-b-2 border-green-500 bg-white shadow-md z-50">

            <div className="max-w-[1500px] mx-auto px-1">
                <div className="flex justify-between items-center">
                    {/* Logo com ajuste para diferentes tamanhos de tela */}
                    <Link href="/" className="flex-shrink-0">
                        <div className="w-56 h-auto">
                            <Image
                                src="/logos/logo.png"
                                alt="Logo Weconcern"
                                width={220}  // Tamanho padrão para telas grandes
                                height={100}
                                className="cursor-pointer hidden sm:block"  // Apenas visível em telas grandes
                            />
                            <Image
                                src="/logos/logo.png"
                                alt="Logo Weconcern"
                                width={150}  // Tamanho reduzido para telas pequenas
                                height={60}
                                className="cursor-pointer block sm:hidden"  // Apenas visível em telas pequenas
                            />
                        </div>
                    </Link>

                    <div className="flex-1 flex justify-center">
                        <Menu />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
