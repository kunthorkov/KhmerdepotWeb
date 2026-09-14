import { Product, ProductBundle, ProductReview } from '../types';

export const KHMER_DEPOT_LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1V6kyU_roytel66AxU89LPWz3TKLGKmQDLYVT32zvDGAsryz5N8qOpYw9LtPOhqX41fRSY6Hv23Mg_kEBSBlvU5Cajc17776du3rN8H0UETqyAJzbtOLMuCR1F2-wfhuyyBQ2ZAYpMU7v4kSvkF6EmXNEmE9GJF_tcbgKXC_rUr7eANbLutj2eFOWNbWkYRWfgpKf7Hx8_3fF2r8rLxZqJzEWDtdXSo7FMBE4AoUUjuWU_VWQEQtT2kbGyJCLlLTAzejGu9NQTpgA';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-touchless-powder',
    sku: 'OPS-TP-1KG',
    nameKm: 'សាប៊ូលាងមិនបាច់ដុស (Touchless Wash Powder)',
    nameEn: 'Touchless Car Wash Powder (Heavy-Duty Formula)',
    slug: 'touchless-car-wash-powder',
    category: 'exterior',
    price: 7.99,
    originalPrice: 9.99,
    discountPercent:20,
    rating: 4.9,
    reviewsCount: 124,
    image: './KDepot product image/1.png',
    gallery: [
      './KDepot product image/1.png',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3sxy17SHt6FPAdDR6TLsFY6VdhvOfEbmNHIBN6W49C2t5F9rJEATIIfJOh2g4B1q34SyeSzEdd1VndfkkHxdFjqtD7Xr7SrVPDvKV6r7Fg7QOa8thGH06q1r8MqEa50mwQPADL5Jeoj4gCxXWrtkHBCZkPQjQ-LBVAUpswQR8bmhICOQcSr7DjWLCJAOZ4CokHVzPZc6PXpYVqXfnz0KCl-H2HLiQN9okGV7JjQNqnGUUiFBEUb-s',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlHKvm61StPCMRBJwjpXK14Hri8OrRrxCkWeqfeIQgomcpk0IHpnERkKfrvfXiXx5hdYLYq7U0ejV4vXJXiNQaaVSJ-fJqVeho_5ZaQxOIcoC7f0AnDSW7BCWPEpYKgWL_gpuYlFuMisurHhKh1tO1wAxeKpT6r6_n7xihB8l64U6vhmZ8SYfkOa5lN7rL19kohIn2onKX6mcA9xKAoDP7vWG4Yhv2EyQ39gbIYkRskHXnLKRMqDbI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLnYJF5r4Pr41YoPr8aVcBHHs8fuFWfxGzRTAmbtivX66nAM8JYoSg2lvFmHu7YtSJFFUibDgFTS1lgqryiEv05e5XUlaC8j-aM9jco4marogg6d1B4oPIRJ4AZcQ5k1IYQxBkGchhqa8717RZDJtgz32CRgiOY03alkJylBP9cqdlJVySLgUuPEYnvCFKbgLnXQSfktsaWbpdrskEz-GC8QdnphPo70wNz-gfvXtoqioe3iuPSyzI',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsysVs_nmq6kd7Ce5ab5G1mlmmpncQ-7Lqx-mPup22dxl9j2Ozp62bIH_PGAhhBLpxXjnVSWtbNmcKXraFGwhpKYQ7KdT7O7amBv28vbxAuJ1VYjsbKGQR9oDX4YjoVn1h2HmrRaXdfD7hsY0xFrc_sT-9xKY-E0o4k1w24uIBzVqrp58gBIvtxSjt_0NLEKt4HrXyFcLa2FePsaf6Vae3tBg97saE_hTatHVJAWCZP3Ic_4KwibLW'
    ],
    stock: 85,
    isBestSeller: true,
    isNew: false,
    shortDescKm: 'បច្ចេកវិទ្យាលាងសម្អាតជំនាន់ថ្មី លាងជ្រះដី ផេះ និងខ្លាញ់ ដោយមិនបាច់ដុស ចំណេញពេល ចំណេញកម្លាំង និងការពារពណ៌ថ្នាំឡាន។',
    shortDescEn: 'Next-generation touchless wash powder. Removes road film, dirt, and grease with zero scrubbing to protect paint from scratches.',
    descriptionKm: 'សាប៊ូលាងឡាន Touchless  គឺជាដំណោះស្រាយដ៏ល្អបំផុតសម្រាប់អ្នកដែលចង់លាងសម្អាតយានយន្តបានយ៉ាងឆាប់រហ័ស និងមានប្រសិទ្ធភាព ដោយមិនចាំបាច់ប្រើកម្លាំងដុសដែលនាំអោយឆ្កូតថ្នាំ។ បង្កើតឡើងដោយរូបមន្ត pH Balanced ដែលមានសុវត្ថិភាពបំផុតសម្រាប់ថ្នាំរថយន្ត ម៉ូតូ និងស្រទាប់ Ceramic Coating។',
    descriptionEn: 'The Touchless Car Wash Powder is the ultimate solution for vehicle owners who want showroom clean results fast without risking swirl marks or scratches from manual scrubbing. Formulated with pH-balanced active foam agents safe for all automotive paint types and ceramic coatings.',
    featuresKm: [
      'សម្អាតដីរឹងរូស: រូបមន្តពិសេសបំបែកម៉ូលេគុលដី ខ្លាញ់ និងផេះ ត្រឹមតែប៉ុន្មានវិនាទី។',
      'សុវត្ថិភាពសម្រាប់ថ្នាំឡាន: គ្មានសារធាតុគីមីកាត់ខ្លាំង (pH Balanced) មិនធ្វើឲ្យស្រអាប់ពណ៌ថ្នាំ ឬខូចស្រទាប់ការពារ (Wax/Coating)។',
      'សន្សំសំចៃខ្ពស់: ម្សៅ 1 គីឡូក្រាម អាចលាយទឹកបានច្រើន លាងឡានបានរហូតដល់ 60ទៅ70ដង។',
      'ពពុះក្រាស់ហាប់ (Snow Foam Effect): ជាប់លើតួឡានបានយូរ បំបែកភាពកខ្វក់បានជ្រៅនិងស្អាត។'
    ],
    featuresEn: [
      'Instant Dirt Breakdown: Breaks molecular bond of road grime and mud within 30-50 second.',
      'Paint-Safe & pH Balanced: Zero corrosive chemicals, preserves ceramic coating & wax layers.',
      'High Cost Efficiency: 1kg tub delivers up to 70 full washes.',
      'Thick Snow Foam: Clings tightly to vertical panels for effortless rinsing.'
    ],
    usageStepsKm: [
      { step: 1, title: 'លាយម្សៅ', desc: 'លាយម្សៅ 1-2 ស្លាបព្រា (ប្រហែល 30g-50g) ជាមួយទឹក 1 លីត្រ ក្នុងដបបាញ់ពពុះ (Foam Cannon)។' },
      { step: 2, title: 'បាញ់ពពុះ', desc: 'បាញ់ពពុះឲ្យសព្វលើតួឡាន/ម៉ូតូដែលស្ងួត (កុំឲ្យត្រូវកម្តៅថ្ងៃដោយផ្ទាល់) ហើយទុកចោល 1-2 នាទី។' },
      { step: 3, title: 'បាញ់ទឹកសម្អាត', desc: 'ប្រើម៉ាស៊ីនបាញ់ទឹកសម្ពាធខ្ពស់ បាញ់លាងសម្អាតពីក្រោមឡើងលើ រួចជូតឲ្យស្ងួតដោយកន្សែង Microfiber។' }
    ],
    usageStepsEn: [
      { step: 1, title: 'Mix Powder', desc: 'Add 1-2 scoops (~30g-50g) with 1 liter of clean water in your foam cannon bottle and shake well.' },
      { step: 2, title: 'Spray Thick Foam', desc: 'Cover the dry vehicle completely with snow foam. Let dwell for 1-2 minutes away from direct hot sunlight.' },
      { step: 3, title: 'High-Pressure Rinse', desc: 'Rinse thoroughly using a pressure washer from bottom to top, then dry with plush microfiber.' }
    ],
    importantNoteKm: 'មិនត្រូវទុកឲ្យពពុះស្ងួតជាប់លើតួឡានឡើយ។ គួរលាងសម្អាតនៅកន្លែងមានម្លប់ ឬពេលព្រឹក/ល្ងាច។',
    importantNoteEn: 'Do not allow foam to dry on vehicle surface. Always wash in the shade or during cooler times of day.',
    variants: [
      { id: 'v-500g', nameKm: 'កញ្ចប់ 500g', nameEn: '500g Tub', price: 7.99, originalPrice: 9.99, washesEstimate: 'លាងបាន ~30 ដង', inStock: true },
      { id: 'v-1kg', nameKm: '4 កញ្ចប់ស្មើ 2Kg (ពេញនិយម)', nameEn: '4 pack 2Kg (Best Value)', price: 30.00, originalPrice: 120.00, washesEstimate: 'លាងបាន ~120 ដង', inStock: true },
      { id: 'v-refill-1kg', nameKm: 'កញ្ចប់ធំ(1បេ) ', nameEn: 'One bag', price: 120.00, originalPrice: 130.00, washesEstimate: 'លាងបាន ~700 ដង', inStock: true }
    ],
    tags: ['touchless', 'powder', 'exterior', 'snow-foam', 'car-wash'],
    applicableVehicles: ['រថយន្តគ្រប់ប្រភេទ (Sedan, SUV, Truck)', 'ម៉ូតូធំ & ម៉ូតូតូច', 'កង់']
  },
  {
    id: 'prod-foam-cannon',
    sku: 'KD-PFC-01',
    nameKm: 'កំប៉ុងបាញ់ពពុះសាប៊ូ (Snow Foam Cannon)',
    nameEn: 'Professional Heavy-Duty Snow Foam Cannon KD-PFC-01',
    slug: 'pro-foam-cannon',
    category: 'accessories',
    price: 8.99,
    originalPrice: 15,
    discountPercent: 40,
    rating: 4.9,
    reviewsCount: 96,
    image: './KDepot product image/01.png',
    gallery: [
      './KDepot product image/01.png'
    ],
    stock: 40,
    isBestSeller: true,
    isNew: false,
    shortDescKm: 'ក្បាលបាញ់ពពុះកម្រិតអាជីព បាញ់ពពុះបានក្រាស់ហាប់ដូចព្រិល។',
    shortDescEn: 'Commercial grade snow foam lance. Generates thick shaving-cream foam with adjustable spray angle.',
    descriptionKm: 'កំប៉ុងបាញ់ពពុះ Khmer Depot Pro Foam Cannon ងាយស្រូលប្រើ ភ្ជាប់ជាមួយដបចំណុះ 2 លីត្រ មានរង្វាស់ច្បាស់លាស់។ អាចកែសម្រួលកម្រិតពពុះ និងមុំបាញ់បានតាមចិត្ត។',
    descriptionEn: 'Engineered for detailing perfection. Heavy-duty brass core withstands high pressure. 2L wide-mouth container with clear measurement marks.',
    featuresKm: [
      'ជ័រកម្រិតលេខ1: ធន់នឹងសម្ពាធខ្ពស់ និងប្រើប្រាស់បានយូរ',
      'ប៊ូតុងកែសម្រួលពពុះ: អាចសារ៉េកម្រិតពពុះក្រាស់ ឬរាវតាមតម្រូវការ',
      'ក្បាលបាញ់ចំនួន2: អាចផ្លាស់ប្ដូរបានតាមតម្រូវការ'
    ],
    featuresEn: [
      '100% Solid Brass Core: High wear resistance and chemical proof.',
      'Adjustable Foam Control Knob: Fine-tune foam thickness instantly.',
      '2 spray nozzles: interchangeable according to needs.'
    ],
    usageStepsKm: [
      { step: 1, title: 'ចាក់ទឹក', desc: 'ចាក់ទឹកចូលកំប៉ុងបាញ់ បើមានទឹកក្តៅឧណ្ហៗ កាន់តែល្អ។' },
      { step: 2, title: 'ចាក់សាប៊ូ/ម្សៅ', desc: 'ចាក់ម្សៅសាប៊ូតាមការណែនាំ ឫស្មាមប្រលាក់ជាក់ស្ដែង។' },
      { step: 3, title: 'សប់ខ្យល់', desc: 'សប់ខ្យល់អោយពេញ ដើម្បីទទួលបានពពុះស្អាត។' }
    ],
    usageStepsEn: [
      { step: 1, title: 'Fill water', desc: 'Pour water into the spray bottle; using lukewarm water is even better.' },
      { step: 2, title: 'Fill Powder', desc: 'Add detergent powder according to the instructions or the actual level of soiling.' },
      { step: 3, title: 'Pump air', desc: 'Inflate fully to get nice foam.' }
    ],
    tags: ['foam-cannon', 'lance', 'pressure-washer', 'accessories'],
    applicableVehicles: ['រថយន្ត', 'ម៉ូតូ', 'ឧបករណ៍លាង']
  },
  {
    id: 'prod-vmafa-foam',
    sku: 'VMF-FC-650',
    nameKm: 'ស្ព្រៃយ៍បាញ់សម្អាតខាងក្នុងទ្បាន V-MAFA (Multi-function Foam Cleaner)',
    nameEn: 'V-MAFA Multi-Functional Car Care Foam Cleaner 650ml',
    slug: 'v-mafa-foam-cleaner',
    category: 'interior',
    price: 5.50,
    originalPrice: 9.50,
    discountPercent: 42,
    rating: 4.8,
    reviewsCount: 150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5GbMRT9WCtQX3gpXs3hPRDJu8yIAd2speCkTecUlSZdi_zHsAEDVgORPxZ4Qv3QfxiC5vzvaRbxxSxFYK1LqvhM373R-5coVYAJoytD4TynaTV1KtuX442lbBkCMwuI1x_WpOaXk9s8-yOmAh-CsdRFtzCjLdOreBSB8m7_WupFXua8a6Stxq7FjkEYBPCDMS8ICRGV8Rvqge-d90U7_RQ12utvcM3ta-5qxpjU9vi3kJubh1roEQsAaQTn6XinjylA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA5GbMRT9WCtQX3gpXs3hPRDJu8yIAd2speCkTecUlSZdi_zHsAEDVgORPxZ4Qv3QfxiC5vzvaRbxxSxFYK1LqvhM373R-5coVYAJoytD4TynaTV1KtuX442lbBkCMwuI1x_WpOaXk9s8-yOmAh-CsdRFtzCjLdOreBSB8m7_WupFXua8a6Stxq7FjkEYBPCDMS8ICRGV8Rvqge-d90U7_RQ12utvcM3ta-5qxpjU9vi3kJubh1roEQsAaQTn6XinjylA'
    ],
    stock: 120,
    isBestSeller: true,
    isNew: false,
    shortDescKm: 'ស្ព្រៃយ៍ពពុះលាងសម្អាតកៅអីស្បែក កៅអីក្រណាត់ តាបឡូ និងពិដានឡាន។ ជ្រះស្នាមប្រឡាក់លឿន ក្លិនក្រអូបស្រស់ស្រាយ។',
    shortDescEn: 'Deep cleaning active foam aerosol for leather, fabric seats, dashboard, headliner, and door panels. Removes stains instantly.',
    descriptionKm: 'V-MAFA Car Care Multifunctional Foam Cleaner ជាជម្រើសលេខមួយសម្រាប់សម្អាតផ្នែកខាងក្នុងរថយន្ត និងគេហដ្ឋាន។ បំបាត់ស្នាមប្រឡាក់តែ កាហ្វេ ខ្លាញ់ និងស្នាមជើងលើពូក និងពិដានឡានដោយមិនធ្វើឱ្យខូចស្បែក ឬសរសៃក្រណាត់។',
    descriptionEn: 'V-MAFA Multi-function active foam penetrates fibers and textured plastics to dissolve ingrained dirt, food residues, and smoke films. Restores fresh factory look.',
    featuresKm: [
      'សម្អាតបានច្រើនប្រភេទ: កៅអីស្បែក កៅអីក្រណាត់ ពិដានឡាន និងតាបឡូ',
      'មានក្បាលជក់ស្រាប់លើគម្រប: ងាយស្រួលដុសត្រង់កន្លែងប្រឡាក់ខ្លាំង',
      'បំបាត់ក្លិនអាក្រក់ និងផ្តល់ក្លិនក្រអូបស្រាល'
    ],
    featuresEn: [
      'Versatile: Perfect for leather, upholstery, vinyl, plastic and roof liners.',
      'Built-in Scrub Cap: Built-in brush cap for agitating stubborn stains.',
      'Odor Eliminator: Neutralizes stubborn odors with subtle clean scent.'
    ],
    usageStepsKm: [
      { step: 1, title: 'អង្រួនដប', desc: 'អង្រួនដបឱ្យសព្វមុនពេលបាញ់។' },
      { step: 2, title: 'បាញ់ពពុះ', desc: 'បាញ់ពពុះលើផ្ទៃដែលប្រឡាក់ក្នុងចម្ងាយប្រហែល 15-20 សង់ទីម៉ែត្រ។' },
      { step: 3, title: 'ដុស និងជូត', desc: 'ទុកចោល 30 វិនាទី រួចប្រើជក់ ឬកន្សែង Microfiber សើមជូតសម្អាតចេញ។' }
    ],
    usageStepsEn: [
      { step: 1, title: 'Shake Well', desc: 'Shake can vigorously before application.' },
      { step: 2, title: 'Spray Foam', desc: 'Spray evenly over soiled area from 15-20cm distance.' },
      { step: 3, title: 'Agitate & Wipe', desc: 'Wait 30 seconds, lightly brush if needed, and wipe clean with damp microfiber.' }
    ],
    tags: ['foam-cleaner', 'v-mafa', 'interior', 'leather', 'upholstery'],
    applicableVehicles: ['ផ្នែកខាងក្នុងឡាន', 'កៅអីម៉ូតូ', 'សាឡុងផ្ទះ']
  },
  {
    id: 'prod-oil-film-cleaner',
    sku: 'OPS-OFC-150',
    nameKm: 'ទឹកបាញ់សម្អាតស្រទាប់ខ្លាញ់លើកញ្ចក់ (Oil Film Glass Cleaner)',
    nameEn: 'OPS Oil Film Glass Cleaner 150ml - Crystal Clear Vision',
    slug: 'oil-film-glass-cleaner',
    category: 'exterior',
    price: 2.50,
    originalPrice: 4.99,
    discountPercent: 50,
    rating: 4.9,
    reviewsCount: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5j1BqVZ8AUO9-TFIk7RuVUp1KK6XOf3Oeqp6UOFeyw6eg9AHa-yIJgmTcnjQ5A9hHyZ_fuvHnhgPPQE8e_JUUP23FMhxw1bwlGb2M_XwAE0bQZwLYzPHXZCjICKxY_VuVPF47m6ZWeDm5Ls4pH560rpmQmJNIbrgayUFdxY2maOiuYQ0aOG2QWO2bco_QsmAQnDVrx7yHc-Tyf6Bab0RUTrG1J1np9rrK8jsr3peOfQNcQmCYTeDM75cCblREGFFbQA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5j1BqVZ8AUO9-TFIk7RuVUp1KK6XOf3Oeqp6UOFeyw6eg9AHa-yIJgmTcnjQ5A9hHyZ_fuvHnhgPPQE8e_JUUP23FMhxw1bwlGb2M_XwAE0bQZwLYzPHXZCjICKxY_VuVPF47m6ZWeDm5Ls4pH560rpmQmJNIbrgayUFdxY2maOiuYQ0aOG2QWO2bco_QsmAQnDVrx7yHc-Tyf6Bab0RUTrG1J1np9rrK8jsr3peOfQNcQmCYTeDM75cCblREGFFbQA'
    ],
    stock: 95,
    isBestSeller: true,
    isNew: false,
    shortDescKm: 'កម្ចាត់ស្រទាប់ខ្លាញ់ ស្នាមទឹកដក់ និងស្នាមព្រិលលើកញ្ចក់ឡាន ជួយឱ្យមើលផ្លូវច្បាស់ល្អ ពិសេសពេលបើកបរពេលយប់ និងពេលភ្លៀង។',
    shortDescEn: 'Removes stubborn windshield traffic film, wiper glare, and water spots for crystal clear vision in rain & night driving.',
    descriptionKm: 'ស្រទាប់ខ្លាញ់លើកញ្ចក់មុខបណ្តាលមកពីផ្សែងឡាន ធូលី និងជាតិខ្លាញ់ក្នុងបរិយាកាស ដែលបណ្តាលឱ្យកញ្ចក់ព្រិលពេលត្រូវពន្លឺភ្លើងឡានមកទល់មុខ ឬពេលភ្លៀង។ OPS Oil Film Glass Cleaner ជួយលាងសម្អាតស្រទាប់ខ្លាញ់នេះចេញយ៉ាងស្អាត 100%។',
    descriptionEn: 'Traffic film and exhaust oily residue create dangerous glare during rainy night drives. OPS Oil Film Glass Cleaner completely strips away oxidized films and mineral stains.',
    featuresKm: [
      'បំបាត់ពន្លឺចាំង និងព្រិលកញ្ចក់ពេលយប់',
      'ជួយឱ្យផ្លិតទឹកកញ្ចក់រលូន មិនឮសំឡេងកកិត ឬរលាក់',
      'បង្កើនសុវត្ថិភាពខ្ពស់ពេលបើកបរក្នុងពេលភ្លៀងធ្លាក់ខ្លាំង'
    ],
    featuresEn: [
      'Eliminates blinding headlight glare & wiper judder.',
      'Restores ultra-smooth surface for wiper blades.',
      'Dramatically improves night & rain driving safety.'
    ],
    usageStepsKm: [
      { step: 1, title: 'លាងកញ្ចក់', desc: 'លាងជម្រះធូលីខ្សាច់លើកញ្ចក់ជាមួយទឹកស្អាត។' },
      { step: 2, title: 'ចាក់ទឹកថ្នាំ', desc: 'ចាក់ទឹកថ្នាំលើអេប៉ុងជូត ឬកន្សែង រួចដុសលើកញ្ចក់ជារង្វង់ៗរហូតដល់អស់ស្រទាប់ខ្លាញ់។' },
      { step: 3, title: 'លាងទឹកចេញ', desc: 'បាញ់ទឹកលាងចេញឱ្យស្អាត។ កញ្ចក់នឹងថ្លាគ្មានតំណក់ទឹកដក់ឡើយ។' }
    ],
    usageStepsEn: [
      { step: 1, title: 'Clean Glass', desc: 'Rinse loose dust and dirt with clean water.' },
      { step: 2, title: 'Apply & Polish', desc: 'Apply cleaner to sponge pad and buff glass surface in circular motions.' },
      { step: 3, title: 'Rinse Off', desc: 'Rinse thoroughly with water. Water will sheet off evenly without beading film.' }
    ],
    tags: ['glass-cleaner', 'oil-film', 'windshield', 'night-vision', 'exterior'],
    applicableVehicles: ['កញ្ចក់រថយន្តគ្រប់ប្រភេទ', 'កញ្ចក់មួកការពារសុវត្ថិភាព', 'កញ្ចក់មើលក្រោយ']
  },
  {
    id: 'prod-detailing-brushes',
    sku: 'KD-BRUSH-2PC',
    nameKm: 'ឈុតច្រាសសម្អាតកង់ និងចន្លោះតូចៗ (Detailing Brushes Set)',
    nameEn: 'Ergonomic Wheel & Detailing Brushes (2-Piece Set)',
    slug: 'detailing-brushes',
    category: 'accessories',
    price: 4.99,
    originalPrice: 8.00,
    discountPercent: 38,
    rating: 4.8,
    reviewsCount: 85,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc7X-2ox6bZJHFAwbDRe0mcdNTkHFyrKOtf4j4_93O5wMQS62GebUYAtwIpFqppgNw40I015TdGdB81PKT_rmYDjw3FdX0I2zULePl0jCbYhum4V5nJ-tcpaG1KEYZNRpYIz1MlfQffPLd0APLcpbcudGV-RzbatOPAMToGYTrAeHpSUBDXrDYcKwsHzrP1iHkuiwxmjlHM2r2y3AKLlU-FXBNdRngD9N8vEFq0GOm2-rsx8VriCax4AELhhftYFQVjw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDc7X-2ox6bZJHFAwbDRe0mcdNTkHFyrKOtf4j4_93O5wMQS62GebUYAtwIpFqppgNw40I015TdGdB81PKT_rmYDjw3FdX0I2zULePl0jCbYhum4V5nJ-tcpaG1KEYZNRpYIz1MlfQffPLd0APLcpbcudGV-RzbatOPAMToGYTrAeHpSUBDXrDYcKwsHzrP1iHkuiwxmjlHM2r2y3AKLlU-FXBNdRngD9N8vEFq0GOm2-rsx8VriCax4AELhhftYFQVjw'
    ],
    stock: 140,
    isBestSeller: false,
    isNew: false,
    shortDescKm: 'រោមច្រាសទន់ស្វិត មិនឆ្កូតយ៉ាន់កង់ ឬតួឡាន។ ច្រាសវែងសម្រាប់លាងខាងក្នុងកង់ និងច្រាសខ្លីសម្រាប់សំបកកង់។',
    shortDescEn: 'Premium soft bristle wheel and tire brush set with ergonomic non-slip handle. Cleans brake dust without scratching rims.',
    descriptionKm: 'ឈុតច្រាស Detailing Brushes រួមមានច្រាសខ្លីសម្រាប់ដុសសំបកកង់ និងច្រាសរាងស៊ីឡាំងសម្រាប់លាងជ្រៅដល់ចន្លោះយ៉ាន់កង់ និងបូម។ ចំណុចទាញស្រោបកៅស៊ូមិនរអិលដៃ។',
    descriptionEn: 'Engineered for alloy wheels, brake calipers, lug nuts, and tire sidewalls. Chemical-resistant bristles agitate brake dust with ease.',
    featuresKm: [
      'រោមជ័រទន់ស្វិត ធន់នឹងជាតិសាប៊ូ និងប្រេង',
      'ដៃកាន់ស្រោបកៅស៊ូ Ergonomic ចាប់ណែនមិនរអិលដៃ',
      'សម្អាតបានជ្រៅដល់កន្លែងពិបាកលាងក្នុងយ៉ាន់កង់'
    ],
    featuresEn: [
      'Scratch-free chemical resistant bristles.',
      'Ergonomic ribbed non-slip rubber grip.',
      'Reaches deep into wheel barrels and behind spokes.'
    ],
    usageStepsKm: [
      { step: 1, title: 'បាញ់សាប៊ូ', desc: 'បាញ់សាប៊ូ ឬទឹកថ្នាំលាងកង់លើកង់ឡាន/ម៉ូតូ។' },
      { step: 2, title: 'ដុសលាង', desc: 'ប្រើច្រាសវែងរុកដុសចន្លោះយ៉ាន់ និងប្រើច្រាសខ្លីដុសសំបកកង់។' },
      { step: 3, title: 'បាញ់ទឹក', desc: 'បាញ់ទឹកលាងចេញឱ្យស្អាត។' }
    ],
    usageStepsEn: [
      { step: 1, title: 'Apply Cleaner', desc: 'Spray wheel cleaner or foam over wheels.' },
      { step: 2, title: 'Agitate', desc: 'Use long barrel brush for inner rims and curved brush for tire treads.' },
      { step: 3, title: 'Rinse', desc: 'Rinse away loosened brake dust with high pressure water.' }
    ],
    tags: ['brushes', 'wheel', 'rims', 'tires', 'accessories'],
    applicableVehicles: ['យ៉ាន់កង់រថយន្ត', 'យ៉ាន់ម៉ូតូ & ច្រវាក់', 'កង់']
  },
  {
    id: 'prod-microfiber-towel',
    sku: 'KD-MFT-800',
    nameKm: 'កន្សែង Microfiber ក្រាស់ទន់គុណភាពខ្ពស់ (Plush Drying Towel)',
    nameEn: 'Ultra-Plush 800GSM Edgeless Microfiber Drying Towel',
    slug: 'microfiber-towel',
    category: 'accessories',
    price: 3.00,
    originalPrice: 6.99,
    discountPercent: 57,
    rating: 5.0,
    reviewsCount: 210,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCscAmgaMN8LmiKK4iaEskvZiI8E6EnEsj9e19mcrdvrUDMah1cMYGyoP5aDQN6xh4edw36lY7bvYAgbvEwfba7SbgVV-YxEJUJk-Lz2rMUGUqzyvs4RurQKVDJkmVljoEqIXEm80cpjDmN7s8mLWqycHJCtvvLHB1NVPWO2gBV0cepA_EKZkzCST3CFEn73iDlq2zIcdTjKVvr2wBh6Gxgs2U1hNJoGTVPFySd7csaAYqFTG9oxyFPEonem1oenZL4Jw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCscAmgaMN8LmiKK4iaEskvZiI8E6EnEsj9e19mcrdvrUDMah1cMYGyoP5aDQN6xh4edw36lY7bvYAgbvEwfba7SbgVV-YxEJUJk-Lz2rMUGUqzyvs4RurQKVDJkmVljoEqIXEm80cpjDmN7s8mLWqycHJCtvvLHB1NVPWO2gBV0cepA_EKZkzCST3CFEn73iDlq2zIcdTjKVvr2wBh6Gxgs2U1hNJoGTVPFySd7csaAYqFTG9oxyFPEonem1oenZL4Jw'
    ],
    stock: 250,
    isBestSeller: true,
    isNew: false,
    shortDescKm: 'កម្រាស់ 800GSM ស្រូបទឹកបានលឿនដូចអេប៉ុង មិនជ្រុះរោម មិនឆ្កូតថ្នាំឡាន។',
    shortDescEn: 'Ultra-absorbent 800GSM twisted loop microfiber. Soaks up water instantly without scratching or leaving lint.',
    descriptionKm: 'កន្សែង Microfiber កម្រាស់ក្រាស់ពិសេស 800GSM ផលិតពីសរសៃអំបោះទន់រលោង ស្រូបទឹកបានលើសទម្ងន់ខ្លួនវាដល់ទៅ 8 ដង។ ជូតតែមួយភ្លែតស្ងួតភ្លឹង គ្មានស្នាមឆ្កូត។',
    descriptionEn: 'Crafted from premium 70/30 polyester-polyamide blend. The dense plush pile lifts residual moisture and dust away from paint safely.',
    featuresKm: [
      'កម្រាស់ក្រាស់ 800GSM ស្រូបទឹកលឿនអស្ចារ្យ',
      'រចនាគ្មានគែមរឹង (Edgeless) ការពារការឆ្កូត 100%',
      'បោកគក់ប្រើឡើងវិញបានរាប់រយដង មិនរឹង'
    ],
    featuresEn: [
      '800GSM high density plush for instant water absorption.',
      'Laser-cut edgeless design to prevent micro-marring.',
      'Machine washable, retains softness over hundreds of washes.'
    ],
    usageStepsKm: [
      { step: 1, title: 'លាតកន្សែង', desc: 'លាតកន្សែងដាក់លើផ្ទៃសើមនៃតួឡាន។' },
      { step: 2, title: 'ទាញជូតថ្នមៗ', desc: 'ទាញកន្សែងមួយចំហៀងមក ទឹកនឹងត្រូវបានស្រូបយកទាំងស្រុង។' }
    ],
    usageStepsEn: [
      { step: 1, title: 'Lay Flat', desc: 'Spread towel flat across wet panels.' },
      { step: 2, title: 'Glide & Dry', desc: 'Gently pull towel across surface without heavy pressure.' }
    ],
    variants: [
      { id: 'v-1pc', nameKm: 'កន្សែង 1 ផ្ទាំង (40x60cm)', nameEn: '1 Piece (40x60cm)', price: 3.00, originalPrice: 6.00, inStock: true },
      { id: 'v-3pack', nameKm: 'ឈុត 3 ផ្ទាំង (សន្សំ 20%)', nameEn: '3-Pack Set (Save 20%)', price: 7.50, originalPrice: 15.00, inStock: true },
      { id: 'v-6pack', nameKm: 'ឈុត 6 ផ្ទាំង Pro Set', nameEn: '6-Pack Pro Box', price: 14.00, originalPrice: 28.00, inStock: true }
    ],
    tags: ['microfiber', 'towel', 'drying', 'accessories'],
    applicableVehicles: ['រថយន្តគ្រប់ប្រភេទ', 'ម៉ូតូ', 'ឧបករណ៍កញ្ចក់']
  },
  {
    id: 'prod-degreaser',
    sku: 'KD-EDG-1L',
    nameKm: 'ទឹកថ្នាំលាងម៉ាស៊ីន និងច្រវាក់ម៉ូតូ (Heavy Duty Engine Degreaser)',
    nameEn: 'Heavy Duty Engine & Chain Degreaser Pro 1L',
    slug: 'heavy-duty-degreaser-pro',
    category: 'engine',
    price: 28.50,
    originalPrice: 35.00,
    discountPercent: 19,
    rating: 4.8,
    reviewsCount: 128,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1cwxH-yqWGxVSXsNM2uqihGOWLqQNgB0LYbowHGzoylqyjZ5LsFO_kh5l5-7UBy3McsyVgfSt5_sFJf4pxfqe5eqYfGh00DwRFCGMQSNS7UmKMXceDViAgIJrWp4THWBKPHlKRTxp6Dq1Dm613MHo_55ZiWOfXuoEkwf_vbUlPxcxXYrMaymhfWEgvV7bBWrYQ0u87NM9wdY6y373rk7GmHzhopGJEoN7M2GzN0Pf6pp4iGZcsejF',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1cwxH-yqWGxVSXsNM2uqihGOWLqQNgB0LYbowHGzoylqyjZ5LsFO_kh5l5-7UBy3McsyVgfSt5_sFJf4pxfqe5eqYfGh00DwRFCGMQSNS7UmKMXceDViAgIJrWp4THWBKPHlKRTxp6Dq1Dm613MHo_55ZiWOfXuoEkwf_vbUlPxcxXYrMaymhfWEgvV7bBWrYQ0u87NM9wdY6y373rk7GmHzhopGJEoN7M2GzN0Pf6pp4iGZcsejF'
    ],
    stock: 55,
    isBestSeller: true,
    isNew: false,
    shortDescKm: 'កម្ចាត់ស្នាមខ្លាញ់ ធូលីកកស្ទះក្នុងបន្ទប់ម៉ាស៊ីន និងច្រវាក់ម៉ូតូយ៉ាងរហ័ស មិនប៉ះពាល់ទុយោកៅស៊ូ និងខ្សែភ្លើង។',
    shortDescEn: 'Commercial strength formula breaks down baked-on engine grease, road grime, and motorcycle chain sludge safely.',
    descriptionKm: 'Heavy Duty Engine Degreaser Pro រចនាឡើងជាពិសេសសម្រាប់បំបែកកំណកប្រេងម៉ាស៊ីន ខ្លាញ់គោ និងធូលីខ្មៅដែលជាប់យូរឆ្នាំក្នុងបន្ទប់ម៉ាស៊ីនរថយន្ត និងច្រវាក់ម៉ូតូ។ រូបមន្តទឹកសុវត្ថិភាពមិនបង្កច្រែះ។',
    descriptionEn: 'Rapidly emulsifies grease, oils, and road sludge in engine compartments and motorcycle undercarriages. Safe on rubber hoses, wiring insulation, and aluminum.',
    featuresKm: [
      'បំបែកកំណកខ្លាញ់ម៉ាស៊ីនរឹងរូសបានលឿនក្នុង 3 នាទី',
      'សុវត្ថិភាពសម្រាប់ទុយោកៅស៊ូ ជ័រ និងខ្សែភ្លើង',
      'លាងទឹកចេញបានយ៉ាងងាយ គ្មានសំណល់ខ្លាញ់រអិល'
    ],
    featuresEn: [
      'Dissolves heavy baked grease and chain grime rapidly.',
      'Safe for engine bay plastics, rubber hoses, and wiring.',
      'Water-soluble formula rinses 100% clean.'
    ],
    usageStepsKm: [
      { step: 1, title: 'បាញ់ទឹកថ្នាំ', desc: 'បាញ់ទឹកថ្នាំលើផ្នែកម៉ាស៊ីនដែលត្រជាក់ ឬច្រវាក់ម៉ូតូ។' },
      { step: 2, title: 'ទុកចោល 3-5 នាទី', desc: 'ទុកឱ្យទឹកថ្នាំបំបែកជាតិខ្លាញ់ រួចប្រើច្រាសដុសបន្ថែមបើប្រឡាក់ខ្លាំង។' },
      { step: 3, title: 'លាងទឹក', desc: 'បាញ់ទឹកលាងសម្អាតចេញ រួចជូត ឬផ្លុំខ្យល់ឱ្យស្ងួត។' }
    ],
    usageStepsEn: [
      { step: 1, title: 'Apply on Cool Engine', desc: 'Spray generously over cool engine bay or chain components.' },
      { step: 2, title: 'Dwell & Agitate', desc: 'Let dwell for 3-5 mins. Agitate heavy accumulation with brush.' },
      { step: 3, title: 'Rinse Off', desc: 'Rinse with light water spray and blow dry.' }
    ],
    tags: ['degreaser', 'engine', 'chain', 'motorcycle', 'heavy-duty'],
    applicableVehicles: ['បន្ទប់ម៉ាស៊ីនឡាន', 'ច្រវាក់ & ម៉ាស៊ីនម៉ូតូ', 'គ្រឿងចក្រ']
  },
  {
    id: 'prod-carnauba-wax',
    sku: 'KD-CWX-200',
    nameKm: 'ក្រមួនប៉ូលាភ្លឺចែងចាំង (Ultimate Carnauba Show Wax)',
    nameEn: 'Ultimate Carnauba Showroom Wax & Protectant',
    slug: 'carnauba-show-wax',
    category: 'exterior',
    price: 45.00,
    originalPrice: 55.00,
    discountPercent: 18,
    rating: 5.0,
    reviewsCount: 84,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2S2T_eMzQRkkaTDL7z-CKNUAKH7khr6cF5EWBKnmNdOYr4yAmb4tg4zpnVc1TCpFXS8D70ND1c3XfLO8MQ0d7yYY6Z4MXEEo1Zi3oVzAqD2NotQtR5tC95ok1rn9Nnx7r-u2reaug3SSnhzF2nIFLYP5jzSJIUZAxzvZLHYk4PzbP5X7QplWj1MQMnwP5C-U88-Kiu0pOfmEjuK-qT7K9dJTmA3q20HRmzDu6LuVWX8JUARdPuqY-',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD2S2T_eMzQRkkaTDL7z-CKNUAKH7khr6cF5EWBKnmNdOYr4yAmb4tg4zpnVc1TCpFXS8D70ND1c3XfLO8MQ0d7yYY6Z4MXEEo1Zi3oVzAqD2NotQtR5tC95ok1rn9Nnx7r-u2reaug3SSnhzF2nIFLYP5jzSJIUZAxzvZLHYk4PzbP5X7QplWj1MQMnwP5C-U88-Kiu0pOfmEjuK-qT7K9dJTmA3q20HRmzDu6LuVWX8JUARdPuqY-'
    ],
    stock: 35,
    isBestSeller: false,
    isNew: false,
    shortDescKm: 'ចម្រាញ់ចេញពី Carnauba ប្រេស៊ីលសុទ្ធ ផ្តល់ពន្លឺចែងចាំងជ្រៅ (Wet Look) ការពារកម្តៅថ្ងៃ UV និងការពារទឹកដក់រហូតដល់ 3 ខែ។',
    shortDescEn: 'Pure Brazilian Grade-1 Carnauba paste wax. Delivers deep liquid reflection, intense hydrophobic water beading and UV shield.',
    descriptionKm: 'Ultimate Carnauba Show Wax គឺជាក្រមួនប៉ូលាលំដាប់កំពូលសម្រាប់អ្នកស្រឡាញ់ភាពភ្លឺរលោងនៃរថយន្ត និងម៉ូតូ។ ផ្តល់នូវស្រទាប់ការពារកម្តៅថ្ងៃដ៏ខ្លាំងក្លានៅស្រុកខ្មែរ និងការពារទឹកដក់បានយ៉ាងល្អឥតខ្ចោះ។ ថែមជូនអេប៉ុងលាបគុណភាពខ្ពស់ 1 ឥតគិតថ្លៃ។',
    descriptionEn: 'Handcrafted with pure Grade #1 Brazilian carnauba and synthetic polymers for the ultimate wet-look shine and durable UV protection in tropical climates.',
    featuresKm: [
      'ផ្តល់ពន្លឺជ្រៅចែងចាំងដូចកញ្ចក់ (Deep Wet Look)',
      'ការពារកម្តៅថ្ងៃ UV ការពារពណ៌ថ្នាំពីការស្លេក',
      'ប្រសិទ្ធភាពការពារទឹកដក់ (Hydrophobic Beading) រហូតដល់ 90 ថ្ងៃ'
    ],
    featuresEn: [
      'Signature show-car deep warm shine on any paint color.',
      'Blocks harsh tropical UV rays from oxidizing clear coat.',
      'Extreme water repellency keeps vehicle clean longer.'
    ],
    usageStepsKm: [
      { step: 1, title: 'លាងឡានឱ្យស្ងួត', desc: 'លាងសម្អាតរថយន្ត និងជូតឱ្យស្ងួតស្អាតល្អ។' },
      { step: 2, title: 'លាបក្រមួនស្តើងៗ', desc: 'ប្រើអេប៉ុងដែលថែមជូន លាបក្រមួនស្តើងៗជារង្វង់លើតួឡាន។' },
      { step: 3, title: 'ជូតខាត់', desc: 'ទុកចោល 5-10 នាទី រហូតដល់ស្ងួតស្រអាប់ រួចប្រើកន្សែង Microfiber ស្ងួតជូតខាត់រហូតដល់ភ្លឺរលោង។' }
    ],
    usageStepsEn: [
      { step: 1, title: 'Prep Surface', desc: 'Ensure paint is washed, decontaminated and cool to touch.' },
      { step: 2, title: 'Apply Thin Layer', desc: 'Use included applicator pad to apply a thin, even coat in circular motions.' },
      { step: 3, title: 'Buff to High Gloss', desc: 'Allow 5-10 minutes to haze, then buff off with clean microfiber towel.' }
    ],
    tags: ['wax', 'carnauba', 'shine', 'exterior', 'paint-protection'],
    applicableVehicles: ['រថយន្តគ្រប់ពណ៌', 'ម៉ូតូធំ & ម៉ូតូស្អាត']
  },
  {
    id: 'prod-interior-detailer',
    sku: 'KD-INT-500',
    nameKm: 'ទឹកបាញ់ថែរក្សា និងការពារតាបឡូខាងក្នុង (Advanced Interior Detailer)',
    nameEn: 'Advanced Interior Detailer & Matte UV Protectant 500ml',
    slug: 'advanced-interior-detailer',
    category: 'interior',
    price: 22.50,
    originalPrice: 28.00,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 215,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB3kbsmXiLCNy3317DQM-Pj4-1M6QvsF0Qg_FT4d6dOaLQfZ_zLf-aC_4dLb23EK1Qb1kryBB7v55KA1vTbJxi-bLAWZxpAjsApV8DQTInXhy85iP9z_-GGPganPg8HINcY0UhD_whbD0xKLnFOK097k0ab6VNyjJNl4dzL___a4yIgM_sGvJ61v-xOsMTXDmVlBJ9uoMTL1HYffhis7S5k4YNehJso4PBZzcuEd6YaBRV2JPzmoyr',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDB3kbsmXiLCNy3317DQM-Pj4-1M6QvsF0Qg_FT4d6dOaLQfZ_zLf-aC_4dLb23EK1Qb1kryBB7v55KA1vTbJxi-bLAWZxpAjsApV8DQTInXhy85iP9z_-GGPganPg8HINcY0UhD_whbD0xKLnFOK097k0ab6VNyjJNl4dzL___a4yIgM_sGvJ61v-xOsMTXDmVlBJ9uoMTL1HYffhis7S5k4YNehJso4PBZzcuEd6YaBRV2JPzmoyr'
    ],
    stock: 65,
    isBestSeller: false,
    isNew: false,
    shortDescKm: 'ការពារតាបឡូ ជ័រ និងស្បែកខាងក្នុងពីកម្តៅថ្ងៃ មិនឱ្យប្រេះស្រាំ មិនរអិល មិនជាប់ធូលី។',
    shortDescEn: 'OEM natural matte finish detailer with advanced UV blockers. Non-greasy anti-static shield for dashboard, screens and leather.',
    descriptionKm: 'Advanced Interior Detailer ផ្តល់នូវសភាពថ្មីពីធម្មជាតិ (Original Matte Finish) ដោយមិនមានជាតិខ្លាញ់រអិល ឬចាំងភ្នែកឡើយ។ មានសារធាតុការពារកម្តៅ UV កម្រិតខ្ពស់ ការពារតាបឡូមិនឱ្យស្ងួតប្រេះ ឬប្តូរពណ៌។',
    descriptionEn: 'Cleans, conditions, and protects touchscreens, vinyl, finished leather, and plastic trim. Restores OEM satin finish with anti-dust technology.',
    featuresKm: [
      'មិនមានជាតិខ្លាញ់រអិល (Non-Greasy Matte Finish)',
      'ការពារកម្តៅថ្ងៃ UV បង្ការតាបឡូពីការប្រេះស្រាំ',
      'ប្រឆាំងធូលី (Anti-Static) មិនងាយជាប់ធូលីដី'
    ],
    featuresEn: [
      'OEM natural matte sheen, zero oily residue or glare.',
      'Advanced UV blockers prevent fading and cracking.',
      'Anti-static dust repelling technology.'
    ],
    usageStepsKm: [
      { step: 1, title: 'បាញ់លើកន្សែង', desc: 'បាញ់ទឹកថ្នាំលើកន្សែង Microfiber ស្អាត។' },
      { step: 2, title: 'ជូតលើតាបឡូ', desc: 'ជូតលើតាបឡូ ទ្វារ ឬពូកស្បែកឱ្យសព្វ។' }
    ],
    usageStepsEn: [
      { step: 1, title: 'Mist on Towel', desc: 'Spray 2-3 mists directly onto clean microfiber towel.' },
      { step: 2, title: 'Wipe & Level', desc: 'Gently wipe across trim, dashboard, steering wheel and screens.' }
    ],
    tags: ['interior', 'dashboard', 'uv-protectant', 'leather', 'matte'],
    applicableVehicles: ['ផ្នែកខាងក្នុងរថយន្តគ្រប់ប្រភេទ']
  }
];

