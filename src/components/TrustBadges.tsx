import React from 'react';
import { Leaf, Sprout, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { TRUST_BADGES } from '../data/mushroomData';
import { ImigongoDivider } from './ImigongoPattern';

export const TrustBadges: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#5C3217]" />;
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-[#8C4F2B]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#5C3217]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#8C4F2B]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#5C3217]" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white border-b border-[#D8C7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-bold tracking-widest text-[#6D3B1E] uppercase mb-2">
            Our Agribusiness Values &amp; Heritage
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3B1F0E] tracking-tight font-display [text-wrap:balance]">
            Rooted in Nyamata, Driven by Purity and Youth Empowerment
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Every button mushroom harvested and every substrate block prepared carries our dedication to healthy food and Rwandan youth livelihoods.
          </p>
        </div>

        {/* 4 Pillars Grid with Imigongo touches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#D8C7B5] flex flex-col justify-between hover:border-[#6D3B1E] transition-all shadow-2xs group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#D8C7B5] flex items-center justify-center mb-5 shadow-2xs group-hover:scale-105 transition-transform">
                  {getIcon(badge.icon)}
                </div>

                <div className="mb-1 text-xs font-bold text-[#8C4F2B] italic">
                  {badge.kinyarwanda}
                </div>

                <h3 className="text-lg font-bold text-[#3B1F0E] mb-2 font-display">
                  {badge.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {badge.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DDD2] flex items-center gap-1.5 text-xs font-medium text-stone-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5C3217]" />
                <span>FreChampignon Verified Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
