import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CustomOrderBuilder } from './components/CustomOrderBuilder';
import { CartDrawer } from './components/CartDrawer';
import { HowToBuy } from './components/HowToBuy';
import { SocialProof } from './components/SocialProof';
import { FAQSection } from './components/FAQSection';
import { AuditView } from './components/AuditView';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';
import { Product, CartItem, CategoryType } from './types';
import { Search, Sparkles, Check, ArrowRight, Flower2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'inicio' | 'produtos' | 'personalizar' | 'comprar' | 'depoimentos'>('inicio');
  const [currentMode, setCurrentMode] = useState<'site' | 'auditoria'>('site');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Theme state with local persistence and DOM sync
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const savedTheme = localStorage.getItem('croche_cleu_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    try {
      localStorage.setItem('croche_cleu_theme', theme);
    } catch (e) {
      console.error(e);
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      triggerToast(next === 'dark' ? 'Modo Escuro ativado 🌙' : 'Modo Claro ativado ☀️');
      return next;
    });
  };

  // Cart state with persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('croche_cleu_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('croche_cleu_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Trigger Toast helper
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart management handlers
  const handleAddToCart = (product: Product, color: string, customNotes?: string) => {
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.selectedColor === color && item.customNotes === customNotes
    );

    if (existingIndex > -1) {
      const updated = [...cart];
      updated[existingIndex].quantity += 1;
      setCart(updated);
    } else {
      const newItem: CartItem = {
        id: `${product.id}-${color}-${Date.now()}`,
        product,
        selectedColor: color,
        customNotes,
        quantity: 1
      };
      setCart([...cart, newItem]);
    }

    triggerToast(`"${product.name}" adicionado à sacola!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    triggerToast('Item removido da sacola.');
  };

  const handleClearCart = () => {
    setCart([]);
    triggerToast('Sacola esvaziada.');
  };

  // Filter products
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === 'todos' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.materials.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredProducts = PRODUCTS.slice(0, 6);

  // Category labels with counts
  const categoriesList: { id: string; label: string; icon: string }[] = [
    { id: 'todos', label: 'Todas as Peças', icon: '✨' },
    { id: 'bolsas', label: 'Bolsas & Mochilas', icon: '👜' },
    { id: 'decoracao', label: 'Mesa Posta & Decoração', icon: '🌻' },
    { id: 'acessorios', label: 'Acessórios & Mini Bags', icon: '🌸' }
  ];

  return (
    <div className={`${theme === 'dark' ? 'dark ' : ''}min-h-screen bg-[#FAFBF7] dark:bg-[#121811] flex flex-col font-sans selection:bg-[#6e9167] selection:text-white text-[#1E2B1D] dark:text-[#F3F6F1] transition-colors`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#1E2B1D] dark:bg-[#1f2a1e] text-white border border-[#DCE5D3] dark:border-[#2c3c2b] px-5 py-3 rounded-full shadow-xl text-xs flex items-center gap-2.5 animate-in slide-in-from-top-3">
          <Check className="w-4 h-4 text-[#96c3a6]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setCurrentMode('site');
        }}
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAudit={() => {
          setCurrentMode('auditoria');
        }}
        activeCategory={selectedCategory}
        setActiveCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveTab('produtos');
        }}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Render Main Content based on Mode / Tab */}
      {currentMode === 'auditoria' ? (
        <AuditView onBackToSite={() => {
          setCurrentMode('site');
          setActiveTab('inicio');
        }} />
      ) : (
        <main className="flex-1">
          
          {/* TAB: INÍCIO */}
          {activeTab === 'inicio' && (
            <>
              <Hero
                onExploreProducts={(cat) => {
                  if (cat) setSelectedCategory(cat);
                  setActiveTab('produtos');
                }}
                onCustomOrder={() => setActiveTab('personalizar')}
              />

              {/* Featured Products Section */}
              <section className="py-14 sm:py-20 bg-white dark:bg-[#121811] border-t border-[#DCE5D3] dark:border-[#2c3c2b]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
                    <div className="text-center sm:text-left">
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6e9167] dark:text-[#96c3a6] mb-1">
                        <Flower2 className="w-3.5 h-3.5" />
                        <span>Coleção em Destaque</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-4xl text-[#1E2B1D] dark:text-[#F3F6F1]">
                        Peças Mais Amadas da Coleção 60s
                      </h2>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCategory('todos');
                        setActiveTab('produtos');
                      }}
                      className="text-xs font-semibold uppercase tracking-wider text-[#1E2B1D] dark:text-[#F3F6F1] hover:text-[#6e9167] dark:hover:text-[#96c3a6] flex items-center gap-1.5 transition-colors cursor-pointer min-h-[40px]"
                    >
                      <span>Ver Todo o Catálogo ({PRODUCTS.length} modelos)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {featuredProducts.map((p) => (
                      <ProductCard
                        key={p.id}
                        product={p}
                        onOpenModal={setSelectedProductModal}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* About Cleu Section */}
              <AboutSection onExploreProducts={() => setActiveTab('produtos')} />

              {/* Custom Order CTA Callout */}
              <CustomOrderBuilder />

              {/* How to Buy Section */}
              <HowToBuy />

              {/* Social Proof */}
              <SocialProof />

              {/* FAQ */}
              <FAQSection />
            </>
          )}

          {/* TAB: PRODUTOS (CATÁLOGO COMPLETO) */}
          {activeTab === 'produtos' && (
            <section className="py-10 sm:py-16 bg-[#FAFBF7] dark:bg-[#121811]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
                
                {/* Catalog Head */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6e9167] dark:text-[#96c3a6]">
                    <Flower2 className="w-3.5 h-3.5" />
                    <span>Catálogo Completo Vintage Anos 60</span>
                  </div>
                  <h1 className="font-serif text-3xl sm:text-4xl text-[#1E2B1D] dark:text-[#F3F6F1]">
                    Bolsas, Roupas e Decoração em Crochê
                  </h1>
                  <p className="text-xs sm:text-sm text-[#4A5B49] dark:text-[#A3B5A1] font-light leading-relaxed">
                    Cada criação é tecida manualmente pela <strong>Cleu</strong> com fios nobres e acabamento minucioso. Selecione seu modelo ou encomende sob medida.
                  </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-[#192118] p-4 sm:p-5 rounded-3xl border border-[#DCE5D3] dark:border-[#2c3c2b] vintage-shadow-sm">
                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {categoriesList.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 min-h-[38px] ${
                          selectedCategory === cat.id
                            ? 'bg-[#6e9167] text-white border-[#6e9167] font-semibold shadow-xs'
                            : 'bg-[#F2F5ED] dark:bg-[#151c14] text-[#1E2B1D] dark:text-[#F3F6F1] border-[#DCE5D3] dark:border-[#2c3c2b] hover:border-[#6e9167]'
                        }`}
                      >
                        <span>{cat.icon}</span>
                        <span>{cat.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Search Input */}
                  <div className="relative w-full md:w-72">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4A5B49] dark:text-[#A3B5A1]" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar peça, cor ou material..."
                      className="w-full text-xs pl-10 pr-4 py-2.5 rounded-full bg-[#F2F5ED] dark:bg-[#151c14] border border-[#DCE5D3] dark:border-[#2c3c2b] text-[#1E2B1D] dark:text-[#F3F6F1] placeholder:text-[#4A5B49]/60 dark:placeholder:text-[#A3B5A1]/60 focus:outline-none focus:ring-1 focus:ring-[#6e9167]"
                    />
                  </div>
                </div>

                {/* Products Grid */}
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16 bg-white dark:bg-[#192118] rounded-3xl border border-[#DCE5D3] dark:border-[#2c3c2b] p-8 space-y-4 vintage-shadow-sm">
                    <div className="text-4xl">🌻</div>
                    <h3 className="font-serif font-bold text-xl text-[#1E2B1D] dark:text-[#F3F6F1]">Nenhuma peça encontrada</h3>
                    <p className="text-xs text-[#4A5B49] dark:text-[#A3B5A1] max-w-md mx-auto font-light">
                      Não encontramos nenhuma peça com o termo "{searchQuery}". Experimente buscar por outro nome ou monte seu pedido sob medida com a Cleu!
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('todos');
                      }}
                      className="bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs uppercase tracking-wider font-semibold px-6 py-2.5 rounded-full shadow-sm cursor-pointer min-h-[40px]"
                    >
                      Limpar Filtros
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredProducts.map((p) => (
                      <ProductCard
                        key={p.id}
                        product={p}
                        onOpenModal={setSelectedProductModal}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                )}

                {/* Custom Order Callout in Catalog */}
                <div className="bg-[#1E2B1D] dark:bg-[#192118] text-white rounded-3xl p-6 sm:p-12 text-center space-y-4 border border-[#DCE5D3] dark:border-[#2c3c2b] vintage-shadow-lg">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#c7d1af] dark:text-[#96c3a6] block">
                    Não encontrou exatamente o que desejava?
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
                    Criamos modelos e paletas exclusivas sob medida
                  </h3>
                  <p className="text-xs text-white/70 max-w-md mx-auto font-light leading-relaxed">
                    Envie fotos de referência ou combine dimensões e cartelas de fios com a Cleu diretamente no Instagram Direct.
                  </p>
                  <button
                    onClick={() => setActiveTab('personalizar')}
                    className="bg-[#6e9167] hover:bg-[#5a7954] text-white text-xs uppercase tracking-wider font-semibold px-8 py-3.5 rounded-full transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer min-h-[44px]"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#c7d1af]" />
                    <span>Abrir Montador de Peças</span>
                  </button>
                </div>

              </div>
            </section>
          )}

          {/* TAB: PERSONALIZAR SOB MEDIDA */}
          {activeTab === 'personalizar' && (
            <CustomOrderBuilder />
          )}

          {/* TAB: COMO COMPRAR */}
          {activeTab === 'comprar' && (
            <>
              <HowToBuy />
              <FAQSection />
            </>
          )}

          {/* TAB: DEPOIMENTOS */}
          {activeTab === 'depoimentos' && (
            <>
              <SocialProof />
              <div className="pb-8">
                <HowToBuy />
              </div>
            </>
          )}

        </main>
      )}

      {/* Product Quick-View Modal */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Button (WhatsApp) & Sticky Mobile Bar */}
      <FloatingWhatsApp cart={cart} onOpenCart={() => setIsCartOpen(true)} />

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setCurrentMode('site');
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAudit={() => {
          setCurrentMode('auditoria');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

    </div>
  );
}
