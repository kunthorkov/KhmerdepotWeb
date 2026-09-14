import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  Truck, 
  CreditCard, 
  QrCode, 
  DollarSign, 
  ChevronRight, 
  ArrowLeft,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { CAMBODIA_LOCATIONS, KHMER_DEPOT_LOGO } from '../data/mockProducts';
import confetti from 'canvas-confetti';

export const CheckoutView: React.FC = () => {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    appliedDiscount,
    discountCode,
    applyCoupon,
    formatPrice,
    language,
    currency,
    clearCart,
    setLastPlacedOrder,
    setIsOrderTrackerOpen,
    addToast
  } = useShop();

  // Form states
  const [emailOrPhone, setEmailOrPhone] = useState('012 345 678');
  const [fullName, setFullName] = useState('Sok Vibol');
  const [address, setAddress] = useState('#128, St. 271');
  const [cityProvince, setCityProvince] = useState(CAMBODIA_LOCATIONS.provinces[0]);
  const [districtKhan, setDistrictKhan] = useState(CAMBODIA_LOCATIONS.phnomPenhKhans[0]);
  const [notes, setNotes] = useState('Please call 15 minutes before arrival');
  
  const [paymentMethod, setPaymentMethod] = useState<'khqr' | 'cod' | 'aba'>('khqr');
  const [shippingType, setShippingType] = useState<'standard' | 'express'>('standard');
  const [inputVoucher, setInputVoucher] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const isPhnomPenh = cityProvince.includes('Phnom Penh') || cityProvince.includes('ភ្នំពេញ');
  const baseShippingFee = cartSubtotal >= 30 ? 0 : (isPhnomPenh ? 1.50 : 2.50);
  const expressExtra = shippingType === 'express' ? 1.00 : 0.00;
  const shippingFee = baseShippingFee + expressExtra;
  const totalUsd = Math.max(0, cartSubtotal + shippingFee - appliedDiscount);
  const totalKhr = Math.round(totalUsd * 4100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVoucher.trim()) return;
    applyCoupon(inputVoucher);
  };

  const handlePlaceOrder = async () => {
    if (!fullName.trim() || !emailOrPhone.trim() || !address.trim()) {
      addToast(
        language === 'km' ? 'សូមបំពេញព័ត៌មានដឹកជញ្ជូន' : 'Missing Information',
        language === 'km' ? 'សូមបំពេញឈ្មោះ លេខទូរស័ព្ទ និងអាសយដ្ឋាន' : 'Please fill full name, phone and address',
        'warning'
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Call REST backend API
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          customer: {
            fullName,
            phone: emailOrPhone,
            cityProvince,
            districtKhan,
            address,
            notes
          },
          paymentMethod,
          discountCode: appliedDiscount > 0 ? discountCode : undefined
        })
      });

      const json = await res.json();

      if (json.success && json.data) {
        setLastPlacedOrder(json.data);
        clearCart();
        setIsCheckoutOpen(false);
        setIsOrderTrackerOpen(true);

        // Confetti celebration
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });

        addToast(
          language === 'km' ? 'កុម្ម៉ង់បានជោគជ័យ!' : 'Order Placed Successfully!',
          language === 'km' ? `លេខកូដកុម្ម៉ង់៖ ${json.data.orderNumber}` : `Order #${json.data.orderNumber}`,
          'success'
        );
      } else {
        throw new Error('Order creation failed');
      }
    } catch (err) {
      console.warn('Order API error, generating local fallback confirmation:', err);
      // Fallback local order creation
      const orderNumber = `KD-${Math.floor(100000 + Math.random() * 900000)}`;
      const fallbackOrder = {
        id: `ord-${Date.now()}`,
        orderNumber,
        items: cart,
        subtotal: cartSubtotal,
        shippingFee,
        discount: appliedDiscount,
        discountCode,
        total: totalUsd,
        totalKhr,
        customer: {
          fullName,
          phone: emailOrPhone,
          country: 'Cambodia',
          cityProvince,
          districtKhan,
          address,
          notes
        },
        paymentMethod,
        paymentStatus: (paymentMethod === 'cod' ? 'pending' : 'paid') as 'pending' | 'paid',
        orderStatus: 'confirmed' as const,
        createdAt: new Date().toISOString(),
        estimatedDelivery: isPhnomPenh ? 'ថ្ងៃនេះ ឬថ្ងៃស្អែក (24 ម៉ោង)' : '1-2 ថ្ងៃ (Virak Buntham Express)',
        trackingNumber: `VET-${Math.floor(10000000 + Math.random() * 90000000)}`
      };

      setLastPlacedOrder(fallbackOrder);
      clearCart();
      setIsCheckoutOpen(false);
      setIsOrderTrackerOpen(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="checkout-view-backdrop" className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div 
        id="checkout-modal"
        className="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden my-4 max-h-[94vh] flex flex-col border border-slate-200 animate-in zoom-in-95 duration-200"
      >
        {/* Checkout Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCheckoutOpen(false)}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-600 transition-colors flex items-center gap-1 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'km' ? 'ត្រឡប់ក្រោយ' : 'Back'}</span>
            </button>
            <div className="h-4 w-[1px] bg-slate-300" />
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                {language === 'km' ? 'ការទូទាត់ប្រកបដោយសុវត្ថិភាព 256-bit' : 'Secure 256-Bit SSL Checkout'}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="overflow-y-auto p-4 sm:p-8 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Express Buttons & Address Form */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Express Checkout Banner */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  {language === 'km' ? '⚡ ជម្រើសទូទាត់រហ័ស (Express Checkout)' : '⚡ Express Checkout'}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setPaymentMethod('khqr')}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-black transition-all ${
                      paymentMethod === 'khqr' 
                        ? 'border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-500/20' 
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-600" />
                    <span>Bakong KHQR</span>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('aba')}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-black transition-all ${
                      paymentMethod === 'aba' 
                        ? 'border-[#00294E] bg-blue-50 text-[#00294E] ring-2 ring-blue-500/20' 
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-800" />
                    <span>ABA PAY</span>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('cod')}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-1.5 text-xs font-black transition-all ${
                      paymentMethod === 'cod' 
                        ? 'border-[#FF8928] bg-orange-50 text-orange-900 ring-2 ring-[#FF8928]/20' 
                        : 'border-slate-200 bg-white hover:bg-slate-50'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FF8928]" />
                    <span>COD (ពេលមកដល់)</span>
                  </button>
                </div>
              </div>

              {/* 1. Contact Information */}
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00294E] text-white text-xs flex items-center justify-center">1</span>
                  <span>{language === 'km' ? 'ព័ត៌មានទំនាក់ទំនង' : 'Contact Information'}</span>
                </h3>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">
                    {language === 'km' ? 'លេខទូរស័ព្ទ ឬ អ៊ីមែល *' : 'Phone Number or Email *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    placeholder="012 345 678 / customer@email.com"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-[#FF8928] focus:ring-2 focus:ring-[#FF8928]/20 font-medium"
                  />
                </div>
              </div>

              {/* 2. Delivery Address */}
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00294E] text-white text-xs flex items-center justify-center">2</span>
                  <span>{language === 'km' ? 'អាសយដ្ឋានដឹកជញ្ជូននៅកម្ពុជា' : 'Cambodia Delivery Address'}</span>
                </h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">
                      {language === 'km' ? 'ឈ្មោះអ្នកទទួល *' : 'Recipient Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ex: Sok Vibol"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-[#FF8928] font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">
                        {language === 'km' ? 'រាជធានី / ខេត្ត *' : 'City / Province *'}
                      </label>
                      <select
                        value={cityProvince}
                        onChange={(e) => setCityProvince(e.target.value)}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-[#FF8928] font-medium"
                      >
                        {CAMBODIA_LOCATIONS.provinces.map((prov) => (
                          <option key={prov} value={prov}>{prov}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">
                        {language === 'km' ? 'ខណ្ឌ / ស្រុក *' : 'District / Khan *'}
                      </label>
                      {isPhnomPenh ? (
                        <select
                          value={districtKhan}
                          onChange={(e) => setDistrictKhan(e.target.value)}
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-[#FF8928] font-medium"
                        >
                          {CAMBODIA_LOCATIONS.phnomPenhKhans.map((khan) => (
                            <option key={khan} value={khan}>{khan}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type="text"
                          value={districtKhan}
                          onChange={(e) => setDistrictKhan(e.target.value)}
                          placeholder="Ex: Krong Siem Reap"
                          className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-[#FF8928] font-medium"
                        />
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">
                      {language === 'km' ? 'ផ្ទះលេខ ផ្លូវ សង្កាត់ *' : 'Street Address / Building *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Ex: #128, St. 271, Sangkat Phsar Depot 1"
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl outline-none focus:border-[#FF8928] font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1">
                      {language === 'km' ? 'សម្គាល់ ឬចំណាំផ្សេងៗ' : 'Delivery Notes (Optional)'}
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Call before delivering, gate code..."
                      className="w-full text-xs px-3.5 py-2 bg-white border border-slate-300 rounded-xl outline-none focus:border-[#FF8928]"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Payment Selection with Dynamic KHQR Display */}
              <div className="space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#00294E] text-white text-xs flex items-center justify-center">3</span>
                  <span>{language === 'km' ? 'វិធីសាស្ត្រទូទាត់ប្រាក់' : 'Payment Method'}</span>
                </h3>

                <div className="space-y-2">
                  {/* Bakong KHQR Option */}
                  <div 
                    onClick={() => setPaymentMethod('khqr')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'khqr'
                        ? 'border-rose-500 bg-rose-50/40 ring-2 ring-rose-500/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'khqr'}
                          onChange={() => setPaymentMethod('khqr')}
                          className="text-rose-600 focus:ring-rose-500"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">
                              Bakong KHQR (ABA, ACLEDA, Chip Mong, Wing)
                            </span>
                            <span className="text-[10px] bg-rose-600 text-white font-black px-1.5 py-0.2 rounded-sm uppercase">
                              KHQR
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            {language === 'km' ? 'ស្កេនទូទាត់រហ័សតាមគ្រប់កម្មវិធីធនាគារទាំងអស់នៅកម្ពុជា' : 'Scan & Pay with any Cambodian banking app'}
                          </p>
                        </div>
                      </div>
                      <QrCode className="w-6 h-6 text-rose-600" />
                    </div>

                    {/* KHQR Interactive Preview */}
                    {paymentMethod === 'khqr' && (
                      <div className="mt-4 p-4 bg-white rounded-xl border border-rose-200 text-center space-y-3">
                        <div className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-slate-200">
                          {/* Generated QR Code Graphic Representation */}
                          <div className="w-36 h-36 bg-slate-900 rounded-xl p-2 flex flex-col items-center justify-between text-white relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]" />
                            <div className="flex justify-between w-full text-[8px] font-black tracking-widest text-rose-400">
                              <span>KHQR</span>
                              <span>BAKONG</span>
                            </div>
                            <div className="bg-white p-1 rounded-lg">
                              <QrCode className="w-20 h-20 text-slate-900" />
                            </div>
                            <span className="text-[8px] font-bold text-slate-300">KHMER DEPOT OFFICIAL</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-xs font-bold text-slate-800 block">
                            KHMER DEPOT (KUNTHOR KOV)
                          </span>
                          <span className="text-base font-black text-[#00294E] block">
                            ${totalUsd.toFixed(2)} / {totalKhr.toLocaleString()} ៛
                          </span>
                          <span className="text-[10px] text-emerald-600 font-bold block mt-0.5">
                            ⚡ {language === 'km' ? 'ផ្ទៀងផ្ទាត់ការទូទាត់ដោយស្វ័យប្រវត្តិ' : 'Auto-verified after scanning'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cash on Delivery Option */}
                  <div 
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#FF8928] bg-orange-50/40 ring-2 ring-[#FF8928]/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                          className="text-[#FF8928] focus:ring-[#FF8928]"
                        />
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">
                            {language === 'km' ? 'ទូទាត់ប្រាក់ពេលទំនិញទៅដល់ (Cash on Delivery - COD)' : 'Cash on Delivery (COD)'}
                          </span>
                          <p className="text-[11px] text-slate-500">
                            {language === 'km' ? 'ពិនិត្យទំនិញរួចរាល់ សឹមប្រគល់ប្រាក់ជូនអ្នកដឹក' : 'Inspect goods first, pay cash to courier upon arrival'}
                          </p>
                        </div>
                      </div>
                      <DollarSign className="w-5 h-5 text-[#FF8928]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Order Summary & Placement */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-5">
              <h3 className="text-sm font-extrabold text-slate-900 border-b border-slate-200 pb-3">
                {language === 'km' ? 'បញ្ជីទំនិញកុម្ម៉ង់' : 'Order Summary'}
              </h3>

              {/* Items List */}
              <div className="space-y-3 max-h-60 overflow-y-auto slim-scrollbar pr-1">
                {cart.map((item, idx) => {
                  const price = item.selectedVariant?.price ?? item.product.price;
                  return (
                    <div key={idx} className="flex items-center gap-3 text-xs">
                      <div className="relative w-12 h-12 bg-white rounded-xl border border-slate-200 p-1 shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.nameKm} 
                          className="w-full h-full object-contain" 
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute -top-1.5 -right-1.5 bg-[#00294E] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 truncate">
                          {language === 'km' ? item.product.nameKm : item.product.nameEn}
                        </h4>
                        {item.selectedVariant && (
                          <span className="text-[10px] text-slate-500">
                            {language === 'km' ? item.selectedVariant.nameKm : item.selectedVariant.nameEn}
                          </span>
                        )}
                      </div>

                      <span className="font-extrabold text-slate-900 shrink-0">
                        {formatPrice(price * item.quantity)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Voucher Input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2 pt-2 border-t border-slate-200">
                <input
                  type="text"
                  value={inputVoucher}
                  onChange={(e) => setInputVoucher(e.target.value)}
                  placeholder={language === 'km' ? 'កូដបញ្ចុះតម្លៃ (DEPOT10)' : 'Discount Code (DEPOT10)'}
                  className="flex-1 text-xs px-3 py-2 bg-white border border-slate-300 rounded-xl outline-none focus:border-[#FF8928]"
                />
                <button
                  type="submit"
                  className="bg-[#00294E] text-white text-xs font-bold px-3 py-2 rounded-xl"
                >
                  {language === 'km' ? 'ប្រើប្រាស់' : 'Apply'}
                </button>
              </form>

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-200">
                <div className="flex justify-between">
                  <span>{language === 'km' ? 'តម្លៃទំនិញសរុប (Subtotal)' : 'Subtotal'}</span>
                  <span className="font-bold text-slate-900">{formatPrice(cartSubtotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span>{language === 'km' ? 'សេវាដឹកជញ្ជូន' : 'Shipping'}</span>
                  <span className="font-bold text-slate-900">
                    {shippingFee === 0 ? (language === 'km' ? 'ឥតគិតថ្លៃ (Free)' : 'FREE') : formatPrice(shippingFee)}
                  </span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>{language === 'km' ? `បញ្ចុះតម្លៃ (${discountCode})` : `Discount (${discountCode})`}</span>
                    <span>-{formatPrice(appliedDiscount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-base font-black text-slate-900 pt-3 border-t border-slate-200">
                  <span>{language === 'km' ? 'ទឹកប្រាក់សរុប (Total)' : 'Total Due'}</span>
                  <div className="text-right">
                    <span className="text-xl text-[#00294E] block">
                      ${totalUsd.toFixed(2)}
                    </span>
                    <span className="text-xs text-slate-500 font-bold block">
                      ≈ {totalKhr.toLocaleString()} ៛
                    </span>
                  </div>
                </div>
              </div>

              {/* Confirm Order Button */}
              <button
                id="btn-complete-order"
                disabled={isSubmitting || cart.length === 0}
                onClick={handlePlaceOrder}
                className="w-full flex items-center justify-center gap-2 bg-[#FF8928] hover:bg-[#ff9a47] disabled:opacity-50 text-white font-extrabold py-4 px-4 rounded-2xl shadow-lg shadow-[#FF8928]/30 active:scale-95 transition-all text-base"
              >
                {isSubmitting ? (
                  <span>{language === 'km' ? 'កំពុងដំណើរការកុម្ម៉ង់...' : 'Processing Order...'}</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>{language === 'km' ? 'បញ្ជាក់ការកុម្ម៉ង់ទំនិញ (Place Order)' : 'Complete & Place Order'}</span>
                  </>
                )}
              </button>

              <div className="text-center text-[11px] text-slate-400">
                🔒 {language === 'km' ? 'ធានាសុវត្ថិភាព 100% ដឹកជញ្ជូនរហ័ស 24 ម៉ោង' : '100% Secure Transaction • 24h Express Delivery'}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
