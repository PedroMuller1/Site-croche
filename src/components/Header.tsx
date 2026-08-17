import React from 'react';
import { ShoppingBag, Instagram, Sparkles, Heart, HelpCircle, Menu, X, ArrowUpRight, Flower2, Moon, Sun } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  activeTab: 'inicio' | 'produtos' | 'personalizar' | 'comprar' | 'depoimentos';
  setActiveTab: (tab: 'inicio' | 'produtos' | 'personalizar' | 'comprar' | 'depoimentos') => void;
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenAudit: () => void;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cart,
  onOpenCart,
  onOpenAudit,
  activeCategory,
  setActiveCategory,
  theme,
  onToggleTheme
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
    <header className="sticky top-0 z-40 bg-[#FAFBF7]/95 dark:bg-[#121811]/95 backdrop-blur-md border-b border-[#DCE5D3] dark:border-[#2c3c2b] transition-colors duration-300">
      {/* 60s Announcement Micro-bar */}
      <div className="bg-[#6e9167] dark:bg-[#2d472a] text-white text-[11px] py-2 px-4 text-center tracking-wider flex items-center justify-center gap-3 font-medium">
        <span className="flex items-center gap-1.5">
          <Flower2 className="w-3.5 h-3.5 text-[#c7d1af]" />
          <span>Coleção Vintage Anos 60 • Peças Manuais sob Encomenda</span>
        </span>
        <span className="hidden md:inline text-white/50">•</span>
        <a
          href="https://www.instagram.com/crochedacleu.pravoce"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1 text-[#c7d1af] hover:underline font-semibold"
        >
          <Instagram className="w-3 h-3" />
          <span>Siga @crochedacleu.pravoce no Instagram</span>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 cursor-pointer group select-none min-h-[44px]"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#6e9167] dark:bg-[#5a7954] flex items-center justify-center text-white text-xl font-serif shadow-sm transition-transform duration-300 group-hover:rotate-12 border-2 border-[#c7d1af] dark:border-[#8da888]">
              <Flower2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FAFBF7]" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#6e9167] dark:text-[#96c3a6] block leading-none">
                Ateliê Anos 60
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl text-[#1E2B1D] dark:text-[#F3F6F1] tracking-tight leading-tight group-hover:text-[#6e9167] transition-colors">
                Crochê da <span className="italic font-normal text-[#6e9167] dark:text-[#96c3a6]">Cleu</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => handleNavClick('inicio')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer min-h-[40px] ${
                activeTab === 'inicio'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 dark:text-[#F3F6F1]/80 hover:text-[#1E2B1D] dark:hover:text-white hover:bg-[#F2F5ED] dark:hover:bg-[#1f2a1e]'
              }`}
            >
              Início
            </button>

            <button
              onClick={() => handleNavClick('produtos', 'bolsas')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer min-h-[40px] ${
                activeTab === 'produtos' && activeCategory === 'bolsas'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 dark:text-[#F3F6F1]/80 hover:text-[#1E2B1D] dark:hover:text-white hover:bg-[#F2F5ED] dark:hover:bg-[#1f2a1e]'
              }`}
            >
              Bolsas & Mochilas
            </button>

            <button
              onClick={() => handleNavClick('produtos', 'decoracao')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer min-h-[40px] ${
                activeTab === 'produtos' && activeCategory === 'decoracao'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 dark:text-[#F3F6F1]/80 hover:text-[#1E2B1D] dark:hover:text-white hover:bg-[#F2F5ED] dark:hover:bg-[#1f2a1e]'
              }`}
            >
              Mesa & Decoração
            </button>

            <button
              onClick={() => handleNavClick('personalizar')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer flex items-center gap-1.5 min-h-[40px] ${
                activeTab === 'personalizar'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 dark:text-[#F3F6F1]/80 hover:text-[#1E2B1D] dark:hover:text-white hover:bg-[#F2F5ED] dark:hover:bg-[#1f2a1e]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#96c3a6]" />
              <span>Sob Medida</span>
            </button>

            <button
              onClick={() => handleNavClick('comprar')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer min-h-[40px] ${
                activeTab === 'comprar'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 dark:text-[#F3F6F1]/80 hover:text-[#1E2B1D] dark:hover:text-white hover:bg-[#F2F5ED] dark:hover:bg-[#1f2a1e]'
              }`}
            >
              Como Pedir
            </button>

            <button
              onClick={() => handleNavClick('depoimentos')}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer min-h-[40px] ${
                activeTab === 'depoimentos'
                  ? 'bg-[#6e9167] text-white shadow-sm'
                  : 'text-[#1E2B1D]/80 dark:text-[#F3F6F1]/80 hover:text-[#1E2B1D] dark:hover:text-white hover:bg-[#F2F5ED] dark:hover:bg-[#1f2a1e]'
              }`}
            >
              Depoimentos
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Dark Mode Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-full bg-[#F2F5ED] dark:bg-[#1f2a1e] hover:bg-[#6e9167] dark:hover:bg-[#6e9167] hover:text-white text-[#1E2B1D] dark:text-[#F3F6F1] border border-[#DCE5D3] dark:border-[#2c3c2b] transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
              title={theme === 'dark' ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-[#f6d860]" />
              ) : (
                <Moon className="w-5 h-5 text-[#4A5B49]" />
              )}
            </button>

            {/* Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#F2F5ED] dark:bg-[#1f2a1e] hover:bg-[#6e9167] dark:hover:bg-[#6e9167] hover:text-white text-[#1E2B1D] dark:text-[#F3F6F1] border border-[#DCE5D3] dark:border-[#2c3c2b] transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Abrir sacola de encomendas"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#6e9167] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#121811] shadow-sm">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Direct Instagram CTA */}
            <a
              href="https://www.instagram.com/crochedacleu.pravoce"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#1E2B1D] dark:bg-[#6e9167] hover:bg-[#6e9167] dark:hover:bg-[#5a7954] text-white text-xs uppercase tracking-widest font-semibold px-5 py-3 rounded-full transition-all shadow-sm min-h-[44px]"
            >
              <Instagram className="w-4 h-4 text-[#c7d1af] dark:text-white" />
              <span>@crochedacleu.pravoce</span>
            </a>

            {/* Mobile Burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-[#F2F5ED] dark:bg-[#1f2a1e] text-[#1E2B1D] dark:text-[#F3F6F1] border border-[#DCE5D3] dark:border-[#2c3c2b] min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFBF7] dark:bg-[#192118] border-b border-[#DCE5D3] dark:border-[#2c3c2b] px-5 py-6 space-y-4 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => handleNavClick('inicio')}
              className={`p-3.5 rounded-2xl text-left text-xs uppercase tracking-wider font-semibold border min-h-[48px] flex items-center ${
                activeTab === 'inicio'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] dark:bg-[#1f2a1e] text-[#1E2B1D] dark:text-[#F3F6F1] border-[#DCE5D3] dark:border-[#2c3c2b]'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'todos')}
              className={`p-3.5 rounded-2xl text-left text-xs uppercase tracking-wider font-semibold border min-h-[48px] flex items-center ${
                activeTab === 'produtos' && activeCategory === 'todos'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] dark:bg-[#1f2a1e] text-[#1E2B1D] dark:text-[#F3F6F1] border-[#DCE5D3] dark:border-[#2c3c2b]'
              }`}
            >
              Catálogo Todo
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'bolsas')}
              className={`p-3.5 rounded-2xl text-left text-xs uppercase tracking-wider font-semibold border min-h-[48px] flex items-center ${
                activeTab === 'produtos' && activeCategory === 'bolsas'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] dark:bg-[#1f2a1e] text-[#1E2B1D] dark:text-[#F3F6F1] border-[#DCE5D3] dark:border-[#2c3c2b]'
              }`}
            >
              👜 Bolsas
            </button>
            <button
              onClick={() => handleNavClick('produtos', 'decoracao')}
              className={`p-3.5 rounded-2xl text-left text-xs uppercase tracking-wider font-semibold border min-h-[48px] flex items-center ${
                activeTab === 'produtos' && activeCategory === 'decoracao'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] dark:bg-[#1f2a1e] text-[#1E2B1D] dark:text-[#F3F6F1] border-[#DCE5D3] dark:border-[#2c3c2b]'
              }`}
            >
              🌻 Decoração
            </button>
            <button
              onClick={() => handleNavClick('personalizar')}
              className={`p-3.5 rounded-2xl text-left text-xs uppercase tracking-wider font-semibold border min-h-[48px] flex items-center ${
                activeTab === 'personalizar'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] dark:bg-[#1f2a1e] text-[#1E2B1D] dark:text-[#F3F6F1] border-[#DCE5D3] dark:border-[#2c3c2b]'
              }`}
            >
              ✨ Sob Medida
            </button>
            <button
              onClick={() => handleNavClick('comprar')}
              className={`p-3.5 rounded-2xl text-left text-xs uppercase tracking-wider font-semibold border min-h-[48px] flex items-center ${
                activeTab === 'comprar'
                  ? 'bg-[#6e9167] text-white border-[#6e9167]'
                  : 'bg-[#F2F5ED] dark:bg-[#1f2a1e] text-[#1E2B1D] dark:text-[#F3F6F1] border-[#DCE5D3] dark:border-[#2c3c2b]'
              }`}
            >
              📦 Como Pedir
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://www.instagram.com/crochedacleu.pravoce"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1E2B1D] dark:bg-[#6e9167] text-white text-xs uppercase tracking-wider font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 min-h-[48px]"
            >
              <Instagram className="w-4 h-4 text-[#c7d1af]" />
              <span>Direct no Instagram @crochedacleu.pravoce</span>
            </a>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#F2F5ED] dark:bg-[#1f2a1e] border border-[#DCE5D3] dark:border-[#2c3c2b]">
              <span className="text-xs font-semibold text-[#1E2B1D] dark:text-[#F3F6F1]">
                Aparência do site
              </span>
              <button
                onClick={onToggleTheme}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-[#121811] hover:bg-[#F2F5ED] dark:hover:bg-[#1f2a1e] text-xs font-medium text-[#1E2B1D] dark:text-[#F3F6F1] border border-[#DCE5D3] dark:border-[#2c3c2b] transition-all cursor-pointer min-h-[38px]"
                aria-label={theme === 'dark' ? 'Alternar para Modo Claro' : 'Alternar para Modo Escuro'}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#f6d860]" />
                    <span>Modo Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#4A5B49]" />
                    <span>Modo Escuro</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

