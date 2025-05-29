'use client';

import Image from 'next/image';
import Link from 'next/link';

const Destaque = [
  {
    id: 1,
    slug: 'parceria',
    titulo: 'Parceria Inovadora para um Futuro Sustentável!',
    descricao: 'Temos o prazer de anunciar uma emocionante parceria entre a We Concern e a Ener-G-Africa...',
    imagem: '/Destaque/parceria.jpeg',
  },
  {
    id: 2,
    slug: 'mobilizacao',
    titulo: 'Mobilização Comunitária em Nutrição e WASH',
    descricao: 'A mobilização comunitária sobre WASH (Water, Sanitation, and Hygiene) é vital para promover...',
    imagem: '/Destaque/Mobilizacaowash.jpeg',
  },
  {
    id: 3,
    slug: 'agricultura',
    titulo: 'Promoção de Agricultura Sustentável',
    descricao: 'A agricultura em comunidades distantes das sedes distritais...',
    imagem: '/Destaque/preparacaoCampo.jpeg',
  },
];
  // Adicione mais projetos aqui

const DestaqueLista = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-yellow-500 mb-10">🚀 Grandes Novidades </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Destaque.map((proj) => (
          <div
            key={proj.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative w-full h-90">
              <Image
                src={proj.imagem}
                alt={proj.titulo}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-[240px]">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{proj.titulo}</h3>
                <p className="text-gray-600 text-sm mb-4">{proj.descricao}</p>
              </div>
              <Link
                href={`destaques/${proj.slug}`}
                className="mt-auto inline-block bg-yellow-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Saiba Mais →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DestaqueLista;