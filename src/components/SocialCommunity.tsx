import React from 'react';
import { ExternalLink, Heart, Sparkles, Video, Instagram, Users, ArrowUpRight } from 'lucide-react';
import { BRAND_DETAILS } from '../data/mushroomData';
import { ImigongoDivider } from './ImigongoPattern';

export const SocialCommunity: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#D8C7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#6D3B1E] uppercase mb-2">
            <span>Join Our Journey</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Urugendo Rwacu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#3B1F0E] tracking-tight font-display [text-wrap:balance]">
            Connect with FreChampignon &amp; Benitha Karire
          </h2>

          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Follow our daily farm harvests in Nyamata, mushroom recipes, youth training behind-the-scenes, and startup journey on TikTok and Instagram.
          </p>

          <ImigongoDivider variant="subtle" className="my-4 max-w-xs mx-auto" />
        </div>

        {/* Social Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* TikTok Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#D8C7B5] hover:border-[#6D3B1E] transition-all flex flex-col justify-between group shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shadow-xs">
                  {/* Custom TikTok SVG icon */}
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-[#8C4F2B] px-2.5 py-1 rounded-full bg-[#EFE0D3]">
                  Video Updates &amp; Farming Tips
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#3B1F0E] font-display mb-1">
                FreChampignon TikTok
              </h3>
              <p className="text-xs font-semibold text-[#8C4F2B] mb-3">
                {BRAND_DETAILS.socials.tiktokHandle}
              </p>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                Watch how button champignons are cultivated, mushroom harvesting ASMR, farm life in Bugesera, and cooking tutorials with Benitha Karire.
              </p>
            </div>

            <a
              href={BRAND_DETAILS.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-3.5 text-xs font-bold text-white bg-black hover:bg-stone-800 rounded-xl transition-colors shadow-xs"
            >
              <span className="flex items-center gap-2">
                <Video className="w-4 h-4 text-emerald-400" />
                <span>Follow on TikTok</span>
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Instagram Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#D8C7B5] hover:border-[#6D3B1E] transition-all flex flex-col justify-between group shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-[#8C4F2B] px-2.5 py-1 rounded-full bg-[#EFE0D3]">
                  Official Profile &amp; Founder
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#3B1F0E] font-display mb-1">
                FreChampignon Instagram
              </h3>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C4F2B] mb-3">
                <span>{BRAND_DETAILS.socials.instagramHandle}</span>
                <span>·</span>
                <a
                  href={BRAND_DETAILS.socials.founderInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#5C3217]"
                >
                  Founder: {BRAND_DETAILS.socials.founderInstagramHandle}
                </a>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                High-resolution photography of fresh button mushrooms, customer spotlights, restaurant partnerships across Kigali, and founder updates.
              </p>
            </div>

            <a
              href={BRAND_DETAILS.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-3.5 text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-amber-700 hover:from-rose-700 hover:to-amber-800 rounded-xl transition-all shadow-xs"
            >
              <span className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-amber-200" />
                <span>Follow on Instagram</span>
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
