import React, { useState } from 'react';
import { Instagram, X, ShoppingBag, MessageCircle } from 'lucide-react';
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
      {/* Floating Desktop & Mobile Instagram Bubble */}
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Welcome Message Bubble */}
        {isOpenTooltip && (
          <div className="bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-3xl p-4 shadow-xl max-w-[270px] text-xs text-[#1E2B1D] dark:text-[#F3F6F1] vintage-shadow-sm relative animate-in fade-in slide-in-from-bottom-2">
            <button
              onClick={() => setIsOpenTooltip(false)}
              className="absolute top-3 right-3 text-[#4A5B49] dark:text-[#A3B5A1] hover:text-[#1E2B1D] dark:hover:text-white p-1 cursor-pointer"
              aria-label="Fechar balão"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold text-[#6e9167] dark:text-[#96c3a6] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#6e9167] animate-pulse" />
              <span>Cleu no Instagram</span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#4A5B49] dark:text-[#A3B5A1] font-light">
              Olá! Fale direto com a Cleu no Direct para tirar dúvidas sobre medidas, cores ou encomendar uma peça exclusiva.
            </p>
          </div>
        )}

        {/* Instagram Main Floating Button */}
        <a
          href="https://www.instagram.com/crochedacleu.pravoce/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 border-2 border-white dark:border-[#121811] relative group"
          title="Falar com a Cleu no Instagram @crochedacleu.pravoce"
          aria-label="Conversar no Instagram Direct"
        >
          <Instagram className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 bg-[#1E2B1D] dark:bg-[#6e9167] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-white">
            1
          </span>
        </a>
      </div>

      {/* Sticky Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-white/95 dark:bg-[#121811]/95 backdrop-blur-md text-[#1E2B1D] dark:text-[#F3F6F1] p-3 z-30 border-t border-[#DCE5D3] dark:border-[#2c3c2b] flex items-center justify-between gap-3 shadow-2xl">
        <button
          onClick={onOpenCart}
          className="flex-1 bg-[#F2F5ED] dark:bg-[#1f2a1e] text-[#1E2B1D] dark:text-[#F3F6F1] text-xs font-semibold uppercase tracking-wider py-3.5 px-4 rounded-full flex items-center justify-center gap-2 relative border border-[#DCE5D3] dark:border-[#2c3c2b] shadow-sm cursor-pointer min-h-[46px]"
        >
          <ShoppingBag className="w-4 h-4 text-[#6e9167] dark:text-[#96c3a6]" />
          <span>Sacola</span>
          {totalCartCount > 0 && (
            <span className="bg-[#6e9167] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
              {totalCartCount}
            </span>
          )}
        </button>

        <a
          href="https://www.instagram.com/crochedacleu.pravoce/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-[#bc1888] to-[#dc2743] hover:opacity-95 text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-sm text-center min-h-[46px]"
        >
          <Instagram className="w-4 h-4" />
          <span>Direct da Cleu</span>
        </a>
      </div>
    </>
  );
};

