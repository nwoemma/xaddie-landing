import { useEffect, useRef, useState } from 'react';
import {
  Gift, ShoppingBag, Gamepad2, Tv, Smartphone,
  Wallet, ArrowLeftRight, CreditCard, Bitcoin, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stats = [
  { value: '10+', label: 'Gift Cards Available (Depending on the Country)' },
  { value: '150+', label: 'Countries Supported' },
  { value: '24/7', label: 'Instant Transfers' },
  { value: 'Free', label: 'To Sign Up' },
];

const tabs = [
  { id: 'wallet', label: 'Digital Wallet', icon: <Wallet className="w-4 h-4" /> },
  { id: 'crypto', label: 'Crypto', icon: <Bitcoin className="w-4 h-4" /> },
  { id: 'transfers', label: 'Transfers', icon: <Globe className="w-4 h-4" /> },
  { id: 'giftcards', label: 'Gift Cards', icon: <Gift className="w-4 h-4" /> },
  { id: 'virtualcards', label: 'Virtual Cards', icon: <CreditCard className="w-4 h-4" /> },
];

const sections: Record<string, {
  icon: React.ReactNode;
  label: string;
  type: 'cards' | 'wide';
  items: {
    name: string;
    desc: string;
    gradient: string;
    icon?: React.ReactNode;
    pill?: string;
    tags?: string[];
    btnLabel?: string;
  }[];
}> = {
  wallet: {
    icon: <Wallet className="w-5 h-5 text-[#E8441A]" />,
    label: 'Digital Wallet',
    type: 'wide',
    items: [
      {
        name: 'Hold Any Currency',
        desc: 'Store, manage and convert between 3 fiat currencies and digital assets in a single, unified wallet with real-time exchange rates.',
        gradient: 'from-indigo-500/10 to-indigo-500/5',
        pill: 'Multi-Currency',
        tags: ['USD','NGN', 'USDT'],
      },
      {
        name: 'Spend, Track & Save',
        desc: 'Built-in budgeting tools, transaction history, spending categories, and real-time balance notifications to keep your finances sharp.',
        gradient: 'from-emerald-500/10 to-emerald-500/5',
        pill: 'Smart Finance',
        tags: ['Budgeting', 'Analytics', 'Auto-Save', 'Notifications'],
      },
      {
        name: 'Bank-Grade Security',
        desc: 'Military-grade encryption, biometric authentication, with 4 digit security PIN .',
        gradient: 'from-amber-500/10 to-amber-500/5',
        pill: 'Security',
        tags: ['Biometrics', '2FA', 'AES-256', 'Fraud AI'],
      },
      {
        name: 'One Tap Payments',
        desc: 'Pay merchants, split bills, and top up services. NFC-ready for contactless payments globally.',
        gradient: 'from-[#E8441A]/10 to-[#E8441A]/5',
        pill: 'Instant',
        tags: ['NFC', 'QR Pay', 'Bill Split', 'Contactless'],
      },
    ],
  },
  crypto: {
    icon: <Bitcoin className="w-5 h-5 text-[#E8441A]" />,
    label: 'Crypto & Blockchain',
    type: 'cards',
    items: [
      { name: 'Bitcoin (BTC)', desc: 'Buy, sell, hold and send Bitcoin directly from your Xaddie wallet with competitive rates and zero hidden fees.', gradient: 'from-orange-500/10 to-orange-500/5', pill: 'Crypto', btnLabel: 'Trade Now' },
      { name: 'Ethereum (ETH)', desc: 'Access the Ethereum ecosystem — trade ETH, interact with DeFi protocols, and hold ERC-20 tokens seamlessly.', gradient: 'from-blue-500/10 to-blue-500/5', pill: 'Crypto', btnLabel: 'Trade Now' },
      { name: 'USDT / USDC', desc: 'Store value in dollar-pegged stablecoins for cross-border transfers without crypto volatility.', gradient: 'from-teal-500/10 to-teal-500/5', pill: 'Stablecoin', btnLabel: 'Get Started' },
      { name: 'Multi-Chain Support', desc: 'Transact across Bitcoin, Ethereum, BNB Chain, Solana, and more — all from a single wallet interface.', gradient: 'from-cyan-500/10 to-cyan-500/5', pill: 'Blockchain', btnLabel: 'Explore' },
      { name: 'Earn & Yield', desc: 'Put idle crypto to work. Access staking, liquidity pools, and yield aggregation products with transparent APY.', gradient: 'from-purple-500/10 to-purple-500/5', pill: 'DeFi', btnLabel: 'Start Earning' },
      { name: 'Crypto ↔ Fiat', desc: 'Convert between crypto and local currencies instantly. On/off-ramp with bank transfer, card, or mobile money.', gradient: 'from-[#E8441A]/10 to-[#E8441A]/5', pill: 'Convert', btnLabel: 'Convert Now' },
    ],
  },
  transfers: {
    icon: <Globe className="w-5 h-5 text-[#E8441A]" />,
    label: 'Cross-Border Transfers',
    type: 'wide',
    items: [
      {
        name: 'Send Money Globally',
        desc: 'Transfer funds to 150+ countries in seconds. Bank-to-bank, wallet-to-wallet, or mobile money — Xaddie connects every payment corridor.',
        gradient: 'from-emerald-500/10 to-emerald-500/5',
        pill: 'Instant',
        tags: ['150+ Countries', 'Bank Transfer', 'Mobile Money', 'Wallet'],
      },
      {
        name: 'Zero Hidden Charges',
        desc: 'Transparent, flat-rate fees starting at 0.5%. No surprise deductions — see exactly what the recipient gets before you confirm.',
        gradient: 'from-indigo-500/10 to-indigo-500/5',
        pill: 'Low Fees',
        tags: ['From 0.5%', 'Transparent', 'No Surprise Fees'],
      },
      {
        name: 'Multiple Payout Options',
        desc: 'Recipients can receive funds to their bank, mobile wallet, cash pickup, or crypto wallet — their choice.',
        gradient: 'from-amber-500/10 to-amber-500/5',
        pill: 'Payout Rails',
        tags: ['Bank', 'M-Pesa', 'Cash Pickup', 'Crypto'],
      },
      {
        name: 'Batch & Recurring Payments',
        desc: 'Send payroll, vendor payments, or subscriptions at scale. Schedule recurring transfers or bulk-send to hundreds of recipients.',
        gradient: 'from-[#E8441A]/10 to-[#E8441A]/5',
        pill: 'Business',
        tags: ['Batch Transfers', 'Payroll', 'Scheduled', 'API Access'],
      },
    ],
  },
  giftcards: {
    icon: <Gift className="w-5 h-5 text-[#E8441A]" />,
    label: 'Gift Cards',
    type: 'cards',
    items: [
      { name: 'Amazon', desc: 'Buy Amazon gift cards and shop millions of products delivered worldwide.', gradient: 'from-orange-500/10 to-yellow-500/5', pill: 'Shopping', btnLabel: 'Buy Now' },
      { name: 'Airbnb', desc: 'Get Airbnb gift cards for travel, stays, and unique experiences worldwide.', gradient: 'from-pink-500/10 to-rose-500/5', pill: 'Travel', btnLabel: 'Buy Now' },
      { name: 'Netflix', desc: 'Buy Netflix gift cards for unlimited movies, series, and originals.', gradient: 'from-red-600/10 to-red-400/5', pill: 'Streaming', btnLabel: 'Buy Now' },
      { name: 'Fortnite', desc: 'Top up V-Bucks for Fortnite in-game purchases and battle passes.', gradient: 'from-blue-500/10 to-purple-500/5', pill: 'Gaming', btnLabel: 'Buy Now' },
      { name: 'Xbox', desc: 'Get Xbox gift cards for games, Game Pass, and subscriptions.', gradient: 'from-green-500/10 to-emerald-500/5', pill: 'Gaming', btnLabel: 'Buy Now' },
      { name: 'Google Play', desc: 'Buy Google Play credits for apps and games.', gradient: 'from-cyan-500/10 to-blue-500/5', pill: 'Gaming', btnLabel: 'Buy Now' },
      { name: 'Jawaker', desc: 'Get Jawaker tokens for card games.', gradient: 'from-yellow-500/10 to-amber-500/5', pill: 'Gaming', btnLabel: 'Buy Now' },
      { name: 'Huawei', desc: 'Buy Huawei AppGallery gift cards.', gradient: 'from-red-500/10 to-orange-500/5', pill: 'Gaming', btnLabel: 'Buy Now' },
      { name: 'TV Now', desc: 'Get TV Now gift cards for live and on-demand TV.', gradient: 'from-indigo-500/10 to-blue-500/5', pill: 'Streaming', btnLabel: 'Buy Now' },
      { name: 'Waterbox', desc: 'Buy Waterbox gift cards for streaming content.', gradient: 'from-teal-500/10 to-cyan-500/5', pill: 'Streaming', btnLabel: 'Buy Now' },
      { name: 'Apple Store', desc: 'Buy Apple gift cards for apps, music and iCloud.', gradient: 'from-slate-400/10 to-gray-400/5', pill: 'Apple', btnLabel: 'Buy Now' },
    ],
  },
  virtualcards: {
    icon: <CreditCard className="w-5 h-5 text-[#E8441A]" />,
    label: 'Virtual Cards',
    type: 'wide',
    items: [
      {
        name: 'Virtual Visa / Mastercard',
        desc: 'Create disposable or permanent virtual cards in seconds. Shop on any website globally without exposing your main account details.',
        gradient: 'from-indigo-500/10 to-indigo-500/5',
        pill: 'Instant Issue',
        tags: ['Visa', 'Mastercard', 'Instant Issue', 'Online Shopping'],
      },
      {
        name: 'Spend Anonymously',
        desc: 'Generate single-use virtual cards for each merchant. Lock, freeze, or delete cards with one tap — complete control, zero risk.',
        gradient: 'from-[#E8441A]/10 to-[#E8441A]/5',
        pill: 'Privacy',
        tags: ['Single-Use', 'Freeze Anytime', 'Merchant Lock'],
      },
      {
        name: 'Team Expense Cards',
        desc: 'Issue cards to team members with custom spending limits, category restrictions, and real-time expense tracking from one dashboard.',
        gradient: 'from-emerald-500/10 to-emerald-500/5',
        pill: 'Business',
        tags: ['Team Cards', 'Spend Limits', 'Real-Time Tracking'],
      },
      {
        name: 'Pay in Any Currency',
        desc: 'Your virtual card auto-converts at live market rates. Shop on US, EU, or Asian stores — always get the best rate.',
        gradient: 'from-amber-500/10 to-amber-500/5',
        pill: 'Global',
        tags: ['Auto-Convert', 'Live Rates', 'Global Acceptance'],
      },
    ],
  },
};

export default function Products() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('wallet');

  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    statsRef.current.forEach(el => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  const section = sections[activeTab];

  return (
    <div className="min-h-screen bg-[#080D1A] pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8441A]/30 bg-[#E8441A]/10 text-[#E8441A] text-xs font-semibold tracking-widest uppercase mb-5">
            <Gift className="w-3.5 h-3.5" /> Xaddie Platform
          </span>
          <h1 className="font-[Syne] font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            One Platform. <span className="text-[#E8441A]">Many Financial Freedom.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Xaddie combines digital wallets, crypto rails, cross-border payments, virtual cards, and gift cards into one seamless ecosystem.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              ref={el => { statsRef.current[i] = el; }}
              style={{ animationDelay: `${i * 0.1}s` }}
              className="opacity-0 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 text-center"
            >
              <div className="font-[Syne] font-black text-3xl text-[#E8441A] mb-1">{s.value}</div>
              <div className="text-white/40 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-200
                ${activeTab === tab.id
                  ? 'bg-[#E8441A] border-[#E8441A] text-white'
                  : 'bg-white/[0.03] border-white/[0.06] text-white/50 hover:border-[#E8441A]/30 hover:text-white'
                }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Section header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#E8441A]/10 border border-[#E8441A]/20 flex items-center justify-center">
            {section.icon}
          </div>
          <h2 className="font-[Syne] font-bold text-white text-lg">{section.label}</h2>
          <div className="flex-1 h-px bg-white/5 ml-2" />
        </div>

        {/* Cards — standard grid */}
        {section.type === 'cards' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {section.items.map((item, i) => (
              <div
                key={item.name}
                style={{ animationDelay: `${i * 0.05}s` }}
                className={`group relative bg-gradient-to-br ${item.gradient} border border-white/[0.06] hover:border-[#E8441A]/30 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-[#E8441A]" />
                  </div>
                  <span className="text-[10px] font-semibold text-[#E8441A] bg-[#E8441A]/10 border border-[#E8441A]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.pill}
                  </span>
                </div>
                <h3 className="font-[Syne] font-bold text-white text-xl mb-1">{item.name}</h3>
                <p className="text-white/40 text-sm mb-5 leading-relaxed">{item.desc}</p>
                <button
                  onClick={() => navigate('/download')}
                  className="w-full py-2.5 rounded-xl bg-[#E8441A]/0 border border-[#E8441A]/30 text-[#E8441A] text-sm font-semibold group-hover:bg-[#E8441A] group-hover:text-white transition-all duration-300"
                >
                  {item.btnLabel ?? 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Wide cards — 2-col feature layout */}
        {section.type === 'wide' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {section.items.map((item, i) => (
              <div
                key={item.name}
                style={{ animationDelay: `${i * 0.07}s` }}
                className={`bg-gradient-to-br ${item.gradient} border border-white/[0.06] hover:border-[#E8441A]/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5`}
              >
                <span className="text-[10px] font-semibold text-[#E8441A] bg-[#E8441A]/10 border border-[#E8441A]/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                  {item.pill}
                </span>
                <h3 className="font-[Syne] font-bold text-white text-xl mb-2">{item.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{item.desc}</p>
                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-white/[0.08] text-white/40 bg-white/[0.03]">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className="opacity-0 mt-4 rounded-3xl border border-[#E8441A]/20 bg-gradient-to-br from-[#E8441A]/10 to-transparent p-10 text-center"
        >
          <h2 className="font-[Syne] font-black text-3xl text-white mb-3">
            Your Entire Financial Life, One App.
          </h2>
          <p className="text-white/40 mb-7 max-w-md mx-auto">
            Download the Xaddie app to access wallets, crypto, transfers, virtual cards, and gift cards — all in one place.
          </p>
          <button
            onClick={() => navigate('/download')}
            className="px-8 py-3 rounded-full bg-[#E8441A] text-white font-semibold hover:bg-[#FF5C2E] transition-all shadow-lg shadow-orange-500/25 hover:-translate-y-0.5"
          >
            Download the App
          </button>
        </div>

      </div>
    </div>
  );
}