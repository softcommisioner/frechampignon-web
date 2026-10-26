import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';
import { BRAND_DETAILS } from '../data/mushroomData';
import { ImigongoDivider } from './ImigongoPattern';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#261308] text-[#F3EAE1] pt-16 pb-12 border-t-4 border-[#8C4F2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#4A2810]">
          {/* Brand & Slogan with Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white p-1 border border-[#8C4F2B] overflow-hidden shrink-0 shadow-xs">
                <img
                  src={BRAND_DETAILS.logoUrl}
                  alt="FreChampignon iGihumyo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold font-display text-white tracking-tight">
                    FreChampignon
                  </span>
                  <span className="text-[#F3D7C1] font-semibold text-xs">
                    (iGihumyo)
                  </span>
                </div>
                <p className="text-[11px] text-[#D8C7B5]">
                  Fresh (English) + Champignon (French)
                </p>
              </div>
            </div>

            <p className="text-[#D8C7B5] text-sm leading-relaxed max-w-sm italic">
              “{BRAND_DETAILS.tagline}”
            </p>

            <p className="text-xs text-[#BFADA0] leading-relaxed max-w-sm">
              Founded in late 2026 by <strong>Benitha Karire</strong> (<a href={BRAND_DETAILS.socials.founderInstagram} target="_blank" rel="noopener noreferrer" className="text-[#F3D7C1] underline">{BRAND_DETAILS.founderHandle}</a>). Producing premium fresh button mushrooms and high-yield colonized Imigina substrate blocks in Nyamata, Bugesera.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D8C7B5] pt-1">
              <MapPin className="w-4 h-4 text-[#C27838] shrink-0" />
              <span>Nyamata, Bugesera District · Kigali, Rwanda</span>
            </div>
          </div>

          {/* Quick Links & Youth Initiative */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3D7C1]">
              Navigation &amp; Careers
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D8C7B5]">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Button Mushrooms (Champignons)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Mushroom Substrate (Imigina)
                </a>
              </li>
              <li>
                <a href="#about-founder" className="hover:text-white transition-colors">
                  Founder Benitha Karire Story
                </a>
              </li>
              <li>
                <a href="#careers" className="text-[#F3D7C1] font-semibold hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Wandike Uvuga Icyo Ushoboye</span>
                  <span className="text-[10px] px-1 rounded bg-[#5C3217] text-white">Youth</span>
                </a>
              </li>
              <li>
                <a href="#how-to-grow" className="hover:text-white transition-colors">
                  Grower’s Guide &amp; Recipes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Order &amp; Inquiries Desk
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Social & Orders */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F3D7C1]">
              Community &amp; Social Channels
            </h4>
            <p className="text-xs text-[#BFADA0]">
              Follow our daily farm harvests and cooking inspiration on our official platforms:
            </p>

            {/* Social Buttons */}
            <div className="flex flex-col gap-2 pt-1">
              <a
                href={BRAND_DETAILS.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#3B1F0E] hover:bg-[#4A2810] border border-[#5C3217] text-white transition-colors text-xs font-bold"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                  <span>FreChampignon on TikTok</span>
                </span>
                <span className="text-[11px] text-[#D8C7B5]">{BRAND_DETAILS.socials.tiktokHandle}</span>
              </a>

              <a
                href={BRAND_DETAILS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#3B1F0E] hover:bg-[#4A2810] border border-[#5C3217] text-white transition-colors text-xs font-bold"
              >
                <span className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-rose-400" />
                  <span>Instagram Profile</span>
                </span>
                <span className="text-[11px] text-[#D8C7B5]">{BRAND_DETAILS.socials.instagramHandle}</span>
              </a>

              <a
                href={`https://wa.me/${BRAND_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#5C3217] hover:bg-[#6D3B1E] text-white transition-colors text-xs font-bold shadow-xs"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#F3D7C1]" />
                  <span>WhatsApp Farm Orders</span>
                </span>
                <span className="text-[11px] text-[#F3D7C1] font-mono">{BRAND_DETAILS.displayPhone}</span>
              </a>
            </div>

            <div className="pt-2">
              <span className="text-[11px] text-[#BFADA0] block mb-1">Local Payments Accepted:</span>
              <div className="flex items-center gap-2 text-xs text-[#F3D7C1]">
                <span className="px-2 py-0.5 rounded bg-[#3B1F0E] border border-[#5C3217]">MTN MoMo</span>
                <span className="px-2 py-0.5 rounded bg-[#3B1F0E] border border-[#5C3217]">Airtel Money</span>
                <span className="px-2 py-0.5 rounded bg-[#3B1F0E] border border-[#5C3217]">Cash on Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Traditional Imigongo divider in footer */}
        <ImigongoDivider variant="arch" className="my-6 text-[#8C4F2B]" />

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#BFADA0]">
          <p>© {new Date().getFullYear()} FreChampignon (iGihumyo). Founded by Benitha Karire. All rights reserved. Byakorewe mu Rwanda.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#F3D7C1] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
