import React from 'react';
import { ArrowRight, Heart, Sparkles, Flower2 } from 'lucide-react';
import { PRODUCT_IMAGES } from '../data/productImages';

interface AboutSectionProps {
  onExploreProducts: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreProducts }) => {
  return (
    <section className="py-14 sm:py-20 bg-white dark:bg-[#121811] border-t border-[#DCE5D3] dark:border-[#2c3c2b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Artisan Photo Frame */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-3xl bg-[#F2F5ED] dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] p-3 vintage-shadow-lg">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-[#DCE5D3] dark:border-[#2c3c2b] relative bg-[#FAFBF7] dark:bg-[#151c14]">
                <img
                  src={PRODUCT_IMAGES.mochilaGirassol}
                  alt="Peça artesanal feita à mão pela Cleu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1E2B1D]/5 dark:bg-[#000]/20" />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#1E2B1D] dark:bg-[#1f2a1e] text-white border border-[#c7d1af]/40 dark:border-[#96c3a6]/40 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-md whitespace-nowrap">
                <Flower2 className="w-3.5 h-3.5 text-[#c7d1af] dark:text-[#96c3a6]" />
                <span>Ateliê da Cleu • Feito à Mão</span>
              </div>
            </div>
          </div>

          {/* Story Copy */}
          <div className="md:col-span-7 space-y-4 sm:space-y-5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#F2F5ED] dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] text-[#6e9167] dark:text-[#96c3a6] text-[10px] uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full">
              <Heart className="w-3.5 h-3.5 fill-[#6e9167] dark:fill-[#96c3a6]" />
              <span>A História por trás de cada ponto</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B1D] dark:text-[#F3F6F1] leading-tight">
              A elegância atemporal do crochê dos anos 60 feito para hoje
            </h2>

            <p className="text-xs sm:text-sm text-[#4A5B49] dark:text-[#A3B5A1] leading-relaxed font-light">
              A <strong>Cleu</strong> aprendeu a tecer observando a paciência e precisão das mestras artesãs, transformando meadas puras em bolsas estruturadas, peças de vestuário fluidas e objetos de decoração que contam histórias.
            </p>

            <p className="text-xs sm:text-sm text-[#4A5B49] dark:text-[#A3B5A1] leading-relaxed font-light">
              Inspirada pela estética <em>Flower Power</em> e pela geometria orgânica dos anos 60, cada peça do <strong>Crochê da Cleu</strong> resgata a poesia das fibras nobres e a harmonia da cartela botânica em verde sálvia, oliva suave, laurel e menta.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <button
                onClick={onExploreProducts}
                className="bg-[#1E2B1D] dark:bg-[#6e9167] hover:bg-[#6e9167] dark:hover:bg-[#5a7954] text-white font-semibold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-sm cursor-pointer min-h-[46px]"
              >
                <span>Explorar Coleções</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

