import React from 'react';
import { ShoppingBag, MessageCircle, CreditCard, Sparkles, Truck, ShieldCheck, HeartHandshake, CheckCircle2, Flower2 } from 'lucide-react';

export const HowToBuy: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Escolha ou Personalize',
      desc: 'Explore nossa galeria de bolsas, roupas e decorações ou monte uma encomenda personalizada nos tons botânicos dos anos 60.',
      icon: <ShoppingBag className="w-5 h-5 text-[#6e9167]" />,
      badge: 'Catálogo ou Exclusivo'
    },
    {
      num: '02',
      title: 'WhatsApp com 1-Clique',
      desc: 'Ao clicar em "Pedir", uma mensagem detalhada com o nome da peça, cor e prazo é enviada diretamente para a Cleu.',
      icon: <MessageCircle className="w-5 h-5 text-[#6e9167]" />,
      badge: 'Atendimento Direto com a Cleu'
    },
    {
      num: '03',
      title: 'Pagamento Seguro',
      desc: 'Pague via Pix com 5% de desconto imediato ou parcele no cartão de crédito em até 3x sem juros ou 12x.',
      icon: <CreditCard className="w-5 h-5 text-[#6e9167]" />,
      badge: 'Pix 5% OFF ou Cartão'
    },
    {
      num: '04',
      title: 'Confecção & Rastreamento',
      desc: 'Acompanhe fotos da confecção da sua peça. Enviamos para todo o Brasil com código de rastreamento e embalagem especial.',
      icon: <Truck className="w-5 h-5 text-[#1E2B1D]" />,
      badge: 'Frete Grátis acima de R$ 250'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-[#DCE5D3]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#F2F5ED] border border-[#DCE5D3] text-[#6e9167] text-[10px] uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full shadow-sm">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Processo transparente e sem complicações</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B1D] leading-tight">
            Como Encomendar sua Peça
          </h2>
          <p className="text-xs text-[#4A5B49] max-w-lg mx-auto font-light leading-relaxed">
            Cada item é tecido individualmente com fibras nobres selecionadas. Conheça as etapas do seu pedido:
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-[#F2F5ED] border border-[#DCE5D3] rounded-3xl p-6 flex flex-col justify-between vintage-shadow-sm relative transition-transform hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4 text-xs font-serif font-bold text-[#1E2B1D]/30 italic">
                {step.num}
              </div>

              <div className="space-y-3.5 pt-1">
                <div className="w-10 h-10 rounded-full bg-white border border-[#DCE5D3] flex items-center justify-center shadow-xs">
                  {step.icon}
                </div>
                <h3 className="font-serif font-bold text-base text-[#1E2B1D] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#4A5B49] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3.5 border-t border-[#DCE5D3] mt-4">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#6e9167] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#6e9167]" /> {step.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency Box (Payments & Shipping) */}
        <div className="bg-[#F2F5ED] border border-[#DCE5D3] rounded-3xl p-6 sm:p-8 vintage-shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#1E2B1D]">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-[#6e9167]">
                <CreditCard className="w-4 h-4" />
                <span>Formas de Pagamento</span>
              </div>
              <p className="text-xs text-[#4A5B49] leading-relaxed font-light">
                • <strong>Pix:</strong> 5% de desconto imediato.<br />
                • <strong>Cartão de Crédito:</strong> até 3x sem juros ou 12x via link seguro.<br />
                • <strong>Entrada de 50%:</strong> para iniciar pedidos exclusivos sob medida.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-[#6e9167]">
                <Truck className="w-4 h-4" />
                <span>Prazos & Envio</span>
              </div>
              <p className="text-xs text-[#4A5B49] leading-relaxed font-light">
                • <strong>Confecção:</strong> de 3 a 7 dias úteis por peça.<br />
                • <strong>Envio:</strong> Correios (PAC/Sedex) com rastreamento.<br />
                • <strong>Frete Grátis:</strong> em compras acima de R$ 250.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 font-serif font-bold text-base text-[#1E2B1D]">
                <ShieldCheck className="w-4 h-4 text-[#6e9167]" />
                <span>Garantia do Ateliê</span>
              </div>
              <p className="text-xs text-[#4A5B49] leading-relaxed font-light">
                • Fios 100% hipoalergênicos e duráveis.<br />
                • Ajustes garantidos caso haja qualquer divergência.<br />
                • Embalagem artesanal aromatizada com essência relaxante.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
