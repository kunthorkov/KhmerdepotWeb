import React from 'react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';
import { ShoppingCart, Star, Heart, Check, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, formatPrice, addToCart, setSelectedProduct, toggleWishlist, wishlist } = useShop();

  const isWishlisted = wishlist.includes(product.id);
  const title = language === 'km' ? product.nameKm : product.nameEn;
  const shortDesc = language === 'km' ? product.shortDescKm : product.shortDescEn;

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-xl border border-slate-200 p-3 hover:shadow-lg hover:border-amber-300 transition-all duration-200 flex flex-col justify-between relative"
    >
      {/* Top Badges & Wishlist */}
      <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex flex-col gap-1 items-start">
          {product.isBestSeller && (
            <span className="bg-slate-900 text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider shadow-xs">
              {language === 'km' ? 'ពេញនិយម' : 'Best Seller'}
            </span>
          )}
          {product.discountPercent && (
            <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded shadow-xs">
              -{product.discountPercent}% OFF
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
          className="pointer-events-auto w-6 h-6 rounded-full bg-white/95 shadow-xs border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all"
          aria-label="Add to wishlist"
        >
          <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}`} />
        </button>
      </div>

      <div>
        {/* Product Image Container */}
        <div 
          onClick={() => setSelectedProduct(product)}
          className="aspect-square bg-slate-100/70 rounded-lg mb-2.5 p-3 flex items-center justify-center cursor-pointer overflow-hidden"
        >
          <img
            src={product.image}
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>

        {/* Micro Brand & Stock */}
        <div className="flex items-center justify-between mb-1 text-[10px]">
        
          <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
            <Check className="w-2.5 h-2.5 stroke-3" />
            {language === 'km' ? 'មានស្តុក' : 'In Stock'}
          </span>
        </div>

        {/* Title */}
        <h4 
          onClick={() => setSelectedProduct(product)}
          className="text-xs font-bold text-slate-800 leading-snug mb-1.5 line-clamp-2 cursor-pointer group-hover:text-slate-950 transition-colors"
          title={title}
        >
          {title}
        </h4>

        {/* Rating and Short description snippet */}
        <div className="flex items-center gap-1 mb-2 text-[11px]">
          <div className="flex items-center text-amber-500">
            <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
          </div>
          <span className="font-bold text-slate-700">{product.rating}</span>
          <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
        </div>
      </div>

      {/* Price & Action Button */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between mt-auto gap-2">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-sm sm:text-base font-black text-slate-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <button
          id={`add-to-cart-${product.id}`}
          onClick={() => addToCart(product, product.variants?.[0] || undefined, 1)}
          className="p-1.5 sm:px-2 sm:py-1.5 bg-slate-100 hover:bg-amber-500 hover:text-slate-950 text-slate-700 rounded-md transition-all active:scale-95 flex items-center gap-1 text-xs font-bold"
          aria-label="Add to cart"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px]">
            {language === 'km' ? 'ទិញ' : 'Add'}
          </span>
        </button>
      </div>
    </div>
  );
};
