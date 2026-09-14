import React, { useEffect } from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { MobileNav } from './components/MobileNav';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductBundles } from './components/ProductBundles';
import { BentoDifference } from './components/BentoDifference';
import { HowToUseGuide } from './components/HowToUseGuide';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutView } from './components/CheckoutView';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { AiDetailingAdvisorModal } from './components/AiDetailingAdvisorModal';
import { ToastContainer } from './components/Toast';
import { Footer } from './components/Footer';
import { ProductCard } from './components/ProductCard';
import { 
  Sparkles, 
  Flame, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  CheckCircle2, 
  Truck, 
  Clock, 
  PhoneCall, 
  MessageSquareQuote
} from 'lucide-react';
import { MOCK_REVIEWS } from './data/mockProducts';

const MainShopContent: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    products, 
    language, 
    setIsAiAdvisorOpen,
    setSelectedCategory
  } = useShop();

  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#FF8928]/20 selection:text-[#00294E]">
      
      {/* Toast Notification Container */}
      <ToastContainer />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections Based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="space-y-0 animate-in fade-in duration-300">
            {/* 1. Hero Spotlight */}
            <HeroSection />

            {/* 2. Best Sellers Spotlight */}
            <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-[#FF8928]/10 text-[#00294E] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                    <Flame className="w-3.5 h-3.5 text-[#FF8928] fill-[#FF8928]" />
                    <span>{language === 'km' ? 'លក់ដាច់បំផុត' : 'Customer Favorites'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {language === 'km' ? 'ផលិតផលលក់ដាច់ប្រចាំខែ' : 'Top Performing Detailing Essentials'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {language === 'km' 
                      ? 'ផលិតផលដែលទទួលបានការបញ្ជាទិញច្រើនបំផុតពីម្ចាស់យានយន្តទូទាំងប្រទេស' 
                      : 'Battle-tested on dusty provincial roads and city commutes alike.'}
                  </p>
                </div>

                <button
                  onClick={() => {
                    setActiveTab('catalog');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#00294E] hover:text-[#FF8928] transition-colors"
                >
                  <span>{language === 'km' ? 'មើលផលិតផលទាំងអស់' : 'View Full Catalog'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {bestSellers.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </section>

            {/* 3. The Khmer Depot Bento Difference */}
            <BentoDifference />

            {/* 4. Product Bundles & Combos Spotlight */}
            <ProductBundles />

            {/* 5. How-To Guide / Washing Tutorial */}
            <HowToUseGuide />

            {/* 6. Cambodian Customer Testimonials & Reviews */}
            <section className="py-12 sm:py-16 bg-[#00294E] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <div className="inline-flex items-center gap-1.5 bg-white/10 text-[#FF8928] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <MessageSquareQuote className="w-3.5 h-3.5" />
                    <span>{language === 'km' ? 'មតិអតិថិជនពិតប្រាកដ' : 'Real Customer Reviews'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">
                    {language === 'km' ? 'ការវាយតម្លៃពីអតិថិជននៅកម្ពុជា' : 'Loved by Drivers Across Cambodia'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {language === 'km' 
                      ? 'អតិថិជនជាង 10,000 នាក់បានជ្រើសរើស Khmer Depot សម្រាប់ថែទាំយានយន្តរបស់ពួកគេ' 
                      : 'Over 10,000+ satisfied vehicle enthusiasts trust our touchless detailing line.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {MOCK_REVIEWS.map((rev) => (
                    <div 
                      key={rev.id} 
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-white">{rev.author}</span>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full border border-emerald-400/30 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> {language === 'km' ? 'ទិញពិត' : 'Verified'}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-amber-400">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                          {rev.vehicle && (
                            <span className="text-xs text-slate-300 font-medium ml-1.5">({rev.vehicle})</span>
                          )}
                        </div>

                        <p className="text-xs text-slate-200 leading-relaxed italic pt-1">
                          "{language === 'km' ? rev.commentKm : rev.commentEn}"
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400">
                        {rev.date}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* 7. AI Advisor Callout Banner */}
            <section className="py-10 bg-linear-to-r from-orange-500 to-[#FF8928] text-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Sparkles className="w-5 h-5 text-amber-200" />
                    <h3 className="text-xl sm:text-2xl font-black">
                      {language === 'km' ? 'មិនដឹងត្រូវជ្រើសរើសផលិតផលណា?' : 'Not Sure Which Formula is Right For Your Ride?'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-orange-100 max-w-xl">
                    {language === 'km' 
                      ? 'សាកល្បងពិគ្រោះជាមួយ AI Detailing Advisor របស់យើង ដើម្បីទទួលបានរូបមន្តលាយ និងការណែនាំចំបញ្ហា!' 
                      : 'Our interactive AI Detailing Expert diagnoses paint blemishes, oil films, and chain grit instantly.'}
                  </p>
                </div>

                <button
                 onClick={() => setIsAiAdvisorOpen(true)}
                  className="bg-[#00294E] hover:bg-[#00386B] text-white text-xs sm:text-sm font-black px-6 py-3.5 rounded-2xl shadow-lg active:scale-95 transition-all whitespace-nowrap"
                >
                  {language === 'km' ? 'សាកសួរ AI ឥឡូវនេះ (ឥតគិតថ្លៃ)' : 'Launch AI Advisor (Free)'}
                </button>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="animate-in fade-in duration-200">
            <ProductCatalog />
          </div>
        )}

        {activeTab === 'bundles' && (
          <div className="animate-in fade-in duration-200">
            <ProductBundles />
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="animate-in fade-in duration-200">
            <HowToUseGuide />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Advisor Button for Desktop/Mobile */}
      <button
        id="floating-ai-advisor-btn"
        onClick={() => setIsAiAdvisorOpen(true)}
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 bg-linear-to-r from-[#00294E] to-[#0D4E8B] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl border-2 border-amber-400/40 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all group"
        title="Ask AI Detailing Advisor"
      >
        <div className="relative">
          <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF8928] rounded-full animate-ping" />
        </div>
        <span className="hidden sm:inline text-xs font-black tracking-wide">
          {language === 'km' ? 'ជំនួយការ AI Detailing' : 'AI Detailing Advisor'}
        </span>
      </button>

      {/* Modals & Overlays */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutView />
      <OrderConfirmationModal />
      <AiDetailingAdvisorModal />

      {/* Mobile Bottom Navigation Bar */}
      <MobileNav />

    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainShopContent />
    </ShopProvider>
  );
}
