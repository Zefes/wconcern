import { Lightbulb, Heart, Droplets } from 'lucide-react';

const Projectos = () => {
  const temas = [
    {
      titulo: "Nutrição e Wash",
      descricao:
        "Queremos reduzir a desnutrição, melhorar o acesso à água potável e garantir condições de higiene básicas para comunidades vulneráveis.",
      imagem: "/projecto/nutricao-wash.jpg",
      icone: <Droplets className="text-teal-700 w-6 h-6" />,
    },
    {
      titulo: "Gênero",
      descricao:
        "Pretendemos garantir equidade no acesso aos serviços sociais básicos a todos, independentemente do sexo, raça, idade, religião ou filiação partidária.",
      imagem: "/projecto/genero.jpg",
      icone: <Lightbulb className="text-teal-700 w-6 h-6" />,
    },
    {
      titulo: "HIV",
      descricao:
        "Apoiamos as iniciativas do MISAU para melhorar a adesão e retenção de pacientes no TARV e combater o estigma relacionado ao HIV.",
      imagem: "/projecto/hiv.jpeg",
      icone: <Heart className="text-teal-700 w-6 h-6" />,
    },
  ];

  return (
    <section className="max-w-[1500px] mx-auto px-6 pt-6">
      <h2 className="text-3xl font-bold text-[#00bfa5] mb-10 text-left">
        Nossos Projectos
      </h2>

      <div className="bg-gray-100 py-14 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {temas.map((tema, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-teal-700 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={tema.imagem}
                    alt={tema.titulo}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {tema.icone}
                      <h3 className="text-xl font-bold text-blue-700">{tema.titulo}</h3>
                    </div>
                    <p className="text-gray-700 text-[15px] leading-relaxed">
                      {tema.descricao}
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

export default Projectos;