export const PRODUCT_BUNDLES: ProductBundle[] = [
  {
    id: 'bundle-master-touchless',
    nameKm: 'ឈុតមហាសន្សំ Master Touchless Detailing Combo',
    nameEn: 'Master Touchless Detailing Complete Combo',
    descriptionKm: 'ឈុតពេញលេញសម្រាប់លាងឡាន និងម៉ូតូដោយមិនបាច់ដុស រួមមាន ម្សៅ Touchless 1KG + កាំភ្លើងបាញ់ពពុះស្ពាន់ KD + កន្សែង 800GSM + ច្រាស Detailing។',
    descriptionEn: 'The all-in-one touchless wash ecosystem: 1kg Powder + Pro Brass Foam Cannon + 800GSM Drying Towel + Wheel Brush Set.',
    price: 49.99,
    originalPrice: 72.00,
    savePercent: 31,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy7Ncs3PCpJzPEIHp8jr8KQTp3LB4dw4iCrm1blb1x-BfDWdduLGXGRYsYmNAynCnCH6VLgStBisG02PFnbdykCoA_Yb8bWKCND4qZe3-i1qfuXLzmfEza3Y0Ku5CBnl4McNzVFBQrDAzox_Rbb0WxIGuI875MJWcu-6ZUczYAVSAC8CX3exToX0OFgNEqEOLZ7aIwuet1L9tSZtN6k-4096aW-8qUDefZut4QLj2chjj8ubwKmqx2',
    items: [
      { productId: 'prod-touchless-powder', productNameKm: 'ម្សៅលាងឡាន Touchless 1KG', productNameEn: 'Touchless Powder 1KG', quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATcdaC8cb8tzxQ_Hw5mjgF_dkirwNpsHLdIYuKDa2UvbEpCYVbnfxvVu-nKcvlwzdWmbsYEZzK4K6KJEdi7triQ_EGo-X2-yUFNyZ7J8nxGLTDACSDCX3MD2CgkaxlunK0HXvQXxZogBJigaVPCcwZOH-EUEYY3JjunHKs-TSfofPXm_tB2Yylqz90ORjirRaGVlK8Ah_HF3vmGcKhrh5cG7xcl_DoeIUdCwHOzFWFvohrOQn7aZlq' },
      { productId: 'prod-foam-cannon', productNameKm: 'កាំភ្លើងបាញ់ពពុះស្ពាន់សុទ្ធ KD-PFC-01', productNameEn: 'Pro Foam Cannon Brass', quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLOjWzHj5mh-DklMYKWYIbFjPehDOaItwZMw0yktOdazRQkfT6B2VnTKqasPOyQ-Io1mh_TbR9UQNhb7iI7jyzDf3jBPxMR2afHKK7vljfeyVBAngJYTVX8iSDDwEp0kE7VoA0-gno-o5C07UkCc6f315V9tNa-8bpoEORs91JknBFVpUGfLYOShunFlsyi0E4JBVqnIZwdL_mD-O6s0A-xaInCBLk67J-A_d9e_dErxI3LslyM5B6' },
      { productId: 'prod-microfiber-towel', productNameKm: 'កន្សែង Microfiber 800GSM 2 ផ្ទាំង', productNameEn: 'Plush Drying Towel x2', quantity: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCscAmgaMN8LmiKK4iaEskvZiI8E6EnEsj9e19mcrdvrUDMah1cMYGyoP5aDQN6xh4edw36lY7bvYAgbvEwfba7SbgVV-YxEJUJk-Lz2rMUGUqzyvs4RurQKVDJkmVljoEqIXEm80cpjDmN7s8mLWqycHJCtvvLHB1NVPWO2gBV0cepA_EKZkzCST3CFEn73iDlq2zIcdTjKVvr2wBh6Gxgs2U1hNJoGTVPFySd7csaAYqFTG9oxyFPEonem1oenZL4Jw' },
      { productId: 'prod-detailing-brushes', productNameKm: 'ឈុតច្រាស Detailing 2 ដើម', productNameEn: 'Detailing Brush Set', quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc7X-2ox6bZJHFAwbDRe0mcdNTkHFyrKOtf4j4_93O5wMQS62GebUYAtwIpFqppgNw40I015TdGdB81PKT_rmYDjw3FdX0I2zULePl0jCbYhum4V5nJ-tcpaG1KEYZNRpYIz1MlfQffPLd0APLcpbcudGV-RzbatOPAMToGYTrAeHpSUBDXrDYcKwsHzrP1iHkuiwxmjlHM2r2y3AKLlU-FXBNdRngD9N8vEFq0GOm2-rsx8VriCax4AELhhftYFQVjw' }
    ],
    badgeKm: 'លក់ដាច់លេខ 1',
    badgeEn: 'Best Value Bundle',
    isPopular: true
  },
  {
    id: 'bundle-interior-crystal',
    nameKm: 'ឈុតសម្អាតខាងក្នុង & កញ្ចក់ Crystal Clear Interior Set',
    nameEn: 'Crystal Clear Interior & Glass Deep Clean Set',
    descriptionKm: 'ឈុតសម្អាតផ្នែកខាងក្នុង និងកញ្ចក់មុខ រួមមាន ស្ព្រៃយ៍ V-MAFA + ទឹកបាញ់ស្រទាប់ខ្លាញ់កញ្ចក់ + កន្សែង Microfiber 2 ផ្ទាំង។',
    descriptionEn: 'V-MAFA 650ml Foam Cleaner + OPS Oil Film Glass Cleaner + 2x Microfiber Towels.',
    price: 15.99,
    originalPrice: 24.00,
    savePercent: 33,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5j1BqVZ8AUO9-TFIk7RuVUp1KK6XOf3Oeqp6UOFeyw6eg9AHa-yIJgmTcnjQ5A9hHyZ_fuvHnhgPPQE8e_JUUP23FMhxw1bwlGb2M_XwAE0bQZwLYzPHXZCjICKxY_VuVPF47m6ZWeDm5Ls4pH560rpmQmJNIbrgayUFdxY2maOiuYQ0aOG2QWO2bco_QsmAQnDVrx7yHc-Tyf6Bab0RUTrG1J1np9rrK8jsr3peOfQNcQmCYTeDM75cCblREGFFbQA',
    items: [
      { productId: 'prod-vmafa-foam', productNameKm: 'ស្ព្រៃយ៍ពពុះ V-MAFA 650ml', productNameEn: 'V-MAFA Foam Cleaner', quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5GbMRT9WCtQX3gpXs3hPRDJu8yIAd2speCkTecUlSZdi_zHsAEDVgORPxZ4Qv3QfxiC5vzvaRbxxSxFYK1LqvhM373R-5coVYAJoytD4TynaTV1KtuX442lbBkCMwuI1x_WpOaXk9s8-yOmAh-CsdRFtzCjLdOreBSB8m7_WupFXua8a6Stxq7FjkEYBPCDMS8ICRGV8Rvqge-d90U7_RQ12utvcM3ta-5qxpjU9vi3kJubh1roEQsAaQTn6XinjylA' },
      { productId: 'prod-oil-film-cleaner', productNameKm: 'ទឹកបាញ់ស្រទាប់ខ្លាញ់កញ្ចក់ OPS', productNameEn: 'OPS Glass Cleaner', quantity: 1, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5j1BqVZ8AUO9-TFIk7RuVUp1KK6XOf3Oeqp6UOFeyw6eg9AHa-yIJgmTcnjQ5A9hHyZ_fuvHnhgPPQE8e_JUUP23FMhxw1bwlGb2M_XwAE0bQZwLYzPHXZCjICKxY_VuVPF47m6ZWeDm5Ls4pH560rpmQmJNIbrgayUFdxY2maOiuYQ0aOG2QWO2bco_QsmAQnDVrx7yHc-Tyf6Bab0RUTrG1J1np9rrK8jsr3peOfQNcQmCYTeDM75cCblREGFFbQA' },
      { productId: 'prod-microfiber-towel', productNameKm: 'កន្សែង Microfiber 2 ផ្ទាំង', productNameEn: 'Microfiber Towel x2', quantity: 2, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCscAmgaMN8LmiKK4iaEskvZiI8E6EnEsj9e19mcrdvrUDMah1cMYGyoP5aDQN6xh4edw36lY7bvYAgbvEwfba7SbgVV-YxEJUJk-Lz2rMUGUqzyvs4RurQKVDJkmVljoEqIXEm80cpjDmN7s8mLWqycHJCtvvLHB1NVPWO2gBV0cepA_EKZkzCST3CFEn73iDlq2zIcdTjKVvr2wBh6Gxgs2U1hNJoGTVPFySd7csaAYqFTG9oxyFPEonem1oenZL4Jw' }
    ],
    badgeKm: 'សន្សំបាន 33%',
    badgeEn: 'Popular Choice',
    isPopular: false
  }
];

export const MOCK_REVIEWS: ProductReview[] = [
  {
    id: 'rev-1',
    author: 'សុខ វិបុល (Vibol Sok)',
    rating: 5,
    date: '2 ថ្ងៃមុន',
    commentKm: 'ម្សៅ Touchless នេះល្អមែនទែនបង! បាញ់ពពុះទុកចោល 3 នាទី រួចបាញ់ទឹកចេញ ដីក្អែលជ្រះអស់ 100% មិនបាច់ហត់ដុសខាត់ឆ្កូតឡាន Ford Ranger ខ្ញុំសោះ។',
    commentEn: 'This Touchless powder is incredible! Sprayed foam, waited 3 minutes and rinsed with pressure washer—all heavy mud on my Ford Ranger melted off with zero scrubbing.',
    verified: true,
    vehicle: 'Ford Ranger Wildtrak'
  },
  {
    id: 'rev-2',
    author: 'ចាន់ ណារិទ្ធ (Narith Chan)',
    rating: 5,
    date: '1 សប្តាហ៍មុន',
    commentKm: 'កាំភ្លើងបាញ់ពពុះស្ពាន់ស្វិតល្អណាស់ បាញ់ពពុះឡើងខាប់ហាប់ដូចក្រែម។ ដឹកជញ្ជូននៅភ្នំពេញលឿនណាស់ កុម្ម៉ង់ព្រឹក រសៀលបានទំនិញភ្លាម។',
    commentEn: 'The brass foam cannon creates thick shaving cream foam. Fast delivery in Phnom Penh—ordered morning, arrived by afternoon!',
    verified: true,
    vehicle: 'Lexus RX350'
  },
  {
    id: 'rev-3',
    author: 'គឹម ស្រីពៅ (Sreypov Kim)',
    rating: 5,
    date: '2 សប្តាហ៍មុន',
    commentKm: 'ស្ព្រៃយ៍ V-MAFA លាងកៅអីស្បែកឡានជ្រះស្នាមកាហ្វេ និងស្នាមជើងកូនក្មេងស្អាតដូចថ្មី មិនមានក្លិនឈួលទេ។',
    commentEn: 'V-MAFA spray cleaned all coffee stains and kid shoe marks off my leather seats. Very pleasant smell too!',
    verified: true,
    vehicle: 'Toyota Prius 2010'
  },
  {
    id: 'rev-4',
    author: 'ហេង សុវណ្ណ (Sovann Heng)',
    rating: 5,
    date: '3 សប្តាហ៍មុន',
    commentKm: 'ទឹកថ្នាំលាងស្រទាប់ខ្លាញ់កញ្ចក់ OPS នេះត្រូវចិត្តណាស់ ពីមុនបើកឡានពេលយប់ចាំងភ្លើងមើលផ្លូវមិនចង់ឃើញ ឥឡូវកញ្ចក់ថ្លាឈ្វេង ផ្លិតទឹកដើររលូនល្អណាស់។',
    commentEn: 'The OPS glass oil film cleaner solved my rainy night glare problem completely. Wiper now glides silently and glass is crystal clear.',
    verified: true,
    vehicle: 'Honda CR-V'
  }
];

export const CAMBODIA_LOCATIONS = {
  provinces: [
    'រាជធានីភ្នំពេញ (Phnom Penh)',
    'ខេត្តកណ្តាល (Kandal)',
    'ខេត្តសៀមរាប (Siem Reap)',
    'ខេត្តបាត់ដំបង (Battambang)',
    'ខេត្តព្រះសីហនុ (Preah Sihanouk)',
    'ខេត្តកំពត (Kampot)',
    'ខេត្តតាកែវ (Takeo)',
    'ខេត្តកំពង់ចាម (Kampong Cham)',
    'ខេត្តកំពង់ស្ពឺ (Kampong Speu)',
    'ខេត្តបន្ទាយមានជ័យ (Banteay Meanchey)',
    'ខេត្តពោធិ៍សាត់ (Pursat)',
    'ខេត្តស្វាយរៀង (Svay Rieng)',
    'ខេត្តព្រៃវែង (Prey Veng)',
    'ខេត្តកោះកុង (Koh Kong)',
    'ខេត្តរតនគិរី (Ratanakiri)'
  ],
  phnomPenhKhans: [
    'ខណ្ឌទួលគោក (Toul Kork)',
    'ខណ្ឌចំការមន (Chamkarmon)',
    'ខណ្ឌបឹងកេងកង (Boeung Keng Kang)',
    'ខណ្ឌសែនសុខ (Sen Sok)',
    'ខណ្ឌដូនពេញ (Daun Penh)',
    'ខណ្ឌ៧មករា (Prampir Meakkakra)',
    'ខណ្ឌមានជ័យ (Meanchey)',
    'ខណ្ឌឫស្សីកែវ (Russei Keo)',
    'ខណ្ឌច្បារអំពៅ (Chbar Ampov)',
    'ខណ្ឌពោធិ៍សែនជ័យ (Por Senchey)',
    'ខណ្ឌដង្កោ (Dangkao)',
    'ខណ្ឌជ្រោយចង្វារ (Chroy Changvar)',
    'ខណ្ឌព្រែកព្នៅ (Prek Pnov)',
    'ខណ្ឌកំបូល (Kamboul)'
  ]
};
