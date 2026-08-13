import React from 'react';
import { ShoppingBag, MessageCircle, Sparkles, Heart, HelpCircle, Menu, X, ArrowUpRight, Flower2 } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  activeTab: 'inicio' | 'produtos' | 'personalizar' | 'comprar' | 'depoimentos';
  setActiveTab: (tab: 'inicio' | 'produtos' | 'personalizar' | 'comprar' | 'depoimentos') => void;
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenAudit: () => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cart,
  onOpenCart,
  onOpenAudit,
  activeCategory,
  setActiveCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavClick = (tab: 'inicio' | 'produtos' | 'personalizar' | 'comprar' | 'depoimentos', category?: string) => {
    setActiveTab(tab);
    if (category) {
      setActiveCategory(category);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFBF7]/95 backdrop-blur-md border-b border-[#DCE5D3] transition-all">
      {/* 60s Announcement Micro-bar */}
      <div className="bg-[#6e9167] text-white text-[11px] py-1.5 px-4 text-center tracking-wider flex items-center justify-center gap-3 font-medium">
        <span className="flex items-center gap-1.5">
          <Flower2 className="w-3.5 h-3.5 text-[#c7d1af]" />
          <span>Coleção Vintage Anos 60 • Peças 100% Manuais sob Encomenda</span>
        </span>
        <span className="hidden md:inline text-white/50">•</span>
        <span className="hidden md:inline text-[#c7d1af] font-semibold">
          Frete Grátis acima de R$ 250 & 5% OFF no Pix
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-full bg-[#6e9167] flex items-center justify-center text-white text-xl font-serif shadow-sm transition-transform duration-300 group-hover:rotate-12 border-2 border-[#c7d1af]">
              <Flower2 className="w-6 h-6 text-[#FAFBF7]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-[#6e9167] block leading-none">
                Ateliê Anos 60
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl text-[#1E2B1D] tracking-tight leading-tight group-hover:text-[#6e9167] transition-colors">
                Crochê da <span className="italic font-normal text-[#6e9167]">Cleu</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleNavClick('inicio')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                activeTab === 'inicio'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 hover:text-[#1E2B1D] hover:bg-[#F2F5ED]'
              }`}
            >
              Início
            </button>

            <button
              onClick={() => handleNavClick('produtos', 'bolsas')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                activeTab === 'produtos' && activeCategory === 'bolsas'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 hover:text-[#1E2B1D] hover:bg-[#F2F5ED]'
              }`}
            >
              Bolsas
            </button>

            <button
              onClick={() => handleNavClick('produtos', 'roupas')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                activeTab === 'produtos' && activeCategory === 'roupas'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 hover:text-[#1E2B1D] hover:bg-[#F2F5ED]'
              }`}
            >
              Roupas
            </button>

            <button
              onClick={() => handleNavClick('produtos', 'decoracao')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                activeTab === 'produtos' && activeCategory === 'decoracao'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 hover:text-[#1E2B1D] hover:bg-[#F2F5ED]'
              }`}
            >
              Decoração
            </button>

            <button
              onClick={() => handleNavClick('personalizar')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'personalizar'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 hover:text-[#1E2B1D] hover:bg-[#F2F5ED]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#96c3a6]" />
              <span>Sob Medida</span>
            </button>

            <button
              onClick={() => handleNavClick('comprar')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                activeTab === 'comprar'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 hover:text-[#1E2B1D] hover:bg-[#F2F5ED]'
              }`}
            >
              Como Pedir
            </button>

            <button
              onClick={() => handleNavClick('depoimentos')}
              className={`px-3.5 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                activeTab === 'depoimentos'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 hover:text-[#1E2B1D] hover:bg-[#F2F5ED]'
              }`}
            >
              Depoimentos
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#F2F5ED] hover:bg-[#6e9167] hover:text-white text-[#1E2B1D] border border-[#DCE5D3] transition-all cursor-pointer"
              aria-label="Abrir sacola de encomendas"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#6e9167] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%20Cleu!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20encomenda."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#1E2B1D] hover:bg-[#6e9167] text-white text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#96c3a6]" />
              <span>Falar com a Cleu</span>
            </a>

            {/* Audit Report Button */}
            <button
              onClick={onOpenAudit}
              className="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4A5B49] hover:text-[#1E2B1D] bg-[#c7d1af]/30 hover:bg-[#c7d1af]/60 px-3 py-2 rounded-full border border-[#DCE5D3] transition-all cursor-pointer"
              title="Ver Diagnóstico UX e Melhorias de Conversão"
            >
              <span>Auditoria UX</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#6e9167]" />
            </button>

            {/* Mobile Burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-[#F2F5ED] text-[#1E2B1D] border border-[#DCE5D3]"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFBF7] border-b border-[#DCE5D3] px-6 py-5 space-y-3 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => handleNavClick('inicio')}
              className={`p-3 rounded-xl text-left text-xs uppercase tracking-wider font-semibold border ${
                activeTab === 'inicio'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] text-[#1E2B1D] border-[#DCE5D3]'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'todos')}
              className={`p-3 rounded-xl text-left text-xs uppercase tracking-wider font-semibold border ${
                activeTab === 'produtos' && activeCategory === 'todos'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] text-[#1E2B1D] border-[#DCE5D3]'
              }`}
            >
              Catálogo Todo
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'bolsas')}
              className={`p-3 rounded-xl text-left text-xs uppercase tracking-wider font-semibold border ${
                activeTab === 'produtos' && activeCategory === 'bolsas'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] text-[#1E2B1D] border-[#DCE5D3]'
              }`}
            >
              👜 Bolsas
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'roupas')}
              className={`p-3 rounded-xl text-left text-xs uppercase tracking-wider font-semibold border ${
                activeTab === 'produtos' && activeCategory === 'roupas'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] text-[#1E2B1D] border-[#DCE5D3]'
              }`}
            >
              🧶 Roupas
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'decoracao')}
              className={`p-3 rounded-xl text-left text-xs uppercase tracking-wider font-semibold border ${
                activeTab === 'produtos' && activeCategory === 'decoracao'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] text-[#1E2B1D] border-[#DCE5D3]'
              }`}
            >
              🌻 Decoração
            </button>
            <button
              onClick={() => handleNavClick('personalizar')}
              className={`p-3 rounded-xl text-left text-xs uppercase tracking-wider font-semibold border ${
                activeTab === 'personalizar'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] text-[#1E2B1D] border-[#DCE5D3]'
              }`}
            >
              ✨ Sob Medida
            </button>
            <button
              onClick={() => handleNavClick('comprar')}
              className={`p-3 rounded-xl text-left text-xs uppercase tracking-wider font-semibold border ${
                activeTab === 'comprar'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] text-[#1E2B1D] border-[#DCE5D3]'
              }`}
            >
              📦 Como Pedir
            </button>
            <button
              onClick={() => handleNavClick('depoimentos')}
              className={`p-3 rounded-xl text-left text-xs uppercase tracking-wider font-semibold border ${
                activeTab === 'depoimentos'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] text-[#1E2B1D] border-[#DCE5D3]'
              }`}
            >
              ★ Depoimentos
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%20Cleu!%20Vim%20pelo%20site%20e%20quero%20tirar%20d%C3%BAvidas."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1E2B1D] text-white text-xs uppercase tracking-wider font-semibold py-3 rounded-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#96c3a6]" />
              <span>Chamar Cleu no WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full bg-[#c7d1af]/40 text-[#1E2B1D] text-xs font-semibold py-2.5 rounded-full flex items-center justify-center gap-1.5"
            >
              <span>📊 Relatório de Auditoria UX / CRO</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
