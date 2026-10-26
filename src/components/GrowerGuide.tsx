import React, { useState } from 'react';
import { Sprout, Utensils, CheckCircle2 } from 'lucide-react';
import { GROWER_STEPS } from '../data/mushroomData';
import { ImigongoDivider } from './ImigongoPattern';

export const GrowerGuide: React.FC = () => {
  const [activeGuide, setActiveGuide] = useState<'grow' | 'cook'>('grow');

  const recipes = [
    {
      title: 'Button Champignon & Garlic Pan Sauté',
      time: '12 mins',
      servings: '2–3 servings',
      description: 'Golden-seared fresh button champignons in butter or olive oil with thinly sliced garlic, fresh thyme or rosemary, crushed sea salt, and a dash of black pepper. Perfect alongside crusty bread or rice.',
    },
    {
      title: 'Ibihumyo n’Ibitoki (Mushroom & Rwandan Plantains)',
      time: '25 mins',
      servings: '4 servings',
      description: 'A beloved Rwandan staple. Sauté fresh halved button champignons with sweet red onions, garlic, and fresh local tomatoes, simmered gently with tender steamed green plantains (ibitoki).',
    },
    {
      title: 'Creamy Champignon & Groundnut Soup',
      time: '20 mins',
      servings: '4 servings',
      description: 'Slow-simmered sliced button mushrooms with creamy roasted groundnut (peanut) paste, shallots, and fresh celery. Exceptionally rich in natural plant protein and comforting umami.',
    },
  ];

  return (
    <section id="how-to-grow" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#D8C7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs font-bold tracking-widest text-[#6D3B1E] uppercase mb-2">
            Practical Knowledge &amp; Good Food
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3B1F0E] tracking-tight font-display [text-wrap:balance]">
            Simple to Grow with Imigina, Exquisite on Your Plate
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Whether you want to cultivate high-yield Imigina blocks at home or prepare a gourmet mushroom dinner tonight.
          </p>

          <ImigongoDivider variant="arch" className="my-2 max-w-xs mx-auto" />

          {/* Interactive Guide Switcher */}
          <div className="inline-flex p-1 bg-[#EFE8DE] rounded-xl mt-4 border border-[#D8C7B5]">
            <button
              onClick={() => setActiveGuide('grow')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeGuide === 'grow'
                  ? 'bg-white text-[#3B1F0E] shadow-2xs'
                  : 'text-stone-600 hover:text-[#3B1F0E]'
              }`}
            >
              <Sprout className="w-3.5 h-3.5 text-[#8C4F2B]" />
              <span>How to Grow Imigina (4 Steps)</span>
            </button>
            <button
              onClick={() => setActiveGuide('cook')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeGuide === 'cook'
                  ? 'bg-white text-[#3B1F0E] shadow-2xs'
                  : 'text-stone-600 hover:text-[#3B1F0E]'
              }`}
            >
              <Utensils className="w-3.5 h-3.5 text-[#5C3217]" />
              <span>Champignon Culinary Recipes</span>
            </button>
          </div>
        </div>

        {activeGuide === 'grow' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GROWER_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#D8C7B5] shadow-2xs flex flex-col justify-between hover:border-[#6D3B1E] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold font-display text-[#3B1F0E] tabular-nums">
                      {item.step}
                    </span>
                    <span className="text-xs text-stone-400 font-mono">Stage {idx + 1}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#3B1F0E] mb-1 font-display">
                    {item.title}
                  </h3>

                  <div className="text-xs font-bold text-[#8C4F2B] italic mb-3">
                    {item.kinyarwanda}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E8DDD2] flex items-center text-xs text-[#5C3217] font-medium gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C4F2B]" />
                  <span>Kinyarwanda guide included with order</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.map((recipe, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#D8C7B5] shadow-2xs flex flex-col justify-between hover:border-[#6D3B1E] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-3 pb-2 border-b border-[#E8DDD2]">
                    <span className="font-bold text-[#8C4F2B]">Prep: {recipe.time}</span>
                    <span className="font-medium">{recipe.servings}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#3B1F0E] mb-2 font-display">
                    {recipe.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {recipe.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E8DDD2] flex items-center justify-between text-xs text-[#5C3217] font-semibold">
                  <span>100% Rich in Umami &amp; Protein</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8C4F2B]" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
