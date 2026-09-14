import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Product, ProductVariant } from '../types';
import { 
  X, 
  Star, 
  Check, 
  Truck, 
  ShieldCheck, 
  Leaf, 
  HelpCircle, 
  ShoppingCart, 
  Zap, 
  Heart,
  Share2,
  ChevronRight,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { MOCK_REVIEWS } from '../data/mockProducts';

export const ProductDetailModal: React.FC = () => {
  const { 
    selectedProduct, 
    setSelectedProduct, 
    language, 
    formatPrice, 
    addToCart, 
    setIsCheckoutOpen,
    toggleWishlist,
    wishlist,
    products,
    addToast
  } = useShop();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'features' | 'usage' | 'reviews'>('features');
  
  // Review form states
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewVehicle, setReviewVehicle] = useState('');
  const [reviewsList, setReviewsList] = useState(MOCK_REVIEWS);

  // Sync state whenever selectedProduct changes
  React.useEffect(() => {
    if (selectedProduct) {
      setSelectedVariant(selectedProduct.variants?.[0]);
      setActiveImageIndex(0);
      setQuantity(1);
    }
  }, [selectedProduct?.id]);

  if (!selectedProduct) return null;

  const images = selectedProduct.gallery && selectedProduct.gallery.length > 0 
    ? selectedProduct.gallery 
    : [selectedProduct.image];

  const currentPrice = selectedVariant?.price ?? selectedProduct.price;
  const isWishlisted = wishlist.includes(selectedProduct.id);

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedVariant, quantity);
  };

  const handleBuyNow = () => {
    addToCart(selectedProduct, selectedVariant, quantity);
    setSelectedProduct(null);
    setIsCheckoutOpen(true);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewComment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: reviewAuthor,
      rating: reviewRating,
      date: language === 'km' ? 'ទើបតែបញ្ចូលថ្មីៗ' : 'Just now',
      commentKm: reviewComment,
      commentEn: reviewComment,
      verified: true,
      vehicle: reviewVehicle || (language === 'km' ? 'រថយន្ត' : 'Vehicle')
    };

    setReviewsList([newRev, ...reviewsList]);
    setReviewAuthor('');
    setReviewComment('');
    setReviewVehicle('');
    addToast(
      language === 'km' ? 'អរគុណសម្រាប់ការវាយតម្លៃ!' : 'Thank you for your review!',
      language === 'km' ? 'មតិរបស់អ្នកត្រូវបានបង្ហាញជោគជ័យ' : 'Your review is now published',
      'success'
    );
  };

  const relatedProducts = products
    .filter(p => p.id !== selectedProduct.id && (p.category === selectedProduct.category || p.isBestSeller))
    .slice(0, 3);

  return (
    <div id="product-detail-modal-backdrop" className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div 
        id="product-detail-modal"
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <span>Khmer Depot</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="capitalize">{selectedProduct.category}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-bold truncate max-w-50">
              {language === 'km' ? selectedProduct.nameKm : selectedProduct.nameEn}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleWishlist(selectedProduct.id)}
              className="p-2 rounded-full hover:bg-slate-200/70 text-slate-500 transition-colors"
              title="Save to wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}`} />
            </button>
            <button
              onClick={() => setSelectedProduct(null)}
              className="p-2 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            
            {/* Left: Product Image Gallery */}
            <div className="md:col-span-6 space-y-3">
              {/* Main Image Display */}
              <div className="relative aspect-square w-full bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden flex items-center justify-center p-4">
                <img
                  src={images[activeImageIndex] || selectedProduct.image}
                  alt={selectedProduct.nameKm}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {selectedProduct.isBestSeller && (
                  <span className="absolute top-3 left-3 bg-[#00294E] text-white text-xs font-extrabold px-3 py-1 rounded-md shadow-xs">
                    {language === 'km' ? 'ពេញនិយមបំផុត' : 'Best Seller'}
                  </span>
                )}
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 slim-scrollbar">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 rounded-xl border-2 overflow-hidden bg-slate-50 shrink-0 p-1 transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#FF8928] ring-2 ring-[#FF8928]/30 scale-105'
                          : 'border-slate-200 hover:border-slate-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`} 
                        className="w-full h-full object-contain" 
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info & Actions */}
            <div className="md:col-span-6 space-y-5">
              <div>
                {/* Title */}
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  {language === 'km' ? selectedProduct.nameKm : selectedProduct.nameEn}
                </h1>

                {/* Rating and Stock */}
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-amber-900">{selectedProduct.rating}</span>
                    <span className="text-xs text-amber-700">({selectedProduct.reviewsCount} {language === 'km' ? 'មតិ' : 'reviews'})</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                    <Check className="w-3.5 h-3.5 stroke-3" />
                    {language === 'km' ? 'មានក្នុងស្តុក (ដឹកបានភ្លាម)' : 'In Stock (Ready to Ship)'}
                  </span>
                </div>
              </div>

              {/* Price Section */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <span className="text-xs text-slate-500 block">{language === 'km' ? 'តម្លៃលក់' : 'Price'}</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-[#00294E]">
                    {formatPrice(currentPrice)}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-base text-slate-400 line-through">
                      ${selectedProduct.originalPrice.toFixed(2)}
                    </span>
                  )}
                  {selectedProduct.discountPercent && (
                    <span className="text-xs font-extrabold text-[#FF8928] bg-orange-100 px-2 py-0.5 rounded-md">
                      {language === 'km' ? `សន្សំបាន ${selectedProduct.discountPercent}%` : `Save ${selectedProduct.discountPercent}%`}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {language === 'km' 
                    ? '⚡ កុម្ម៉ង់មុនម៉ោង 12:00 ថ្ងៃត្រង់ ដឹកជញ្ជូនដល់ក្នុងថ្ងៃនេះ (ភ្នំពេញ)' 
                    : '⚡ Order before 12:00 PM for same-day delivery in Phnom Penh'}
                </p>
              </div>

              {/* Variants Selector if available */}
              {selectedProduct.variants && selectedProduct.variants.length > 0 && (
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                    {language === 'km' ? 'ជ្រើសរើសទំហំ / កញ្ចប់៖' : 'Select Size / Variant:'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedProduct.variants.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        className={`p-3 rounded-xl border text-left transition-all relative ${
                          selectedVariant?.id === v.id
                            ? 'border-[#FF8928] bg-orange-50/50 ring-2 ring-[#FF8928]/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <span className="text-xs font-bold block text-slate-800">
                          {language === 'km' ? v.nameKm : v.nameEn}
                        </span>
                        <span className="text-sm font-extrabold text-[#00294E] block mt-0.5">
                          ${v.price.toFixed(2)}
                        </span>
                        {v.washesEstimate && (
                          <span className="text-[10px] text-slate-500 block mt-0.5">
                            {v.washesEstimate}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Stepper & Add to Cart Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-slate-300 rounded-xl bg-white p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-100 rounded-lg"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-extrabold text-sm text-slate-800">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center font-bold text-slate-600 hover:bg-slate-100 rounded-lg"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#00294E] hover:bg-[#003B6F] text-white font-bold py-3.5 px-4 rounded-xl shadow-md active:scale-95 transition-all"
                  >
                    <ShoppingCart className="w-4 h-4 text-[#FF8928]" />
                    <span>{language === 'km' ? 'ដាក់ចូលកន្ត្រក' : 'Add to Cart'}</span>
                  </button>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="w-full flex items-center justify-center gap-2 bg-[#FF8928] hover:bg-[#ff9a47] text-white font-extrabold py-3.5 px-4 rounded-xl shadow-md shadow-[#FF8928]/30 active:scale-95 transition-all text-base"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  <span>{language === 'km' ? 'ទិញឥឡូវនេះ (ទូទាត់រហ័ស KHQR / COD)' : 'Buy Now (Instant Checkout)'}</span>
                </button>
              </div>

              {/* Value Proposition Highlights */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
                  <Truck className="w-4 h-4 text-[#FF8928] shrink-0" />
                  <span>{language === 'km' ? 'ដឹក 24h ភ្នំពេញ / ខេត្ត 1-2 ថ្ងៃ' : '24h PP / 1-2d Provinces'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-[#FF8928] shrink-0" />
                  <span>{language === 'km' ? 'ធានាគុណភាព 100%' : '100% Guaranteed Genuine'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
                  <Leaf className="w-4 h-4 text-[#FF8928] shrink-0" />
                  <span>{language === 'km' ? 'pH សុវត្ថិភាព មិនខូចថ្នាំ' : 'Eco-Friendly pH Safe'}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl">
                  <HelpCircle className="w-4 h-4 text-[#FF8928] shrink-0" />
                  <span>{language === 'km' ? 'ប្រឹក្សាបច្ចេកទេសឥតគិតថ្លៃ' : 'Free Detailing Support'}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Tabbed Section: Details, Usage & Reviews */}
          <div className="pt-6 border-t border-slate-200">
            {/* Tabs Selector */}
            <div className="flex border-b border-slate-200 gap-4 sm:gap-8 text-sm sm:text-base font-bold">
              <button
                onClick={() => setActiveTab('features')}
                className={`pb-3 relative transition-colors ${
                  activeTab === 'features' 
                    ? 'text-[#00294E] border-b-2 border-[#FF8928]' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {language === 'km' ? 'លក្ខណៈពិសេស និងគុណសម្បត្តិ' : 'Features & Benefits'}
              </button>

              <button
                onClick={() => setActiveTab('usage')}
                className={`pb-3 relative transition-colors ${
                  activeTab === 'usage' 
                    ? 'text-[#00294E] border-b-2 border-[#FF8928]' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {language === 'km' ? 'របៀបប្រើប្រាស់ (៣ ជំហាន)' : 'How to Use (3 Steps)'}
              </button>

              <button
                onClick={() => setActiveTab('reviews')}
                className={`pb-3 relative transition-colors ${
                  activeTab === 'reviews' 
                    ? 'text-[#00294E] border-b-2 border-[#FF8928]' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {language === 'km' ? `មតិអតិថិជន (${reviewsList.length})` : `Reviews (${reviewsList.length})`}
              </button>
            </div>

            {/* Tab Contents */}
            <div className="py-6">
              
              {/* Features Tab */}
              {activeTab === 'features' && (
                <div className="space-y-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {language === 'km' ? selectedProduct.descriptionKm : selectedProduct.descriptionEn}
                  </p>

                  <div className="space-y-2 mt-4">
                    <h4 className="text-sm font-bold text-slate-900">
                      {language === 'km' ? 'ចំណុចលេចធ្លោ៖' : 'Key Highlights:'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(language === 'km' ? selectedProduct.featuresKm : selectedProduct.featuresEn).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                          <Check className="w-4 h-4 text-[#FF8928] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedProduct.applicableVehicles && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-600 block mb-1">
                        {language === 'km' ? 'ស័ក្តិសមសម្រាប់៖' : 'Suitable for:'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProduct.applicableVehicles.map((v, i) => (
                          <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
                            {v}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Usage Tab */}
              {activeTab === 'usage' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {(language === 'km' ? selectedProduct.usageStepsKm : selectedProduct.usageStepsEn).map((step) => (
                      <div key={step.step} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 relative">
                        <div className="w-8 h-8 bg-[#00294E] text-[#FF8928] font-extrabold text-sm rounded-full flex items-center justify-center mb-3">
                          {step.step}
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>

                  {selectedProduct.importantNoteKm && (
                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold mb-0.5">
                          {language === 'km' ? 'ចំណាំសំខាន់ (Safety Note):' : 'Important Note:'}
                        </strong>
                        <span>
                          {language === 'km' ? selectedProduct.importantNoteKm : selectedProduct.importantNoteEn}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  {/* Reviews List */}
                  <div className="space-y-3">
                    {reviewsList.map((rev) => (
                      <div key={rev.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-900">{rev.author}</span>
                            {rev.verified && (
                              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                                <Check className="w-2.5 h-2.5" /> {language === 'km' ? 'ទិញពិតប្រាកដ' : 'Verified'}
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-400">{rev.date}</span>
                        </div>

                        <div className="flex items-center gap-1 text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400' : 'text-slate-300'}`} 
                            />
                          ))}
                          {rev.vehicle && (
                            <span className="text-xs text-slate-500 font-medium ml-2">({rev.vehicle})</span>
                          )}
                        </div>

                        <p className="text-xs text-slate-700 leading-relaxed pt-1">
                          {language === 'km' ? rev.commentKm : rev.commentEn}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Add Review Form */}
                  <form onSubmit={handleAddReview} className="bg-slate-100/70 p-5 rounded-2xl space-y-3">
                    <h4 className="text-sm font-bold text-slate-900">
                      {language === 'km' ? 'សរសេរមតិវាយតម្លៃរបស់អ្នក' : 'Write a Customer Review'}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          {language === 'km' ? 'ឈ្មោះរបស់អ្នក' : 'Your Name'}
                        </label>
                        <input
                          type="text"
                          required
                          value={reviewAuthor}
                          onChange={(e) => setReviewAuthor(e.target.value)}
                          placeholder="Ex: Sok Vibol"
                          className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg outline-none focus:border-[#FF8928]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-600 block mb-1">
                          {language === 'km' ? 'ម៉ូដែលឡាន ឬម៉ូតូ' : 'Vehicle Model'}
                        </label>
                        <input
                          type="text"
                          value={reviewVehicle}
                          onChange={(e) => setReviewVehicle(e.target.value)}
                          placeholder="Ex: Toyota Prius 2010 / Ford Ranger"
                          className="w-full text-xs px-3 py-2 bg-white border border-slate-300 rounded-lg outline-none focus:border-[#FF8928]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">
                        {language === 'km' ? 'កម្រិតពិន្ទុ (Star Rating)' : 'Rating'}
                      </label>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setReviewRating(star)}
                            className="p-1 text-amber-400 hover:scale-125 transition-transform"
                          >
                            <Star className={`w-5 h-5 ${star <= reviewRating ? 'fill-amber-400' : 'text-slate-300'}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-600 block mb-1">
                        {language === 'km' ? 'មតិយោបល់របស់អ្នក' : 'Your Comment'}
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={reviewComment}
                        onChange={(e) => setReviewComment(e.target.value)}
                        placeholder={language === 'km' ? 'ចែករំលែកបទពិសោធន៍ប្រើប្រាស់...' : 'Share your experience...'}
                        className="w-full text-xs p-3 bg-white border border-slate-300 rounded-lg outline-none focus:border-[#FF8928]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#00294E] hover:bg-[#003D70] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all"
                    >
                      {language === 'km' ? 'បញ្ជូនមតិវាយតម្លៃ' : 'Submit Review'}
                    </button>
                  </form>
                </div>
              )}

            </div>
          </div>

          {/* Related / Frequently Bought Together Products */}
          {relatedProducts.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-4">
                {language === 'km' ? 'ផលិតផលទិញរួមគ្នាពេញនិយម' : 'Frequently Bought Together'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedProducts.map((p) => (
                  <div 
                    key={p.id}
                    onClick={() => {
                      setSelectedProduct(p);
                      setActiveImageIndex(0);
                    }}
                    className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl cursor-pointer transition-all"
                  >
                    <img 
                      src={p.image} 
                      alt={p.nameKm} 
                      className="w-14 h-14 object-contain bg-white rounded-lg p-1 shrink-0" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-slate-800 truncate">
                        {language === 'km' ? p.nameKm : p.nameEn}
                      </h4>
                      <span className="text-xs font-extrabold text-[#00294E] block mt-0.5">
                        ${p.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
