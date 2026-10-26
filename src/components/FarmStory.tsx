import React from 'react';
import { MapPin, Check, Users, Sparkles, Sprout, Heart, Instagram } from 'lucide-react';
import { BRAND_DETAILS } from '../data/mushroomData';
import { ImigongoDivider } from './ImigongoPattern';

export const FarmStory: React.FC = () => {
  return (
    <section id="about-founder" className="py-16 sm:py-24 bg-white border-b border-[#D8C7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Farm Photo & Founder Badge Showcase (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D8C7B5] shadow-md aspect-[4/3] bg-[#FAF8F5]">
              <img
                src="/assets/images/farm_nyamata_cultivation_1793019546910.jpg"
                alt="Agricultural specialist tending mushroom harvest with care in Nyamata, Rwanda"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#261308]/90 via-[#261308]/60 to-transparent text-white">
                <p className="text-xs font-bold text-[#F3D7C1] uppercase tracking-wider">
                  Nyamata Farm Facility, Bugesera
                </p>
                <p className="text-xs text-stone-200 mt-0.5">
                  Controlled humidity chambers for button mushrooms &amp; Imigina blocks
                </p>
              </div>
            </div>

            {/* Founder Card Overlay */}
            <div className="mt-4 p-4 rounded-2xl bg-[#FAF8F5] border border-[#D8C7B5] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5C3217] text-[#FAF8F5] flex items-center justify-center font-bold font-display text-sm">
                  BK
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#3B1F0E]">Benitha Karire</h4>
                  <p className="text-[11px] text-[#8C4F2B]">Founder &amp; Managing Director</p>
                </div>
              </div>

              <a
                href={BRAND_DETAILS.socials.founderInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#D8C7B5] text-xs font-semibold text-[#5C3217] hover:border-[#5C3217] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-700" />
                <span>{BRAND_DETAILS.founderHandle}</span>
              </a>
            </div>
          </div>

          {/* Story & Social Impact (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#6D3B1E] uppercase mb-2">
              <span>Brand Story &amp; Leadership</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Launched Late 2026</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#3B1F0E] tracking-tight mb-4 [text-wrap:balance] font-display">
              Where Rwandan Agriculture Meets Culinary Innovation
            </h2>

            <ImigongoDivider variant="arch" className="my-2 max-w-xs" />

            <p className="text-stone-700 text-base leading-relaxed mb-4">
              <strong className="text-[#3B1F0E]">FreChampignon (iGihumyo)</strong> was founded in late 2026 by Rwandan agribusiness entrepreneur <strong className="text-[#3B1F0E]">Benitha Karire</strong> (<a href={BRAND_DETAILS.socials.founderInstagram} target="_blank" rel="noopener noreferrer" className="text-[#8C4F2B] font-semibold hover:underline">@_benitha_k</a>) with a clear, inspiring mission: <em className="text-[#5C3217] font-semibold">“Good food starts with what you grow and what you put on your plate.”</em>
            </p>

            <div className="p-4 rounded-2xl bg-[#F7F2EB] border border-[#D8C7B5] mb-5 text-sm text-[#4A2810] space-y-2">
              <p className="font-bold text-[#3B1F0E]">
                What’s behind the name "FreChampignon"?
              </p>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                The name ingeniously blends <strong className="text-[#3B1F0E]">“Fresh”</strong> (English) and <strong className="text-[#3B1F0E]">“Champignon”</strong> (the French word for mushroom), celebrating Rwanda’s multilingual dynamism and deep culinary love for authentic, pure mushrooms (<span className="text-[#8C4F2B] font-semibold italic">iGihumyo</span>).
              </p>
            </div>

            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-6">
              Headquartered in Nyamata (Bugesera District), just 25 km from Kigali, our facility specializes in cultivating pristine fresh button mushrooms and high-performance substrate blocks. We believe in high hygiene, pure substrate pasteurization, zero chemical pesticides, and active youth employment.
            </p>

            {/* Impact Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#D8C7B5]">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DDD2]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#5C3217] mb-1">
                  Youth Careers &amp; Inclusion
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Through the <em>"Wandike uvuga icyo ushoboye"</em> campaign, we open doors for young Rwandans without requiring academic barriers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8DDD2]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#8C4F2B] mb-1">
                  Sustainable Rwandan Soil
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Spent mushroom substrate tubes return to local Bugesera smallholders as high-potency organic soil amendment and compost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
