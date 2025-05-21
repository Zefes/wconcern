import Image from 'next/image'

export default function DesenvolvimentoComunitario() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-4">🤝 Desenvolvimento Comunitário</h2>
          <p className="text-gray-700 text-justify mb-4">
            Na <strong>We Concern</strong>, acreditamos que o progresso começa nas comunidades. Atuamos ao lado de famílias, jovens e líderes locais para criar soluções sustentáveis que melhoram a saúde, educação, agricultura e geração de renda.
          </p>
          <p className="text-green-700 font-semibold">
            Promovemos autonomia, dignidade e oportunidades para um futuro mais justo e resiliente.
          </p>
        </div>

        {/* Imagem com fill */}
        <div className="relative w-full h-64 md:h-96">
          <Image 
            src="/home/comunidade.jpeg"
            alt="Trabalho comunitário We Concern"
            fill
            className="rounded-2xl shadow-md object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
