import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Sprout, MapPin, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { FARM_METRICS, BRAND_DETAILS } from '../data/mushroomData';
import { ImigongoDivider } from './ImigongoPattern';

interface HeroProps {
  onSelectProduct: (productId: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProduct, onScrollToSection }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-22 border-b border-[#D8C7B5]">
      {/* Subtle organic warm background tint with soft texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F2EB] via-[#FAF8F5] to-[#F5ECE2] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Rwandan Imigongo decorative arch banner */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#6D3B1E] uppercase">
            <span>Rwandan Agribusiness Startup</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Founded by Benitha Karire</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Late 2026</span>
          </div>
          <ImigongoDivider variant="arch" className="my-2 max-w-sm w-full" />
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Mission & Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Logo Emblem on Mobile / Tablet */}
            <div className="flex items-center gap-3.5 mb-4 lg:hidden">
              <img
                src={BRAND_DETAILS.logoUrl}
                alt="FreChampignon iGihumyo"
                className="w-16 h-16 object-contain rounded-xl bg-white border border-[#D8C7B5] p-1 shadow-xs"
              />
              <div>
                <h2 className="text-xl font-bold text-[#3B1F0E] font-display">FreChampignon</h2>
                <p className="text-xs text-[#8C4F2B] font-medium">Fresh (English) + Champignon (French)</p>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#3B1F0E] tracking-tight leading-[1.12] mb-4 [text-wrap:balance] font-display">
              Fresh Mushrooms &amp; Growing Substrates in Rwanda
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-[#5C3217] leading-relaxed mb-3 max-w-2xl">
              “Good food starts with what you grow and what you put on your plate.”
            </p>

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-4 max-w-2xl font-normal">
              Specializing in freshly harvested <strong className="text-[#3B1F0E]">Button Mushrooms (Champignons)</strong> for Kigali’s homes and restaurants, and laboratory-colonized <strong className="text-[#3B1F0E]">Substrate Blocks (Imigina)</strong> empowering Rwandan youth and local growers.
            </p>

            {/* Brand Origin Snippet */}
            <div className="p-3.5 rounded-xl bg-[#F4EBE1] border border-[#DFC9B5] mb-7 max-w-2xl text-xs text-[#5C3217] flex items-start gap-2.5">
              <span className="font-bold text-[#3B1F0E] shrink-0">Brand Story:</span>
              <span>
                Founded by <strong className="text-[#3B1F0E]">Benitha Karire</strong> (<a href={BRAND_DETAILS.socials.founderInstagram} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#8C4F2B]">@_benitha_k</a>), FreChampignon unites English <em>“Fresh”</em> and French <em>“Champignon”</em> to deliver clean, locally grown culinary excellence.
              </span>
            </div>

            {/* Primary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={() => onSelectProduct('button-champignons')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#5C3217] hover:bg-[#4A2810] rounded-xl shadow-xs hover:shadow active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4 text-[#F3D7C1]" />
                <span>Order Fresh Mushrooms</span>
                <ArrowRight className="w-4 h-4 text-[#F3D7C1]" />
              </button>

              <button
                onClick={() => onSelectProduct('imigina-substrate')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-[#3B1F0E] bg-white hover:bg-[#FAF8F5] border border-[#D8C7B5] hover:border-[#8C4F2B] rounded-xl shadow-2xs hover:shadow-xs active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                <Sprout className="w-4 h-4 text-[#8C4F2B]" />
                <span>Get Imigina Blocks</span>
              </button>
            </div>

            {/* Clean Proof Adjacency: Location & Freshness */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-stone-600 pt-2 border-t border-[#D8C7B5]">
              <div className="flex items-center gap-1.5 text-[#3B1F0E] font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#8C4F2B]" />
                <span>Cultivated in Nyamata, Bugesera</span>
              </div>
              <span aria-hidden="true" className="text-stone-300 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-[#3B1F0E] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#8C4F2B]" />
                <span>Dawn harvest &amp; Kigali express delivery</span>
              </div>
              <span aria-hidden="true" className="text-stone-300 hidden sm:inline">·</span>
              <a
                href="#careers"
                className="text-[#6D3B1E] font-bold hover:underline"
              >
                Youth Careers: Wandike uvuga icyo ushoboye →
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Featuring Official Logo Art */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-md border-2 border-[#D8C7B5] bg-white p-6 sm:p-8 flex flex-col items-center justify-center text-center">
              {/* Traditional Imigongo Border Frame inside Card */}
              <div className="w-full relative flex flex-col items-center">
                {/* Official Brand Logo */}
                <div className="relative max-w-[280px] sm:max-w-[320px] mx-auto transition-transform hover:scale-105 duration-300">
                  <img
                    src={BRAND_DETAILS.logoUrl}
                    alt="FreChampignon iGihumyo Logo with Traditional Imigongo Arch and Button Mushrooms"
                    className="w-full h-auto object-contain drop-shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <ImigongoDivider variant="arch" className="my-3 w-full" />

                <div className="space-y-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#6D3B1E]">
                    Fresh Rwandan Button Mushrooms (Champignons)
                  </p>
                  <p className="text-xs text-stone-600 max-w-xs mx-auto">
                    Naturally grown with care, locally sourced, and proudly rooted in Rwanda.
                  </p>
                </div>

                {/* Substrate & Mushroom highlights strip */}
                <div className="mt-4 pt-3 border-t border-[#E8DDD2] w-full grid grid-cols-2 gap-2 text-left">
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E8DDD2]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C4F2B] block">
                      Daily Harvest
                    </span>
                    <span className="text-xs font-bold text-[#3B1F0E]">Fresh Button Caps</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#FAF8F5] border border-[#E8DDD2]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C4F2B] block">
                      Grower Blocks
                    </span>
                    <span className="text-xs font-bold text-[#3B1F0E]">High-Yield Imigina</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Full-width Metric Strip below the split */}
        <div className="mt-12 pt-8 border-t border-[#D8C7B5] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {FARM_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-2xl sm:text-3xl font-bold font-display text-[#3B1F0E] tabular-nums tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-stone-800 mt-0.5">
                {metric.label}
              </span>
              <span className="text-xs text-stone-500 mt-0.5">
                {metric.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
