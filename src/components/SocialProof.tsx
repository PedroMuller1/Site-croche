import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, ShieldCheck, Instagram, Heart, Flower2 } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F2F5ED] dark:bg-[#151c14] border-t border-[#DCE5D3] dark:border-[#2c3c2b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] text-[#6e9167] dark:text-[#96c3a6] text-[10px] uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#6e9167] text-[#6e9167]" />
            <span>Mais de 150 encomendas entregues com carinho</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B1D] dark:text-[#F3F6F1] leading-tight">
            Quem Já Recebeu o Crochê da Cleu
          </h2>
          <div className="flex items-center justify-center gap-2 pt-1 flex-wrap">
            <div className="flex text-[#6e9167] text-sm">
              {'★'.repeat(5)}
            </div>
            <span className="font-serif font-bold text-sm text-[#1E2B1D] dark:text-[#F3F6F1]">5.0 de 5 estrelas</span>
            <span className="text-xs text-[#4A5B49] dark:text-[#A3B5A1] font-light">• 100% de clientes encantadas</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-3xl p-5 flex flex-col justify-between vintage-shadow-sm space-y-4 transition-transform hover:-translate-y-1"
            >
              <div>
                {/* Author & Rating */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#DCE5D3] dark:border-[#2c3c2b]"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1E2B1D] dark:text-[#F3F6F1] leading-tight">
                      {review.author}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-[#4A5B49] dark:text-[#A3B5A1] block">
                      {review.city}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[#6e9167] mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#6e9167]" />
                  ))}
                  <span className="text-[10px] uppercase tracking-wider text-[#6e9167] dark:text-[#96c3a6] font-semibold ml-1.5">
                    ✓ Verificada
                  </span>
                </div>

                <div className="text-[11px] text-[#6e9167] dark:text-[#96c3a6] font-semibold mb-2">
                  Peça: {review.productName}
                </div>

                <p className="text-xs text-[#4A5B49] dark:text-[#A3B5A1] italic font-light leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCE5D3] dark:border-[#2c3c2b] text-[10px] text-[#4A5B49] dark:text-[#A3B5A1] flex justify-between">
                <span>{review.date}</span>
                <span className="text-[#6e9167] dark:text-[#96c3a6] font-medium">Via Instagram</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Feed & Community Showcase */}
        <div className="bg-[#1E2B1D] dark:bg-[#192118] text-white rounded-3xl p-6 sm:p-10 border border-[#DCE5D3] dark:border-[#2c3c2b] vintage-shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#c7d1af] text-xs uppercase tracking-[0.2em] font-semibold">
                <Instagram className="w-4 h-4" />
                <span>@crochedacleu.pravoce</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
                Acompanhe os bastidores no Instagram
              </h3>
              <p className="text-xs text-white/70 max-w-md font-light leading-relaxed">
                Vídeos de confecção ponto a ponto, combinação de cartelas botânicas, unboxings perfumados e dicas de conservação das peças de crochê.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="https://www.instagram.com/crochedacleu.pravoce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#F2F5ED] text-[#1E2B1D] text-xs uppercase tracking-wider font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm min-h-[46px]"
              >
                <Instagram className="w-4 h-4 text-[#6e9167]" />
                <span>Seguir no Instagram</span>
              </a>

              <a
                href="https://www.instagram.com/crochedacleu.pravoce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs uppercase tracking-wider font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm min-h-[46px]"
              >
                <Instagram className="w-4 h-4" />
                <span>Mandar Direct para a Cleu</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

