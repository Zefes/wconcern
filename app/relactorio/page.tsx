import { FileText, Calendar, User } from 'lucide-react';

const Relatorio = () => {
  const relatorios = [
    {
      titulo: "Relatório de Atividades - 2023",
      descricao:
        "Este relatório descreve as principais atividades realizadas em 2023, incluindo os resultados e impactos das ações realizadas nas comunidades.",
      imagem: "/relactorio/water-recipient.jpg",
      icone: <FileText className="text-teal-700 w-6 h-6" />,
    },
    {
      titulo: "Relatório de Impacto - Nutrição e Água",
      descricao:
        "Relatório detalhado sobre o impacto das ações voltadas à nutrição e ao acesso à água potável nas comunidades atendidas.",
      imagem: "/relactorio/UNI418144.webp",
      icone: <Calendar className="text-teal-700 w-6 h-6" />,
    },
    {
      titulo: "Relatório de Monitoramento - Gênero",
      descricao:
        "Relatório de monitoramento das ações de equidade de gênero, com dados atualizados sobre a participação e inclusão.",
      imagem: "/relactorio/UN0837174.webp",
      icone: <User className="text-teal-700 w-6 h-6" />,
    },
  ];

  return (
    <section className="max-w-[1500px] mx-auto px-6 pt-6">
      <h2 className="text-3xl font-bold text-[#00bfa5] mb-10 text-left">
        Nossos Relatórios
      </h2>

      <div className="bg-gray-50 py-14 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {relatorios.map((relatorio, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-teal-700 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={relatorio.imagem}
                    alt={relatorio.titulo}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {relatorio.icone}
                      <h3 className="text-xl font-bold text-blue-700">{relatorio.titulo}</h3>
                    </div>
                    <p className="text-gray-700 text-[15px] leading-relaxed">
                      {relatorio.descricao}
                    </p>
                  </div>

                  <div className="mt-6">
                    <button className="bg-teal-700 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition">
                      Saiba mais
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relatorio;
