import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Flower2 } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Quanto tempo leva para minha peça de crochê ficar pronta?',
      a: 'O prazo de confecção varia de 3 a 7 dias úteis para bolsas, coletes, tops e sousplats, e de 10 a 14 dias úteis para peças maiores como mantas e cardigans. Caso tenha urgência para uma data específica, fale com a Cleu no WhatsApp para ajustarmos a prioridade.'
    },
    {
      q: 'Posso personalizar o tamanho e as cores das bolsas e roupas?',
      a: 'Sim! Nossas criações são feitas sob medida. Ao escolher uma peça de roupa (colete, cropped ou cardigan), você pode informar suas medidas de busto, cintura e comprimento. Para bolsas e decorações, você pode escolher combinações da nossa paleta botânica anos 60 (#6e9167, #c7d1af, #96b49c, #96c3a6).'
    },
    {
      q: 'Como funciona o pagamento?',
      a: 'Aceitamos Pix (com 5% de desconto especial) e cartão de crédito em até 3x sem juros (ou até 12x via link protegido do Mercado Pago/InfinitePay). Para peças personalizadas sob medida, você pode pagar 50% de entrada e os 50% restantes quando a peça estiver pronta e aprovada por foto.'
    },
    {
      q: 'Como cuidar e lavar minhas peças de crochê?',
      a: 'Nossas peças são tecidas com fios de algodão mercerizado e fibras nobres de alta durabilidade. Recomendamos lavagem manual com sabão neutro e secagem na horizontal à sombra para preservar a textura dos pontos. Cada encomenda acompanha um cartão com orientações completas de cuidados.'
    },
    {
      q: 'Como é feito o envio e quanto custa o frete?',
      a: 'Enviamos para todo o Brasil via Correios (PAC ou Sedex) com código de rastreamento enviado diretamente no seu WhatsApp. Em compras acima de R$ 250,00 o frete é Grátis para qualquer cidade brasileira!'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#DCE5D3]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        
        {/* Section Head */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#F2F5ED] border border-[#DCE5D3] text-[#6e9167] text-[10px] uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire suas dúvidas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B1D] leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-xs text-[#4A5B49] max-w-md mx-auto font-light leading-relaxed">
            Informações sobre confecção artesanal, prazos de envio e personalização de encomendas.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F2F5ED] border border-[#DCE5D3] rounded-2xl overflow-hidden transition-all vintage-shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-base text-[#1E2B1D] hover:text-[#6e9167] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 text-[#4A5B49] ${
                      isOpen ? 'rotate-180 text-[#6e9167]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-xs text-[#4A5B49] leading-relaxed font-light border-t border-[#DCE5D3]/70 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra doubt CTA */}
        <div className="text-center mt-10 p-6 bg-[#F2F5ED] border border-dashed border-[#DCE5D3] rounded-2xl">
          <p className="text-xs text-[#4A5B49] mb-3 font-light">
            Tem alguma ideia exclusiva ou dúvida sobre medidas específicas?
          </p>
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%20Cleu!%20Tenho%20uma%20d%C3%BAvida%20sobre%20as%20pe%C3%A7as%20que%20n%C3%A3o%20achei%20no%20FAQ."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white bg-[#6e9167] hover:bg-[#5a7954] px-6 py-3 rounded-full transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#c7d1af]" />
            <span>Falar com a Cleu pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
