import { useEffect, useRef, useState } from 'react';
import {
  MdSearch, MdExpandMore, MdHelpOutline, MdAccountCircle,
  MdWallet, MdCurrencyExchange, MdCreditCard, MdLock, MdReceiptLong,
} from 'react-icons/md';

const categories = [
  { id: 'all',      label: 'All',          icon: <MdHelpOutline /> },
  { id: 'account',  label: 'Account',      icon: <MdAccountCircle /> },
  { id: 'wallet',   label: 'Wallet',       icon: <MdWallet /> },
  { id: 'trading',  label: 'Stablecoins',  icon: <MdCurrencyExchange /> },
  { id: 'cards',    label: 'Cards',        icon: <MdCreditCard /> },
  { id: 'bills',    label: 'Bills',        icon: <MdReceiptLong /> },
  { id: 'security', label: 'Security',     icon: <MdLock /> },
];

const faqs = [
  { category: 'account',  tag: 'Start here',   question: 'What is xaddie?', answer: 'xaddie is a modern Nigerian fintech app that empowers you to manage your finances seamlessly. It features both NGN and USD wallets, instant transfers, withdrawals, stablecoin trading, virtual cards, gift card purchases, local and global bill payments, and more — all in one secure platform.' },
  { category: 'wallet',   tag: 'Popular',      question: 'Does xaddie support USD?', answer: 'Yes! xaddie offers a full USD feature, allowing you to hold, send, receive, and manage US dollars (including stablecoins like USDT and USDC). This makes international transactions, online shopping, and remittances much easier and more cost-effective.' },
  { category: 'account',  tag: null,           question: 'How do I unlock full access to my NGN and USD wallets?', answer: 'To enjoy higher transaction limits and full features on both NGN and USD wallets, upgrade to Tier 2 by verifying your BVN. Once verified, you can deposit, transfer, withdraw, trade stablecoins, and use all other services without restrictions.' },
  { category: 'wallet',   tag: null,           question: 'How can I fund (deposit) my xaddie wallet?', answer: 'For NGN: Tap the Deposit button and fund via bank transfer or other supported local methods. For USD: Buy stablecoins with NGN or receive direct USD transfers into your USD wallet.' },
  { category: 'wallet',   tag: null,           question: 'How do I make transfers on xaddie?', answer: "Tap the Transfer icon on the home screen. You can send money in NGN or USD. Simply choose the currency, enter the recipient's xaddie tag, phone number, or bank details (for NGN), and confirm. USD transfers are perfect for international or dollar-based payments." },
  { category: 'wallet',   tag: null,           question: 'Can I withdraw money from my xaddie wallet?', answer: 'Absolutely. Use the Withdraw button to send funds from your NGN wallet to any Nigerian bank account. For USD or stablecoin balances, you can withdraw by converting to NGN or sending to supported USD accounts/wallets. Most withdrawals are processed instantly or within minutes.' },
  { category: 'trading',  tag: 'New',          question: 'What are Stablecoins and how do they work with the USD feature?', answer: 'Stablecoins (USDT, USDC, etc.) are digital assets pegged to the US dollar. On xaddie, you can easily buy stablecoins with your NGN balance, hold them in your USD section for value stability, send them globally, or convert them back to NGN whenever needed.' },
  { category: 'cards',    tag: 'Main feature', question: 'How does the Buy Giftcard feature work?', answer: "With xaddie's Buy Giftcard feature, you can instantly purchase popular local and international gift cards (Amazon, Apple, Google Play, Spotify, etc.) using either your NGN or USD balance. It's fast, convenient, and ideal for gifting or personal use." },
  { category: 'bills',    tag: null,           question: 'Can I pay bills with xaddie?', answer: 'Yes. xaddie makes bill payments simple. You can pay for airtime, data, electricity, cable TV, and other local utilities directly from your wallet using the Bill Payment option.' },
  { category: 'bills',    tag: 'New',          question: 'What is Global Bill Payments on xaddie?', answer: 'The Global Bill Payments feature allows you to pay bills and subscriptions internationally from your xaddie app. This includes services like Google services, utility bills abroad, and many other global merchants — all payable using your USD or stablecoin balance.' },
  { category: 'bills',    tag: null,           question: 'How do I use the Global Bill Payments feature?', answer: "Go to the Bill Payment section, switch to the Global/International tab, select the service or merchant, enter the required details (email, account ID, etc.), choose your USD or stablecoin balance, and complete the payment. It's designed to be quick and seamless." },
  { category: 'cards',    tag: 'New',          question: 'What is the Virtual Card and can it be funded with USD?', answer: 'The Virtual Card is a digital card you can create instantly in the app for secure online payments, especially international ones. You can fund it using your USD balance or stablecoins, making it perfect for shopping on foreign websites, subscriptions, and avoiding high forex fees.' },
  { category: 'wallet',   tag: null,           question: "Are there any fees for using xaddie's features?", answer: 'xaddie offers competitive and transparent fees. Fees may apply for deposits, withdrawals, currency conversions (NGN to USD/stablecoins), global bill payments, and virtual card transactions. The exact fee is always shown before you confirm any transaction.' },
  { category: 'security', tag: 'Bank-grade',   question: 'Is my money safe on xaddie?', answer: 'Your security is our top priority. xaddie uses bank-grade encryption, PIN protection, biometric login, and BVN verification. We also recommend enabling transaction notifications and never sharing your PIN or recovery phrase with anyone.' },
  { category: 'wallet',   tag: null,           question: 'How fast are transactions on xaddie?', answer: 'Most transactions — including transfers, withdrawals, bill payments, gift card purchases, and stablecoin trades — are processed instantly or within a few minutes. Global bill payments and international USD transfers may take slightly longer depending on the service provider.' },
];

