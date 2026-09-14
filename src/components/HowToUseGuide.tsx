import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Play, 
  CheckCircle2, 
  Calculator, 
  Droplets, 
  Sparkles, 
  AlertTriangle,
  Lightbulb,
  Check
} from 'lucide-react';

export const HowToUseGuide: React.FC = () => {
  const { language } = useShop();

  // Dosage calculator state
  const [bottleCapacity, setBottleCapacity] = useState<number>(1000); // ml
  const [dirtLevel, setDirtLevel] = useState<'light' | 'medium' | 'heavy'>('medium');

  // Calculation formula
  const getPowderGrams = () => {
    const factor = dirtLevel === 'light' ? 0.03 : dirtLevel === 'medium' ? 0.045 : 0.06;
    return Math.round(bottleCapacity * factor);
  };

  const getScoops = () => {
    const grams = getPowderGrams();
    return (grams / 15).toFixed(1);
  };

  return (
    <section id="guide-section" className="py-8 sm:py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-3 border-b border-slate-200 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-slate-900 border border-amber-500/20 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{language === 'km' ? 'មគ្គុទ្ទេសក៍បច្ចេកទេស' : 'Detailing Mastery Guide'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {language === 'km' ? 'របៀបលាង និងថែទាំយានយន្តកម្រិតអាជីព' : 'Step-by-Step Detailing Tutorials'}
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-md">
            {language === 'km' 
              ? 'រៀនពីវិធីសាស្ត្រលាង Touchless និងការថែទាំត្រឹមត្រូវ ដើម្បីរក្សាសម្រស់រថយន្តដូចទើបចេញពីរោងចក្រ' 
              : 'Master touchless washing techniques, precise ratios, and paint preservation.'}
          </p>
        </div>

        {/* 1. Touchless 3-Step Process */}
        <div className="bg-slate-900 text-white rounded-xl p-5 sm:p-7 border border-slate-800 shadow-md relative overflow-hidden">
          <div className="max-w-2xl space-y-1 mb-6">
            <span className="text-[10px] font-black text-amber-400 tracking-widest uppercase">
              {language === 'km' ? 'រូបមន្តលាង Touchless លេខ ១' : '3-STEP TOUCHLESS WORKFLOW'}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">
              {language === 'km' ? 'លាងស្អាតភ្លឺចែងចាំង ត្រឹមតែ ៣ ជំហានងាយៗ' : 'Showroom Finish in 3 Frictionless Steps'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Step 1 */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center mb-3">
                1
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                {language === 'km' ? 'លាយម្សៅ Touchless' : 'Mix Touchless Solution'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {language === 'km' 
                  ? 'ដួសម្សៅ 2-3 ស្លាបព្រា (ប្រហែល 40g) ដាក់ក្នុងដបកាំភ្លើងបាញ់ពពុះ រួចចាក់ទឹកស្អាត 1 លីត្រ អង្រួនឱ្យរលាយចូលគ្នាល្អ។' 
                  : 'Add 2-3 scoops (~40g) of Touchless Powder into the 1L foam cannon bottle with water and shake well.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center mb-3">
                2
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                {language === 'km' ? 'បាញ់ពពុះគ្របដណ្តប់' : 'Blanket Snow Foam'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {language === 'km' 
                  ? 'បាញ់ពពុះឱ្យសព្វលើតួឡានដែលស្ងួត (កុំបាញ់ទឹកជាមុន) ទុកចោល 3-5 នាទី ដើម្បីឱ្យពពុះសកម្មបំបែកដីក្អែល និងខ្លាញ់។' 
                  : 'Spray thick foam over DRY vehicle (do not pre-rinse). Dwell 3-5 mins as active agents dissolve mud and grease.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center mb-3">
                3
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">
                {language === 'km' ? 'បាញ់ទឹកសម្ពាធខ្ពស់' : 'High-Pressure Rinse'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {language === 'km' 
                  ? 'ប្រើម៉ាស៊ីនបាញ់ទឹកសម្ពាធខ្ពស់ បាញ់លាងពីក្រោមឡើងលើ រួចជូតទឹកដែលសល់ដោយកន្សែង Microfiber 800GSM។' 
                  : 'Rinse with high pressure washer from bottom upwards. Dry residual water drops with 800GSM plush microfiber.'}
              </p>
            </div>

          </div>

          {/* Pro Tips Banner */}
          <div className="mt-5 p-3 bg-slate-800/90 rounded-lg border border-slate-700 flex items-start sm:items-center gap-2 text-xs text-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-amber-400">{language === 'km' ? 'ចំណាំបច្ចេកទេស៖' : 'Pro Tip:'}</strong>{' '}
              {language === 'km' 
                ? 'មិនត្រូវបាញ់ពពុះនៅក្រោមពន្លឺថ្ងៃក្តៅខ្លាំង ឬទុកឱ្យពពុះស្ងួតជាប់លើតួឡានឡើយ។' 
                : 'Never wash in direct midday sun or allow foam to dry onto paint.'}
            </span>
          </div>
        </div>

        {/* 2. Interactive Foam Cannon Mixing Calculator */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center gap-2 text-slate-900">
                <Calculator className="w-5 h-5 text-amber-600" />
                <h3 className="text-base sm:text-lg font-black">
                  {language === 'km' ? 'ម៉ាស៊ីនគណនាសមាមាត្រលាយម្សៅ (Dosage Calculator)' : 'Touchless Foam Mixing Ratio Calculator'}
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                {language === 'km' 
                  ? 'ជ្រើសរើសចំណុះដបកាំភ្លើង និងកម្រិតប្រឡាក់នៃឡាន/ម៉ូតូ ដើម្បីទទួលបានកម្រិតលាយម្សៅដែលត្រឹមត្រូវ និងសន្សំសំចៃបំផុត។' 
                  : 'Select your foam bottle volume and soil condition to calculate exact grams and scoops.'}
              </p>

              {/* Controls */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    {language === 'km' ? 'ចំណុះដបកាំភ្លើងពពុះ (Bottle Capacity):' : 'Foam Cannon Bottle Capacity:'}
                  </label>
                  <div className="flex gap-2">
                    {[500, 1000, 1500].map((ml) => (
                      <button
                        key={ml}
                        onClick={() => setBottleCapacity(ml)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          bottleCapacity === ml
                            ? 'bg-slate-900 text-white shadow-xs'
                            : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {ml >= 1000 ? `${ml / 1000} Liter` : `${ml} ml`}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    {language === 'km' ? 'កម្រិតប្រឡាក់របស់ឡាន (Dirt Level):' : 'Vehicle Soil Level:'}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setDirtLevel('light')}
                      className={`p-2 rounded-lg text-xs font-bold text-center border transition-all ${
                        dirtLevel === 'light'
                          ? 'border-amber-500 bg-amber-50 text-slate-950 font-black'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      {language === 'km' ? '✨ ធូលីស្រាល' : '✨ Light'}
                    </button>
                    <button
                      onClick={() => setDirtLevel('medium')}
                      className={`p-2 rounded-lg text-xs font-bold text-center border transition-all ${
                        dirtLevel === 'medium'
                          ? 'border-amber-500 bg-amber-50 text-slate-950 font-black'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      {language === 'km' ? '🚗 មធ្យម' : '🚗 Medium'}
                    </button>
                    <button
                      onClick={() => setDirtLevel('heavy')}
                      className={`p-2 rounded-lg text-xs font-bold text-center border transition-all ${
                        dirtLevel === 'heavy'
                          ? 'border-amber-500 bg-amber-50 text-slate-950 font-black'
                          : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      {language === 'km' ? '🌧️ ដីក្រហម' : '🌧️ Muddy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Box */}
            <div className="lg:col-span-6 bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-black text-amber-600 uppercase tracking-wider block">
                  {language === 'km' ? 'កម្រិតលាយដែលណែនាំ' : 'Recommended Ratio Formula'}
                </span>
                <div className="mt-2.5 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-[11px] text-slate-500 block">{language === 'km' ? 'បរិមាណម្សៅ Touchless' : 'Touchless Powder'}</span>
                    <span className="text-xl font-black text-slate-900 block mt-0.5">
                      {getPowderGrams()} g
                    </span>
                    <span className="text-[10px] text-slate-400">
                      (~{getScoops()} {language === 'km' ? 'ស្លាបព្រា' : 'scoops'})
                    </span>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <span className="text-[11px] text-slate-500 block">{language === 'km' ? 'បរិមាណទឹកស្អាត' : 'Clean Water'}</span>
                    <span className="text-xl font-black text-slate-900 block mt-0.5">
                      {bottleCapacity} ml
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold">
                      {language === 'km' ? 'ទឹកក្តៅឧណ្ហៗល្អបំផុត' : 'Warm water optimal'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  {language === 'km' 
                    ? `សមាមាត្រនេះបង្កើតបានពពុះ Snow Foam ក្រាស់ហាប់ និងលាងបានស្អាតល្អ!` 
                    : 'Optimal vertical foam adhesion for maximum dirt lift.'}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
