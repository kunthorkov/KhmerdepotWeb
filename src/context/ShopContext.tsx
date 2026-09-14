import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductBundle, CartItem, Order, Language, Currency, ProductVariant } from '../types';
import { PRODUCTS, PRODUCT_BUNDLES } from '../data/mockProducts';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
}

interface ShopContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (cur: Currency) => void;
  formatPrice: (usdAmount: number) => string;
  products: Product[];
  bundles: ProductBundle[];
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  cartCount: number;
  cartSubtotal: number;
  
  // Modals & Navigation
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isAiAdvisorOpen: boolean;
  setIsAiAdvisorOpen: (open: boolean) => void;
  isOrderTrackerOpen: boolean;
  setIsOrderTrackerOpen: (open: boolean) => void;
  
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  
  lastPlacedOrder: Order | null;
  setLastPlacedOrder: (order: Order | null) => void;
  
  toasts: ToastMessage[];
  addToast: (title: string, message: string, type?: 'success' | 'info' | 'warning') => void;
  removeToast: (id: string) => void;
  
  discountCode: string;
  setDiscountCode: (code: string) => void;
  appliedDiscount: number;
  applyCoupon: (code: string) => boolean;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('km');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [products] = useState<Product[]>(PRODUCTS);
  const [bundles] = useState<ProductBundle[]>(PRODUCT_BUNDLES);
  
  // Saved cart in localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('kd_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    // Default initial cart items as seen in Image 11!
    return [
      {
        product: PRODUCTS[0], // Touchless wash powder
        selectedVariant: PRODUCTS[0].variants?.[1], // 1kg tub
        quantity: 2
      },
      {
        product: PRODUCTS[1], // Pro Foam Cannon
        quantity: 1
      }
    ];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kd_wishlist');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return ['prod-touchless-powder'];
  });

  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isAiAdvisorOpen, setIsAiAdvisorOpen] = useState<boolean>(false);
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState<boolean>(false);
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [lastPlacedOrder, setLastPlacedOrder] = useState<Order | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  
  const [discountCode, setDiscountCode] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);

  // Sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kd_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('kd_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const formatPrice = (usdAmount: number): string => {
    if (currency === 'KHR') {
      const khr = Math.round(usdAmount * 4100);
      return `${khr.toLocaleString()} ៛`;
    }
    return `$${usdAmount.toFixed(2)}`;
  };

  const addToCart = (product: Product, variant?: ProductVariant, quantity: number = 1) => {
    setCart(prev => {
      const variantId = variant?.id;
      const existingIndex = prev.findIndex(item => 
        item.product.id === product.id && item.selectedVariant?.id === variantId
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      } else {
        return [...prev, { product, selectedVariant: variant, quantity }];
      }
    });

    const name = language === 'km' ? product.nameKm : product.nameEn;
    addToast(
      language === 'km' ? 'បានបន្ថែមទៅកន្ត្រក' : 'Added to Cart',
      `${name} (${quantity})`,
      'success'
    );
  };

  const removeFromCart = (productId: string, variantId?: string) => {
    setCart(prev => prev.filter(item => 
      !(item.product.id === productId && item.selectedVariant?.id === variantId)
    ));
    addToast(
      language === 'km' ? 'បានលុបចេញពីកន្ត្រក' : 'Removed from cart',
      '',
      'info'
    );
  };

  const updateQuantity = (productId: string, quantity: number, variantId?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, variantId);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedVariant?.id === variantId) {
        return { ...item, quantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedDiscount(0);
    setDiscountCode('');
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      if (prev.includes(productId)) {
        addToast(
          language === 'km' ? 'បានដកចេញពីបញ្ជីចំណូលចិត្ត' : 'Removed from wishlist',
          '',
          'info'
        );
        return prev.filter(id => id !== productId);
      } else {
        addToast(
          language === 'km' ? 'បានបន្ថែមទៅបញ្ជីចំណូលចិត្ត' : 'Saved to wishlist',
          '',
          'success'
        );
        return [...prev, productId];
      }
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartSubtotal = cart.reduce((sum, item) => {
    const price = item.selectedVariant?.price ?? item.product.price;
    return sum + price * item.quantity;
  }, 0);

  const applyCoupon = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'DEPOT10' || clean === 'KHMER10') {
      const discount = cartSubtotal * 0.10;
      setAppliedDiscount(discount);
      setDiscountCode(clean);
      addToast(
        language === 'km' ? 'ទទួលបានបញ្ចុះតម្លៃ 10%' : 'Coupon Applied: 10% OFF',
        `-${formatPrice(discount)}`,
        'success'
      );
      return true;
    } else if (clean === 'FREE24') {
      setAppliedDiscount(1.50);
      setDiscountCode(clean);
      addToast(
        language === 'km' ? 'ទទួលបានការដឹកជញ្ជូនឥតគិតថ្លៃ' : 'Coupon: Free Delivery Applied',
        '-$1.50',
        'success'
      );
      return true;
    } else {
      addToast(
        language === 'km' ? 'កូដបញ្ចុះតម្លៃមិនត្រឹមត្រូវ' : 'Invalid coupon code',
        language === 'km' ? 'សាកល្បង DEPOT10 ឬ FREE24' : 'Try DEPOT10 or FREE24',
        'warning'
      );
      return false;
    }
  };

  return (
    <ShopContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        formatPrice,
        products,
        bundles,
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        cartCount,
        cartSubtotal,
        activeTab,
        setActiveTab,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAiAdvisorOpen,
        setIsAiAdvisorOpen,
        isOrderTrackerOpen,
        setIsOrderTrackerOpen,
        selectedProduct,
        setSelectedProduct,
        lastPlacedOrder,
        setLastPlacedOrder,
        toasts,
        addToast,
        removeToast,
        discountCode,
        setDiscountCode,
        appliedDiscount,
        applyCoupon
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
