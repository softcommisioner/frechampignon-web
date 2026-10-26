import React, { useState } from 'react';
import { ShoppingBag, Sprout, Check, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { PRODUCTS, BRAND_DETAILS } from '../data/mushroomData';
import { ImigongoDivider } from './ImigongoPattern';

interface ProductsProps {
  onSelectProduct: (productId: string, quantity?: number) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'champignons' | 'imigina'>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === 'champignons') return p.id === 'button-champignons';
    if (activeTab === 'imigina') return p.id === 'imigina-substrate';
    return true;
  });

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#D8C7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Functional Segmented Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#6D3B1E] uppercase mb-2">
              <span>Fresh Produce &amp; Farm Inputs</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Nyamata Harvest &amp; Kigali Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3B1F0E] tracking-tight font-display [text-wrap:balance]">
              Core Offerings: Fresh Button Champignons &amp; Substrate Imigina
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Whether you are sourcing gourmet mushrooms for your kitchen or restaurant, or scaling production with primed colonized substrate blocks.
            </p>
          </div>

          {/* Interactive filter control */}
          <div className="flex items-center p-1 bg-[#EFE8DE] rounded-xl shrink-0 self-start md:self-auto border border-[#D8C7B5]">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-white text-[#3B1F0E] shadow-2xs'
                  : 'text-stone-600 hover:text-[#3B1F0E]'
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => setActiveTab('champignons')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'champignons'
                  ? 'bg-white text-[#3B1F0E] shadow-2xs'
                  : 'text-stone-600 hover:text-[#3B1F0E]'
              }`}
            >
              Button Champignons
            </button>
            <button
              onClick={() => setActiveTab('imigina')}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'imigina'
                  ? 'bg-white text-[#3B1F0E] shadow-2xs'
                  : 'text-stone-600 hover:text-[#3B1F0E]'
              }`}
            >
              Imigina Substrate Blocks
            </button>
          </div>
        </div>

        {/* 2 Marquee Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-[#D8C7B5] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Frame */}
                <div className="relative aspect-[16/10] bg-[#F7F2EB] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#3B1F0E]/90 backdrop-blur-xs text-[#FAF8F5] px-3 py-1 text-xs font-bold rounded-lg">
                    {product.badge}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8">
                  {/* Clean unboxed title hierarchy */}
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8C4F2B]">
                        {product.kinyarwandaName}
                      </span>
                      <h3 className="text-2xl font-bold text-[#3B1F0E] font-display tracking-tight mt-0.5">
                        {product.name}
                      </h3>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-2xl font-bold font-display text-[#3B1F0E] tabular-nums">
                        {product.pricePerUnit.toLocaleString()} <span className="text-sm font-normal text-stone-500">RWF</span>
                      </div>
                      <div className="text-xs text-stone-500">
                        per {product.unit} (Min: {product.minOrder} {product.unit}s)
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <ImigongoDivider variant="subtle" className="my-4" />

                  {/* Key Highlights */}
                  <div className="mb-6 space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#6D3B1E]">
                      Key Highlights &amp; Care
                    </h4>
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <Check className="w-4 h-4 text-[#8C4F2B] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technical Specs Strip */}
                  <div className="mb-6 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DDD2] grid grid-cols-2 gap-3 text-xs">
                    {product.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="text-stone-400 font-medium">{spec.label}</span>
                        <span className="text-stone-800 font-bold mt-0.5">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="text-xs text-stone-500 mb-2">
                    <span className="font-bold text-[#3B1F0E]">Recommended for: </span>
                    {product.idealFor.join(' · ')}
                  </div>
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="p-6 sm:p-8 pt-0 border-t border-[#E8DDD2] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  {product.id === 'button-champignons' ? (
                    <span className="flex items-center gap-1.5 text-[#5C3217] font-semibold">
                      <Clock className="w-3.5 h-3.5" /> Daily dawn harvest in Nyamata
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[#8C4F2B] font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" /> Free grower consultation via WhatsApp
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onSelectProduct(product.id, product.minOrder)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold rounded-xl cursor-pointer transition-all shadow-xs active:scale-[0.98] whitespace-nowrap bg-[#5C3217] hover:bg-[#4A2810] text-white"
                >
                  {product.id === 'button-champignons' ? (
                    <>
                      <ShoppingBag className="w-3.5 h-3.5 text-[#F3D7C1]" />
                      <span>Order Fresh Champignons</span>
                    </>
                  ) : (
                    <>
                      <Sprout className="w-3.5 h-3.5 text-[#F3D7C1]" />
                      <span>Order Imigina Substrate</span>
                    </>
                  )}
                  <ArrowRight className="w-3.5 h-3.5 text-[#F3D7C1]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
