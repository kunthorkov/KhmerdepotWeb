import React from 'react';
import { useShop } from '../context/ShopContext';
import { ProductBundle } from '../types';
import { ShoppingCart, Check, Flame, Sparkles, ArrowRight } from 'lucide-react';

export const ProductBundles: React.FC = () => {
  const { bundles, language, formatPrice, addToCart, products, setSelectedProduct, setIsCheckoutOpen } = useShop();

  const handleBuyBundle = (bundle: ProductBundle) => {
    // Add all products in the bundle to cart
    bundle.items.forEach(item => {
      const prod = products.find(p => p.id === item.productId);
      if (prod) {
        addToCart(prod, undefined, item.quantity);
      }
    });
  };

  const handleDirectBundleCheckout = (bundle: ProductBundle) => {
    handleBuyBundle(bundle);
    setIsCheckoutOpen(true);
  };

  return (
    <section id="bundles-section" className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-slate-200 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-slate-900 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider mb-1.5">
              <Flame className="w-3 h-3 text-amber-600 fill-amber-600" />
              <span>{language === 'km' ? 'ឈុតប្រូម៉ូសិនពិសេស' : 'Special Combo Sets'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {language === 'km' ? 'ឈុតមហាសន្សំ (Save More in Bundles)' : 'High-Value Detailing Combos'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            {language === 'km' 
              ? 'ទិញជាឈុតពេញលេញ ចំណេញលើសពី 30% ទទួលបានឧបករណ៍ និងសាប៊ូលាងឡានគ្រប់មុខ' 
              : 'Complete starter sets and pro detailer bundles with deep bundle discounts.'}
          </p>
        </div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between relative group"
            >
              {/* Top Badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                  {language === 'km' ? bundle.badgeKm : bundle.badgeEn}
                </span>
              </div>

              {/* Main Content */}
              <div className="p-4 sm:p-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  
                  {/* Bundle Main Image */}
                  <div className="sm:col-span-5 aspect-square bg-slate-50 rounded-lg p-3 flex items-center justify-center border border-slate-100">
                    <img
                      src={bundle.image}
                      alt={bundle.nameKm}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Bundle Title & Pricing */}
                  <div className="sm:col-span-7 space-y-1.5">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                      {language === 'km' ? bundle.nameKm : bundle.nameEn}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {language === 'km' ? bundle.descriptionKm : bundle.descriptionEn}
                    </p>

                    <div className="pt-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl sm:text-2xl font-black text-slate-900">
                          {formatPrice(bundle.price)}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ${bundle.originalPrice.toFixed(2)}
                        </span>
                        <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                          {language === 'km' ? `សន្សំ ${bundle.savePercent}%` : `Save ${bundle.savePercent}%`}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Items Included Breakdown */}
                <div className="border-t border-slate-100 pt-3">
                  <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {language === 'km' ? 'សម្ភារៈក្នុងឈុតនេះរួមមាន៖' : 'Items Included in Bundle:'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {bundle.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center gap-2 p-1.5 bg-slate-50 rounded-lg border border-slate-100 text-xs"
                      >
                        <img 
                          src={item.image} 
                          alt={item.productNameKm} 
                          className="w-7 h-7 object-contain bg-white rounded p-0.5 shrink-0" 
                          referrerPolicy="no-referrer"
                        />
                        <div className="min-w-0">
                          <span className="font-bold text-slate-800 block truncate text-[11px]">
                            {language === 'km' ? item.productNameKm : item.productNameEn}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {language === 'km' ? `ចំនួន ${item.quantity}` : `Qty: ${item.quantity}`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons Footer */}
              <div className="p-3 sm:p-4 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
                <button
                  onClick={() => handleBuyBundle(bundle)}
                  className="w-full sm:w-1/2 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 px-3 rounded-lg text-xs active:scale-95 transition-all border border-slate-200"
                >
                  <ShoppingCart className="w-3.5 h-3.5 text-slate-600" />
                  <span>{language === 'km' ? 'បន្ថែមទៅកន្ត្រក' : 'Add Bundle'}</span>
                </button>

                <button
                  onClick={() => handleDirectBundleCheckout(bundle)}
                  className="w-full sm:w-1/2 flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-2 px-3 rounded-lg text-xs active:scale-95 transition-all shadow-xs"
                >
                  <span>{language === 'km' ? 'ទិញឈុតនេះភ្លាម' : 'Buy Now'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
