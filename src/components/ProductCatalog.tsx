import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from './ProductCard';
import { 
  Filter, 
  SlidersHorizontal, 
  Search, 
  Layers, 
  Flame, 
  Sparkles,
  ArrowUpDown
} from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const { 
    products, 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery,
    language 
  } = useShop();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = [
    { id: 'all', labelKm: 'ទាំងអស់', labelEn: 'All Products', icon: '✨' },
    { id: 'exterior', labelKm: 'ថែទាំខាងក្រៅ', labelEn: 'Exterior Care', icon: '🚗' },
    { id: 'interior', labelKm: 'ថែទាំខាងក្នុង', labelEn: 'Interior Care', icon: '💺' },
    { id: 'engine', labelKm: 'ម៉ាស៊ីន & ច្រវាក់', labelEn: 'Engine & Chain', icon: '⚙️' },
    { id: 'accessories', labelKm: 'ឧបករណ៍ & កន្សែង', labelEn: 'Accessories', icon: '🧽' }
  ];

  // Filter products
  let filtered = products.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = !searchQuery.trim() || 
      p.nameKm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesSearch;
  });

  // Sort
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section id="catalog-section" className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Category Pills & Filters Top Bar */}
      <div className="space-y-3 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
              {language === 'km' ? 'ផលិតផលថែទាំយានយន្តទាំងអស់' : 'All Car & Moto Care Supplies'}
            </h2>
            <p className="text-[11px] text-slate-500">
              {language === 'km' 
                ? `បង្ហាញទំនិញចំនួន ${filtered.length} មុខ` 
                : `Showing ${filtered.length} high-grade detailing products`}
            </p>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
              <ArrowUpDown className="w-3 h-3" />
              {language === 'km' ? 'តម្រៀប៖' : 'Sort:'}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-bold text-slate-800 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 outline-none focus:border-amber-500 shadow-xs cursor-pointer"
            >
              <option value="featured">{language === 'km' ? 'ពេញនិយមបំផុត (Popular)' : 'Featured'}</option>
              <option value="price-asc">{language === 'km' ? 'តម្លៃទាបទៅខ្ពស់' : 'Price: Low to High'}</option>
              <option value="price-desc">{language === 'km' ? 'តម្លៃខ្ពស់ទៅទាប' : 'Price: High to Low'}</option>
              <option value="rating">{language === 'km' ? 'ពិន្ទុវាយតម្លៃខ្ពស់' : 'Top Customer Rating'}</option>
            </select>
          </div>
        </div>

        {/* Category Buttons Row */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 slim-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{language === 'km' ? cat.labelKm : cat.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Product Cards Grid - High Density Responsive Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl p-10 text-center border border-slate-200 space-y-2.5">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-xl">
            🔍
          </div>
          <h3 className="text-sm font-bold text-slate-800">
            {language === 'km' ? 'រកមិនឃើញផលិតផលដែលត្រូវនឹងការស្វែងរកទេ' : 'No matching products found'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {language === 'km' 
              ? 'សូមសាកល្បងស្វែងរកដោយប្រើពាក្យគន្លឹះផ្សេង ឬចុចមើលគ្រប់ប្រភេទផលិតផល' 
              : 'Try clearing your search query or switching categories.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="bg-slate-900 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg mt-2 hover:bg-slate-800"
          >
            {language === 'km' ? 'បង្ហាញផលិតផលទាំងអស់' : 'Show All Products'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </section>
  );
};
