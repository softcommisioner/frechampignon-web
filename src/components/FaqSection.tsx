import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/mushroomData';
import { ImigongoDivider } from './ImigongoPattern';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#D8C7B5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-widest text-[#6D3B1E] uppercase mb-2">
            Frequently Asked Questions
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3B1F0E] tracking-tight font-display [text-wrap:balance]">
            Everything You Need to Know About FreChampignon
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Information about our founder Benitha Karire, daily Kigali deliveries, substrate care, youth applications, and payments.
          </p>
          <ImigongoDivider variant="arch" className="my-2 max-w-xs mx-auto" />
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#D8C7B5] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#3B1F0E]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8C4F2B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#5C3217]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#E8DDD2] pt-3 bg-[#FAF8F5]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
