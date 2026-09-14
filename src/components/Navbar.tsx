import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShoppingCart, 
  Search, 
  Sparkles, 
  Globe, 
  Truck, 
  Phone, 
  Heart,
  Menu,
  X,
  Package,
  Layers,
  HelpCircle,
  Clock
} from 'lucide-react';
import { KHMER_DEPOT_LOGO } from '../data/mockProducts';

export const Navbar: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    currency, 
    setCurrency, 
    cartCount, 
    setIsCartOpen,
    activeTab, 
    setActiveTab,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    setIsAiAdvisorOpen,
    setIsOrderTrackerOpen,
    wishlist,
    addToast
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const navLinks = [
    { id: 'home', labelKm: 'ទំព័រដើម', labelEn: 'Home', icon: Layers },
    { id: 'catalog', labelKm: 'ផលិតផលទាំងអស់', labelEn: 'All Products', icon: Package },
    { id: 'bundles', labelKm: 'ឈុតមហាសន្សំ', labelEn: 'Bundles & Deals', icon: Sparkles, badge: 'Save 30%' },
    { id: 'guide', labelKm: 'របៀបប្រើប្រាស់', labelEn: 'Detailing Guide', icon: HelpCircle },
    { id: 'track', labelKm: 'តាមដានការដឹក', labelEn: 'Track Order', icon: Clock }
  ];

  const handleNavClick = (tabId: string) => {
    if (tabId === 'track') {
      setIsOrderTrackerOpen(true);
    } else {
      setActiveTab(tabId);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setActiveTab('catalog');
    setMobileMenuOpen(false);
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-700 shadow-md">
      {/* Top Announcement Bar */}
      <div id="top-announcement" className="bg-slate-950 text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
              <Truck className="w-3 h-3" />
              {language === 'km' ? 'ដឹកជញ្ជូនរហ័ស' : 'Express 24h'}
            </span>
            <p className="truncate text-slate-300 text-xs">
              {language === 'km' 
                ? '🚚 ដឹកជញ្ជូនឥតគិតថ្លៃក្នុងរាជធានីភ្នំពេញ សម្រាប់ការកុម្ម៉ង់ចាប់ពី $30 ឡើងទៅ!' 
                : '🚚 Free delivery in Phnom Penh for orders over $30! Nationwide provincial shipping.'}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-300 text-xs shrink-0">
            <a 
              href="https://t.me/khmerdepot_official" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>012 345 678 / Telegram</span>
            </a>
            <span className="text-slate-700">|</span>
            
            {/* Currency Selector */}
            <div className="flex items-center gap-1 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-[11px]">
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors ${currency === 'USD' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                USD ($)
              </button>
              <button 
                onClick={() => setCurrency('KHR')}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors ${currency === 'KHR' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                KHR (៛)
              </button>
            </div>

            <span className="text-slate-700">|</span>

            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-slate-800 border border-slate-700 px-1.5 py-0.5 rounded text-[11px]">
              <Globe className="w-3 h-3 text-slate-400" />
              <button 
                onClick={() => setLanguage('km')} 
                className={`text-[10px] px-1 py-0.5 rounded font-bold transition-colors ${language === 'km' ? 'text-amber-400' : 'text-slate-400 hover:text-white'}`}
              >
                ភាសាខ្មែរ
              </button>
              <span className="text-slate-600">/</span>
              <button 
                onClick={() => setLanguage('en')} 
                className={`text-[10px] px-1 py-0.5 rounded font-bold transition-colors ${language === 'en' ? 'text-amber-400' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          
          {/* Brand Logo - High Density */}
          <div className="flex items-center gap-2.5 cursor-pointer shrink-0" onClick={() => handleNavClick('home')}>
            <div className="bg-amber-500 p-1.5 rounded-md flex items-center justify-center shadow-xs">
              <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1 leading-none">
                <h1 className="text-lg sm:text-xl font-black tracking-tighter text-white">
                  KHMER<span className="text-amber-500">DEPOT</span>
                </h1>
                <span className="text-xs font-bold text-slate-400 hidden sm:inline ml-1">
                  ខ្មែរដេប៉ូ
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-slate-400 font-bold hidden sm:block mt-0.5">
                Pro Detailing Supply
              </p>
            </div>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'catalog') setActiveTab('catalog');
                }}
                placeholder={language === 'km' ? 'ស្វែងរក ម្សៅលាងឡាន, កាំភ្លើងពពុះ, ជូតកញ្ចក់...' : 'Search car & motorcycle care products...'}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg py-1.5 pl-9 pr-8 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-700 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 sm:gap-5">
            
            {/* AI Advisor Button */}
            <button
              id="btn-ai-advisor"
              onClick={() => setIsAiAdvisorOpen(true)}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-amber-400 text-xs font-bold px-2.5 py-1.5 rounded-lg shadow-xs hover:border-amber-500 transition-all active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden sm:inline">
                {language === 'km' ? 'ជំនួយការ AI' : 'AI Advisor'}
              </span>
            </button>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowSearchInput(!showSearchInput)}
              className="lg:hidden p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => {
                setActiveTab('catalog');
                addToast(
                  language === 'km' ? 'បញ្ជីទំនិញដែលពេញចិត្ត' : 'Saved Favorites',
                  language === 'km' ? `អ្នកមាន ${wishlist.length} ទំនិញក្នុងបញ្ជី` : `You have ${wishlist.length} saved items`,
                  'info'
                );
              }}
              className="relative p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              aria-label="Wishlist"
            >
              <Heart className={`w-4 h-4 ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 text-[9px] font-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* High Density Cart Component */}
            <button
              id="nav-cart-btn"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2.5 bg-slate-800 hover:bg-slate-700/90 border border-slate-700 px-2.5 py-1.5 rounded-lg transition-all active:scale-95 group"
              aria-label="Open Cart Drawer"
            >
              <div className="relative">
                <ShoppingCart className="w-4 h-4 text-slate-300 group-hover:text-amber-400 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-950 text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col items-start leading-none">
                <span className="text-[9px] uppercase text-slate-400 font-bold tracking-wider">
                  {language === 'km' ? 'កន្ត្រក' : 'Cart'}
                </span>
                <span className="text-xs font-black text-amber-400">
                  {cartCount} {language === 'km' ? 'មុខ' : 'items'}
                </span>
              </div>
            </button>

            {/* Mobile Burger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        {showSearchInput && (
          <div className="lg:hidden pb-2.5 pt-1">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'catalog') setActiveTab('catalog');
                }}
                placeholder={language === 'km' ? 'ស្វែងរក ម្សៅលាងឡាន, កាំភ្លើងពពុះ...' : 'Search products...'}
                className="w-full pl-9 pr-4 py-1.5 bg-slate-800 text-xs text-white rounded-lg border border-slate-700 focus:ring-1 focus:ring-amber-500 outline-none"
                autoFocus
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}

        {/* Desktop Navigation Sub-Bar */}
        <nav className="hidden md:flex items-center justify-between py-1.5 border-t border-slate-800 text-xs">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                  <span>{language === 'km' ? link.labelKm : link.labelEn}</span>
                  {link.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded font-black ${isActive ? 'bg-slate-950 text-amber-400' : 'bg-amber-500 text-slate-950'}`}>
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Categories Bar */}
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span className="text-slate-500 font-bold uppercase tracking-wider mr-1 text-[10px]">{language === 'km' ? 'ប្រភេទ៖' : 'Quick:'}</span>
            <button 
              onClick={() => handleCategorySelect('exterior')} 
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
            >
              {language === 'km' ? 'ថែទាំខាងក្រៅ' : 'Exterior'}
            </button>
            <button 
              onClick={() => handleCategorySelect('interior')} 
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
            >
              {language === 'km' ? 'ថែទាំខាងក្នុង' : 'Interior'}
            </button>
            <button 
              onClick={() => handleCategorySelect('engine')} 
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
            >
              {language === 'km' ? 'ម៉ាស៊ីន & ច្រវាក់' : 'Engine & Chain'}
            </button>
            <button 
              onClick={() => handleCategorySelect('accessories')} 
              className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 transition-colors"
            >
              {language === 'km' ? 'ឧបករណ៍ & កន្សែង' : 'Accessories'}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[100px] bottom-0 bg-slate-900/98 z-50 overflow-y-auto p-4 border-t border-slate-800 text-white">
          <div className="space-y-1.5 mb-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-lg text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-slate-950'
                      : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{language === 'km' ? link.labelKm : link.labelEn}</span>
                  </div>
                  {link.badge && (
                    <span className="text-[10px] bg-slate-950 text-amber-400 font-bold px-2 py-0.5 rounded">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {language === 'km' ? 'ជម្រើសរូបិយប័ណ្ណ & ភាសា' : 'Currency & Language'}
            </h4>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrency('USD')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold border ${currency === 'USD' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'border-slate-700 text-slate-300'}`}
              >
                USD ($)
              </button>
              <button 
                onClick={() => setCurrency('KHR')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold border ${currency === 'KHR' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'border-slate-700 text-slate-300'}`}
              >
                KHR (៛)
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setLanguage('km')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold border ${language === 'km' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'border-slate-700 text-slate-300'}`}
              >
                ភាសាខ្មែរ
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`flex-1 py-2 rounded-lg text-xs font-bold border ${language === 'en' ? 'bg-amber-500 text-slate-950 border-amber-500' : 'border-slate-700 text-slate-300'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
