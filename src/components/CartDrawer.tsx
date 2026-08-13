import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, MessageCircle, Gift, Truck, ShoppingBag, ArrowRight, ShieldCheck, Copy, Check, Flower2 } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const [giftWrap, setGiftWrap] = useState(false);
  const [shippingType, setShippingType] = useState<'correios' | 'retirada' | 'calculando'>('correios');
  const [cep, setCep] = useState('');
  const [copiedSummary, setCopiedSummary] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const giftCost = giftWrap ? 12 : 0;
  const shippingCost = shippingType === 'correios' ? (subtotal > 250 ? 0 : 22) : 0;
  const total = subtotal + giftCost + shippingCost;

  const generateWhatsAppOrderText = () => {
    let msg = `🧶 *NOVO PEDIDO - CROCHÊ DA CLEU (COLEÇÃO 60s)*\n\n`;
    msg += `Olá Cleu! Quero fechar a seguinte encomenda pelo site:\n\n`;
    
    cart.forEach((item, index) => {
      msg += `${index + 1}. *${item.product.name}* (Qtd: ${item.quantity})\n`;
      msg += `   • Paleta/Cor: ${item.selectedColor}\n`;
      if (item.customNotes) msg += `   • Medidas/Obs: ${item.customNotes}\n`;
      msg += `   • Valor: R$ ${(item.product.price * item.quantity).toFixed(2)}\n\n`;
    });

    if (giftWrap) {
      msg += `🎁 *Embalagem de presente artesanal com laço:* Sim (+ R$ 12,00)\n`;
    }
    
    msg += `🚚 *Envio:* ${shippingType === 'retirada' ? 'Retirada no Ateliê' : `Correios/PAC ${cep ? `(CEP: ${cep})` : ''}`}\n`;
    msg += `💰 *Total Estimado:* R$ ${total.toFixed(2)}\n\n`;
    msg += `Podemos confirmar a forma de pagamento (Pix 5% OFF ou Cartão) e o prazo de envio?`;

    return msg;
  };

  const handleCheckoutWhatsApp = () => {
    const text = encodeURIComponent(generateWhatsAppOrderText());
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateWhatsAppOrderText());
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#1E2B1D]/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8">
        <div className="w-screen max-w-md bg-white border-l border-[#DCE5D3] flex flex-col vintage-shadow-lg">
          
          {/* Drawer Header */}
          <div className="p-5 bg-[#1E2B1D] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#96c3a6]" />
              <div>
                <h2 className="font-serif text-lg text-white">
                  Sacola de Encomendas
                </h2>
                <span className="text-[10px] uppercase tracking-widest text-[#c7d1af]">
                  Crochê da Cleu
                </span>
              </div>
              <span className="bg-[#6e9167] text-white text-[10px] px-2 py-0.5 rounded-full font-bold ml-1">
                {cart.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fechar sacola"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto bg-[#F2F5ED] rounded-full flex items-center justify-center text-3xl border border-[#DCE5D3]">
                  🧶
                </div>
                <h3 className="font-serif text-xl text-[#1E2B1D]">Sua sacola está vazia</h3>
                <p className="text-xs text-[#4A5B49] max-w-xs mx-auto font-light leading-relaxed">
                  Explore nossas bolsas, roupas e decorações artesanais com estética dos anos 60.
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-full transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explorar Coleções</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-[#DCE5D3]">
                  <span className="text-[10px] uppercase tracking-wider text-[#4A5B49] font-semibold">Peças Selecionadas</span>
                  <button
                    onClick={onClearCart}
                    className="text-[#6e9167] hover:underline text-xs cursor-pointer font-medium"
                  >
                    Esvaziar sacola
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F2F5ED] border border-[#DCE5D3] rounded-2xl p-3.5 flex gap-3.5 items-center relative"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-xl border border-[#DCE5D3] flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm text-[#1E2B1D] truncate font-medium">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#6e9167] font-medium">
                        Paleta: {item.selectedColor}
                      </p>
                      {item.customNotes && (
                        <p className="text-[10px] text-[#4A5B49] italic truncate">
                          Obs: {item.customNotes}
                        </p>
                      )}
                      <div className="font-serif text-sm font-bold text-[#1E2B1D] mt-1">
                        R$ {(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#4A5B49] hover:text-[#6e9167] p-1 transition-colors cursor-pointer"
                        title="Remover item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center border border-[#DCE5D3] rounded-full bg-white text-xs font-medium">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2.5 py-0.5 hover:bg-[#F2F5ED] rounded-l-full cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-1.5 text-xs font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2.5 py-0.5 hover:bg-[#F2F5ED] rounded-r-full cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Gift Wrap Add-on */}
                <div className="p-3.5 bg-white border border-dashed border-[#6e9167] rounded-2xl mt-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={giftWrap}
                      onChange={(e) => setGiftWrap(e.target.checked)}
                      className="mt-0.5 text-[#6e9167] rounded focus:ring-[#6e9167]"
                    />
                    <div>
                      <span className="text-xs font-semibold text-[#1E2B1D] flex items-center gap-1.5">
                        <Gift className="w-3.5 h-3.5 text-[#6e9167]" />
                        Embalagem de Presente Afetiva (+ R$ 12)
                      </span>
                      <p className="text-[11px] text-[#4A5B49] leading-tight mt-0.5 font-light">
                        Caixa kraft vintage com raminho botânico, laço de fio e cartão manuscrito pela Cleu.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Shipping Estimator */}
                <div className="p-4 bg-[#F2F5ED] rounded-2xl border border-[#DCE5D3] space-y-2.5 text-xs">
                  <div className="flex items-center justify-between font-medium text-[#1E2B1D]">
                    <span className="flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-[#6e9167]" /> Simular Envio:
                    </span>
                    <span className="text-[#6e9167] font-semibold">
                      {subtotal > 250 ? 'Frete Grátis!' : 'R$ 22,00 (PAC)'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      placeholder="Digite seu CEP"
                      className="flex-1 text-xs px-3 py-2 rounded-xl bg-white border border-[#DCE5D3] text-[#1E2B1D] focus:outline-none"
                    />
                    <select
                      value={shippingType}
                      onChange={(e) => setShippingType(e.target.value as any)}
                      className="text-xs px-3 py-2 rounded-xl bg-white border border-[#DCE5D3] text-[#1E2B1D] focus:outline-none"
                    >
                      <option value="correios">Correios (PAC/Sedex)</option>
                      <option value="retirada">Retirar no Ateliê (Grátis)</option>
                    </select>
                  </div>
                  {subtotal < 250 && (
                    <p className="text-[10px] text-[#6e9167] font-medium">
                      💡 Faltam R$ {(250 - subtotal).toFixed(2)} para Frete Grátis para todo o Brasil!
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer / Checkout */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#DCE5D3] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#4A5B49] font-light">
                  <span>Subtotal das peças:</span>
                  <span>R$ {subtotal.toFixed(2)}</span>
                </div>
                {giftWrap && (
                  <div className="flex justify-between text-[#4A5B49] font-light">
                    <span>Embalagem presente:</span>
                    <span>R$ 12,00</span>
                  </div>
                )}
                <div className="flex justify-between text-[#4A5B49] font-light">
                  <span>Frete estimado:</span>
                  <span>{shippingType === 'retirada' ? 'Grátis' : (subtotal > 250 ? 'Grátis' : 'R$ 22,00')}</span>
                </div>
                <div className="flex justify-between font-serif text-lg font-bold text-[#1E2B1D] pt-2 border-t border-[#DCE5D3]">
                  <span>Total Estimado:</span>
                  <span className="text-[#1E2B1D]">R$ {total.toFixed(2)}</span>
                </div>
                <span className="text-[10px] text-[#6e9167] block font-medium">
                  * 5% de desconto no Pix (R$ {(total * 0.95).toFixed(2)})
                </span>
              </div>

              {/* Checkout Actions */}
              <div className="space-y-2">
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs uppercase tracking-wider font-semibold py-4 px-5 rounded-full transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#c7d1af]" />
                  <span>Concluir Encomenda com a Cleu</span>
                </button>

                <button
                  onClick={handleCopySummary}
                  className="w-full bg-transparent hover:bg-[#F2F5ED] text-[#1E2B1D] text-xs py-2 px-3 rounded-full border border-[#DCE5D3] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedSummary ? <Check className="w-3.5 h-3.5 text-[#6e9167]" /> : <Copy className="w-3.5 h-3.5 text-[#4A5B49]" />}
                  <span>{copiedSummary ? 'Copiado para a área de transferência!' : 'Copiar Resumo do Pedido'}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#4A5B49] pt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#6e9167]" />
                <span>Atendimento direto e seguro com a artesã Cleu</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
