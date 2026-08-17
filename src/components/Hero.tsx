import React from 'react';
import { Sparkles, Instagram, ArrowRight, Flower2, Award, Heart, ShieldCheck, Check } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/productImages';

interface HeroProps {
  onExploreProducts: (category?: string) => void;
  onCustomOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onCustomOrder }) => {
  const handleFeaturedOrder = () => {
    const text = `🧵 Olá Cleu! Adorei a Bolsa Elegance Chocolate com Alça de Madeira no site e gostaria de encomendar!`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    window.open('https://www.instagram.com/crochedacleu.pravoce', '_blank');
  };

  return (
    <section className="relative bg-[#FAFBF7] dark:bg-[#121811] text-[#1E2B1D] dark:text-[#F3F6F1] pt-8 pb-14 sm:py-20 border-b border-[#DCE5D3] dark:border-[#2c3c2b] overflow-hidden transition-colors">
      
      {/* 60s Decorative Organic Background Elements */}
      <div className="absolute top-12 -left-20 w-72 h-72 bg-[#c7d1af]/30 dark:bg-[#6e9167]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 -right-20 w-96 h-96 bg-[#96c3a6]/20 dark:bg-[#96c3a6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Vintage Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F2F5ED] dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-[#6e9167] dark:text-[#96c3a6]">
              <Flower2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#6e9167] dark:text-[#96c3a6] animate-spin-slow" />
              <span>Artesanato Autoral • Feito Ponto a Ponto com Amor</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#1E2B1D] dark:text-[#F3F6F1] leading-[1.15] tracking-tight">
              Peças artesanais feitas à mão, <br className="hidden sm:inline" />
              <span className="italic text-[#6e9167] dark:text-[#96c3a6] font-serif">com carinho e dedicação.</span>
            </h1>

            <p className="text-[#4A5B49] dark:text-[#A3B5A1] text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Bolsas, roupas, amigurumis e itens de decoração tecidos ponto a ponto pela <strong>Cleu</strong> com fios selecionados. Escolha seu modelo favorito ou encomende uma peça sob medida.
            </p>

            {/* Quick Category Jump Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <button
                onClick={() => onExploreProducts('bolsas')}
                className="bg-[#c7d1af]/30 dark:bg-[#192118] hover:bg-[#6e9167] dark:hover:bg-[#6e9167] hover:text-white dark:hover:text-white text-[#1E2B1D] dark:text-[#F3F6F1] text-xs font-semibold px-4 py-2 rounded-full border border-[#DCE5D3] dark:border-[#2c3c2b] transition-all cursor-pointer flex items-center gap-1.5 min-h-[38px]"
              >
                <span>👜 Bolsas Retrô</span>
              </button>
              <button
                onClick={() => onExploreProducts('roupas')}
                className="bg-[#c7d1af]/30 dark:bg-[#192118] hover:bg-[#6e9167] dark:hover:bg-[#6e9167] hover:text-white dark:hover:text-white text-[#1E2B1D] dark:text-[#F3F6F1] text-xs font-semibold px-4 py-2 rounded-full border border-[#DCE5D3] dark:border-[#2c3c2b] transition-all cursor-pointer flex items-center gap-1.5 min-h-[38px]"
              >
                <span>🧶 Roupas & Coletes</span>
              </button>
              <button
                onClick={() => onExploreProducts('decoracao')}
                className="bg-[#c7d1af]/30 dark:bg-[#192118] hover:bg-[#6e9167] dark:hover:bg-[#6e9167] hover:text-white dark:hover:text-white text-[#1E2B1D] dark:text-[#F3F6F1] text-xs font-semibold px-4 py-2 rounded-full border border-[#DCE5D3] dark:border-[#2c3c2b] transition-all cursor-pointer flex items-center gap-1.5 min-h-[38px]"
              >
                <span>🌻 Decoração & Mesa</span>
              </button>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-3">
              <button
                onClick={onCustomOrder}
                className="w-full sm:w-auto bg-[#1E2B1D] dark:bg-[#6e9167] hover:bg-[#6e9167] dark:hover:bg-[#5a7954] text-white font-sans text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all shadow-md hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                <span>Encomendar Peça Sob Medida</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onExploreProducts()}
                className="w-full sm:w-auto bg-transparent hover:bg-[#F2F5ED] dark:hover:bg-[#192118] text-[#1E2B1D] dark:text-[#F3F6F1] border border-[#1E2B1D] dark:border-[#96c3a6] font-sans text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
              >
                <span>Ver Catálogo Completo</span>
              </button>
            </div>

            {/* 60s Craft Metric Highlights */}
            <div className="pt-4 sm:pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-[#DCE5D3] dark:border-[#2c3c2b]">
              <div className="bg-[#F2F5ED] dark:bg-[#192118] p-3.5 sm:p-4 rounded-2xl border border-[#DCE5D3] dark:border-[#2c3c2b]">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#1E2B1D] dark:text-[#F3F6F1]">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-[#4A5B49] dark:text-[#A3B5A1] font-semibold mt-0.5">
                  Artesanal & Lento
                </div>
              </div>
              <div className="bg-[#F2F5ED] dark:bg-[#192118] p-3.5 sm:p-4 rounded-2xl border border-[#DCE5D3] dark:border-[#2c3c2b]">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#6e9167] dark:text-[#96c3a6]">5.0 ★</div>
                <div className="text-[10px] uppercase tracking-wider text-[#4A5B49] dark:text-[#A3B5A1] font-semibold mt-0.5">
                  Avaliação Média
                </div>
              </div>
              <div className="bg-[#6e9167] p-3.5 sm:p-4 rounded-2xl text-white col-span-2 sm:col-span-1 flex flex-col justify-center shadow-sm">
                <div className="text-[10px] uppercase tracking-wider text-[#c7d1af] font-medium">Envio Seguro</div>
                <div className="font-serif italic text-sm font-semibold">Todo o Brasil</div>
              </div>
            </div>
          </div>

          {/* Hero Featured Collage / 60s Showcase Gallery */}
          <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-md">
              
              {/* 60s Mod Badge */}
              <div className="absolute -top-3 -right-2 sm:-right-3 z-20 bg-[#c7d1af] text-[#1E2B1D] border border-[#6e9167] text-[10px] uppercase tracking-widest font-bold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Flower2 className="w-3.5 h-3.5 text-[#6e9167]" />
                <span>Coleção 60s Botânica</span>
              </div>

              {/* Main Photo Card with 60s Vintage Frame */}
              <div className="bg-white dark:bg-[#192118] p-3.5 sm:p-4 rounded-3xl border border-[#DCE5D3] dark:border-[#2c3c2b] vintage-shadow overflow-hidden">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group bg-[#F2F5ED] dark:bg-[#151c14]">
                  <img
                    src={PRODUCT_IMAGES.bolsaChocolate}
                    alt="Bolsa Elegance Chocolate com Alça de Madeira em Crochê da Cleu"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2B1D]/85 via-transparent to-transparent flex items-end p-4 sm:p-5">
                    <div>
                      <span className="text-[#c7d1af] text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#96c3a6]" /> Peça em Destaque
                      </span>
                      <h4 className="text-white font-serif text-xl sm:text-2xl font-normal leading-tight mt-0.5">
                        Bolsa Elegance <span className="italic font-serif text-[#c7d1af]">com Alça de Madeira</span>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 bg-[#F2F5ED] dark:bg-[#1f2a1e] rounded-2xl mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6e9167] dark:text-[#96c3a6] font-bold block">
                      Feito à Mão sob Encomenda
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#1E2B1D] dark:text-[#F3F6F1]">
                      R$ 185,00
                    </span>
                  </div>
                  <button
                    onClick={handleFeaturedOrder}
                    className="bg-[#1E2B1D] dark:bg-[#6e9167] hover:bg-[#6e9167] dark:hover:bg-[#5a7954] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-all shadow-sm cursor-pointer min-h-[40px]"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#c7d1af] dark:text-white" />
                    <span>Pedir</span>
                  </button>
                </div>
              </div>

              {/* Floating review snippet */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] p-3.5 sm:p-4 rounded-2xl vintage-shadow max-w-[240px] sm:max-w-[250px] text-xs text-[#1E2B1D] dark:text-[#F3F6F1] hidden sm:block">
                <div className="flex items-center gap-1 text-[#6e9167] text-xs mb-1">
                  {'★'.repeat(5)}
                </div>
                <p className="italic text-xs text-[#4A5B49] dark:text-[#A3B5A1] leading-relaxed font-serif">
                  "O acabamento da alça de madeira e o ponto do crochê são impecáveis. Apaixonada!"
                </p>
                <span className="text-[10px] uppercase tracking-wider text-[#6e9167] dark:text-[#96c3a6] font-bold block mt-1.5">
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

