import React from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  ArrowRight, 
  Flame, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { language, setActiveTab, setSelectedCategory, setSelectedProduct, products, addToCart } = useShop();

  const featuredProduct = products.find(p => p.id === 'prod-touchless-powder') || products[0];
  const dealProduct = products.find(p => p.id === 'prod-iron-remover' || p.id === 'prod-glass-oil') || products[2];

  return (
    <section id="hero-section" className="relative overflow-hidden bg-slate-900 text-white border-b border-slate-800 py-6 sm:py-8">
      {/* Background Subtle Gradients */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* High Density 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Col 1-8: Primary High-Density Spotlight Banner */}
          <div className="lg:col-span-8 bg-slate-800/90 border border-slate-700 rounded-2xl relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 min-h-[340px] sm:min-h-[360px] shadow-lg">
            {/* Background image overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-right opacity-30 pointer-events-none mix-blend-luminosity"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1024")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-transparent pointer-events-none" />

            <div className="relative z-10 space-y-3.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded w-fit tracking-wider">
                  {language === 'km' ? 'ប្រូម៉ូសិនពិសេស' : 'Seasonal Offer'}
                </span>
                <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {language === 'km' ? 'បច្ចេកវិទ្យា Touchless អាល្លឺម៉ង់' : 'German Touchless Tech'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                {language === 'km' ? (
                  <>
                    លាងឡានស្អាតភ្លឺចែងចាំង <br />
                    <span className="text-amber-400">មិនបាច់ដុស មិនខ្លាចឆ្កូត</span>
                  </>
                ) : (
                  <>
                    PREMIUM ACTIVE FOAM <br />
                    <span className="text-amber-400">ZERO-SCRATCH DETAILING</span>
                  </>
                )}
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                {language === 'km' 
                  ? 'ម្សៅលាងឡាន Touchless គុណភាពខ្ពស់ បំបែកដីក្អែល និងខ្លាញ់ក្នុង ៣ នាទី។ ដឹកជញ្ជូនរហ័សទូទាំង ២៥ ខេត្តក្រុង!' 
                  : 'Experience showroom shine with pH-balanced active foam technology. Free delivery in Phnom Penh for orders over $30.'}
              </p>

              {/* Trust Badges Minimal */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-300">
                <span className="flex items-center gap-1 bg-slate-900/80 border border-slate-700 px-2 py-0.5 rounded text-amber-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Genuine
                </span>
                <span className="flex items-center gap-1 bg-slate-900/80 border border-slate-700 px-2 py-0.5 rounded text-emerald-400 font-semibold">
                  <Truck className="w-3.5 h-3.5" /> 24h Express
                </span>
                <span className="flex items-center gap-1 bg-slate-900/80 border border-slate-700 px-2 py-0.5 rounded text-sky-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> pH Balanced Safe
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 flex flex-wrap items-center gap-2.5 pt-4">
              <button
                id="btn-hero-shop"
                onClick={() => {
                  setActiveTab('catalog');
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2 rounded-lg font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center gap-1.5"
              >
                <span>{language === 'km' ? 'ទិញទំនិញទាំងអស់' : 'SHOP COLLECTION'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="btn-hero-bundles"
                onClick={() => {
                  setActiveTab('bundles');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-slate-900/90 hover:bg-slate-900 text-white border border-slate-700 hover:border-amber-500/60 px-3.5 py-2 rounded-lg font-bold text-xs transition-all active:scale-95 flex items-center gap-1.5"
              >
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>{language === 'km' ? 'ឈុតសន្សំ 30%' : 'Save 30% Bundles'}</span>
              </button>
            </div>
          </div>

          {/* Col 9-12: High-Density Flash Deal Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md text-slate-900">
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <h3 className="font-extrabold text-sm text-slate-900">
                    {language === 'km' ? 'ការផ្ដល់ជូនពិសេស' : 'Special Deal'}
                  </h3>
                </div>
                <span className="text-rose-600 bg-rose-50 border border-rose-200 font-black text-[10px] px-2 py-0.5 rounded">
                  {language === 'km' ? 'នៅសល់ 4h 12m' : 'Ends in 4h 12m'}
                </span>
              </div>

              <div className="bg-slate-50 rounded-xl p-3.5 flex flex-col items-center justify-center mb-3 border border-slate-100 cursor-pointer" onClick={() => setSelectedProduct(dealProduct)}>
                <div className="w-24 h-24 bg-white rounded-lg mx-auto border border-slate-200 mb-2 flex items-center justify-center p-2">
                  <img 
                    src={dealProduct.image} 
                    alt={dealProduct.nameKm} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <p className="text-xs font-bold text-slate-800 text-center line-clamp-1">
                  {language === 'km' ? dealProduct.nameKm : dealProduct.nameEn}
                </p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="text-sm font-black text-slate-900">${dealProduct.price.toFixed(2)}</span>
                  {dealProduct.originalPrice && (
                    <span className="text-[11px] text-slate-400 line-through">${dealProduct.originalPrice.toFixed(2)}</span>
                  )}
                  <span className="bg-amber-100 text-amber-900 text-[9px] font-black px-1 rounded">
                    -25%
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <button
                onClick={() => {
                  addToCart(dealProduct, undefined, 1);
                }}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-colors active:scale-95"
              >
                {language === 'km' ? 'ទទួលយកប្រូម៉ូសិន (Claim)' : 'Claim Offer'}
              </button>
              <button
                onClick={() => setSelectedProduct(dealProduct)}
                className="w-full text-center text-[11px] font-bold text-slate-500 hover:text-slate-900 py-0.5"
              >
                {language === 'km' ? 'មើលព័ត៌មានលម្អិត' : 'View Specifications'}
              </button>
            </div>
          </div>

        </div>

        {/* Quick Category Strip - High Density */}
        <div className="mt-4 pt-3.5 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <button
            onClick={() => {
              setSelectedCategory('exterior');
              setActiveTab('catalog');
            }}
            className="flex items-center gap-2.5 p-2 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-xl text-left transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform">
              🚗
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                {language === 'km' ? 'ថែទាំខាងក្រៅ' : 'Exterior Care'}
              </h4>
              <p className="text-[10px] text-slate-400">
                {language === 'km' ? 'Touchless & ក្រមួន' : 'Powder & Foam Lance'}
              </p>
            </div>
          </button>

          <button
            onClick={() => {
              setSelectedCategory('interior');
              setActiveTab('catalog');
            }}
            className="flex items-center gap-2.5 p-2 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-xl text-left transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform">
              💺
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                {language === 'km' ? 'ថែទាំខាងក្នុង' : 'Interior Care'}
              </h4>
              <p className="text-[10px] text-slate-400">
                {language === 'km' ? 'ពពុះ V-MAFA' : 'Foam Cleaner & UV'}
              </p>
            </div>
          </button>

          <button
            onClick={() => {
              setSelectedCategory('engine');
              setActiveTab('catalog');
            }}
            className="flex items-center gap-2.5 p-2 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-xl text-left transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform">
              ⚙️
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                {language === 'km' ? 'ម៉ាស៊ីន & ច្រវាក់' : 'Engine & Chain'}
              </h4>
              <p className="text-[10px] text-slate-400">
                {language === 'km' ? 'កម្ចាត់ខ្លាញ់ខ្លាំង' : 'Heavy Degreaser'}
              </p>
            </div>
          </button>

          <button
            onClick={() => {
              setSelectedCategory('accessories');
              setActiveTab('catalog');
            }}
            className="flex items-center gap-2.5 p-2 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-xl text-left transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform">
              🧽
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                {language === 'km' ? 'កន្សែង & ច្រាស' : 'Accessories'}
              </h4>
              <p className="text-[10px] text-slate-400">
                {language === 'km' ? '800GSM & កាំភ្លើង' : 'Towels & Sprayers'}
              </p>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
