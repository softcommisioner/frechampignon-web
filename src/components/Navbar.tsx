import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, Instagram } from 'lucide-react';
import { BRAND_DETAILS } from '../data/mushroomData';

interface NavbarProps {
  onOpenOrderModal: (product?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#D8C7B5] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          {/* Zone 1: Brand Wordmark with Official Logo Image */}
          <a
            href="#"
            className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
            aria-label="FreChampignon (iGihumyo) Home"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full bg-white border border-[#D8C7B5] overflow-hidden p-0.5 shadow-2xs group-hover:scale-105 transition-transform">
              <img
                src={BRAND_DETAILS.logoUrl}
                alt="FreChampignon iGihumyo Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#3B1F0E] font-display">
                  FreChampignon
                </span>
                <span className="text-[#8C4F2B] font-semibold text-xs tracking-normal">
                  (iGihumyo)
                </span>
              </div>
              <span className="text-[10px] text-stone-500 tracking-wider uppercase font-medium">
                Nyamata, Kigali, Rwanda
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-[#4A2810]">
            <a
              href="#products"
              className="hover:text-[#8C4F2B] transition-colors whitespace-nowrap shrink-0"
            >
              Products
            </a>
            <a
              href="#order"
              className="hover:text-[#8C4F2B] transition-colors whitespace-nowrap shrink-0"
            >
              Order
            </a>
            <a
              href="#careers"
              className="text-[#6D3B1E] hover:text-[#3B1F0E] font-bold transition-colors whitespace-nowrap shrink-0 flex items-center gap-1"
            >
              <span>Careers</span>
              <span className="text-[10px] px-1.5 py-0.2 bg-[#EFE0D3] rounded text-[#8C4F2B]">Urubyiruko</span>
            </a>
            <a
              href="#contact"
              className="hover:text-[#8C4F2B] transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Social & 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Quick Social Buttons */}
            <div className="flex items-center gap-2 border-r border-[#D8C7B5] pr-3">
              <a
                href={BRAND_DETAILS.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center hover:opacity-85 transition-opacity"
                title="Follow on TikTok"
                aria-label="TikTok"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href={BRAND_DETAILS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:opacity-85 transition-opacity"
                title="Follow on Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => onOpenOrderModal()}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold tracking-wide text-white bg-[#5C3217] hover:bg-[#4A2810] rounded-lg active:scale-95 transition-all shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#F3D7C1]" />
              <span>Order via WhatsApp</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#3B1F0E] hover:text-[#8C4F2B] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#D8C7B5] bg-[#FAF8F5] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-[#3B1F0E]">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-[#F3EAE1] transition-colors"
            >
              Products
            </a>
            <a
              href="#order"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-[#F3EAE1] transition-colors"
            >
              Order Fresh Mushrooms &amp; Imigina
            </a>
            <a
              href="#careers"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md bg-[#F4ECE3] text-[#5C3217] transition-colors flex items-center justify-between"
            >
              <span>Careers: Wandike Uvuga Icyo Ushoboye</span>
              <span className="text-xs px-2 py-0.5 rounded bg-[#5C3217] text-white">Join Us</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 rounded-md hover:bg-[#F3EAE1] transition-colors"
            >
              Contact &amp; Delivery Desk
            </a>
          </nav>

          {/* Social Row for Mobile */}
          <div className="pt-2 border-t border-[#D8C7B5] flex items-center gap-3">
            <span className="text-xs font-semibold text-stone-600">Follow us:</span>
            <a
              href={BRAND_DETAILS.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-stone-900 px-3 py-1.5 rounded-lg bg-stone-200"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
              <span>TikTok</span>
            </a>
            <a
              href={BRAND_DETAILS.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-rose-800 px-3 py-1.5 rounded-lg bg-rose-100"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#5C3217] rounded-lg hover:bg-[#4A2810] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#F3D7C1]" />
              <span>Order on WhatsApp (Fast Reply)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
