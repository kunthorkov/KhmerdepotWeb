import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  CheckCircle2, 
  Package, 
  Truck, 
  Phone, 
  Calendar, 
  MapPin, 
  X, 
  Download, 
  Sparkles,
  Search,
  ChevronRight
} from 'lucide-react';
import { KHMER_DEPOT_LOGO } from '../data/mockProducts';

export const OrderConfirmationModal: React.FC = () => {
  const {
    isOrderTrackerOpen,
    setIsOrderTrackerOpen,
    lastPlacedOrder,
    formatPrice,
    language
  } = useShop();

  const [lookupNumber, setLookupNumber] = useState('');
  const [searchedOrder, setSearchedOrder] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOrderTrackerOpen) return null;

  const currentOrder = searchedOrder || lastPlacedOrder || {
    id: 'ord-sample',
    orderNumber: 'KD-892415',
    items: [],
    subtotal: 47.50,
    shippingFee: 0,
    discount: 0,
    total: 47.50,
    totalKhr: 194750,
    customer: {
      fullName: 'Sok Vibol',
      phone: '012 345 678',
      cityProvince: 'រាជធានីភ្នំពេញ (Phnom Penh)',
      districtKhan: 'ខណ្ឌទួលគោក (Toul Kork)',
      address: '#128, St. 271, Sangkat Phsar Depot 1'
    },
    paymentMethod: 'khqr',
    paymentStatus: 'paid',
    orderStatus: 'confirmed',
    createdAt: new Date().toISOString(),
    estimatedDelivery: 'ថ្ងៃនេះ ឬថ្ងៃស្អែក (24 ម៉ោង)',
    trackingNumber: 'VET-88392019'
  };

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lookupNumber.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch(`/api/orders/${lookupNumber.trim()}`);
      const json = await res.json();
      if (json.success && json.data) {
        setSearchedOrder(json.data);
      }
    } catch (err) {
      console.warn('Order lookup fallback', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="order-tracker-modal-backdrop" className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div 
        id="order-tracker-modal"
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col border border-slate-200 animate-in zoom-in-95 duration-200"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#00294E] text-white">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-[#FF8928]" />
            <h2 className="text-sm sm:text-base font-extrabold">
              {language === 'km' ? 'ស្ថានភាពការកុម្ម៉ង់ & វិក្កយបត្រ' : 'Order Status & Tracking'}
            </h2>
          </div>

          <button
            onClick={() => setIsOrderTrackerOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/20 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Order Search Form */}
          <form onSubmit={handleLookup} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={lookupNumber}
                onChange={(e) => setLookupNumber(e.target.value)}
                placeholder={language === 'km' ? 'ស្វែងរកតាមលេខកូដកុម្ម៉ង់ (ឧ. KD-892415)...' : 'Track by Order # (e.g. KD-892415)...'}
                className="w-full text-xs pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-[#FF8928]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#FF8928] hover:bg-[#ff9a47] text-white text-xs font-bold px-4 py-2.5 rounded-xl"
            >
              {language === 'km' ? 'តាមដាន' : 'Track'}
            </button>
          </form>

          {/* Success Banner */}
          <div className="text-center bg-emerald-50 border border-emerald-200 rounded-2xl p-5 space-y-2">
            <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-emerald-950">
              {language === 'km' ? 'ការកុម្ម៉ង់ត្រូវបានទទួលជោគជ័យ!' : 'Thank you! Order Confirmed'}
            </h3>
            <p className="text-xs text-emerald-800 font-medium">
              {language === 'km' 
                ? `លេខកូដកុម្ម៉ង់៖ ${currentOrder.orderNumber} • ក្រុមការងារកំពុងរៀបចំវេចខ្ចប់យ៉ាងប្រុងប្រយ័ត្ន` 
                : `Order #${currentOrder.orderNumber} • Your detailing kit is being packed with care.`}
            </p>
          </div>

          {/* Timeline Status */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              {language === 'km' ? 'ដំណើរការនៃការដឹកជញ្ជូន' : 'Delivery Progress'}
            </h4>

            <div className="grid grid-cols-4 gap-2 text-center pt-2">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">
                  ✓
                </div>
                <span className="text-[10px] font-bold text-slate-800 mt-1.5">{language === 'km' ? 'បានបញ្ជាក់' : 'Confirmed'}</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-xs animate-pulse">
                  ⚙
                </div>
                <span className="text-[10px] font-bold text-slate-800 mt-1.5">{language === 'km' ? 'កំពុងវេចខ្ចប់' : 'Packing'}</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">
                  🚚
                </div>
                <span className="text-[10px] font-medium text-slate-500 mt-1.5">{language === 'km' ? 'កំពុងដឹក' : 'On Delivery'}</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-xs font-bold">
                  🏠
                </div>
                <span className="text-[10px] font-medium text-slate-500 mt-1.5">{language === 'km' ? 'បានទទួល' : 'Delivered'}</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span>{language === 'km' ? 'រយៈពេលប៉ាន់ស្មាន៖' : 'Estimated Arrival:'}</span>
              <span className="font-extrabold text-[#00294E]">{currentOrder.estimatedDelivery}</span>
            </div>
          </div>

          {/* Customer & Shipping Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-800 block flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF8928]" />
                {language === 'km' ? 'អាសយដ្ឋានទទួលទំនិញ' : 'Delivery Address'}
              </span>
              <p className="text-slate-600 font-semibold">{currentOrder.customer.fullName}</p>
              <p className="text-slate-500">{currentOrder.customer.phone}</p>
              <p className="text-slate-500">{currentOrder.customer.address}, {currentOrder.customer.districtKhan}, {currentOrder.customer.cityProvince}</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-800 block flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-[#FF8928]" />
                {language === 'km' ? 'ការទូទាត់ និងលេខកូដ' : 'Payment & Tracking'}
              </span>
              <p className="text-slate-600">
                {language === 'km' ? 'វិធីទូទាត់៖ ' : 'Payment: '}
                <strong className="text-slate-900 uppercase">{currentOrder.paymentMethod}</strong>
              </p>
              <p className="text-slate-600">
                {language === 'km' ? 'លេខតាមដាន៖ ' : 'Tracking #: '}
                <strong className="text-slate-900">{currentOrder.trackingNumber}</strong>
              </p>
              <p className="text-slate-600">
                {language === 'km' ? 'ទឹកប្រាក់សរុប៖ ' : 'Total: '}
                <strong className="text-[#00294E]">${currentOrder.total.toFixed(2)} ({currentOrder.totalKhr.toLocaleString()} ៛)</strong>
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handlePrint}
              className="flex-1 flex items-center justify-center gap-2 bg-[#00294E] hover:bg-[#00386B] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{language === 'km' ? 'ទាញយកវិក្កយបត្រ (Print Invoice)' : 'Print Receipt'}</span>
            </button>

            <a
              href="https://t.me/khmerdepot_official"
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#FF8928] hover:bg-[#ff9a47] text-white text-xs font-bold py-3 px-4 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{language === 'km' ? 'ទាក់ទង Telegram Hotline' : 'Chat on Telegram'}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
