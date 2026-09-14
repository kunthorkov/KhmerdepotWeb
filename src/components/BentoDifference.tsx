import React from 'react';
import { useShop } from '../context/ShopContext';
import { 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Leaf, 
  CheckCircle2, 
  Zap, 
  Sun,
  Droplets,
  DollarSign
} from 'lucide-react';

export const BentoDifference: React.FC = () => {
  const { language, setActiveTab } = useShop();

  return (
    <section id="bento-difference" className="py-8 sm:py-10 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-slate-200 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-slate-900 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{language === 'km' ? 'គុណសម្បត្តិលេចធ្លោ' : 'The High-Density Advantage'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {language === 'km' ? 'ហេតុអ្វីជ្រើសរើស Khmer Depot?' : 'Why Cambodian Drivers Choose Us?'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            {language === 'km' 
              ? 'បច្ចេកវិទ្យាលាងសម្អាត Touchless ជួយថែរក្សាទឹកថ្នាំរថយន្ត និងម៉ូតូឱ្យនៅភ្លឺចែងចាំង 0% ឆ្កូត។' 
              : 'Engineered for tough tropical red dirt, heavy rain sludge, and zero paint marring.'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Bento Card 1: 0% Scratch Formula (Big Card) */}
          <div className="md:col-span-2 bg-slate-900 text-white p-5 sm:p-6 rounded-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between shadow-md">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-2.5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-amber-400 border border-white/15">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  0% MARRING & SCRATCH
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black leading-snug text-white">
                {language === 'km' ? 'បច្ចេកវិទ្យា Touchless មិនបាច់ដុសខាត់' : 'Touchless Wash Technology (0% Scratches)'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-lg font-normal">
                {language === 'km' 
                  ? 'ការដុសកន្សែងលើដីខ្សាច់ជាដើមហេតុចម្បងដែលនាំឲ្យឆ្កូតថ្នាំឡាន។ រូបមន្តពពុះ Touchless របស់ Khmer Depot បំបែកដីក្អែលពីខាងក្នុង ដោយគ្រាន់តែបាញ់ពពុះ រួចបាញ់ទឹកចេញ!' 
                  : 'Traditional hand washing with sponges rubs sand directly onto the clear coat. Touchless active foam dissolves grime chemically so it rinses off effortlessly.'}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between relative z-10 text-xs">
              <span className="text-slate-400 font-medium">
                {language === 'km' ? 'សុវត្ថិភាពសម្រាប់ថ្នាំ Ceramic & Wax' : 'Safe for Ceramic & Wax'}
              </span>
              <button 
                onClick={() => setActiveTab('guide')}
                className="font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                {language === 'km' ? 'មើលការណែនាំ' : 'View Guide'} →
              </button>
            </div>
          </div>

          {/* Bento Card 2: Save 70% Time */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                {language === 'km' ? 'ចំណេញពេល 70%' : 'Saves 70% Wash Time'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {language === 'km' 
                  ? 'លាងឡាន 1 គ្រឿងចំណាយពេលត្រឹម 10 នាទីប៉ុណ្ណោះ។ មិនបាច់ហត់ដុស!' 
                  : 'Wash your entire vehicle in under 10 minutes. Fast and efficient.'}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] font-black text-slate-900">
              ⚡ {language === 'km' ? '10 នាទីក្នុង 1 លើក' : '10 mins / wash'}
            </div>
          </div>

          {/* Bento Card 3: pH Balanced & Paint Safe */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center mb-3">
                <Leaf className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                {language === 'km' ? 'pH Balanced សុវត្ថិភាព' : 'pH Balanced Paint Safe'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {language === 'km' 
                  ? 'គ្មានជាតិអាស៊ីតកាត់ខ្លាំង មិនធ្វើឱ្យរបកថ្នាំ និងមិនរលាកដៃ។' 
                  : 'Zero aggressive acid. Gentle on clear coats, rubber seals and hands.'}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] font-black text-emerald-700">
              🌿 {language === 'km' ? 'សុវត្ថិភាពស្បែកដៃ 100%' : '100% Skin Safe'}
            </div>
          </div>

          {/* Bento Card 4: Ultra Economical */}
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 border border-sky-200/60 flex items-center justify-center mb-3">
                <DollarSign className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                {language === 'km' ? 'សន្សំសំចៃខ្ពស់' : 'Ultra Cost-Efficient'}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {language === 'km' 
                  ? 'ម្សៅ 1 គីឡូក្រាម លាងបានរហូតដល់ 30 ដង។ ចំណាយត្រឹមតែ ~$0.40/លើក!' 
                  : '1kg tub washes up to 30 cars. Under $0.40 per wash.'}
              </p>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 text-[11px] font-black text-slate-900">
              💰 {language === 'km' ? 'ត្រឹម ~$0.40 / លើក' : '~$0.40 / wash'}
            </div>
          </div>

          {/* Bento Card 5: Tropical Weather Proven */}
          <div className="md:col-span-2 lg:col-span-3 bg-white p-4 sm:p-5 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Sun className="w-4 h-4 text-amber-500" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  {language === 'km' ? 'រូបមន្តពិសេសសម្រាប់អាកាសធាតុក្តៅ និងដីក្រហមកម្ពុជា' : 'Formulated for Cambodian Roads & Tropical Mud'}
                </h4>
              </div>
              <p className="text-xs text-slate-500 max-w-xl">
                {language === 'km' 
                  ? 'លាងជ្រះបានយ៉ាងមានប្រសិទ្ធភាពនូវដីក្រហម ដីឥដ្ឋបន្ទាប់ពីភ្លៀង និងធូលីខ្សាច់ស្អិតជាប់កង់។' 
                  : 'Field-tested on provincial red dirt, road grime, and rain stains.'}
              </p>
            </div>

            <button
              onClick={() => setActiveTab('bundles')}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-xs whitespace-nowrap active:scale-95 transition-all shrink-0"
            >
              {language === 'km' ? 'ទស្សនាឈុតសន្សំ' : 'View Value Combos'}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
