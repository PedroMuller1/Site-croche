import React, { useState } from 'react';
import { Product } from '../types';
import { MessageCircle, ShoppingBag, Eye, Clock, Star, Sparkles, Flower2 } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenModal: (product: Product) => void;
  onAddToCart: (product: Product, color: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenModal,
  onAddToCart
}) => {
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Padrão');

  const handleWhatsAppDirect = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Olá Cleu! Quero encomendar a peça *${product.name}* (Ref: ${product.id}).\n` +
      `• Cor escolhida: ${selectedColor}\n` +
      `• Valor: R$ ${product.price},00\n` +
      `• Prazo estimado de produção: ${product.productionTime}\n` +
      `Como podemos combinar o envio e pagamento?`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  const handleAddBag = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedColor);
  };

  return (
    <div
      onClick={() => onOpenModal(product)}
      className="bg-white border border-[#DCE5D3] rounded-3xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-1 vintage-shadow-sm hover:vintage-shadow"
    >
      {/* Image and Badges */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F2F5ED] border-b border-[#DCE5D3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="bg-[#1E2B1D] text-white text-[9px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
          {product.inStockDirect && (
            <span className="bg-[#6e9167] text-white text-[9px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
              <Flower2 className="w-2.5 h-2.5 text-[#c7d1af]" /> Pronta Entrega
            </span>
          )}
        </div>

        {/* Quick View Floating button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenModal(product);
          }}
          className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-[#1E2B1D] py-1.5 px-3 rounded-full shadow-sm border border-[#DCE5D3] opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold"
        >
          <Eye className="w-3.5 h-3.5 text-[#6e9167]" /> Ver Detalhes
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#6e9167]">
              {product.category === 'bolsas' ? 'Bolsas em Crochê' : product.category === 'roupas' ? 'Vestuário & Roupas' : product.category === 'decoracao' ? 'Decoração & Lar' : product.category}
            </span>
            <div className="flex items-center gap-1 text-[#6e9167] text-xs font-medium">
              <Star className="w-3 h-3 fill-[#6e9167]" />
              <span className="font-bold text-[#1E2B1D]">{product.rating.toFixed(1)}</span>
              <span className="text-[#4A5B49]/60 text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-normal text-[#1E2B1D] group-hover:text-[#6e9167] transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Short Desc */}
          <p className="text-xs text-[#4A5B49] line-clamp-2 mt-1.5 leading-relaxed font-light">
            {product.shortDesc}
          </p>
        </div>

        {/* Color Switcher */}
        {product.colors && product.colors.length > 0 && (
          <div className="pt-2.5 border-t border-[#DCE5D3]/70" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between text-[11px] text-[#4A5B49] mb-1.5">
              <span className="text-[10px] uppercase tracking-wider font-medium">Paleta:</span>
              <span className="text-[#1E2B1D] font-semibold text-xs truncate max-w-[130px]">{selectedColor}</span>
            </div>
            <div className="flex items-center gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  style={{ backgroundColor: c.hex }}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    selectedColor === c.name
                      ? 'scale-125 border-[#1E2B1D] ring-2 ring-[#6e9167]/60'
                      : 'border-[#DCE5D3] hover:scale-110'
                  }`}
                  title={c.name}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Production Time & Pricing */}
        <div className="pt-3 border-t border-[#DCE5D3]/70 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#4A5B49] font-medium">
              <Clock className="w-3 h-3 text-[#6e9167]" />
              <span>{product.productionTime}</span>
            </div>
            <div className="font-serif text-2xl font-bold text-[#1E2B1D] leading-none mt-1">
              R$ {product.price},00
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#4A5B49]/70 block mt-0.5">
              Pix com 5% OFF ou em até 3x
            </span>
          </div>

          {/* Bag & Direct WhatsApp Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddBag}
              className="bg-[#F2F5ED] hover:bg-[#6e9167] hover:text-white text-[#1E2B1D] border border-[#DCE5D3] p-2.5 rounded-full transition-colors cursor-pointer"
              title="Adicionar à sacola de encomendas"
              aria-label="Adicionar à sacola"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppDirect}
              className="bg-[#1E2B1D] hover:bg-[#6e9167] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
              title="Pedir no WhatsApp da Cleu com 1 clique"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#96c3a6]" />
              <span>Pedir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
