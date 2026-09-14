export type Language = 'km' | 'en';
export type Currency = 'USD' | 'KHR';

export interface ProductVariant {
  id: string;
  nameKm: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  washesEstimate?: string;
  inStock: boolean;
}

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  commentKm: string;
  commentEn: string;
  verified: boolean;
  vehicle?: string;
}

export interface Product {
  id: string;
  sku: string;
  nameKm: string;
  nameEn: string;
  slug: string;
  category: 'exterior' | 'interior' | 'engine' | 'accessories' | 'bundles';
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  stock: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  shortDescKm: string;
  shortDescEn: string;
  descriptionKm: string;
  descriptionEn: string;
  featuresKm: string[];
  featuresEn: string[];
  usageStepsKm: { step: number; title: string; desc: string }[];
  usageStepsEn: { step: number; title: string; desc: string }[];
  importantNoteKm?: string;
  importantNoteEn?: string;
  variants?: ProductVariant[];
  tags: string[];
  applicableVehicles?: string[];
}

export interface BundleItem {
  productId: string;
  productNameKm: string;
  productNameEn: string;
  quantity: number;
  image: string;
}

export interface ProductBundle {
  id: string;
  nameKm: string;
  nameEn: string;
  descriptionKm: string;
  descriptionEn: string;
  price: number;
  originalPrice: number;
  savePercent: number;
  image: string;
  items: BundleItem[];
  badgeKm: string;
  badgeEn: string;
  isPopular?: boolean;
}

export interface CartItem {
  product: Product;
  selectedVariant?: ProductVariant;
  quantity: number;
}

export interface OrderCustomer {
  fullName: string;
  phone: string;
  email?: string;
  country: string;
  cityProvince: string;
  districtKhan: string;
  address: string;
  notes?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  discountCode?: string;
  total: number;
  totalKhr: number;
  customer: OrderCustomer;
  paymentMethod: 'khqr' | 'cod' | 'aba' | 'paypal';
  paymentStatus: 'pending' | 'paid';
  orderStatus: 'confirmed' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  estimatedDelivery: string;
  trackingNumber?: string;
}