export default function FAQ() {
  const headerRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesQuery =
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  useEffect(() => { setOpenIndex(null); }, [activeCategory, query]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-fade-up');
      });
    }, { threshold: 0.1 });
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-28 bg-[#080D1A] relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8441A]/30 to-transparent" />

      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-14 opacity-0">
          <span className="text-[#E8441A] text-xs font-bold tracking-[3px] uppercase mb-4 block">
            Got questions?
          </span>
          <h2 className="font-[Syne] text-4xl md:text-5xl font-extrabold tracking-[-1.5px] mb-5 leading-[1.1] text-white">
            Frequently Asked <span className="text-[#E8441A]">Questions.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-md mx-auto leading-relaxed font-light">
            Everything you need to know about xaddie. Can't find an answer?{' '}
            <a href="/contact" className="text-[#E8441A] underline underline-offset-2 hover:text-[#ff6b45] transition-colors">
              Chat with us.
            </a>
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E8441A] text-xl" />
          <input
            type="text"
            placeholder="Search questions..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-[#0F1A2E] border border-white/6 rounded-2xl focus:outline-none focus:border-[#E8441A]/50 text-white placeholder:text-white/30 text-sm transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200
                ${activeCategory === cat.id
                  ? 'bg-[#E8441A] text-white border-[#E8441A]'
                  : 'bg-[#0F1A2E] text-white/50 border-white/6 hover:border-[#E8441A]/40 hover:text-white/80'
                }`}
            >
              <span className="text-base leading-none">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {filtered.length > 0 ? filtered.map((faq, index) => (
            <div
              key={`${faq.category}-${index}`}
              className={`relative bg-[#0F1A2E] border rounded-3xl overflow-hidden transition-all duration-300 group
                ${openIndex === index
                  ? 'border-[#E8441A]/40'
                  : 'border-white/6 hover:border-[#E8441A]/25'
                }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,68,26,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <button
                onClick={() => toggle(index)}
                className="relative w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {faq.tag && (
                    <span className="hidden sm:block text-[11px] font-semibold text-[#E8441A] bg-[#E8441A]/10 border border-[#E8441A]/25 rounded-full px-3 py-1 whitespace-nowrap flex-shrink-0">
                      {faq.tag}
                    </span>
                  )}
                  <span className="font-[Syne] font-bold text-white text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                </div>
                <MdExpandMore
                  className={`text-[#E8441A] text-2xl flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <div className={`grid transition-all duration-300 ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm text-white/55 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-14">
              <MdHelpOutline className="text-5xl mx-auto mb-3 text-white/20" />
              <p className="font-[Syne] font-bold text-white/50">No results found</p>
              <p className="text-sm mt-1 text-white/30">Try a different search term or category.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center bg-[#0F1A2E] border border-white/6 rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,68,26,0.07),transparent_70%)]" />
          <div className="relative z-10">
            <span className="text-[#E8441A] text-xs font-bold tracking-[3px] uppercase mb-3 block">Still need help?</span>
            <p className="font-[Syne] text-2xl font-extrabold text-white mb-2 tracking-[-0.5px]">We've got you covered.</p>
            <p className="text-white/55 text-sm mb-7 font-light">Our support team is available 24/7 to assist you with anything.</p>
            <a href="/contact">
              <button className="px-8 py-3.5 bg-[#E8441A] text-white font-bold rounded-2xl hover:bg-[#ff6b45] transition-all text-sm tracking-wide">
                Contact Support
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}