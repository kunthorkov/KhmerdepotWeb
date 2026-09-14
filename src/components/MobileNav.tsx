import React from 'react';
import { useShop } from '../context/ShopContext';
import { Home, Package, Sparkles, HelpCircle, ShoppingCart } from 'lucide-react';

export const MobileNav: React.FC = () => {
  const { 
    language, 
    activeTab, 
    setActiveTab, 
    cartCount, 
    setIsCartOpen 
  } = useShop();

  const navItems = [
    { id: 'home', labelKm: 'ទំព័រដើម', labelEn: 'Home', icon: Home },
    { id: 'catalog', labelKm: 'ផលិតផល', labelEn: 'Catalog', icon: Package },
    { id: 'bundles', labelKm: 'ឈុតសន្សំ', labelEn: 'Deals', icon: Sparkles, badge: 'Hot' },
    { id: 'guide', labelKm: 'របៀបប្រើ', labelEn: 'Guide', icon: HelpCircle },
    { id: 'cart', labelKm: 'កន្ត្រក', labelEn: 'Cart', icon: ShoppingCart, count: cartCount }
  ];

  const handleClick = (id: string) => {
    if (id === 'cart') {
      setIsCartOpen(true);
    } else {
      setActiveTab(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      id="mobile-bottom-nav" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-2 py-1 shadow-lg safe-area-bottom"
    >
      <div className="grid grid-cols-5 items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id && item.id !== 'cart';
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-all ${
                isActive 
                  ? 'text-amber-400 font-bold' 
                  : 'text-slate-400 hover:text-slate-200 active:scale-95'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px] text-amber-400' : ''}`} />
                
                {/* Hot Badge */}
                {item.badge && (
                  <span className="absolute -top-1.5 -right-3 bg-amber-500 text-slate-950 text-[9px] font-black px-1 rounded">
                    {item.badge}
                  </span>
                )}

                {/* Cart Item Counter */}
                {item.count !== undefined && item.count > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 bg-amber-500 text-slate-950 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                    {item.count}
                  </span>
                )}
              </div>

              <span className={`text-[10px] mt-1 tracking-tight truncate max-w-full ${isActive ? 'font-bold text-amber-400' : ''}`}>
                {language === 'km' ? item.labelKm : item.labelEn}
              </span>

              {isActive && (
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
