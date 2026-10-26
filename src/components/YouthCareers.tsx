import React, { useState } from 'react';
import { Briefcase, Send, MessageCircle, CheckCircle2, Sparkles, User, Phone, FileText, Loader2 } from 'lucide-react';
import { CAREER_ROLES, BRAND_DETAILS } from '../data/mushroomData';
import { ImigongoDivider } from './ImigongoPattern';

interface JobApplicationPayload {
  applicant_name: string;
  phone_number: string;
  skills_description: string;
}

interface YouthCareersProps {
  onSubmitApplication: (application: JobApplicationPayload) => Promise<void>;
}

export const YouthCareers: React.FC<YouthCareersProps> = ({ onSubmitApplication }) => {
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [skillCategory, setSkillCategory] = useState('Farm Production & Harvesting');
  const [skillDetails, setSkillDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!applicantName.trim()) errs.name = 'Please provide your full name / Andika amazina yawe';
    if (!applicantPhone.trim()) {
      errs.phone = 'Please provide your WhatsApp or phone number / Nimero ya terefone';
    } else if (applicantPhone.trim().length < 8) {
      errs.phone = 'Please enter a valid phone number (e.g. 078...)';
    }
    if (!skillDetails.trim()) {
      errs.skills = 'Please write down what you can do / Sobanura icyo ushoboye';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppApplication = () => {
    const text = `Muraho Benitha & FreChampignon Team! 🇷🇼
I am applying for the "Wandike Uvuga Icyo Ushoboye" youth opportunity:

• Amazina (Full Name): ${applicantName}
• Nimero ya Terefone: ${applicantPhone}
• Umwanya / Category: ${skillCategory}
• Icyo Nshoboye (My Skills & Experience):
${skillDetails}

I am ready to work with passion, integrity, and dedication. Murakoze cyane!`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const url = `https://wa.me/${BRAND_DETAILS.whatsappNumber}?text=${generateWhatsAppApplication()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleLocalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitError('');
    setIsSubmitting(true);

    try {
      await onSubmitApplication({
        applicant_name: applicantName.trim(),
        phone_number: applicantPhone.trim(),
        skills_description: skillDetails.trim(),
      });
      setIsSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'Something went wrong while submitting your application. Please try again.';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-16 sm:py-24 bg-[#F7F2EB] border-b border-[#D8C7B5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest text-[#6D3B1E] uppercase mb-2">
            <span>Rwandan Agribusiness &amp; Social Enterprise</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Urubyiruko mu Buhinzi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B1F0E] tracking-tight font-display [text-wrap:balance]">
            Wandike Uvuga Icyo Ushoboye
          </h2>

          <p className="text-lg text-[#8C4F2B] font-semibold mt-1 italic">
            “Write down what you can do — There is a place for your talent at FreChampignon”
          </p>

          <ImigongoDivider variant="arch" className="my-3" />

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Founded by <strong>Benitha Karire</strong>, FreChampignon is dedicated to opening tangible employment and entrepreneurship pathways for Rwandan youth in modern mushroom farming, laboratory spore preparation, Kigali logistics, and digital marketing.
          </p>
        </div>

        {/* 2-Column Split: Roles on Left, Application Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Roles & Opportunities (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl border border-[#D8C7B5] p-6 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#6D3B1E] uppercase tracking-wider mb-2">
                <Briefcase className="w-4 h-4 text-[#9C5127]" />
                <span>Open Opportunities for Youth</span>
              </div>
              <h3 className="text-lg font-bold text-[#3B1F0E] mb-4 font-display">
                Where Can You Contribute?
              </h3>

              <div className="space-y-4">
                {CAREER_ROLES.map((role, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8DDD2] hover:border-[#6D3B1E] transition-all cursor-pointer"
                    onClick={() => {
                      setSkillCategory(role.title);
                      setSkillDetails((prev) => prev || `Nifuza gukora muri: ${role.title}`);
                    }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-[#3B1F0E]">
                        {role.title}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#8C4F2B] px-2 py-0.5 rounded bg-[#F1E6DA]">
                        {role.location}
                      </span>
                    </div>
                    <div className="text-xs text-[#6D3B1E] italic mt-0.5 font-medium">
                      {role.kinyarwanda}
                    </div>
                    <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-[#F4EBE1] border border-[#DFC9B5] text-xs text-[#5C3217] space-y-1">
                <p className="font-bold">✨ No rigid degree required</p>
                <p>We prioritize character, energy, willingness to learn, and integrity over traditional paper credentials.</p>
              </div>
            </div>
          </div>

          {/* Application Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#D8C7B5] p-6 sm:p-8 shadow-xs">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#EFE0D3] text-[#6D3B1E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#3B1F0E] font-display">
                  Ubusabe bwawe bwakiriwe!
                </h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Thank you, <strong className="text-stone-900">{applicantName}</strong>. Your skills submission has been recorded. Our founder Benitha and the recruitment team review submissions on a weekly rolling basis.
                </p>

                <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#D8C7B5] text-left max-w-md mx-auto text-xs space-y-1 font-mono text-stone-700">
                  <div><strong>Name:</strong> {applicantName}</div>
                  <div><strong>Contact:</strong> {applicantPhone}</div>
                  <div><strong>Target Area:</strong> {skillCategory}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                  <a
                    href={`https://wa.me/${BRAND_DETAILS.whatsappNumber}?text=${generateWhatsAppApplication()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#5C3217] hover:bg-[#4A2810] rounded-lg transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 text-[#F3D7C1]" />
                    <span>Send Application directly on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmitError('');
                      setApplicantName('');
                      setApplicantPhone('');
                      setSkillDetails('');
                    }}
                    className="px-4 py-3 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLocalSubmit} className="space-y-5">
                <div className="border-b border-stone-200 pb-3">
                  <h3 className="text-xl font-bold text-[#3B1F0E] font-display">
                    Erekana Icyo Ushoboye / Submit Your Skills
                  </h3>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Fill out the form below. You can also send this application directly to Benitha’s WhatsApp desk.
                  </p>
                </div>

                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F0E] mb-1">
                    Amazina Yombi / Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Eric Nshimiyimana / Keza Diane"
                      value={applicantName}
                      onChange={(e) => {
                        setApplicantName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#5C3217] ${
                        errors.name ? 'border-red-500' : 'border-[#D8C7B5]'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                </div>

                {/* 2. Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F0E] mb-1">
                    Nimero ya Terefone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 078 812 3456 or +250..."
                    value={applicantPhone}
                    onChange={(e) => {
                      setApplicantPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#5C3217] ${
                      errors.phone ? 'border-red-500' : 'border-[#D8C7B5]'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                {/* 3. Operational Interest */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F0E] mb-1">
                    Umwanya Wifuza / Preferred Operational Field
                  </label>
                  <select
                    value={skillCategory}
                    onChange={(e) => setSkillCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#D8C7B5] rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#5C3217]"
                  >
                    {CAREER_ROLES.map((r, i) => (
                      <option key={i} value={r.title}>
                        {r.title} ({r.location})
                      </option>
                    ))}
                    <option value="General Support & Learning">General Farm Work &amp; Fast Learner</option>
                  </select>
                </div>

                {/* 4. Icyo Ushoboye (Skills / Experience) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#3B1F0E]">
                      Icyo Ushoboye / What You Can Do *
                    </label>
                    <span className="text-[11px] text-stone-500">Sobanura mu magambo yawe</span>
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Wandike muri make: Uburambe ufite mu buhinzi, gutwara moto/imodoka, gucuruza, gufotora cyangwa ubushake bwo kwiga... (Write what skills, experience or drive you bring)"
                    value={skillDetails}
                    onChange={(e) => {
                      setSkillDetails(e.target.value);
                      if (errors.skills) setErrors({ ...errors, skills: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#5C3217] ${
                      errors.skills ? 'border-red-500' : 'border-[#D8C7B5]'
                    }`}
                  />
                  {errors.skills && <p className="text-xs text-red-600 mt-1">{errors.skills}</p>}
                </div>

                {submitError && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700"
                  >
                    {submitError}
                  </div>
                )}

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-bold text-white bg-[#5C3217] hover:bg-[#4A2810] rounded-lg transition-all shadow-xs active:scale-[0.98] cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-[#F3D7C1]" />
                    <span>Apply via WhatsApp (Fast Response)</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-semibold text-[#3B1F0E] bg-[#FAF8F5] hover:bg-[#EFE8DE] border border-[#D8C7B5] rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 text-[#8C4F2B] animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 text-[#8C4F2B]" />
                    )}
                    <span>Submit Online Form</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
