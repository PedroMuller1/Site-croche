import React from 'react';
import { Instagram, Heart, ShieldCheck, Truck, Sparkles, Flower2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: 'inicio' | 'produtos' | 'personalizar' | 'comprar' | 'depoimentos') => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAudit }) => {
  return (
    <footer className="bg-[#1E2B1D] dark:bg-[#0d130c] text-white/80 border-t border-[#DCE5D3] dark:border-[#2c3c2b] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[#6e9167] flex items-center justify-center text-white text-xs font-serif shadow-sm border border-[#c7d1af]/30">
                <Flower2 className="w-5 h-5 text-[#c7d1af]" />
              </div>
              <span className="font-serif text-2xl text-white tracking-wide">
                Crochê da <span className="italic text-[#c7d1af]">Cleu</span>
              </span>
            </div>
            <p className="text-xs text-white/65 max-w-sm mx-auto md:mx-0 leading-relaxed font-light">
              Artesanato autoral dos anos 60 tecido à mão com tempo, sensibilidade e afeto. Bolsas, roupas e decorações exclusivas sob encomenda.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="https://www.instagram.com/crochedacleu.pravoce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#6e9167] text-white p-2.5 rounded-full transition-all border border-white/15 flex items-center gap-2 text-xs"
                title="Instagram @crochedacleu.pravoce"
              >
                <Instagram className="w-4 h-4 text-[#c7d1af]" />
                <span className="font-medium">@crochedacleu.pravoce</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs font-light text-white/70">
              <li>
                <button onClick={() => onNavigate('inicio')} className="hover:text-[#c7d1af] transition-colors cursor-pointer">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('produtos')} className="hover:text-[#c7d1af] transition-colors cursor-pointer">
                  Catálogo Anos 60
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('personalizar')} className="hover:text-[#c7d1af] transition-colors cursor-pointer">
                  Peças Sob Medida
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('comprar')} className="hover:text-[#c7d1af] transition-colors cursor-pointer">
                  Como Encomendar & Prazos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('depoimentos')} className="hover:text-[#c7d1af] transition-colors cursor-pointer">
                  Depoimentos de Clientes
                </button>
              </li>
            </ul>
          </div>

          {/* Security & Audit */}
          <div className="space-y-3 text-center md:text-left">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-white">
              Compromisso
            </h4>
            <div className="space-y-2.5 text-xs text-white/70 font-light">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#96c3a6]" />
                <span>Compra 100% Protegida</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Truck className="w-3.5 h-3.5 text-[#c7d1af]" />
                <span>Rastreio de Encomendas</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Flower2 className="w-3.5 h-3.5 text-[#96c3a6]" />
                <span>Fios Nobres & Hipoalergênicos</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenAudit}
                  className="text-[#c7d1af] hover:underline text-xs block cursor-pointer mx-auto md:mx-0"
                >
                  📊 Relatório de Auditoria UX / CRO
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 sm:pt-8 text-center space-y-2 text-xs text-white/50 font-light">
          <p className="flex items-center justify-center gap-1.5">
            Feito à mão com carinho por Crochê da Cleu • Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-white/40">
            Peças autorais com estética anos 60 • Atendimento carinhoso via Instagram Direct @crochedacleu.pravoce
          </p>
        </div>
      </div>
    </footer>
  );
};

