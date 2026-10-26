export interface ProductItem {
  id: string;
  name: string;
  kinyarwandaName: string;
  tagline: string;
  pricePerUnit: number; // in RWF
  unit: string;
  minOrder: number;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  idealFor: string[];
  image: string;
  badge?: string;
}

export const BRAND_DETAILS = {
  name: 'FreChampignon (iGihumyo)',
  founder: 'Benitha Karire',
  founderHandle: '@_benitha_k',
  launchedYear: 'Late 2026',
  originExplanation: 'Blends "Fresh" (English) and "Champignon" (French word for mushroom) — reflecting freshness, French culinary excellence, and Rwandan agricultural pride.',
  tagline: 'Good food starts with what you grow and what you put on your plate.',
  location: 'Nyamata, Bugesera District · Kigali, Rwanda',
  logoUrl: '/assets/aistudio/f3ecd18a-1ba5-479e-9fbd-295eb49f8235_86141659.png',
  whatsappNumber: '250788320412',
  displayPhone: '+250 788 320 412',
  socials: {
    tiktok: 'https://www.tiktok.com/@frechampignon',
    tiktokHandle: '@frechampignon',
    instagram: 'https://www.instagram.com/frechampignon',
    instagramHandle: '@frechampignon',
    founderInstagram: 'https://www.instagram.com/_benitha_k',
    founderInstagramHandle: '@_benitha_k',
  },
};

export const PRODUCTS: ProductItem[] = [
  {
    id: 'button-champignons',
    name: 'Fresh Button Mushrooms (Champignons)',
    kinyarwandaName: 'Ibihumyo bya Champignon Bishya',
    tagline: 'Pristine, tender white & cremini button mushrooms harvested daily at dawn',
    pricePerUnit: 4500, // RWF per kg
    unit: 'kg',
    minOrder: 1,
    description: 'Crisp, velvety button champignons freshly picked each morning from our climate-controlled Nyamata farm chambers. Meticulously graded for firm caps, earthy fragrance, rich plant protein, and exceptional culinary texture.',
    features: [
      'Grown with 100% natural inputs — zero chemical pesticides or artificial boosters',
      'Harvested at peak freshness at 6:00 AM daily in Nyamata',
      'Same-day temperature-conscious delivery across Kigali & nearby districts',
      'Packed in breathable, food-grade eco-friendly boxes preserving aroma and moisture',
    ],
    specs: [
      { label: 'Cultivar', value: 'Fresh Agaricus Button Champignons' },
      { label: 'Quality Grade', value: 'Grade A Firm Closed Caps' },
      { label: 'Shelf Life', value: '7–10 days refrigerated (3°C – 5°C)' },
      { label: 'Origin', value: 'FreChampignon Farm, Nyamata, Rwanda' },
    ],
    idealFor: [
      'Hotels, fine dining restaurants & pizzerias across Kigali',
      'Rwandan households wanting nutritious, high-protein family meals',
      'Health-conscious foodies looking for natural immunity-boosting umami',
    ],
    image: '/assets/images/fresh_ibihumyo_basket_1793019544558.jpg',
    badge: 'Daily Dawn Harvest',
  },
  {
    id: 'imigina-substrate',
    name: 'Mushroom Substrate & Seed Blocks (Imigina)',
    kinyarwandaName: 'Imigina ifite Ubuziranenge',
    tagline: 'High-yield colonized substrate blocks formulated for passionate Rwandan growers',
    pricePerUnit: 600, // RWF per tube/block
    unit: 'tube',
    minOrder: 10,
    description: 'Expertly pasteurized and colonized substrate blocks prepared with vigorous mushroom spawn and balanced agricultural nutrients. Ready to produce prolific, multi-flush mushroom yields in small shelters or home spaces.',
    features: [
      'Dense, vigorous white mycelium fully colonized and primed for fruiting',
      'High biological yield: 1.2kg – 1.8kg total harvest across 3–4 flushes',
      'Upcycled from clean Rwandan agricultural byproducts with organic mineral conditioning',
      'Includes free grower mentorship via WhatsApp and Kinyarwanda guide',
    ],
    specs: [
      { label: 'Colonization', value: '100% colonized, ready to fruit in 7–12 days' },
      { label: 'Biological Efficiency', value: 'High yield multi-flush potential' },
      { label: 'Substrate Blend', value: 'Pasteurized agricultural compost & cotton hulls' },
      { label: 'Farmer Support', value: 'Direct agronomist assistance on WhatsApp' },
    ],
    idealFor: [
      'Local Rwandan youth and women agricultural entrepreneurs',
      'Smallholder farmers seeking high-value indoor crop diversification',
      'Home gardeners wanting fresh, pesticide-free harvest on their balcony/yard',
    ],
    image: '/assets/images/substrate_imigina_blocks_1793019545272.jpg',
    badge: 'High Yield Guarantee',
  },
];

