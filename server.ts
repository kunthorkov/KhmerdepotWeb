import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { PRODUCTS, PRODUCT_BUNDLES, MOCK_REVIEWS } from './src/data/mockProducts.ts';
import { Order, ProductReview } from './src/types.ts';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory persistent collections (MongoDB simulation)
  let products = [...PRODUCTS];
  let bundles = [...PRODUCT_BUNDLES];
  let reviews: Record<string, ProductReview[]> = {
    'prod-touchless-powder': [...MOCK_REVIEWS],
    'prod-foam-cannon': [MOCK_REVIEWS[1]],
    'prod-vmafa-foam': [MOCK_REVIEWS[2]],
    'prod-oil-film-cleaner': [MOCK_REVIEWS[3]]
  };
  let orders: Order[] = [];

  // Initialize Gemini AI Client lazily if key is available
  let genAi: GoogleGenAI | null = null;
  function getGenAI() {
    if (!genAi && process.env.GEMINI_API_KEY) {
      genAi = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    }
    return genAi;
  }

  // --- REST API ENDPOINTS ---

  // Health check
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', service: 'Khmer Depot API', timestamp: new Date().toISOString() });
  });

  // Get all products
  app.get('/api/products', (req: Request, res: Response) => {
    const { category, search, sort, featured } = req.query;
    let result = [...products];

    if (category && category !== 'all') {
      result = result.filter(p => p.category === category);
    }

    if (search && typeof search === 'string') {
      const q = search.toLowerCase().trim();
      result = result.filter(p => 
        p.nameKm.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.sku.toLowerCase().includes(q)
      );
    }

    if (featured === 'true') {
      result = result.filter(p => p.isBestSeller || p.isNew);
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    res.json({ success: true, count: result.length, data: result });
  });

  // Get single product
  app.get('/api/products/:id', (req: Request, res: Response) => {
    const product = products.find(p => p.id === req.params.id || p.slug === req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: product });
  });

  // Get bundles
  app.get('/api/bundles', (req: Request, res: Response) => {
    res.json({ success: true, count: bundles.length, data: bundles });
  });

  // Get product reviews
  app.get('/api/reviews/:productId', (req: Request, res: Response) => {
    const list = reviews[req.params.productId] || MOCK_REVIEWS;
    res.json({ success: true, count: list.length, data: list });
  });

  // Submit product review
  app.post('/api/reviews', (req: Request, res: Response) => {
    const { productId, author, rating, commentKm, commentEn, vehicle } = req.body;
    if (!productId || !author || !rating) {
      return res.status(400).json({ success: false, message: 'Missing required review fields' });
    }

    const newRev: ProductReview = {
      id: `rev-${Date.now()}`,
      author,
      rating: Number(rating),
      date: 'ទើបតែបញ្ចូលថ្មីៗ',
      commentKm: commentKm || commentEn || 'ផលិតផលល្អណាស់ ពេញចិត្តខ្លាំង!',
      commentEn: commentEn || commentKm || 'Great product, highly satisfied!',
      verified: true,
      vehicle: vehicle || 'Car / Motorcycle'
    };

    if (!reviews[productId]) {
      reviews[productId] = [];
    }
    reviews[productId].unshift(newRev);

    res.status(201).json({ success: true, data: newRev });
  });

  // Place Order
  app.post('/api/orders', (req: Request, res: Response) => {
    const { items, customer, paymentMethod, discountCode } = req.body;
    if (!items || !items.length || !customer || !customer.fullName || !customer.phone) {
      return res.status(400).json({ success: false, message: 'Invalid order data' });
    }

    const subtotal = items.reduce((sum: number, item: any) => {
      const price = item.selectedVariant?.price ?? item.product.price;
      return sum + price * item.quantity;
    }, 0);

    const isPhnomPenh = customer.cityProvince?.includes('Phnom Penh') || customer.cityProvince?.includes('ភ្នំពេញ');
    const shippingFee = subtotal >= 30 ? 0 : (isPhnomPenh ? 1.50 : 2.50);
    
    let discount = 0;
    if (discountCode?.toUpperCase() === 'DEPOT10' || discountCode?.toUpperCase() === 'KHMER10') {
      discount = subtotal * 0.10;
    } else if (discountCode?.toUpperCase() === 'FREE24') {
      discount = shippingFee;
    }

    const total = Math.max(0, subtotal + shippingFee - discount);
    const totalKhr = Math.round(total * 4100);

    const orderNumber = `KD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber,
      items,
      subtotal: Number(subtotal.toFixed(2)),
      shippingFee: Number(shippingFee.toFixed(2)),
      discount: Number(discount.toFixed(2)),
      discountCode,
      total: Number(total.toFixed(2)),
      totalKhr,
      customer,
      paymentMethod: paymentMethod || 'khqr',
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
      orderStatus: 'confirmed',
      createdAt: new Date().toISOString(),
      estimatedDelivery: isPhnomPenh ? 'ថ្ងៃនេះ ឬថ្ងៃស្អែក (24 ម៉ោង)' : '1-2 ថ្ងៃ (Virak Buntham Express)',
      trackingNumber: `VET-${Math.floor(10000000 + Math.random() * 90000000)}`
    };

    orders.unshift(newOrder);

    // Dynamic Bakong KHQR DeepLink format representation
    const khqrPayload = `00020101021229380016bakong@khmerdepot520459995303840540${total.toFixed(2)}5802KH5911KHMER DEPOT6010PHNOM PENH62230119${orderNumber}6304ABCD`;

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: newOrder,
      khqr: {
        qrPayload: khqrPayload,
        merchantName: 'KHMER DEPOT CAMBODIA',
        accountNumber: 'kunthor.kov@aba',
        currency: 'USD',
        amount: total.toFixed(2),
        amountKhr: totalKhr.toLocaleString(),
        billNumber: orderNumber
      }
    });
  });

  // Get order by ID or orderNumber
  app.get('/api/orders/:id', (req: Request, res: Response) => {
    const order = orders.find(o => o.id === req.params.id || o.orderNumber.toUpperCase() === req.params.id.toUpperCase() || o.trackingNumber === req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }
    res.json({ success: true, data: order });
  });

  // AI Car Detailing Advisor / Diagnostics Endpoint
  app.post('/api/ai/advisor', async (req: Request, res: Response) => {
    const { problem, vehicleType, weatherCondition, language } = req.body;

    const userPrompt = problem || 'How to clean dirty car without scratching?';
    const isKhmer = language !== 'en';

    try {
      const ai = getGenAI();
      if (ai) {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `You are the master automotive detailing expert for "Khmer Depot" (ខ្មែរដេប៉ូ), Cambodia's leading car & motorcycle care shop.
User Question: "${userPrompt}"
Vehicle Type: "${vehicleType || 'Any'}"
Context: Cambodia tropical weather (rain, mud, strong UV, dusty roads).
Products available in Khmer Depot:
1. Touchless Car Wash Powder (Heavy duty snow foam, no scrubbing needed, preserves ceramic coating)
2. Pro Snow Foam Cannon (KD-PFC-01 brass core)
3. OPS Oil Film Glass Cleaner (removes traffic film, night glare, water spots on windshield)
4. V-MAFA Multi-function Foam Cleaner (leather & fabric seats, ceiling, dashboard)
5. Heavy Duty Engine & Chain Degreaser Pro (engine bay and motorcycle chain sludge)
6. Ultimate Carnauba Show Wax (deep wet gloss, 90 days UV protection)
7. 800GSM Plush Microfiber Drying Towel
8. Detailing Wheel & Tire Brushes

Respond in ${isKhmer ? 'Khmer language (ភាសាខ្មែរ)' : 'English'}, with:
1. Quick diagnosis & cause in simple terms.
2. Step-by-step cleaning procedure using Khmer Depot products.
3. Pro tip for Cambodian driving conditions.
Keep it practical, professional, friendly and concise. Format with clear bullet points.`,
        });

        return res.json({
          success: true,
          recommendation: response.text,
          recommendedProducts: ['prod-touchless-powder', 'prod-foam-cannon', 'prod-oil-film-cleaner']
        });
      }
    } catch (err) {
      console.warn('Gemini API call failed or not configured, using smart expert knowledge base:', err);
    }

    // Fallback Smart Automotive Knowledge Base
    const lower = userPrompt.toLowerCase();
    let adviceKm = '';
    let adviceEn = '';
    let recProducts = ['prod-touchless-powder', 'prod-foam-cannon'];

    if (lower.includes('កញ្ចក់') || lower.includes('glass') || lower.includes('oil') || lower.includes('យប់') || lower.includes('glare')) {
      adviceKm = `🔍 **ការវិភាគបញ្ហា៖** កញ្ចក់រថយន្តរបស់អ្នកមានស្រទាប់ខ្លាញ់ (Traffic Film) និងជាតិរ៉ែទឹកដក់ពីទឹកភ្លៀង និងផ្សែងឡាន។

🛠️ **ដំណោះស្រាយពី Khmer Depot៖**
1. លាងជម្រះកញ្ចក់ជាមួយទឹកស្អាតឱ្យអស់ធូលី។
2. ប្រើ **OPS Oil Film Glass Cleaner** ចាក់លើអេប៉ុង រួចដុសខាត់ជារង្វង់លើកញ្ចក់ 2-3 នាទី។
3. បាញ់ទឹកលាងចេញ រួចជូតដោយកន្សែង Microfiber។

💡 **គន្លឹះពិសេស៖** ធ្វើបែបនេះរៀងរាល់ 1 ខែម្តង នឹងជួយឱ្យផ្លិតទឹកដើរស្ងាត់ និងកញ្ចក់ថ្លាមិនចាំងភ្នែកពេលយប់!`;
      adviceEn = `🔍 **Diagnosis:** Your windshield has accumulated microscopic road grease, soot, and mineral deposits creating night-time glare.

🛠️ **Khmer Depot Solution:**
1. Rinse loose sand with water.
2. Apply **OPS Oil Film Glass Cleaner** on an applicator pad and buff in overlapping circles.
3. Rinse thoroughly and dry with 800GSM microfiber.

💡 **Pro Tip:** Repeat every 3-4 weeks for crystal clear visibility in heavy rain and zero wiper judder!`;
      recProducts = ['prod-oil-film-cleaner', 'prod-microfiber-towel'];
    } else if (lower.includes('ម៉ាស៊ីន') || lower.includes('engine') || lower.includes('ច្រវាក់') || lower.includes('chain')) {
      adviceKm = `🔍 **ការវិភាគបញ្ហា៖** បន្ទប់ម៉ាស៊ីន ឬច្រវាក់ម៉ូតូមានកំណកខ្លាញ់គោ និងដីកខ្វក់ជាប់យូរ។

🛠️ **ដំណោះស្រាយពី Khmer Depot៖**
1. ត្រូវប្រាកដថាម៉ាស៊ីនត្រជាក់សិនមុនពេលលាង។
2. បាញ់ **Heavy Duty Engine & Chain Degreaser Pro** លើផ្នែកប្រឡាក់ ទុកចោល 3-5 នាទី។
3. ប្រើ **Detailing Brush** ដុសត្រង់កន្លែងចង្អៀត រួចបាញ់ទឹកលាងសម្អាតចេញ។

💡 **គន្លឹះពិសេស៖** បន្ទាប់ពីស្ងួត សូមបាញ់ប្រេងរំអិលច្រវាក់ ឬលាបទឹកថ្នាំការពារជ័រតាបឡូ។`;
      adviceEn = `🔍 **Diagnosis:** Baked grease and road grime built up on engine bay or motorcycle chain drive.

🛠️ **Khmer Depot Solution:**
1. Ensure engine is cool to touch.
2. Spray **Heavy Duty Engine Degreaser Pro** and dwell for 3-5 minutes.
3. Agitate stubborn corners with Detailing Brushes, then rinse with light water spray.

💡 **Pro Tip:** Blow dry with air and apply protectant to maintain rubber hose elasticity.`;
      recProducts = ['prod-degreaser', 'prod-detailing-brushes'];
    } else {
      adviceKm = `🔍 **ការវិភាគបញ្ហា៖** ការលាងឡានដោយដុសកន្សែងផ្ទាល់លើដីខ្សាច់ នឹងនាំឱ្យឆ្កូតថ្នាំជាស្នាមរង្វង់ (Swirl Marks)។

🛠️ **ដំណោះស្រាយលាង Touchless ពី Khmer Depot៖**
1. លាយ **ម្សៅ Touchless 1KG** 2-3 ស្លាបព្រា ក្នុង **កាំភ្លើងបាញ់ពពុះ Pro Foam Cannon** ជាមួយទឹក 1 លីត្រ។
2. បាញ់ពពុះឱ្យសព្វលើតួឡានដែលស្ងួត ទុកចោល 3-5 នាទីឱ្យពពុះបំបែកដីក្អែល។
3. ប្រើម៉ាស៊ីនបាញ់ទឹកសម្ពាធខ្ពស់ បាញ់លាងពីក្រោមឡើងលើ រួចជូតស្ងួតដោយកន្សែង Microfiber 800GSM។

💡 **គន្លឹះពិសេស៖** លាងពេលព្រឹក ឬកន្លែងមានម្លប់ ការពារពពុះមិនឱ្យស្ងួតលើថ្នាំឡាន។`;
      adviceEn = `🔍 **Diagnosis:** Scrubbing vehicle paint while dusty causes micro-scratches and swirl marks.

🛠️ **Khmer Depot Touchless Procedure:**
1. Mix 2-3 scoops of **Touchless Wash Powder** in the **Pro Foam Cannon** with 1L water.
2. Blanket the dry vehicle in thick snow foam; let dwell for 3-5 minutes.
3. Pressure rinse from bottom to top, then dry effortlessly with an 800GSM Plush Microfiber Towel.

💡 **Pro Tip:** Never wash under direct tropical noon sun to prevent water spotting.`;
    }

    res.json({
      success: true,
      recommendation: isKhmer ? adviceKm : adviceEn,
      recommendedProducts: recProducts
    });
  });

  // Vite middleware for development vs static build in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Khmer Depot Server running on http://localhost:${PORT}`);
  });
}

startServer();
