"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DiaADia() {
  const encontros = [
    {
      id: 1,
      foto: "/galeria/dia.jpeg", // Altere para o caminho correto da foto
      titulo: "Encontro com a Associação Kupulumussana",
      subtitulo: "Fortalecimento das Capacidades da We Concern",
      descricao:
        "Visitamos a Associação Kupulumussana, uma entidade com mais de 20 anos de atividade. O encontro foi focado no fortalecimento de capacidades técnico-administrativas. A experiência e expertise da Kupulumussana são valiosas para nós, e estamos ansiosos para implementar as novas estratégias discutidas para melhorar nossa atuação comunitária.",
      participantes:
        "A Kupulumussana esteve representada por Mateus Vagar (Director executivo) e Mateus Chinai Meque (Oficial de Programas), enquanto a We Concern foi representada pelos seus membros seniores Isac Druque, Timóteo Matangue e Edson Bruque.",
    },
    // Outros encontros podem ser adicionados aqui
  ];

  return (
    <div className="max-w-[1690px] pt-[-25px] mx-auto px-6">
      <div className="min-h-screen bg-white px-4 md:px-20">
        <h2 className="text-3xl font-bold text-[#00bfa5] mb-10 text-justify">
          Dia a Dia da Nossa Jornada
        </h2>

        {encontros.map((encontro) => (
          <motion.div
            key={encontro.id}
            className="bg-gray-50 p-6 shadow-lg mb-10 rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-center gap-8">
              <Image
                src={encontro.foto}
                alt={encontro.titulo}
                width={1800}
                height={100}
                className="object-cover shadow-md rounded-xl"
              />
              <div className="text-gray-800 mt-6">
                <h3 className="text-2xl font-semibold mb-3 text-[#00bfa5]">
                  {encontro.titulo}
                </h3>
                <h4 className="text-xl font-medium text-gray-600 mb-3">
                  {encontro.subtitulo}
                </h4>
                <p className="text-justify mb-3">{encontro.descricao}</p>
                <p className="text-justify mb-3 font-semibold">{encontro.participantes}</p>
                <p className="mt-6 text-lg font-bold text-[#00bfa5]">
                  Interessado em fazer parte do nosso dia-a-dia? Junte-se a nós como voluntário! Entre em contato para saber como você pode contribuir para nossas iniciativas.
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
