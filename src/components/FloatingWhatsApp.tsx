import React, { useState } from 'react';
import { MessageCircle, X, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface FloatingWhatsAppProps {
  cart: CartItem[];
  onOpenCart: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ cart, onOpenCart }) => {
  const [isOpenTooltip, setIsOpenTooltip] = useState(true);
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Floating Desktop & Mobile WhatsApp Bubble */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Welcome Message Bubble */}
        {isOpenTooltip && (
          <div className="bg-white border border-[#DCE5D3] rounded-3xl p-4 shadow-xl max-w-[260px] text-xs text-[#1E2B1D] vintage-shadow-sm relative animate-in fade-in slide-in-from-bottom-2">
            <button
              onClick={() => setIsOpenTooltip(false)}
              className="absolute top-2.5 right-2.5 text-[#4A5B49] hover:text-[#1E2B1D] p-0.5 cursor-pointer"
              aria-label="Fechar balão"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#6e9167] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#6e9167] animate-pulse" />
              <span>Cleu está online</span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#4A5B49] font-light">
              Olá! Quer ajuda com medidas para roupas ou escolher sua paleta vintage de bolsas? Fale comigo.
            </p>
          </div>
        )}

        {/* WhatsApp Main Button */}
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1%20Cleu!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20as%20pe%C3%A7as%20de%20croch%C3%AA%20anos%2060."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 border border-white/20 relative group"
          title="Falar com a Cleu no WhatsApp"
          aria-label="Conversar no WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 bg-[#6e9167] text-white text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center border border-white">
            1
          </span>
        </a>
      </div>

      {/* Sticky Mobile Bottom Bar (only visible on small screens) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-[#1E2B1D] text-white p-3 z-30 border-t border-[#DCE5D3] flex items-center justify-between gap-3 shadow-2xl">
        <button
          onClick={onOpenCart}
          className="flex-1 bg-white text-[#1E2B1D] text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-full flex items-center justify-center gap-2 relative shadow-sm cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4 text-[#6e9167]" />
          <span>Sacola</span>
          {totalCartCount > 0 && (
            <span className="bg-[#6e9167] text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
              {totalCartCount}
            </span>
          )}
        </button>

        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1%20Cleu!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20uma%20encomenda."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-sm text-center"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Cleu</span>
        </a>
      </div>
    </>
  );
};
