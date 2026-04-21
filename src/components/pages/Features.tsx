import { useEffect, useRef } from 'react';
import { MdCreditCard, MdCardGiftcard, MdFlashOn, MdCurrencyExchange, MdLock, MdReceiptLong } from 'react-icons/md';

const features = [
  { icon: <MdCardGiftcard className="text-2xl text-[#E8441A]" />, title: 'Gift Cards', desc: 'Buy gift cards from top global brands instantly. Gaming, streaming, shopping — delivered straight to your wallet.', tag: 'Main feature' },
  { icon: <MdCreditCard className="text-2xl text-[#E8441A]" />, title: 'Virtual USD Card', desc: 'Create a Mastercard virtual card instantly. Shop globally and pay subscriptions with ease.', tag: '$2 creation fee' },
  { icon: <MdFlashOn className="text-2xl text-[#E8441A]" />, title: 'Instant Transfers', desc: 'Send NGN to any bank or wallet in seconds. Zero fees on Xaddie-to-Xaddie transfers.', tag: 'Zero fees' },
  { icon: <MdCurrencyExchange className="text-2xl text-[#E8441A]" />, title: 'Stablecoins', desc: 'Trade and hold USDT, USDC and other stablecoins to protect your wealth from inflation.', tag: 'New' },
  { icon: <MdLock className="text-2xl text-[#E8441A]" />, title: 'Secure PIN Access', desc: 'Every transaction is guarded by your 4-digit PIN, biometrics, and end-to-end encryption.', tag: 'Bank-grade' },
  { icon: <MdReceiptLong className="text-2xl text-[#E8441A]" />, title: 'Bill Payments', desc: 'Airtime, data, electricity, TV subscriptions — pay everything from one clean dashboard.', tag: 'All in one' },
];

export default function Features() {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-28 bg-[#080D1A] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8441A]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 opacity-0">
          <span className="text-[#E8441A] text-xs font-bold tracking-[3px] uppercase mb-4 block">Everything you need</span>
          <h2 className="font-[Syne] text-4xl md:text-5xl font-extrabold tracking-[-1.5px] mb-5 leading-[1.1]">
            One app. <span className="text-[#E8441A]">Built different.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-md mx-auto leading-relaxed font-light">
            Xaddie is a global, next-generation fintech platform engineered to deliver seamless access to digital financial services across borders. The platform integrates traditional financial infrastructure with blockchain-based value systems, enabling users to store, spend, convert, and manage money in a single, unified ecosystem.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              ref={el => { cardsRef.current[i] = el; }}
              style={{ animationDelay: `${i * 0.1}s` }}
              className="opacity-0 bg-[#0F1A2E] border border-white/6 rounded-3xl p-7 group hover:border-[#E8441A]/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,68,26,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 bg-[#E8441A]/10 rounded-2xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-[#E8441A] bg-[#E8441A]/10 border border-[#E8441A]/25 rounded-full px-3 py-1">
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-[Syne] text-lg font-bold mb-2.5 tracking-[-0.3px]">{f.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}