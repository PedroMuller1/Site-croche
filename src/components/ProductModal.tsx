import React, { useState } from 'react';
import { Product } from '../types';
import { X, Instagram, ShoppingBag, Check, Shield, Clock, Ruler, Sparkles, Heart, Flower2, Copy } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, color: string, customNotes?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Padrão');
  const [customNotes, setCustomNotes] = useState<string>('');
  const [addedToast, setAddedToast] = useState(false);
  const [copiedInstagram, setCopiedInstagram] = useState(false);

  const handleInstagramCheckout = () => {
    const text = 
      `Olá Cleu! Gostaria de encomendar a peça:\n` +
      `📦 *${product.name}* (R$ ${product.price},00)\n` +
      `🎨 Paleta/Cor selecionada: *${selectedColor}*\n` +
      (customNotes ? `📝 Observações/Medidas: ${customNotes}\n` : '') +
      `⏱️ Prazo de confecção: ${product.productionTime}\n\n` +
      `Poderia me confirmar a disponibilidade pelo Instagram?`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedInstagram(true);
      setTimeout(() => setCopiedInstagram(false), 2500);
    }

    window.open(`https://www.instagram.com/crochedacleu.pravoce/`, '_blank');
  };

  const handleAddBag = () => {
    onAddToCart(product, selectedColor, customNotes);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#1E2B1D]/70 dark:bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div
        className="bg-white dark:bg-[#192118] border border-[#DCE5D3] dark:border-[#2c3c2b] rounded-3xl max-w-2xl w-full p-5 sm:p-8 relative vintage-shadow-lg max-h-[92vh] overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-[#F2F5ED] dark:bg-[#1f2a1e] hover:bg-[#1E2B1D] dark:hover:bg-[#6e9167] hover:text-white text-[#1E2B1D] dark:text-[#F3F6F1] p-2 rounded-full transition-all border border-[#DCE5D3] dark:border-[#2c3c2b] cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Photo & Badge */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden border border-[#DCE5D3] dark:border-[#2c3c2b] bg-[#F2F5ED] dark:bg-[#1f2a1e] relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-[#1E2B1D] dark:bg-[#121811] text-white text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Micro Guarantees */}
            <div className="p-4 bg-[#F2F5ED] dark:bg-[#1f2a1e] rounded-2xl border border-[#DCE5D3] dark:border-[#2c3c2b] space-y-2 text-xs text-[#4A5B49] dark:text-[#A3B5A1]">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6e9167]" />
                <span className="font-medium text-[#1E2B1D] dark:text-[#F3F6F1]">100% Feito à Mão pela Cleu</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#6e9167]" />
                <span>Fios nobres e sustentáveis hipoalergênicos</span>
              </div>
              <div className="flex items-center gap-2">
                <Flower2 className="w-4 h-4 text-[#6e9167]" />
                <span>Fotos do processo enviadas no seu direct</span>
              </div>
            </div>
          </div>

          {/* Product Info & Config */}
          <div className="space-y-4 text-[#1E2B1D] dark:text-[#F3F6F1]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#6e9167] dark:text-[#96c3a6] block mb-1">
                {product.category === 'bolsas' ? 'Bolsas Artesanais Anos 60' : product.category === 'roupas' ? 'Peças de Vestuário Vintage' : product.category === 'decoracao' ? 'Decoração & Casa Acolhedora' : product.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1E2B1D] dark:text-[#F3F6F1] leading-tight">
                {product.name}
              </h2>
              <div className="font-serif text-3xl font-bold text-[#1E2B1D] dark:text-[#F3F6F1] mt-1.5">
                R$ {product.price},00
              </div>
              <p className="text-xs text-[#4A5B49] dark:text-[#A3B5A1] mt-0.5">
                Pix com 5% de desconto (R$ {(product.price * 0.95).toFixed(2)}) ou até 3x sem juros
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-[#4A5B49] dark:text-[#A3B5A1] leading-relaxed font-light">
              {product.fullDesc}
            </p>

            {/* Specifications */}
            <div className="space-y-2 border-y border-[#DCE5D3] dark:border-[#2c3c2b] py-3 text-xs text-[#4A5B49] dark:text-[#A3B5A1]">
              <div className="flex items-start gap-2">
                <Ruler className="w-4 h-4 text-[#6e9167] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-medium text-[#1E2B1D] dark:text-[#F3F6F1]">Dimensões:</strong> {product.dimensions}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Flower2 className="w-4 h-4 text-[#6e9167] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-medium text-[#1E2B1D] dark:text-[#F3F6F1]">Material:</strong> {product.materials}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#6e9167] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="font-medium text-[#1E2B1D] dark:text-[#F3F6F1]">Prazo de Confecção:</strong> {product.productionTime}
                </div>
              </div>
            </div>

            {/* Color Chooser */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-2 text-[#1E2B1D] dark:text-[#F3F6F1]">
                Paleta de cores: <span className="text-[#6e9167] dark:text-[#96c3a6]">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border transition-all cursor-pointer min-h-[36px] ${
                      selectedColor === c.name
                        ? 'bg-[#1E2B1D] dark:bg-[#6e9167] text-white border-[#1E2B1D] dark:border-[#6e9167] font-medium'
                        : 'bg-[#F2F5ED] dark:bg-[#1f2a1e] text-[#1E2B1D] dark:text-[#F3F6F1] border-[#DCE5D3] dark:border-[#2c3c2b] hover:border-[#6e9167]'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full border border-white" style={{ backgroundColor: c.hex }} />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold mb-1.5 text-[#1E2B1D] dark:text-[#F3F6F1]">
                Ajuste especial ou medidas (opcional):
              </label>
              <input
                type="text"
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Ex: Altura de alça 30cm, meu busto é 92cm, etc."
                className="w-full text-xs px-3.5 py-3 rounded-xl bg-[#F2F5ED] dark:bg-[#1f2a1e] border border-[#DCE5D3] dark:border-[#2c3c2b] focus:outline-none focus:ring-2 focus:ring-[#6e9167] text-[#1E2B1D] dark:text-[#F3F6F1]"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleInstagramCheckout}
                className="flex-1 bg-[#1E2B1D] dark:bg-[#6e9167] hover:bg-[#6e9167] dark:hover:bg-[#5a7954] text-white text-xs uppercase tracking-wider font-semibold py-3.5 px-5 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer min-h-[48px]"
              >
                {copiedInstagram ? (
                  <>
                    <Check className="w-4 h-4 text-[#c7d1af]" />
                    <span>Copiado! Abrindo Instagram...</span>
                  </>
                ) : (
                  <>
                    <Instagram className="w-4 h-4 text-[#c7d1af] dark:text-white" />
                    <span>Pedir no Instagram</span>
                  </>
                )}
              </button>

              <button
                onClick={handleAddBag}
                className="bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs uppercase tracking-wider font-semibold py-3.5 px-5 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer min-h-[48px]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{addedToast ? '✓ Adicionado!' : 'Pôr na Sacola'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

