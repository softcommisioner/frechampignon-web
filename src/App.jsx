/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { Products } from './components/Products';
import { FarmStory } from './components/FarmStory';
import { YouthCareers } from './components/YouthCareers';
import { GrowerGuide } from './components/GrowerGuide';
import { SocialCommunity } from './components/SocialCommunity';
import { OrderCalculator } from './components/OrderCalculator';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { BRAND_DETAILS } from './data/mushroomData';
import { supabase } from './supabaseClient';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState('button-champignons');
  const [selectedQuantity, setSelectedQuantity] = useState(undefined);

  const handleSelectProduct = (productId, quantity) => {
    setSelectedProduct(productId);
    if (quantity) {
      setSelectedQuantity(quantity);
    }
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmitOrder = async (order) => {
    if (!supabase) {
      throw new Error(
        'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local.'
      );
    }

    const { error } = await supabase.from('orders').insert([
      {
        customer_name: order.customer_name,
        phone_number: order.phone_number,
        product_type: order.product_type,
        quantity: order.quantity,
        location: order.location,
      },
    ]);
    if (error) {
      throw error;
    }
  };

  const handleSubmitApplication = async (application) => {
    if (!supabase) {
      throw new Error(
        'Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local.'
      );
    }

    const { error } = await supabase.from('job_applications').insert([
      {
        applicant_name: application.applicant_name,
        phone_number: application.phone_number,
        skills_description: application.skills_description,
      },
    ]);
    if (error) {
      throw error;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 antialiased font-sans selection:bg-[#5C3217] selection:text-white">
      {/* 3-Zone Top Navigation Bar with Official Logo */}
      <Navbar onOpenOrderModal={() => handleScrollToSection('order')} />

      <main className="flex-grow">
        {/* 1. Hero Section with Benitha Karire Founder Story & Official Logo */}
        <Hero
          onSelectProduct={handleSelectProduct}
          onScrollToSection={handleScrollToSection}
        />

        {/* 2. Key Highlights / Trust Badges with Rwandan Cultural Motifs */}
        <TrustBadges />

        {/* 3. Enhanced Product Showcase Cards (Button Champignons & Imigina) */}
        <Products onSelectProduct={handleSelectProduct} />

        {/* 4. Brand Story, Leadership & Nyamata Farm (Benitha Karire @_benitha_k) */}
        <FarmStory />

        {/* 5. Youth Employment & Careers Portal: "Wandike Uvuga Icyo Ushoboye" */}
        <YouthCareers onSubmitApplication={handleSubmitApplication} />

        {/* 6. How to Grow Imigina & Rwandan Culinary Recipes */}
        <GrowerGuide />

        {/* 7. Social Media Community (TikTok & Instagram Links) */}
        <SocialCommunity />

        {/* 8. Location & Interactive Order / Contact Section */}
        <OrderCalculator
          key={`${selectedProduct}-${selectedQuantity || 'default'}`}
          initialProductId={selectedProduct}
          initialQuantity={selectedQuantity}
          onSubmitOrder={handleSubmitOrder}
        />

        {/* 9. FAQs */}
        <FaqSection />
      </main>

      {/* Footer with Cultural Rwandan Imigongo lines & Official Logo */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-30">
        <a
          href={`https://wa.me/${BRAND_DETAILS.whatsappNumber}?text=Muraho%20FreChampignon!%20I%20would%20like%20to%20inquire%20about%20ordering%20fresh%20button%20mushrooms%20or%20Imigina%20substrate.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-[#5C3217] hover:bg-[#4A2810] text-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all text-xs font-bold border border-[#8C4F2B]"
          aria-label="Chat with FreChampignon on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#F3D7C1]" />
          <span className="hidden sm:inline">WhatsApp Farm Desk</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
