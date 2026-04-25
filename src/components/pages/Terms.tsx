import { useEffect, useRef } from 'react';
import {
  MdHandshake, MdVerifiedUser, MdLock, MdCreditCard,
  MdSendToMobile, MdReceiptLong, MdAccountBalanceWallet,
  MdAttachMoney, MdBlock, MdCancel, MdGavel,
  MdPublic, MdAutorenew, MdEmail,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

const sections = [
  {
    icon: <MdHandshake className="text-2xl text-[#E8441A]" />,
    title: '1. Acceptance of Terms',
    content: 'By downloading, accessing, or using the Xaddie mobile application and related services, you agree to be bound by these Terms of Use. If you do not agree, do not use the App.',
  },
  {
    icon: <MdVerifiedUser className="text-2xl text-[#E8441A]" />,
    title: '2. Eligibility',
    content: 'You must be at least 18 years old and a legal resident of Nigeria (or another jurisdiction where we operate) to use Xaddie. By using the App, you confirm that all information you provide during registration is accurate and complete.',
  },
  {
    icon: <MdLock className="text-2xl text-[#E8441A]" />,
    title: '3. Account Registration & Security',
    bullets: [
      'You must create an account using a valid phone number and email address.',
      'You are responsible for maintaining the confidentiality of your login PIN and transaction PIN.',
      'You must notify us immediately of any unauthorised access or suspicious activity.',
    ],
  },
  {
    icon: <MdCreditCard className="text-2xl text-[#E8441A]" />,
    title: '4. Virtual Cards',
    bullets: [
      'Xaddie allows you to generate virtual cards for online payments (domestic and international).',
      'Virtual cards are linked to your Xaddie wallet balance. Transactions are declined if your balance is insufficient.',
      'You are responsible for all transactions made using your virtual card.',
      'We may suspend or cancel a virtual card if we detect fraudulent activity.',
    ],
  },
  {
    icon: <MdSendToMobile className="text-2xl text-[#E8441A]" />,
    title: '5. USD Send & Receive',
    bullets: [
      'Xaddie enables you to send and receive USD to/from other Xaddie users and external recipients via integrated payment rails.',
      'All USD transactions are subject to applicable exchange rates and fees, which will be clearly displayed before confirmation.',
      'We are not responsible for delays caused by third-party payment processors or banking partners.',
    ],
  },
  {
    icon: <MdReceiptLong className="text-2xl text-[#E8441A]" />,
    title: '6. Bill Payments',
    content: 'Xaddie processes payments for utility bills, data, airtime, and other services through third-party providers. We are not liable for errors or delays caused by those providers, but we will assist in resolving issues.',
  },
  {
    icon: <MdAccountBalanceWallet className="text-2xl text-[#E8441A]" />,
    title: '7. Wallet & Funds',
    bullets: [
      'Your Xaddie wallet holds NGN and USD balances.',
      'You may deposit funds via bank transfer, card, or other supported methods.',
      'Withdrawals to Nigerian bank accounts are typically processed within 24 hours.',
      'We may impose minimum/maximum limits on deposits and withdrawals.',
    ],
  },
  {
    icon: <MdAttachMoney className="text-2xl text-[#E8441A]" />,
    title: '8. Fees',
    content: "Xaddie charges transparent fees for virtual card issuance, USD transactions, and bill payments. All fees are displayed before you confirm a transaction. We may change fees with 15 days' notice.",
  },
  {
    icon: <MdBlock className="text-2xl text-[#E8441A]" />,
    title: '9. Prohibited Activities',
    content: 'You may not use Xaddie for:',
    bullets: [
      'Money laundering, fraud, or any illegal activity.',
      'Unauthorised use of another person\'s payment method.',
      'Violating any applicable laws or third-party rights.',
    ],
  },
  {
    icon: <MdCancel className="text-2xl text-[#E8441A]" />,
    title: '10. Termination',
    content: 'We may suspend or terminate your account if you violate these Terms or applicable laws. You may close your account at any time by contacting support.',
  },
  {
    icon: <MdGavel className="text-2xl text-[#E8441A]" />,
    title: '11. Limitation of Liability',
    content: 'To the fullest extent permitted by law, Xaddie and its owners, employees, and partners are not liable for any indirect, incidental, or consequential damages arising from your use of the App.',
  },
  {
    icon: <MdPublic className="text-2xl text-[#E8441A]" />,
    title: '12. Governing Law',
    content: 'These Terms are governed by the laws of the Federal Republic of Nigeria.',
  },
  {
    icon: <MdAutorenew className="text-2xl text-[#E8441A]" />,
    title: '13. Changes to Terms',
    content: 'We may update these Terms from time to time. Continued use of the App after changes means you accept the new Terms.',
  },
  {
    icon: <MdEmail className="text-2xl text-[#E8441A]" />,
    title: '14. Contact Us',
    content: 'For questions or support: support@xaddie.com or via in-app chat.',
  },
];

export default function Terms() {
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

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 opacity-0">
          <span className="text-[#E8441A] text-xs font-bold tracking-[3px] uppercase mb-4 block">Legal</span>
          <h1 className="font-[Syne] text-4xl md:text-5xl font-extrabold tracking-[-1.5px] mb-5 leading-[1.1] text-white">
            Terms of <span className="text-[#E8441A]">Use</span>
          </h1>
          <p className="text-white/50 text-base max-w-md mx-auto leading-relaxed font-light">
            Please read these terms carefully before using Xaddie's services.
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
            By using Xaddie, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-white/40 mb-4 text-sm">Have questions about our Terms?</p>
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