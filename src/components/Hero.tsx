import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, Flower2, Award, Heart, ShieldCheck, Check } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/productImages';

interface HeroProps {
  onExploreProducts: (category?: string) => void;
  onCustomOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onCustomOrder }) => {
  return (
    <section className="relative bg-[#FAFBF7] text-[#1E2B1D] pt-10 pb-16 sm:py-20 border-b border-[#DCE5D3] overflow-hidden">
      
      {/* 60s Decorative Organic Background Elements */}
      <div className="absolute top-12 -left-20 w-72 h-72 bg-[#c7d1af]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 -right-20 w-96 h-96 bg-[#96c3a6]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Vintage Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F2F5ED] border border-[#DCE5D3] px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.25em] font-semibold text-[#6e9167]">
              <Flower2 className="w-4 h-4 text-[#6e9167] animate-spin-slow" />
              <span>Artesanato Autoral • Feito Ponto a Ponto com Amor</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1E2B1D] leading-[1.1] tracking-tight">
              Peças artesanais feitas à mão, <br className="hidden sm:inline" />
              <span className="italic text-[#6e9167] font-serif">com carinho e dedicação.</span>
            </h1>

            <p className="text-[#4A5B49] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Bolsas, roupas, amigurumis e itens de decoração tecidos ponto a ponto pela <strong>Cleu</strong> com fios selecionados. Escolha seu modelo favorito ou encomende uma peça sob medida.
            </p>

            {/* Quick Category Jump Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <button
                onClick={() => onExploreProducts('bolsas')}
                className="bg-[#c7d1af]/40 hover:bg-[#6e9167] hover:text-white text-[#1E2B1D] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#DCE5D3] transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>👜 Bolsas Retrô</span>
              </button>
              <button
                onClick={() => onExploreProducts('roupas')}
                className="bg-[#c7d1af]/40 hover:bg-[#6e9167] hover:text-white text-[#1E2B1D] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#DCE5D3] transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>🧶 Roupas & Coletes</span>
              </button>
              <button
                onClick={() => onExploreProducts('decoracao')}
                className="bg-[#c7d1af]/40 hover:bg-[#6e9167] hover:text-white text-[#1E2B1D] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#DCE5D3] transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>🌻 Decoração & Mesa</span>
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={onCustomOrder}
                className="w-full sm:w-auto bg-[#6e9167] hover:bg-[#5a7954] text-white font-sans text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all shadow-md hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Encomendar Peça Sob Medida</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onExploreProducts()}
                className="w-full sm:w-auto bg-transparent hover:bg-[#F2F5ED] text-[#1E2B1D] border border-[#1E2B1D] font-sans text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Ver Catálogo Completo</span>
              </button>
            </div>

            {/* 60s Craft Metric Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#DCE5D3]">
              <div className="bg-[#F2F5ED] p-4 rounded-2xl border border-[#DCE5D3]">
                <div className="font-serif text-2xl font-bold text-[#1E2B1D]">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-[#4A5B49] font-semibold mt-0.5">
                  Artesanal & Lento
                </div>
              </div>
              <div className="bg-[#F2F5ED] p-4 rounded-2xl border border-[#DCE5D3]">
                <div className="font-serif text-2xl font-bold text-[#6e9167]">5.0 ★</div>
                <div className="text-[10px] uppercase tracking-wider text-[#4A5B49] font-semibold mt-0.5">
                  Avaliação Média
                </div>
              </div>
              <div className="bg-[#6e9167] p-4 rounded-2xl text-white col-span-2 sm:col-span-1 flex flex-col justify-center shadow-sm">
                <div className="text-[10px] uppercase tracking-wider text-[#c7d1af] font-medium">Envio Seguro</div>
                <div className="font-serif italic text-sm font-semibold">Todo o Brasil</div>
              </div>
            </div>
          </div>

          {/* Hero Featured Collage / 60s Showcase Gallery */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* 60s Mod Badge */}
              <div className="absolute -top-3 -right-3 z-20 bg-[#c7d1af] text-[#1E2B1D] border border-[#6e9167] text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Flower2 className="w-3.5 h-3.5 text-[#6e9167]" />
                <span>Coleção 60s Botânica</span>
              </div>

              {/* Main Photo Card with 60s Vintage Frame */}
              <div className="bg-white p-4 rounded-3xl border border-[#DCE5D3] vintage-shadow overflow-hidden">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group bg-[#F2F5ED]">
                  <img
                    src={PRODUCT_IMAGES.bolsaChocolate}
                    alt="Bolsa Elegance Chocolate com Alça de Madeira em Crochê da Cleu"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2B1D]/85 via-transparent to-transparent flex items-end p-5">
                    <div>
                      <span className="text-[#c7d1af] text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#96c3a6]" /> Peça em Destaque
                      </span>
                      <h4 className="text-white font-serif text-2xl font-normal leading-tight mt-0.5">
                        Bolsa Elegance <span className="italic font-serif text-[#c7d1af]">com Alça de Madeira</span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#F2F5ED] rounded-2xl mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6e9167] font-bold block">
                      Feito à Mão sob Encomenda
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#1E2B1D]">
                      R$ 185,00
                    </span>
                  </div>
                  <a
                    href="https://wa.me/5511999999999?text=Ol%C3%A1%20Cleu!%20Adorei%20a%20Bolsa%20Elegance%20Chocolate%20com%20Al%C3%A7a%20de%20Madeira%20no%20site%20e%20quero%20encomendar!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1E2B1D] hover:bg-[#6e9167] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#96c3a6]" />
                    <span>Pedir</span>
                  </a>
                </div>
              </div>

              {/* Floating review snippet */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-[#DCE5D3] p-4 rounded-2xl vintage-shadow max-w-[250px] text-xs text-[#1E2B1D] hidden sm:block">
                <div className="flex items-center gap-1 text-[#6e9167] text-xs mb-1">
                  {'★'.repeat(5)}
                </div>
                <p className="italic text-xs text-[#4A5B49] leading-relaxed font-serif">
                  "O acabamento da alça de madeira e o ponto do crochê são impecáveis. Apaixonada!"
                </p>
                <span className="text-[10px] uppercase tracking-wider text-[#6e9167] font-bold block mt-2">
                  — Mariana S. • Curitiba
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
