import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { 
  Sparkles, 
  X, 
  Send, 
  Car, 
  Bike, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  Lightbulb
} from 'lucide-react';

export const AiDetailingAdvisorModal: React.FC = () => {
  const {
    isAiAdvisorOpen,
    setIsAiAdvisorOpen,
    language,
    products,
    setSelectedProduct,
    addToCart
  } = useShop();

  const [vehicleType, setVehicleType] = useState('Sedan / SUV');
  const [problemQuery, setProblemQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [adviceResult, setAdviceResult] = useState<string | null>(null);
  const [recommendedIds, setRecommendedIds] = useState<string[]>([]);

  if (!isAiAdvisorOpen) return null;

  const quickQuestionsKm = [
    '🌧️ ឡានប្រឡាក់ដីឥដ្ឋក្រហមបន្ទាប់ពីភ្លៀង លាងយ៉ាងម៉េចកុំឲ្យឆ្កូត?',
    '👓 កញ្ចក់មុខស្រអាប់ចាំងភ្លើងពេលយប់ ជូតយ៉ាងម៉េចទើបថ្លា?',
    '⚙️ ច្រវាក់ម៉ូតូ និងម៉ាស៊ីនមានកំណកខ្លាញ់ខ្មៅ គួរលាងដោយរបៀបណា?',
    '💺 កៅអីស្បែកឡានមានស្នាមប្រឡាក់កាហ្វេ និងធូលី តើប្រើផលិតផលណា?'
  ];

  const quickQuestionsEn = [
    '🌧️ How to wash heavy road mud without scratching clear coat?',
    '👓 Windshield has oily traffic film causing night glare, how to clean?',
    '⚙️ Heavy black grease sludge on bike chain and engine bay?',
    '💺 Coffee and dirt stains on leather seats and headliner?'
  ];

  const questions = language === 'km' ? quickQuestionsKm : quickQuestionsEn;

  const handleAskAdvisor = async (promptText?: string) => {
    const textToAsk = promptText || problemQuery;
    if (!textToAsk.trim()) return;

    setIsLoading(true);
    setAdviceResult(null);

    try {
      const res = await fetch('/api/ai/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          problem: textToAsk,
          vehicleType,
          language
        })
      });

      const json = await res.json();
      if (json.success) {
        setAdviceResult(json.recommendation);
        setRecommendedIds(json.recommendedProducts || ['prod-touchless-powder', 'prod-foam-cannon']);
      }
    } catch (err) {
      console.warn('AI Advisor error fallback:', err);
      setAdviceResult(
        language === 'km'
          ? `🔍 **ការវិភាគបញ្ហា៖** សម្រាប់ស្ថានភាពដីក្អែល និងធូលីនៅកម្ពុជា ការដុសកន្សែងផ្ទាល់នឹងបណ្តាលឱ្យឆ្កូតថ្នាំ។

🛠️ **ដំណោះស្រាយពី Khmer Depot៖**
1. លាយ **ម្សៅ Touchless 1KG** ជាមួយទឹក 1L ក្នុង **កាំភ្លើងបាញ់ពពុះ Pro Foam Cannon**។
2. បាញ់ពពុះគ្របដណ្តប់តួឡានដែលស្ងួត ទុកចោល 3 នាទី។
3. បាញ់ទឹកសម្ពាធខ្ពស់លាងជម្រះ រួចជូតស្ងួតដោយកន្សែង Microfiber 800GSM។`
          : `🔍 **Diagnosis:** Heavy road film and dust can scratch paint if scrubbed directly with sponges.

🛠️ **Solution:**
1. Mix **Touchless Wash Powder** with water in your **Pro Foam Cannon**.
2. Spray thick snow foam on dry paint; dwell for 3 minutes.
3. High pressure rinse and dry with an 800GSM Plush Microfiber Towel.`
      );
      setRecommendedIds(['prod-touchless-powder', 'prod-foam-cannon']);
    } finally {
      setIsLoading(false);
    }
  };

  const recProductList = products.filter(p => recommendedIds.includes(p.id));

  return (
    <div id="ai-advisor-modal-backdrop" className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4">
      <div 
        id="ai-advisor-modal"
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-4 max-h-[92vh] flex flex-col border border-slate-200 animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-linear-to-r from-[#00294E] to-[#0A3D68] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-extrabold flex items-center gap-1.5">
                <span>{language === 'km' ? 'ជំនួយការ AI ពិគ្រោះយោបល់ថែទាំយានយន្ត' : 'AI Detailing Expert Advisor'}</span>
              </h2>
              <p className="text-[11px] text-slate-300">
                {language === 'km' ? 'ឆ្លើយតបរហ័ស ផ្តល់រូបមន្តលាង និងដំណោះស្រាយបញ្ហា' : 'Instant diagnostic & detailing formulas'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsAiAdvisorOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/20 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-5 flex-1">
          
          {/* Vehicle Selector */}
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-2">
              {language === 'km' ? 'ជ្រើសរើសប្រភេទយានយន្តរបស់អ្នក៖' : 'Select Vehicle Category:'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { labelKm: '🚗 រថយន្ត Sedan / SUV', labelEn: '🚗 Sedan / SUV', id: 'Sedan / SUV' },
                { labelKm: '🛻 ឡានភីកអាប់ (Pickup)', labelEn: '🛻 Pickup / 4x4', id: 'Pickup Truck' },
                { labelKm: '🏍️ ម៉ូតូធំ / ម៉ូតូតូច', labelEn: '🏍️ Motorcycle', id: 'Motorcycle' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setVehicleType(item.id)}
                  className={`p-2.5 rounded-xl text-xs font-bold text-center border transition-all ${
                    vehicleType === item.id
                      ? 'border-[#FF8928] bg-orange-50/50 text-[#00294E] ring-2 ring-[#FF8928]/20'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                  }`}
                >
                  {language === 'km' ? item.labelKm : item.labelEn}
                </button>
              ))}
            </div>
          </div>

          {/* Quick FAQ Pills */}
          <div>
            <label className="text-xs font-bold text-slate-700 block mb-2">
              {language === 'km' ? 'ឬចុចជ្រើសរើសសំណួរពេញនិយម៖' : 'Or Select Common Questions:'}
            </label>
            <div className="space-y-1.5">
              {questions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setProblemQuery(q);
                    handleAskAdvisor(q);
                  }}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50/60 border border-slate-200 hover:border-[#FF8928] text-xs text-slate-800 transition-colors flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{q}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF8928] shrink-0 ml-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 block">
              {language === 'km' ? 'ពិពណ៌នាអំពីបញ្ហាប្រឡាក់ ឬសំណួររបស់អ្នក៖' : 'Describe your car/bike condition or issue:'}
            </label>
            <div className="flex gap-2">
              <textarea
                rows={2}
                value={problemQuery}
                onChange={(e) => setProblemQuery(e.target.value)}
                placeholder={language === 'km' ? 'ឧទាហរណ៍៖ ឡានខ្ញុំប្រឡាក់ជ័រឈើ និងដីក្អែលច្រើន លាងរបៀបណា?' : 'e.g. How to remove water spots on matte paint?'}
                className="flex-1 text-xs p-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-[#FF8928] focus:bg-white resize-none"
              />
              <button
                disabled={isLoading || !problemQuery.trim()}
                onClick={() => handleAskAdvisor()}
                className="bg-[#FF8928] hover:bg-[#ff9a47] disabled:opacity-50 text-white px-5 rounded-xl flex items-center justify-center font-bold shadow-xs active:scale-95 transition-all"
              >
                {isLoading ? (
                  <Sparkles className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* AI Response Card */}
          {adviceResult && (
            <div className="p-5 bg-linear-to-br from-slate-50 to-blue-50/40 rounded-2xl border border-blue-100 space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center gap-2 text-[#00294E]">
                <Lightbulb className="w-4 h-4 text-[#FF8928]" />
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                  {language === 'km' ? 'ដំណោះស្រាយ និងការណែនាំពីអ្នកជំនាញ' : 'Expert Advice & Prescription'}
                </h4>
              </div>

              <div className="text-xs text-slate-800 leading-relaxed whitespace-pre-line">
                {adviceResult}
              </div>

              {/* Recommended Products Strip */}
              {recProductList.length > 0 && (
                <div className="pt-3 border-t border-slate-200/80">
                  <h5 className="text-xs font-bold text-slate-700 mb-2">
                    {language === 'km' ? 'ផលិតផល Khmer Depot ដែលត្រូវប្រើប្រាស់៖' : 'Prescribed Khmer Depot Products:'}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {recProductList.map((prod) => (
                      <div 
                        key={prod.id}
                        className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200 text-xs shadow-xs"
                      >
                        <div 
                          onClick={() => {
                            setIsAiAdvisorOpen(false);
                            setSelectedProduct(prod);
                          }}
                          className="flex items-center gap-2 cursor-pointer min-w-0"
                        >
                          <img 
                            src={prod.image} 
                            alt={prod.nameKm} 
                            className="w-10 h-10 object-contain bg-slate-50 rounded-lg p-1 shrink-0" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="min-w-0">
                            <span className="font-bold text-slate-800 block truncate">
                              {language === 'km' ? prod.nameKm : prod.nameEn}
                            </span>
                            <span className="text-[11px] font-extrabold text-[#00294E]">
                              ${prod.price.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => addToCart(prod, prod.variants?.[0], 1)}
                          className="bg-[#00294E] hover:bg-[#FF8928] text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-colors shrink-0 ml-2"
                        >
                          {language === 'km' ? 'ទិញ' : 'Add'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
