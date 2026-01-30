
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { DrinkCard } from './components/DrinkCard';
import { AIRecommender } from './components/AIRecommender';
import { Cart } from './components/Cart';
import { DRINKS } from './constants';
import { Drink, CartItem, Category, ExtraIngredient } from './types';
import { 
  ChevronRight, Leaf, Zap, Droplets, Utensils, 
  GlassWater, Sparkles, Trophy, ArrowRight, ArrowLeft
} from 'lucide-react';

const CATEGORIES: Category[] = ['Todas', 'Frutas', 'Cremosas', 'Detox', 'Alcoólicas', 'Energia'];

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Todas');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const filteredDrinks = useMemo(() => {
    return DRINKS.filter(drink => {
      return selectedCategory === 'Todas' || drink.category === selectedCategory;
    });
  }, [selectedCategory]);

  const featuredDrinks = useMemo(() => {
    return [...DRINKS].sort((a, b) => b.rating - a.rating).slice(0, 3);
  }, []);

  const addToCart = (drink: Drink, extras: ExtraIngredient[], quantity: number = 1, openCart = true) => {
    const extraTotal = extras.reduce((sum, e) => sum + e.price, 0);
    const totalPricePerUnit = drink.price + extraTotal;

    setCartItems(prev => {
      const existing = prev.find(item => item.id === drink.id && JSON.stringify(item.selectedExtras) === JSON.stringify(extras));
      if (existing) {
        return prev.map(item => item === existing ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { ...drink, quantity, selectedExtras: extras, totalPricePerUnit }];
    });
    
    if (openCart) setIsCartOpen(true);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const scrollToAI = () => document.getElementById('ai-mixer')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen flex flex-col bg-[#fffcf9]">
      <Header 
        cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
        onScrollToAI={scrollToAI}
      />

      <main className="flex-1">
        {/* Elite Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.08),transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-12 animate-fade-up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-100 px-4 py-2 rounded-lg">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-full" />
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-[0.2em]">Exclusividade Verve</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-amber-950 leading-[0.9] tracking-tighter">
                  A Essência da <br />
                  <span className="text-amber-600">Alquimia Natural.</span>
                </h1>
                <p className="text-amber-900/60 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
                  Ateliê especializado em batidas premium. Ingredientes rastreados, processos artesanais e a sofisticação da IA em cada preparo.
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <button 
                  onClick={() => document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-amber-950 text-white px-10 py-5 rounded-xl font-bold text-sm shadow-2xl hover:bg-amber-900 transition-all flex items-center gap-3 active:scale-95"
                >
                  Explorar Ateliê
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={scrollToAI}
                  className="bg-white text-amber-950 border border-amber-100 px-10 py-5 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-3"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  Personal Concierge
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative z-10 p-4 bg-white rounded-3xl shadow-[0_40px_100px_-20px_rgba(180,83,9,0.15)] border border-amber-50">
                <img 
                  src="https://images.unsplash.com/photo-1543648973-1eb94fa2eeef?q=80&w=800&auto=format&fit=crop" 
                  className="rounded-2xl w-full aspect-[4/5] object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
                  alt="Verve Concept"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Selection */}
        <section className="bg-white/50 py-24 border-y border-amber-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-16">
              <div className="space-y-2">
                <h2 className="text-3xl font-black text-amber-950 tracking-tight">Seleção Verve Gold</h2>
                <p className="text-amber-900/40 font-bold text-xs uppercase tracking-widest">As criações mais aclamadas do nosso ateliê</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {featuredDrinks.map(drink => (
                <DrinkCard 
                  key={drink.id}
                  drink={drink}
                  onAddToCart={addToCart}
                  onBuyNow={(d, e, q) => addToCart(d, e, q)}
                  quantityInCart={cartItems.filter(i => i.id === drink.id).reduce((s, i) => s + i.quantity, 0)}
                  onRemoveFromCart={() => {}} 
                  isFavorite={favorites.includes(drink.id)}
                  onToggleFavorite={() => toggleFavorite(drink.id)}
                />
              ))}
            </div>
          </div>
        </section>

        <AIRecommender />

        {/* Menu Section */}
        <section id="menu-section" className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20">
            <h2 className="text-4xl font-black text-amber-950 tracking-tight">O Ateliê Completo</h2>
            
            <div className="flex items-center gap-2 p-1.5 bg-amber-50/50 rounded-2xl border border-amber-100 overflow-x-auto no-scrollbar">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat 
                    ? 'bg-amber-950 text-white shadow-lg shadow-amber-950/20' 
                    : 'text-amber-900/50 hover:text-amber-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredDrinks.map(drink => (
              <DrinkCard 
                key={drink.id}
                drink={drink}
                onAddToCart={addToCart}
                onBuyNow={(d, e, q) => addToCart(d, e, q)}
                quantityInCart={cartItems.filter(i => i.id === drink.id).reduce((s, i) => s + i.quantity, 0)}
                onRemoveFromCart={() => {}} 
                isFavorite={favorites.includes(drink.id)}
                onToggleFavorite={() => toggleFavorite(drink.id)}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-amber-950 pt-24 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-16 pb-20 border-b border-white/5">
            <div className="space-y-8 max-w-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-600 rounded flex items-center justify-center font-bold text-xl">V</div>
                <span className="text-xl font-black tracking-tighter">VERVE NATURAL</span>
              </div>
              <p className="text-amber-100/40 text-sm leading-relaxed font-medium">
                Redefinindo o consumo de batidas naturais através da precisão tecnológica e do respeito absoluto ao produtor local.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Ateliê</h4>
                <ul className="space-y-4 text-sm text-amber-100/60 font-medium">
                  <li className="hover:text-white transition-colors cursor-pointer">Menu Estacional</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Origem Controlada</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Processos</li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-amber-600">Corporativo</h4>
                <ul className="space-y-4 text-sm text-amber-100/60 font-medium">
                  <li className="hover:text-white transition-colors cursor-pointer">Assinaturas</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Imprensa</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Carreiras</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-amber-100/20 uppercase tracking-[0.3em]">
            <p>© 2024 Verve Natural Liquid Studio</p>
            <div className="flex gap-10">
              <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
              <span className="hover:text-white cursor-pointer transition-colors">Termos</span>
            </div>
          </div>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={(id, d) => {
          setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(0, i.quantity + d) } : i).filter(i => i.quantity > 0));
        }}
        onRemove={(id) => setCartItems(prev => prev.filter(i => i.id !== id))}
      />
    </div>
  );
};

export default App;