export const TRUST_BADGES = [
  {
    title: 'Fresh Button Champignons',
    kinyarwanda: 'Ibihumyo bya Champignon',
    description: 'Delicately picked at daybreak in Nyamata and delivered crisp to your kitchen, restaurant, or market.',
    icon: 'Leaf',
  },
  {
    title: 'Imigina for Local Growers',
    kinyarwanda: 'Imigina ifite Ubuziranenge',
    description: 'Premium colonized substrate tubes engineered for high yields, rapid fruiting, and farmer success.',
    icon: 'Sprout',
  },
  {
    title: 'Naturally Grown with Care',
    kinyarwanda: 'Bihingwa mu buryo kamere',
    description: 'Cultivated with 0% synthetic chemicals, clean filtered water mist, and strict hygienic protocols.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Youth & Community Empowerment',
    kinyarwanda: 'Guteza imbere urubyiruko',
    description: 'Founded by Benitha Karire to open doors for Rwandan youth under the "Wandike uvuga icyo ushoboye" banner.',
    icon: 'HeartHandshake',
  },
];

export const CAREER_ROLES = [
  {
    title: 'Farm Production & Harvesting',
    kinyarwanda: 'Gukora mu mirima no gusoroma',
    type: 'Full-time / Apprenticeship',
    location: 'Nyamata, Bugesera',
    description: 'Hands-on care for button mushrooms and substrate rooms: humidity checks, sanitary harvesting, and sorting.',
  },
  {
    title: 'Substrate Inoculation & Quality Control',
    kinyarwanda: 'Gutegura Imigina n’Ubuziranenge',
    type: 'Technical / Agribusiness',
    location: 'Nyamata Farm Lab',
    description: 'Preparation of nutrient substrate, sterilization management, mycelium colonization oversight, and dispatch testing.',
  },
  {
    title: 'Kigali Logistics & Express Distribution',
    kinyarwanda: 'Kugeza ibicuruzwa i Kigali',
    type: 'Field Operations',
    location: 'Kigali Hub',
    description: 'Morning route distribution to restaurants, supermarkets, and doorstep household deliveries across Kigali.',
  },
  {
    title: 'Community Outreach & Farmer Extension',
    kinyarwanda: 'Gufasha abahinzi b’ibihumyo',
    type: 'Agri-Extension / Sales',
    location: 'Bugesera & Kigali',
    description: 'Providing technical advice and onboarding local youth and farmer cooperatives to grow Imigina successfully.',
  },
];

export const GROWER_STEPS = [
  {
    step: '01',
    title: 'Prepare Growing Space',
    kinyarwanda: "Gutegura ahantu h'ububiko",
    description: 'Keep your Imigina in a shaded, well-ventilated, clean room or shelter away from direct tropical sunlight.',
  },
  {
    step: '02',
    title: 'Slit & Mist Gently',
    kinyarwanda: 'Gufungura no kuvomerera',
    description: 'Cut small X-slits in the plastic wrap and mist with clean water 2 to 3 times daily to keep humidity around 85%.',
  },
  {
    step: '03',
    title: 'Watch the Pins Emerge',
    kinyarwanda: 'Kureba uko bimera',
    description: 'Within 7 to 10 days, tiny mushroom pinheads appear. In another 48 hours, they expand into lush, full bouquets.',
  },
  {
    step: '04',
    title: 'Twist, Harvest & Repeat',
    kinyarwanda: 'Gusoroma no kongera gusarura',
    description: 'Gently twist the cluster at the base to harvest. Keep misting to trigger your 2nd, 3rd, and 4th flushes!',
  },
];

export const FAQS = [
  {
    q: 'Why the name FreChampignon (iGihumyo)?',
    a: 'Founded in late 2026 by Benitha Karire, the name fuses "Fresh" (English) and "Champignon" (French word for mushroom). It honors Rwanda’s multilingual heritage while celebrating authentic Rwandan-grown mushrooms (Ibihumyo).',
  },
  {
    q: 'How quickly do you deliver fresh button mushrooms to Kigali?',
    a: 'We harvest every morning at 6:00 AM at our Nyamata farm. Orders confirmed the previous day or early morning are delivered across Kigali (Nyarugenge, Gasabo, Kicukiro) on the same day via express dispatch.',
  },
  {
    q: 'How does the "Wandike uvuga icyo ushoboye" youth employment program work?',
    a: 'We believe in practical potential over rigid paper diplomas. If you have energy, passion, discipline, or specific skills (farming, motorbike driving, social media, sales), apply through our form or WhatsApp to join our team or receive grower incubation.',
  },
  {
    q: 'How many button mushrooms can I harvest from an Imigina block?',
    a: 'Each well-tended Imigina block yields between 1.2 kg and 1.8 kg of fresh mushrooms across 3 to 4 successive flushes over an 8-week fruiting period.',
  },
  {
    q: 'What payment methods do you accept in Rwanda?',
    a: 'We accept MTN Mobile Money (MoMo), Airtel Money, Bank Transfer (BK / Equity), and Cash on delivery/pickup for verified orders.',
  },
];

export const FARM_METRICS = [
  { value: '100%', label: 'Natural & Chemical Free', sub: 'Pure substrate and filtered mist' },
  { value: '6:00 AM', label: 'Daily Dawn Harvest', sub: 'Guaranteed same-day farm freshness' },
  { value: '1.5 kg+', label: 'Avg Yield Per Imigina', sub: 'Across multiple successive flushes' },
  { value: '25 km', label: 'Proximity to Kigali', sub: 'Fast delivery from Nyamata, Bugesera' },
];
