import React from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Truck, 
  ShieldCheck, 
  HelpCircle, 
  Send, 
  Facebook, 
  Mail, 
  Sparkles,
  QrCode,
  CreditCard
} from 'lucide-react';
import { KHMER_DEPOT_LOGO } from '../data/mockProducts';

export const Footer: React.FC = () => {
  const { language, setActiveTab, setSelectedCategory, setIsAiAdvisorOpen } = useShop();

  return (
    <footer id="site-footer" className="bg-slate-950 text-white pt-8 pb-20 md:pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Col 1 & 2: Brand Story & Cambodia Address */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 bg-white rounded-lg p-0.5 flex items-center justify-center">
                <img 
                  src={KHMER_DEPOT_LOGO} 
                  alt="Khmer Depot Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-sm font-black text-white">ខ្មែរដេប៉ូ Khmer Depot</span>
                <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Cambodia Detailing Supply</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-normal">
              {language === 'km' 
                ? 'ហាងផ្គត់ផ្គង់ផលិតផលលាងសម្អាត និងថែទាំរថយន្ត ម៉ូតូ លំដាប់អាជីពដំបូងគេនៅកម្ពុជា។ ផ្តោតសំខាន់លើបច្ចេកវិទ្យា Touchless មិនបាច់ដុសខាត់ ថែរក្សាពណ៌ថ្នាំរថយន្តឱ្យនៅថ្មីរហូត។' 
                : 'Cambodia’s premier touchless car wash & motorcycle detailing store. High-performance formulas engineered for tropical climate and daily protection.'}
            </p>

            <div className="space-y-1.5 text-xs text-slate-300 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  {language === 'km' 
                    ? 'ដេប៉ូស្តុក៖ ផ្ទះលេខ ១២៨ ផ្លូវ ២៧១ សង្កាត់ផ្សារដេប៉ូ ១ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ' 
                    : 'Depot: #128, St. 271, Sangkat Phsar Depot 1, Khan Toul Kork, Phnom Penh'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-slate-400">012 345 678 / 098 765 432 (Hotline)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-slate-400">
                  {language === 'km' 
                    ? 'បើកលក់រៀងរាល់ថ្ងៃ៖ ម៉ោង 7:30 ព្រឹក - 8:00 យប់' 
                    : 'Open Daily: 7:30 AM - 8:00 PM'}
                </span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-black text-slate-300 uppercase tracking-wider">
              {language === 'km' ? 'ទំព័រចម្បង' : 'Navigation'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors">
                  {language === 'km' ? 'ទំព័រដើម (Home)' : 'Home'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('catalog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors">
                  {language === 'km' ? 'ផលិតផលទាំងអស់' : 'Catalog'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('bundles'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors">
                  {language === 'km' ? 'ឈុតមហាសន្សំ (Combos)' : 'Deals & Bundles'}
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('guide'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors">
                  {language === 'km' ? 'របៀបប្រើប្រាស់' : 'Detailing Guide'}
                </button>
              </li>
              <li>
                <button onClick={() => setIsAiAdvisorOpen(true)} className="hover:text-amber-300 transition-colors text-amber-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{language === 'km' ? 'ជំនួយការ AI' : 'AI Advisor'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Categories */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-black text-slate-300 uppercase tracking-wider">
              {language === 'km' ? 'ប្រភេទផលិតផល' : 'Categories'}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <button onClick={() => { setSelectedCategory('exterior'); setActiveTab('catalog'); }} className="hover:text-amber-400 transition-colors">
                  {language === 'km' ? 'ម្សៅលាងឡាន Touchless' : 'Touchless Wash Powder'}
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('accessories'); setActiveTab('catalog'); }} className="hover:text-amber-400 transition-colors">
                  {language === 'km' ? 'កាំភ្លើងបាញ់ពពុះស្ពាន់សុទ្ធ' : 'Pro Snow Foam Cannon'}
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('interior'); setActiveTab('catalog'); }} className="hover:text-amber-400 transition-colors">
                  {language === 'km' ? 'ស្ព្រៃយ៍ពពុះលាងខាងក្នុង V-MAFA' : 'V-MAFA Interior Foam'}
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('exterior'); setActiveTab('catalog'); }} className="hover:text-amber-400 transition-colors">
                  {language === 'km' ? 'ទឹកបាញ់កញ្ចក់ OPS' : 'OPS Glass Cleaner'}
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('engine'); setActiveTab('catalog'); }} className="hover:text-amber-400 transition-colors">
                  {language === 'km' ? 'ទឹកថ្នាំលាងម៉ាស៊ីន' : 'Engine Degreaser'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Social Channels & Telegram */}
          <div className="space-y-2.5">
            <h4 className="text-[11px] font-black text-slate-300 uppercase tracking-wider">
              {language === 'km' ? 'ទំនាក់ទំនង' : 'Connect'}
            </h4>
            <p className="text-xs text-slate-400">
              {language === 'km' ? 'ផ្ញើសារមកកាន់យើងខ្ញុំសម្រាប់ដំបូន្មានបច្ចេកទេសលាងសម្អាត!' : 'Contact us for free car care advice!'}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://t.me/khmerdepot_official"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-colors"
                title="Telegram Channel"
              >
                <Send className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
                title="Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:contact@khmerdepot.com"
                className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-slate-700 transition-colors"
                title="Email Us"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Payment Partners & Shipping Carriers */}
        <div className="pt-4 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-slate-300 text-[11px]">
              {language === 'km' ? 'វិធីទូទាត់ប្រាក់៖' : 'Payments:'}
            </span>
            <div className="flex items-center gap-1.5">
              <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px] font-bold text-slate-300">
                Bakong KHQR
              </span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px] font-bold text-slate-300">
                ABA PAY
              </span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px] font-bold text-slate-300">
                ACLEDA
              </span>
              <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px] font-bold text-slate-300">
                Cash on Delivery (COD)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-slate-400 text-xs">
            <span className="text-[11px]">{language === 'km' ? 'ដៃគូដឹកជញ្ជូន៖' : 'Delivery:'}</span>
            <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-300">VET Express</span>
            <span className="bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-[10px] text-slate-300">Grab</span>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-[11px] text-slate-500 pt-3 border-t border-slate-900">
          <p>© {new Date().getFullYear()} Khmer Depot (ខ្មែរដេប៉ូ) - All Rights Reserved. Designed for Cambodia.</p>
        </div>

      </div>
    </footer>
  );
};
