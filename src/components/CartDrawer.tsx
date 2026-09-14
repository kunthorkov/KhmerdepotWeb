import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingCart, 
  ArrowRight, 
  Tag, 
  Truck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    cartCount,
    cartSubtotal,
    removeFromCart,
    updateQuantity,
    formatPrice,
    language,
    currency,
    setIsCheckoutOpen,
    discountCode,
    setDiscountCode,
    appliedDiscount,
    applyCoupon
  } = useShop();

  const [inputCoupon, setInputCoupon] = useState('');

  if (!isCartOpen) return null;

  const freeShippingThreshold = 30.00;
  const progressToFreeShipping = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleApplyCouponSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    applyCoupon(inputCoupon);
  };

  return (
    <div id="cart-drawer-backdrop" className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div 
        id="cart-drawer"
        className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-[#FF8928]" />
            <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
              {language === 'km' ? 'កន្ត្រកទំនិញរបស់អ្នក' : 'Your Shopping Cart'}
            </h2>
            <span className="bg-[#00294E] text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-slate-100/70 p-3.5 border-b border-slate-200">
          <div className="flex items-center justify-between text-xs mb-1.5 font-semibold text-slate-700">
            <span className="flex items-center gap-1">
              <Truck className="w-4 h-4 text-[#FF8928]" />
              {remainingForFreeShipping === 0 ? (
                <span className="text-emerald-700 font-bold">
                  {language === 'km' ? '🎉 អ្នកទទួលបានការដឹកជញ្ជូនឥតគិតថ្លៃ (ភ្នំពេញ)!' : '🎉 You unlocked FREE Delivery in Phnom Penh!'}
                </span>
              ) : (
                <span>
                  {language === 'km' 
                    ? `ទិញថែម $${remainingForFreeShipping.toFixed(2)} ទៀត ដើម្បីដឹកជញ្ជូនឥតគិតថ្លៃ!` 
                    : `Add $${remainingForFreeShipping.toFixed(2)} more for FREE shipping!`}
                </span>
              )}
            </span>
            <span className="text-[11px] font-bold text-slate-500">{Math.round(progressToFreeShipping)}%</span>
          </div>

          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-linear-to-r from-amber-400 to-[#FF8928] h-full rounded-full transition-all duration-500"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <ShoppingCart className="w-8 h-8 stroke-1" />
              </div>
              <h3 className="text-base font-bold text-slate-800">
                {language === 'km' ? 'កន្ត្រករបស់អ្នកទទេស្អាត' : 'Your cart is empty'}
              </h3>
              <p className="text-xs text-slate-500 max-w-xs">
                {language === 'km' 
                  ? 'មិនទាន់មានទំនិញនៅក្នុងកន្ត្រកឡើយ។ សូមជ្រើសរើសផលិតផលដែលអ្នកពេញចិត្ត!' 
                  : 'Looks like you have not added any car care supplies yet.'}
              </p>
            </div>
          ) : (
            cart.map((item, index) => {
              const price = item.selectedVariant?.price ?? item.product.price;
              const title = language === 'km' ? item.product.nameKm : item.product.nameEn;
              const variantName = item.selectedVariant 
                ? (language === 'km' ? item.selectedVariant.nameKm : item.selectedVariant.nameEn)
                : null;

              return (
                <div 
                  key={`${item.product.id}-${item.selectedVariant?.id || 'default'}-${index}`}
                  className="flex gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80 hover:border-slate-300 transition-colors"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.image}
                    alt={title}
                    className="w-16 h-16 object-contain bg-white rounded-xl p-1 border border-slate-100 shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-2">
                          {title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.selectedVariant?.id)}
                          className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {variantName && (
                        <span className="inline-block text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200 mt-1">
                          {variantName}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs sm:text-sm font-extrabold text-[#00294E]">
                        {formatPrice(price * item.quantity)}
                      </span>

                      {/* Quantity buttons */}
                      <div className="flex items-center border border-slate-300 rounded-lg bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedVariant?.id)}
                          className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-l-lg font-bold"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedVariant?.id)}
                          className="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-r-lg font-bold"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer & Checkout */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            
            {/* Coupon Code Input */}
            <form onSubmit={handleApplyCouponSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputCoupon}
                  onChange={(e) => setInputCoupon(e.target.value)}
                  placeholder={language === 'km' ? 'កូដបញ្ចុះតម្លៃ (DEPOT10)' : 'Promo Code (DEPOT10)'}
                  className="w-full text-xs pl-8 pr-3 py-2 bg-white border border-slate-300 rounded-xl outline-none focus:border-[#FF8928]"
                />
                <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              </div>
              <button
                type="submit"
                className="bg-[#00294E] hover:bg-[#00386B] text-white text-xs font-bold px-3 py-2 rounded-xl transition-all"
              >
                {language === 'km' ? 'ប្រើប្រាស់' : 'Apply'}
              </button>
            </form>

            {/* Subtotal Calculations */}
            <div className="space-y-1 text-xs text-slate-600 pt-1">
              <div className="flex justify-between">
                <span>{language === 'km' ? 'តម្លៃទំនិញសរុប (Subtotal)' : 'Subtotal'}</span>
                <span className="font-bold text-slate-900">{formatPrice(cartSubtotal)}</span>
              </div>

              {appliedDiscount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>{language === 'km' ? `បញ្ចុះតម្លៃ (${discountCode})` : `Discount (${discountCode})`}</span>
                  <span>-{formatPrice(appliedDiscount)}</span>
                </div>
              )}

              <div className="flex justify-between text-[11px] text-slate-500">
                <span>{language === 'km' ? 'សេវាដឹកជញ្ជូន' : 'Shipping'}</span>
                <span>{remainingForFreeShipping === 0 ? (language === 'km' ? 'ឥតគិតថ្លៃ (Free)' : 'FREE') : (language === 'km' ? 'គិតពេល Checkout' : 'Calculated next')}</span>
              </div>

              <div className="flex justify-between text-sm sm:text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                <span>{language === 'km' ? 'សរុបប៉ាន់ស្មាន' : 'Estimated Total'}</span>
                <div className="text-right">
                  <span className="text-[#00294E] block">
                    {formatPrice(Math.max(0, cartSubtotal - appliedDiscount))}
                  </span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              id="cart-drawer-checkout-btn"
              onClick={handleProceedToCheckout}
              className="w-full flex items-center justify-center gap-2 bg-[#FF8928] hover:bg-[#ff9a47] text-white font-extrabold py-3.5 px-4 rounded-xl shadow-md shadow-[#FF8928]/30 active:scale-95 transition-all text-sm"
            >
              <span>{language === 'km' ? 'បន្តទៅកាន់ការទូទាត់' : 'Proceed to Checkout'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
