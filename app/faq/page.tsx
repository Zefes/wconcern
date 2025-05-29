"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Como eu posso doar para a WE Concern Moçambique?",
    answer:
      "Você pode clicar em “Doe Agora” em qualquer canal oficial da WE Concern Moçambique para doar por cartão de crédito. Ou, se preferir doar por débito automático, boleto ou transferência bancária, você pode falar com a gente!",
  },
  {
    question: "Como exatamente a WE Concern Moçambique atua?",
    answer:
      "A WE Concern Moçambique atua através de projetos comunitários voltados para o desenvolvimento social e econômico das comunidades, capacitando indivíduos e promovendo a sustentabilidade local.",
  },
  {
    question: "Como saber se o dinheiro está realmente ajudando a População?",
    answer:
      "Prestamos contas de todas as doações –seja por meio de nossos canais de comunicação digital, na mídia e nas redes sociais,seja com os relatórios anuais, que garantem a transparência e compromisso para com cada criança que atendemos e cada doador que nos apoia",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-[1500px] mx-auto px-6 ">
      <h2 className="text-3xl font-bold text-[#00bfa5] mb-10 text-left">
        Perguntas Frequentes (FAQ)
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center text-left cursor-pointer"
            >
              <span className="text-lg font-semibold text-gray-800">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-[#0db301]" />
              ) : (
                <ChevronDown className="text-[#0db301]" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQ;
