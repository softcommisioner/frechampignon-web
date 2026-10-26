import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ShoppingBag,
  Sprout,
  Loader2,
} from 'lucide-react';
import { PRODUCTS, BRAND_DETAILS } from '../data/mushroomData';
import { ImigongoDivider } from './ImigongoPattern';

interface OrderPayload {
  customer_name: string;
  phone_number: string;
  product_type: string;
  quantity: string;
  location: string;
}

interface OrderCalculatorProps {
  initialProductId?: string;
  initialQuantity?: number;
  onSubmitOrder: (order: OrderPayload) => Promise<void>;
}

export const OrderCalculator: React.FC<OrderCalculatorProps> = ({
  initialProductId = 'button-champignons',
  initialQuantity,
  onSubmitOrder,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<string>(initialProductId);
  const [quantity, setQuantity] = useState<number>(
    initialQuantity || (initialProductId === 'button-champignons' ? 2 : 20)
  );
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [deliveryLocation, setDeliveryLocation] = useState<string>('kigali');
  const [specificAddress, setSpecificAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const currentProduct = PRODUCTS.find((p) => p.id === selectedProduct) || PRODUCTS[0];

  const unitPrice = currentProduct.pricePerUnit;
  const subtotal = unitPrice * quantity;
  const deliveryFee =
    deliveryLocation === 'nyamata-pickup'
      ? 0
      : deliveryLocation === 'kigali'
      ? subtotal >= 30000 ? 0 : 2000
      : 3000;
  const grandTotal = subtotal + deliveryFee;

  const handleProductChange = (prodId: string) => {
    setSelectedProduct(prodId);
    if (prodId === 'button-champignons') {
      setQuantity(Math.max(1, quantity > 20 ? 2 : quantity));
    } else {
      setQuantity(Math.max(10, quantity < 10 ? 20 : quantity));
    }
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!customerName.trim()) {
      errors.name = 'Please enter your name / Andika amazina yawe';
    }
    if (!phone.trim()) {
      errors.phone = 'Please provide your phone / WhatsApp number';
    } else if (phone.trim().length < 8) {
      errors.phone = 'Please provide a valid Rwandan phone number (e.g. 078...)';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getDeliveryLocationLabel = () => {
    if (deliveryLocation === 'kigali') {
      return `Kigali Delivery (${specificAddress || 'Address to be confirmed'})`;
    }
    if (deliveryLocation === 'nyamata-pickup') {
      return 'Nyamata Farm Pick-up';
    }
    return `Upcountry District (${specificAddress || 'Transport Hub'})`;
  };

  const generateWhatsAppMessage = () => {
    const locationLabel = getDeliveryLocationLabel();

    const text = `Muraho FreChampignon (iGihumyo)! 🍄
I would like to place an order:
• Product: ${currentProduct.name} (${currentProduct.kinyarwandaName})
• Quantity: ${quantity} ${currentProduct.unit}${quantity > 1 ? 's' : ''}
• Estimated Amount: ${subtotal.toLocaleString()} RWF
• Delivery Option: ${locationLabel}
• Name: ${customerName || 'Customer'}
• Phone: ${phone || 'Contact via this WhatsApp'}
${notes ? `• Note: ${notes}` : ''}

Please confirm harvest availability and delivery schedule. Murakoze!`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const url = `https://wa.me/${BRAND_DETAILS.whatsappNumber}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitError('');
    setIsSubmitting(true);

    try {
      await onSubmitOrder({
        customer_name: customerName.trim(),
        phone_number: phone.trim(),
        product_type: selectedProduct === 'button-champignons' ? 'Fresh Mushrooms' : 'Imigina',
        quantity: String(quantity),
        location: getDeliveryLocationLabel(),
      });
      setIsSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Something went wrong while submitting your order. Please try again.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-[#D8C7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#6D3B1E] uppercase mb-2">
            <span>Direct Farm Orders &amp; Inquiries</span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>Nyamata, Bugesera &amp; Kigali</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3B1F0E] tracking-tight font-display [text-wrap:balance]">
            Order Fresh Button Mushrooms or Imigina Blocks
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Dynamic price estimate in Rwandan Francs (RWF). Order directly on WhatsApp for same-day Kigali delivery or book farm collection in Nyamata.
          </p>
          <ImigongoDivider variant="arch" className="my-3 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Order Calculator Form (Left 7 cols) */}
          <div id="order" className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl border border-[#D8C7B5] p-6 sm:p-8 shadow-xs scroll-mt-24">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EFE0D3] text-[#5C3217] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#3B1F0E] font-display">
                  Murakoze cyane! Order Request Received
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, <strong className="text-stone-900">{customerName}</strong>. Our farm dispatch team in Nyamata has received your booking for{' '}
                  <strong className="text-[#3B1F0E] font-bold">
                    {quantity} {currentProduct.unit}s of {currentProduct.name}
                  </strong>
                  .
                </p>

                <div className="p-4 bg-white rounded-2xl border border-[#D8C7B5] text-left max-w-md mx-auto text-xs space-y-1.5 font-mono text-stone-800">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Estimated Total:</span>
                    <span className="font-bold text-[#5C3217]">{grandTotal.toLocaleString()} RWF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Contact:</span>
                    <span>{phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Delivery:</span>
                    <span>{deliveryLocation === 'kigali' ? 'Kigali Express Delivery' : deliveryLocation}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={`https://wa.me/${BRAND_DETAILS.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-[#5C3217] hover:bg-[#4A2810] rounded-xl transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#F3D7C1]" />
                    <span>Confirm on WhatsApp for Fastest Delivery</span>
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-3.5 text-xs font-medium text-stone-700 bg-white border border-[#D8C7B5] rounded-xl hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    Modify / New Order
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-6">
                {/* 1. Product Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F0E] mb-2">
                    1. Choose Product / Hitamo Igicuruzwa
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleProductChange('button-champignons')}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedProduct === 'button-champignons'
                          ? 'bg-[#3B1F0E] text-white border-[#3B1F0E] shadow-xs'
                          : 'bg-white text-stone-800 border-[#D8C7B5] hover:border-[#8C4F2B]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold">Button Champignons</span>
                        <ShoppingBag className="w-4 h-4 text-[#F3D7C1]" />
                      </div>
                      <div className={`text-xs ${selectedProduct === 'button-champignons' ? 'text-[#F3D7C1]' : 'text-[#8C4F2B] font-medium'}`}>
                        Ibihumyo bya Champignon
                      </div>
                      <div className="mt-2 text-xs tabular-nums font-semibold">
                        4,500 RWF / kg
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleProductChange('imigina-substrate')}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedProduct === 'imigina-substrate'
                          ? 'bg-[#3B1F0E] text-white border-[#3B1F0E] shadow-xs'
                          : 'bg-white text-stone-800 border-[#D8C7B5] hover:border-[#8C4F2B]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold">Imigina Substrate Blocks</span>
                        <Sprout className="w-4 h-4 text-[#F3D7C1]" />
                      </div>
                      <div className={`text-xs ${selectedProduct === 'imigina-substrate' ? 'text-[#F3D7C1]' : 'text-[#8C4F2B] font-medium'}`}>
                        Imigina y’Ibihumyo
                      </div>
                      <div className="mt-2 text-xs tabular-nums font-semibold">
                        600 RWF / tube
                      </div>
                    </button>
                  </div>
                </div>

                {/* 2. Quantity Selector with Quick Buttons */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F0E]">
                      2. Quantity Needed / Ingano
                    </label>
                    <span className="text-xs text-stone-500">
                      Min order: {currentProduct.minOrder} {currentProduct.unit}s
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min={currentProduct.minOrder}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(currentProduct.minOrder, parseInt(e.target.value) || currentProduct.minOrder))}
                      className="w-32 px-3.5 py-2.5 bg-white border border-[#D8C7B5] rounded-xl text-[#3B1F0E] font-bold tabular-nums text-base focus:outline-none focus:ring-2 focus:ring-[#5C3217]"
                    />
                    <span className="text-sm font-bold text-[#3B1F0E]">
                      {currentProduct.unit}s
                    </span>

                    {/* Quick quantity increments */}
                    <div className="flex items-center gap-1.5 ml-auto">
                      {selectedProduct === 'button-champignons' ? (
                        <>
                          {[1, 2, 5, 10].map((qty) => (
                            <button
                              key={qty}
                              type="button"
                              onClick={() => setQuantity(qty)}
                              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                                quantity === qty ? 'bg-[#5C3217] text-white' : 'bg-[#EFE8DE] hover:bg-[#E2D6C6] text-stone-800'
                              }`}
                            >
                              {qty} kg
                            </button>
                          ))}
                        </>
                      ) : (
                        <>
                          {[10, 25, 50, 100].map((qty) => (
                            <button
                              key={qty}
                              type="button"
                              onClick={() => setQuantity(qty)}
                              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                                quantity === qty ? 'bg-[#5C3217] text-white' : 'bg-[#EFE8DE] hover:bg-[#E2D6C6] text-stone-800'
                              }`}
                            >
                              {qty}
                            </button>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. Delivery Method */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F0E] mb-2">
                    3. Delivery / Pickup Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setDeliveryLocation('kigali')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        deliveryLocation === 'kigali'
                          ? 'bg-[#5C3217] text-white border-[#5C3217]'
                          : 'bg-white text-stone-700 border-[#D8C7B5] hover:border-[#8C4F2B]'
                      }`}
                    >
                      <div className="font-bold">Kigali Delivery</div>
                      <div className="opacity-80 text-[11px] mt-0.5">Nyarugenge, Gasabo, Kicukiro</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryLocation('nyamata-pickup')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        deliveryLocation === 'nyamata-pickup'
                          ? 'bg-[#5C3217] text-white border-[#5C3217]'
                          : 'bg-white text-stone-700 border-[#D8C7B5] hover:border-[#8C4F2B]'
                      }`}
                    >
                      <div className="font-bold">Nyamata Farm Pick-up</div>
                      <div className="opacity-80 text-[11px] mt-0.5">Free at farm facility</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryLocation('upcountry')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        deliveryLocation === 'upcountry'
                          ? 'bg-[#5C3217] text-white border-[#5C3217]'
                          : 'bg-white text-stone-700 border-[#D8C7B5] hover:border-[#8C4F2B]'
                      }`}
                    >
                      <div className="font-bold">Upcountry Districts</div>
                      <div className="opacity-80 text-[11px] mt-0.5">Via bus courier service</div>
                    </button>
                  </div>
                </div>

                {/* 4. Customer Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#3B1F0E] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Jean Damascène / Marie"
                      value={customerName}
                      onChange={(e) => {
                        setCustomerName(e.target.value);
                        if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#5C3217] ${
                        formErrors.name ? 'border-red-500' : 'border-[#D8C7B5]'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#3B1F0E] mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 078 812 3456 or +250..."
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-white border rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#5C3217] ${
                        formErrors.phone ? 'border-red-500' : 'border-[#D8C7B5]'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-red-600 mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Specific address */}
                <div>
                  <label className="block text-xs font-semibold text-[#3B1F0E] mb-1">
                    Delivery Address / Neighborhood
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kimironko, Kiyovu, Gisozi, or Nyamata Center"
                    value={specificAddress}
                    onChange={(e) => setSpecificAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#D8C7B5] rounded-xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#5C3217]"
                  />
                </div>

                {/* Order Summary & Pricing Strip */}
                <div className="p-4 rounded-2xl bg-white border border-[#D8C7B5] space-y-2">
                  <div className="flex justify-between text-xs text-stone-600">
                    <span>
                      {quantity}x {currentProduct.name} ({currentProduct.pricePerUnit.toLocaleString()} RWF/{currentProduct.unit}):
                    </span>
                    <span className="font-semibold text-stone-800 tabular-nums">
                      {subtotal.toLocaleString()} RWF
                    </span>
                  </div>
                  <div className="flex justify-between text-xs text-stone-600">
                    <span>Delivery Estimate:</span>
                    <span className="font-semibold text-stone-800 tabular-nums">
                      {deliveryFee === 0 ? 'Free' : `${deliveryFee.toLocaleString()} RWF`}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-stone-100 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-[#3B1F0E]">Total Estimated Amount:</span>
                    <span className="text-xl font-bold font-display text-[#3B1F0E] tabular-nums">
                      {grandTotal.toLocaleString()} RWF
                    </span>
                  </div>
                </div>

                {submitError && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700"
                  >
                    {submitError}
                  </div>
                )}

                {/* Action Buttons: Direct WhatsApp order (Primary) and Web form submit */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppOrder}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs sm:text-sm font-bold text-white bg-[#5C3217] hover:bg-[#4A2810] rounded-xl shadow-xs active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-[#F3D7C1]" />
                    <span>Order via WhatsApp (Immediate Reply)</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs sm:text-sm font-bold text-[#3B1F0E] bg-white hover:bg-[#FAF8F5] border border-[#D8C7B5] rounded-xl transition-colors cursor-pointer whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 text-[#8C4F2B] animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 text-[#8C4F2B]" />
                    )}
                    <span>{isSubmitting ? 'Sending Order...' : 'Send Order Form'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Location & Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Card */}
            <div className="bg-[#FAF8F5] rounded-3xl border border-[#D8C7B5] p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6D3B1E] mb-3">
                <MapPin className="w-4 h-4 text-[#8C4F2B]" />
                <span>Farm &amp; Distribution Operations</span>
              </div>

              <h3 className="text-xl font-bold text-[#3B1F0E] mb-1 font-display">
                FreChampignon (iGihumyo)
              </h3>
              <p className="text-xs text-[#8C4F2B] font-semibold mb-4">
                Founded by Benitha Karire · Late 2026
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600">
                <p className="flex items-start gap-2">
                  <span className="font-bold text-[#3B1F0E] shrink-0">Farm Facility:</span>
                  <span>Nyamata Sector, Bugesera District, Eastern Province (25 min from Kigali)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-bold text-[#3B1F0E] shrink-0">Kigali Hub:</span>
                  <span>Daily morning drop-offs to restaurants, supermarkets &amp; residences</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="font-bold text-[#3B1F0E] shrink-0">Operating Hours:</span>
                  <span>Monday – Saturday: 6:00 AM – 6:00 PM<br />Sunday: 7:00 AM – 1:00 PM</span>
                </p>
              </div>

              {/* Direct Touchpoints */}
              <div className="mt-6 pt-5 border-t border-[#D8C7B5] space-y-3">
                <a
                  href={`https://wa.me/${BRAND_DETAILS.whatsappNumber}?text=Muraho%20FreChampignon%2C%20I%20have%20an%20inquiry%20about%20your%20button%20mushrooms%20and%20imigina.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#5C3217] text-white hover:bg-[#4A2810] transition-colors text-xs font-bold shadow-xs"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#F3D7C1]" />
                    WhatsApp Desk: {BRAND_DETAILS.displayPhone}
                  </span>
                  <span className="text-[11px] text-[#F3D7C1] font-medium">Online</span>
                </a>

                <a
                  href={`tel:${BRAND_DETAILS.whatsappNumber}`}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#D8C7B5] text-[#3B1F0E] hover:bg-[#FAF8F5] transition-colors text-xs font-semibold"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#8C4F2B]" />
                    Direct Phone Line
                  </span>
                  <span className="text-[#8C4F2B] font-mono font-bold">{BRAND_DETAILS.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Payment & Guarantees Trust Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#D8C7B5] text-xs space-y-2.5">
              <h4 className="font-bold text-[#3B1F0E] text-sm">
                Ordering Terms &amp; Farmer Guarantee
              </h4>
              <p className="text-stone-600">
                • <strong>Payment Methods:</strong> MTN Mobile Money (MoMo), Airtel Money, and Cash upon doorstep delivery in Kigali.
              </p>
              <p className="text-stone-600">
                • <strong>Wholesale Discounts:</strong> Special commercial pricing for orders of 10kg+ button champignons or 50+ Imigina blocks.
              </p>
              <p className="text-stone-600">
                • <strong>Youth Employment:</strong> Interested in joining our operations team? Visit our <a href="#careers" className="text-[#5C3217] font-bold underline">Careers Portal</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
