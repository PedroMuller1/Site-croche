import React, { useState } from 'react';
import { Product } from '../types';
import { Instagram, ShoppingBag, Eye, Clock, Star, Sparkles, Flower2, Check } from 'lucide-react';

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
  const [copied, setCopied] = useState(false);

  const handleInstagramOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const orderText = `Olá Cleu! Quero encomendar a peça *${product.name}* (Ref: ${product.id}) na cor ${selectedColor} (R$ ${product.price},00).`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(orderText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    
    // Open Instagram profile / DM
    window.open(`https://www.instagram.com/crochedacleu.pravoce/`, '_blank');
  };

  const handleAddBag = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedColor);
  };

  return (
    <div
      onClick={() => onOpenModal(product)}
      className="bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-3xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-1 vintage-shadow-sm hover:vintage-shadow"
    >
      {/* Image and Badges */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F2F5ED] dark:bg-[#1f2a1e] border-b border-[#DCE5D3] dark:border-[#2c3c2b]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="bg-[#1E2B1D] dark:bg-[#121811] text-white text-[9px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow-sm">
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
          className="absolute bottom-3 right-3 bg-white/95 dark:bg-[#121811]/90 hover:bg-white dark:hover:bg-[#121811] text-[#1E2B1D] dark:text-[#F3F6F1] py-1.5 px-3 rounded-full shadow-sm border border-[#DCE5D3] dark:border-[#2c3c2b] opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold"
        >
          <Eye className="w-3.5 h-3.5 text-[#6e9167]" /> Ver Detalhes
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#6e9167] dark:text-[#96c3a6]">
              {product.category === 'bolsas' ? 'Bolsas em Crochê' : product.category === 'roupas' ? 'Vestuário & Roupas' : product.category === 'decoracao' ? 'Decoração & Lar' : product.category}
            </span>
            <div className="flex items-center gap-1 text-[#6e9167] text-xs font-medium">
              <Star className="w-3 h-3 fill-[#6e9167]" />
              <span className="font-bold text-[#1E2B1D] dark:text-[#F3F6F1]">{product.rating.toFixed(1)}</span>
              <span className="text-[#4A5B49]/70 dark:text-[#A3B5A1]/70 text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl font-normal text-[#1E2B1D] dark:text-[#F3F6F1] group-hover:text-[#6e9167] dark:group-hover:text-[#96c3a6] transition-colors leading-snug">
            {product.name}
          </h3>

          {/* Short Desc */}
          <p className="text-xs text-[#4A5B49] dark:text-[#A3B5A1] line-clamp-2 mt-1.5 leading-relaxed font-light">
            {product.shortDesc}
          </p>
        </div>

        {/* Color Switcher */}
        {product.colors && product.colors.length > 0 && (
          <div className="pt-3 border-t border-[#DCE5D3]/70 dark:border-[#2c3c2b]" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between text-[11px] text-[#4A5B49] dark:text-[#A3B5A1] mb-1.5">
              <span className="text-[10px] uppercase tracking-wider font-medium">Paleta:</span>
              <span className="text-[#1E2B1D] dark:text-[#F3F6F1] font-semibold text-xs truncate max-w-[130px]">{selectedColor}</span>
            </div>
            <div className="flex items-center gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  style={{ backgroundColor: c.hex }}
                  className={`w-4 h-4 rounded-full border transition-all cursor-pointer ${
                    selectedColor === c.name
                      ? 'scale-125 border-[#1E2B1D] dark:border-white ring-2 ring-[#6e9167]/60'
                      : 'border-[#DCE5D3] dark:border-[#2c3c2b] hover:scale-110'
                  }`}
                  title={c.name}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Production Time & Pricing */}
        <div className="pt-3 border-t border-[#DCE5D3]/70 dark:border-[#2c3c2b] flex items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[#4A5B49] dark:text-[#A3B5A1] font-medium">
              <Clock className="w-3 h-3 text-[#6e9167]" />
              <span>{product.productionTime}</span>
            </div>
            <div className="font-serif text-2xl font-bold text-[#1E2B1D] dark:text-[#F3F6F1] leading-none mt-1">
              R$ {product.price},00
            </div>
            <span className="text-[10px] uppercase tracking-wider text-[#4A5B49]/70 dark:text-[#A3B5A1]/70 block mt-0.5">
              Pix com 5% OFF ou em até 3x
            </span>
          </div>

          {/* Bag & Direct Instagram Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddBag}
              className="bg-[#F2F5ED] dark:bg-[#1f2a1e] hover:bg-[#6e9167] hover:text-white dark:hover:bg-[#6e9167] text-[#1E2B1D] dark:text-[#F3F6F1] border border-[#DCE5D3] dark:border-[#2c3c2b] p-2.5 rounded-full transition-colors cursor-pointer min-w-[42px] min-h-[42px] flex items-center justify-center"
              title="Adicionar à sacola de encomendas"
              aria-label="Adicionar à sacola"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>

            <button
              onClick={handleInstagramOrder}
              className="bg-[#1E2B1D] dark:bg-[#6e9167] hover:bg-[#6e9167] dark:hover:bg-[#5a7954] text-white text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-full flex items-center gap-1.5 transition-all shadow-sm cursor-pointer min-h-[42px]"
              title="Pedir no Instagram @crochedacleu.pravoce"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#c7d1af]" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Instagram className="w-3.5 h-3.5 text-[#c7d1af] dark:text-white" />
                  <span>Pedir</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

