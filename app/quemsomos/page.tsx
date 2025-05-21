'use client'

import Image from 'next/image'

export default function QuemSomos() {
  return (
    <main className="max-w-[1500px] mx-auto px-6 py-10">

        {/* Seção: Quem Somos */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold text-[#00bfa5] mb-4">Quem Somos</h1>
            <p className="text-gray-700 text-justify">
              A <strong>We Concern</strong> é uma organização nao governamental Moçambicana, sem fins lucrativos, de carácter social, dotada de personalidade jurídica, com autonomia administrativa, 
              financeira e patrimonial, aprovada pelo despacho sem número do ministério da justiça, assuntos constitucionais e religiosos, datada de 07 de Novembro de 2023, harmonizado com o ministério da saúde por meio do oficio n° 572/GM-MJCR/240.2/2023 de 13 de Outubro de 2023, cujo o fim e a promoção de desenvolvimento comunitário inclusivo..
            </p>
          </div>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/home/peso.jpeg"
              alt="Comunidade beneficiada"
              fill
              className="rounded-xl object-cover shadow-lg"
              priority
            />
          </div>
        </section>

        {/* Seção: Missão, Visão, Valores */}
        <section className=" gap-10 text-center">
          <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-4xl font-semibold text-justify text-[#00bfa5] mb-4">Missão</h2>
            <p className="text-gray-600 text-justify">
              Gerir projetos comunitários de forma inclusiva e incentivar práticas sustentáveis
              para melhorar a vida dos moçambicanos.
            </p>
          </div>

          <div className="mt-3 bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-4xl font-semibold text-[#00bfa5] mb-4 text-justify">Visão</h2>
            <p className="text-gray-600 text-justify">
              Ser referência nacional e internacional na promoção de iniciativas que geram
              impacto estrutural positivo em comunidades rurais.
            </p>
          </div>

          <div className="mt-3 bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition col-span-full">
            <h2 className="text-4xl font-semibold text-[#00bfa5] mb-4 text-justify">Valores</h2>
            <div className="space-y-4 text-gray-700 text-justify">
                <p>
                <strong>Confiança:</strong> Somos uma instituição que busca um alto desempenho, entretanto, distribuímos as nossas tarefas com base no potencial individual dos nossos colaboradores e deles aguardamos os melhores resultados e responsabilidade em prol da organização.
                </p>
                <p>
                <strong>Crença:</strong> Acreditamos na melhoria das condições dos Moçambicanos, para isso, buscamos incansavelmente soluções que visam suprir a longo prazo as necessidades dos nossos beneficiários.
                </p>
                <p>
                <strong>Respeito:</strong> Todas as pessoas são iguais no valor, e o reconhecimento e celebração das nossas diferenças dá-nos tremenda força. Todas as pessoas que servimos e os nossos funcionários merecem ser tratados com respeito e dignidade.
                </p>
                <p>
                <strong>Humildade:</strong> O saber ser e estar é nossa obrigação, com isso, nos remetemos a um grau extremo de abertura e acolhimento de ideias inovadoras e empreendemos novas parcerias consoante procuramos descobrir e implementar soluções.
                </p>
                <p>
                <strong>Integridade:</strong> Enquanto organização, nos apegamos escrupulosamente aos nossos princípios e não abrimos espaços para condutas duvidosas que possam perigar as nossas boas relações com organizações parceiras, Governo, doadores, fornecedores, beneficiários e outras entidades.
                </p>
                <p>
                <strong>Transparência:</strong> A colaboração efectiva requer uma visão partilhada, comunicação aberta e transparência, a capacidade de escutar e responder às necessidades uns dos outros e responsabilização mútua.
                </p>
                <p>
                <strong>Sustentabilidade:</strong> A We Concern desenha programas sustentáveis, que continuam para além do nosso envolvimento. Trabalhamos com parceiros do sector público, privado e sociedade civil, integrando os nossos programas em sistemas existentes com foco em impacto de longo prazo.
                </p>
            </div>
            </div>
        </section>
    </main>
  );
}
