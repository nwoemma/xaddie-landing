import { useEffect, useRef } from 'react';
import {
  MdShield, MdVisibility, MdLock, MdShareLocation,
  MdStorage, MdAutorenew, MdVerifiedUser, MdChildCare,
  MdNotifications, MdEmail,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const sections = [
  {
    icon: <MdShield className="text-2xl text-[#E8441A]" />,
    title: '1. Overview',
    content: 'Xaddie is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our App and Services.',
  },
  {
    icon: <MdVisibility className="text-2xl text-[#E8441A]" />,
    title: '2. Information We Collect',
    bullets: [
      'Registration Information: Name, phone number, email address, date of birth.',
      'Transaction Information: Virtual card usage, USD send/receive activity, bill payments, deposits, withdrawals, and wallet balances.',
      'Device & Usage Data: IP address, device ID, operating system, app version, crash logs.',
      'KYC Information (if required): Government-issued ID, proof of address – only for compliance or higher transaction limits.',
    ],
  },
  {
    icon: <MdLock className="text-2xl text-[#E8441A]" />,
    title: '3. How We Use Your Information',
    bullets: [
      'To create and manage your account.',
      'To process virtual card issuance, USD transactions, and bill payments.',
      'To prevent fraud and ensure security.',
      'To improve our App and customer support.',
      'To send you important service notifications (not marketing unless you opt in).',
    ],
  },
  {
    icon: <MdShareLocation className="text-2xl text-[#E8441A]" />,
    title: '4. Sharing Your Information',
    content: 'We do not sell your personal data. We may share it with:',
    bullets: [
      'Third-party service providers (e.g., payment gateways, virtual card issuers, bill payment aggregators) solely to provide our Services.',
      'Regulatory authorities when required by law.',
      'Other Xaddie users only to the extent necessary to complete a USD transfer (e.g., your username and transaction amount).',
    ],
  },
  {
    icon: <MdStorage className="text-2xl text-[#E8441A]" />,
    title: '5. Data Security',
    content: 'We use encryption, secure servers, and access controls to protect your data. You are responsible for keeping your PIN and device safe.',
  },
  {
    icon: <MdAutorenew className="text-2xl text-[#E8441A]" />,
    title: '6. Data Retention',
    content: 'We keep your personal data for as long as your account is active, and for up to 5 years after closure to comply with financial regulations.',
  },
  {
    icon: <MdVerifiedUser className="text-2xl text-[#E8441A]" />,
    title: '7. Your Rights',
    content: 'You may request access, correction, or deletion of your personal data by contacting support. Some transaction data may be retained even after deletion to meet legal obligations.',
  },
  {
    icon: <MdChildCare className="text-2xl text-[#E8441A]" />,
    title: "8. Children's Privacy",
    content: 'Xaddie is not intended for anyone under 18. We do not knowingly collect data from minors.',
  },
  {
    icon: <MdNotifications className="text-2xl text-[#E8441A]" />,
    title: '9. Changes to This Policy',
    content: 'We will notify you of material changes via email or in-app notification.',
  },
  {
    icon: <MdEmail className="text-2xl text-[#E8441A]" />,
    title: '10. Contact Us',
    content: 'For privacy-related questions, reach Xaddie Support at privacy@xaddie.com or via in-app chat, available 24/7.',
  },
];

export default function PrivacyPolicy() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    sectionsRef.current.forEach(s => { if (s) observer.observe(s); });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen bg-[#080D1A] pt-28 pb-24 px-6 relative">

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8441A]/30 to-transparent" />

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-24 -right-24 bg-[radial-gradient(circle,rgba(232,68,26,0.08),transparent_70%)] rounded-full" />
        <div className="absolute w-[400px] h-[400px] bottom-0 -left-24 bg-[radial-gradient(circle,rgba(26,58,107,0.15),transparent_70%)] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 opacity-0">
          <span className="text-[#E8441A] text-xs font-bold tracking-[3px] uppercase mb-4 block">Legal</span>
          <h1 className="font-[Syne] text-4xl md:text-5xl font-extrabold tracking-[-1.5px] mb-5 leading-[1.1] text-white">
            Privacy <span className="text-[#E8441A]">Policy</span>
          </h1>
          <p className="text-white/50 text-base max-w-md mx-auto leading-relaxed font-light">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-white/25 text-sm mt-3">Last Updated: April 25, 2026</p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-3">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={el => { sectionsRef.current[index] = el; }}
              style={{ animationDelay: `${index * 0.04}s` }}
              className="opacity-0 bg-[#0F1A2E] border border-white/[0.06] rounded-3xl p-6 group hover:border-[#E8441A]/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,68,26,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex gap-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-[#E8441A]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8441A]/20 transition-all">
                  {section.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-[Syne] font-bold text-white mb-2">{section.title}</h3>

                  {section.content && (
                    <p className="text-sm text-white/50 leading-relaxed mb-2">{section.content}</p>
                  )}

                  {section.bullets && (
                    <ul className="space-y-1.5">
                      {section.bullets.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-white/50 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E8441A]/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal notice */}
        <div className="mt-8 p-6 rounded-3xl border border-[#E8441A]/20 bg-[#E8441A]/5 text-center">
          <p className="text-sm text-white/50 leading-relaxed">
            By using Xaddie, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-white/40 mb-4 text-sm">Have questions about our Privacy Policy?</p>
          <Link to="/contact">
            <button className="px-8 py-3 rounded-full bg-[#E8441A] text-white font-semibold text-sm hover:bg-[#FF5C2E] transition-all shadow-lg shadow-[#E8441A]/25 hover:-translate-y-0.5">
              Contact Support
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}