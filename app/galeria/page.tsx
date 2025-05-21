"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { text } from "stream/consumers";

export default function Galeria() {
  const galeriaData = [
    {
      img: "/galeria/governador.jpeg",
      alt: "Governador de Tete e We Concern",
      titulo: "Governador de Tete Reconhece a We Concern",
      texto1:
        "No dia 5 de junho de 2024, o Governador da Província de Tete, Domingos Viola, recebeu representantes da We Concern, liderados por Edson Bruque, num encontro institucional.",
      texto2:
        "O Governador destacou a importância das ações da organização nas áreas de saúde, gênero, combate ao HIV-SIDA e nutrição, encorajando o reforço da sua atuação nas zonas mais vulneráveis da província.",
    },
    {
      img: "/galeria/Promovemo.jpeg",
      alt: "Inovação para a Segurança Alimentar",
      titulo: "Inovação para a Segurança Alimentar",
      texto1:
        "Através de ações focadas em práticas agrícolas sustentáveis, promovemos a segurança alimentar e a melhoria contínua da produção agrícola. Nossas iniciativas envolvem a adoção de tecnologias de irrigação de ponta e o uso de sementes melhoradas para maximizar a produtividade, enquanto respeitamos os princípios ecológicos.",
      texto2:
        "Ao integrar tecnologias inovadoras e métodos de cultivo sustentáveis, buscamos transformar a realidade dos agricultores e suas comunidades, proporcionando não apenas uma colheita mais abundante, mas também um futuro mais seguro e saudável para todos.",
    },
    {
      img: "/galeria/comunidade.jpeg",
      alt: "Capacitação d",
      titulo: "Capacitação de Lideranças Locais: Construindo Comunidades mais Fortes e Sustentáveis",
      texto1:
        " Acreditamos no poder das lideranças locais para promover mudanças duradouras nas comunidades. Através de programas de capacitação, fornecemos a essas lideranças as ferramentas necessárias para liderar com eficácia em áreas chave como educação, saúde, gênero, agropecuária e meio ambiente.",
      texto2:
        "Nossos treinamentos abordam temas cruciais, preparando-os para enfrentar os desafios locais e impulsionar o desenvolvimento sustentável, melhorando a qualidade de vida e a equidade social nas comunidades.",
    },
    {
      img: "/galeria/VSLA.jpeg",
      alt: "Fortalecendo Comunidade",
      titulo: "Fortalecendo Comunidades: Capacitação em Gestão Financeira e Empreendedorismo Sustentável",
      texto1:
        "Capacitar as comunidades para que abram e administrem seus próprios negócios é um dos pilares para garantir o crescimento econômico local e a autonomia das famílias. Com apoio no VSLA, estamos promovendo a autossuficiência através de empreendedorismo sustentável.",
      texto2:
        "O objetivo é criar uma base sólida de negócios locais que possam gerar empregos, melhorar a qualidade de vida e fortalecer a economia comunitária de forma sustentável e inclusiva.",
      texto3:
        "Apoiamos as comunidades a fortalecer suas capacidades financeiras através da implementação do modelo VSLA (Village Savings and Loan Associations), promovendo a gestão eficiente de recursos financeiros e incentivando a abertura de pequenos negócios locais."
    
    },

  ];

  return (
    <div className="max-w-[1690px] mx-auto px-6 ">
      <div className="min-h-screen bg-white px-4 md:px-20">
        <h2 className="text-3xl font-bold text-[#00bfa5] mb-10 text-justify">
          Galeria de Impacto
        </h2>

        {galeriaData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 bg-gray-50 p-6 shadow-lg mb-12`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Image
              src={item.img}
              alt={item.alt}
              width={800}
              height={450}
              className="object-cover shadow-md rounded-xl"
            />
            <div className="text-gray-800">
              <h3 className="text-2xl font-semibold mb-3 text-[#00bfa5]">
                {item.titulo}
              </h3>
              <p className="mb-2 text-justify">{item.texto1}</p>
              <p className="text-justify">{item.texto2}</p>
              <p className="text-justify">{item.texto3}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
