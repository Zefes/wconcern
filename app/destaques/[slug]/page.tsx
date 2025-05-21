
import Image from 'next/image';
import { notFound } from 'next/navigation';


const Destaque = [
  {
    slug: 'parceria',
    titulo: 'Parceria Inovadora para um Futuro Sustentável!',
    descricao: `
      <p>Temos o prazer de anunciar uma emocionante parceria entre a <strong>We Concern</strong> e a <strong>Ener-G-Africa</strong>, uma das maiores empresas de <strong>energia limpa</strong> da África Austral! 🌍✨</p>

      <p>Estamos a implementar uma iniciativa pioneira que utiliza <strong>energias renováveis</strong> para a confeção de alimentos. Essa colaboração visa promover <strong>práticas sustentáveis</strong> e fornecer <strong>soluções energéticas limpas</strong>, beneficiando comunidades locais e o meio ambiente. 🔋🌱</p>

      <p>O destaque da parceria é o <strong>fogão FABS</strong> — uma solução inovadora que usa <strong>pastilhas</strong> no lugar de carvão, reduzindo significativamente as <strong>emissões de CO₂</strong>. O controle das chamas é feito por meio de um <strong>power bank</strong>, garantindo uma operação mais segura e eficiente.</p>

      <p>Além disso, em <strong>épocas chuvosas</strong>, quando o carvão se torna escasso e caro, o FABS se mostra ainda mais vantajoso: suas pastilhas vêm em <strong>sacos de 10kg</strong>, são <strong>fáceis de armazenar</strong> e manusear, proporcionando <strong>praticidade</strong> e <strong>sustentabilidade</strong> o ano todo.</p>
    `,
    imagem: '/Destaque/parceria.jpeg',
  },
  {
    slug: 'mobilizacao',
    titulo: 'Mobilização Comunitária em Nutrição e WASH',
    descricao: `
      <p><strong>A mobilização comunitária sobre WASH</strong> (Water, Sanitation, and Hygiene) é <strong>vital</strong> para promover a <strong>saúde</strong> e o <strong>bem-estar</strong> das comunidades. Esse processo envolve a <strong>participação ativa</strong> dos membros da comunidade na identificação de suas <strong>necessidades</strong>, na implementação de <strong>soluções</strong> e na manutenção das <strong>práticas de água, saneamento e higiene</strong>.</p>

      <p><strong>A conscientização</strong> e a <strong>educação</strong> são elementos-chave nessa mobilização. <strong>Campanhas de sensibilização</strong>, <strong>treinamentos</strong> e <strong>workshops</strong> são organizados para informar sobre a importância da <strong>água potável</strong>, do <strong>saneamento adequado</strong> e das <strong>práticas de higiene</strong>, como a <strong>lavagem das mãos</strong>. Essas atividades ajudam a <strong>mudar comportamentos</strong> e a criar <strong>hábitos saudáveis</strong>.</p>

      <p>A <strong>colaboração</strong> entre diferentes setores da comunidade, como <strong>escolas</strong>, <strong>centros de saúde</strong> e <strong>grupos locais</strong>, fortalece a implementação de <strong>iniciativas WASH</strong>. A formação de <strong>comitês comunitários</strong> permite uma <strong>gestão local eficaz</strong> dos recursos e das infraestruturas, garantindo a <strong>sustentabilidade</strong> das intervenções.</p>

      <p>Além disso, o <strong>engajamento comunitário</strong> assegura que as soluções sejam <strong>culturalmente apropriadas</strong> e atendam às <strong>necessidades específicas</strong> da população, promovendo a <strong>aceitação</strong> e o <strong>sucesso</strong> das iniciativas WASH. <strong>Mobilizar a comunidade</strong> em torno dessas questões é, portanto, <strong>essencial</strong> para construir um <strong>ambiente mais saudável e seguro</strong> para todos.</p>
    `,
    imagem: '/Destaque/Mobilizacaowash.jpeg',
  },
  {
    slug: 'agricultura',
    titulo: 'Promoção de Agricultura Sustentável',
    descricao: `
      <p>A <strong>agricultura em comunidades distantes</strong> das sedes distritais apresenta <strong>desafios únicos</strong>, mas também <strong>oportunidades significativas</strong> para promover a <strong>produção</strong> e a <strong>produtividade</strong>. Nessas regiões, o <strong>cultivo de alimentos</strong> é crucial para a <strong>subsistência</strong> e o <strong>desenvolvimento econômico</strong> das comunidades. A <strong>adoção de práticas agrícolas sustentáveis</strong>, o uso de <strong>tecnologias apropriadas</strong> e o acesso a <strong>insumos de qualidade</strong> são fundamentais para <strong>maximizar os rendimentos</strong>.</p>

      <p><strong>Iniciativas de capacitação</strong> e <strong>treinamento</strong> em <strong>técnicas modernas</strong> de plantio, <strong>irrigação eficiente</strong> e <strong>manejo adequado do solo</strong> são essenciais para <strong>melhorar a produção</strong>. Além disso, a introdução de <strong>variedades de culturas resistentes</strong> a pragas e às <strong>condições climáticas adversas</strong> pode aumentar a <strong>resiliência</strong> e a <strong>produtividade</strong> das colheitas.</p>

      <p>A implementação de <strong>sistemas de cooperação</strong> entre os agricultores e a criação de <strong>redes de apoio e distribuição</strong> garantem que os produtos cheguem aos <strong>mercados</strong> de forma eficiente, <strong>gerando renda</strong> e <strong>fortalecendo a economia local</strong>. <strong>Promover a agricultura em locais distantes</strong> é <strong>investir no futuro</strong> dessas comunidades, assegurando sua <strong>sustentabilidade</strong> e contribuindo para a <strong>segurança alimentar</strong>.</p>
    `,
    imagem: '/Destaque/preparacaoCampo.jpeg',
  },
];

export default async function ProjetoDetalhe({ params }: { params: { slug: string } }) {
  // ⚠️ Use async function e acesse diretamente params.slug (já tratado como Promise pelo Next.js)
  const projeto = Destaque.find((item) => item.slug === params.slug);

  if (!projeto) return notFound();

  return (
    <section className="max-w-[1500px] mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-[#00bfa5] mb-10">{projeto.titulo}</h1>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Imagem à esquerda */}
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[600px]">
          <Image
            src={projeto.imagem}
            alt={projeto.titulo}
            fill
            className="rounded-xl object-cover"
          />
        </div>


        {/* Texto à direita */}
        <div>
          <div
            className="text-gray-700 text-lg space-y-4 text-justify"
            dangerouslySetInnerHTML={{ __html: projeto.descricao }}
          />
        </div>
      </div>
    </section>
  );
}