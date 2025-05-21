import Image from "next/image";

const Quemsomos = () => {
    return (
        <section className="bg-teal-50 mt-6 py-12 px-6 sm:px-12">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-10">

                {/* Imagem */}
                <div className="w-full sm:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-[500px] h-[300px] sm:h-[350px] rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src="/paginainicial/sobre.jpeg"
                            alt="We Concern Moçambique"
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>

                {/* Texto */}
                <div className="w-full sm:w-1/2 text-justify sm:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-teal-800 mb-4 leading-tight">
                        Transformando Comunidades, Construindo Futuros
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        A <span className="font-semibold text-teal-900">We Concern</span> é uma ONG moçambicana sem fins lucrativos, 
                        focada em promover o <span className="font-semibold text-teal-800">desenvolvimento comunitário inclusivo</span> 
                        e fortalecer vidas através da ação social.
                    </p>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-4">
                        Reconhecida pelos Ministérios da Justiça e Saúde, atuamos para transformar realidades e construir um amanhã melhor.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Quemsomos;
