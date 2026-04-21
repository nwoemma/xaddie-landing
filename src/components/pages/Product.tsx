import { useEffect, useRef } from 'react';
import { Gift, ShoppingBag, Gamepad2, Tv, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const stats = [
  { value: '10+', label: 'Gift Cards Available' },
  { value: 'New', label: 'Just Launched' },
  { value: 'Free', label: 'To Sign Up' },
  { value: '1min', label: 'To Get Started' },
];

export default function Products() {
  const navigate = useNavigate();
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
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
    cardsRef.current.forEach(el => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      icon: <ShoppingBag className="w-6 h-6 text-[#E8441A]" />,
      label: 'Shopping',
      cards: [
        { name: 'Amazon', desc: 'Buy Amazon gift cards and shop online.', gradient: 'from-orange-500/10 to-yellow-500/5' },
        { name: 'Airbnb', desc: 'Get Airbnb gift cards for travel and stays.', gradient: 'from-pink-500/10 to-rose-500/5' },
      ],
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-[#E8441A]" />,
      label: 'Gaming',
      cards: [
        { name: 'Fortnite', desc: 'Buy V-Bucks for Fortnite in-game purchases.', gradient: 'from-blue-500/10 to-purple-500/5' },
        { name: 'Xbox', desc: 'Get Xbox gift cards for games and subscriptions.', gradient: 'from-green-500/10 to-emerald-500/5' },
        { name: 'Google Play', desc: 'Buy Google Play credits for apps and games.', gradient: 'from-cyan-500/10 to-blue-500/5' },
        { name: 'Jawaker', desc: 'Get Jawaker tokens for card games.', gradient: 'from-yellow-500/10 to-amber-500/5' },
        { name: 'Huawei', desc: 'Buy Huawei AppGallery gift cards.', gradient: 'from-red-500/10 to-orange-500/5' },
      ],
    },
    {
      icon: <Tv className="w-6 h-6 text-[#E8441A]" />,
      label: 'Streaming',
      cards: [
        { name: 'Netflix', desc: 'Buy Netflix gift cards for movies and series.', gradient: 'from-red-600/10 to-red-400/5' },
        { name: 'TV Now', desc: 'Get TV Now gift cards for live and on-demand TV.', gradient: 'from-indigo-500/10 to-blue-500/5' },
        { name: 'Waterbox', desc: 'Buy Waterbox gift cards for streaming content.', gradient: 'from-teal-500/10 to-cyan-500/5' },
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#E8441A]" />,
      label: 'Apple',
      cards: [
        { name: 'Apple Store', desc: 'Buy Apple gift cards for apps, music and iCloud.', gradient: 'from-slate-400/10 to-gray-400/5' },
      ],
    },
  ];

  // Flatten all cards into one list with category info
  const allCards = categories.flatMap(cat =>
    cat.cards.map(card => ({ ...card, catLabel: cat.label, catIcon: cat.icon }))
  );

  return (
    <div className="min-h-screen bg-[#080D1A] pt-28 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8441A]/30 bg-[#E8441A]/10 text-[#E8441A] text-xs font-semibold tracking-widest uppercase mb-5">
            <Gift className="w-3.5 h-3.5" /> Gift Cards
          </span>
          <h1 className="font-[Syne] font-black text-4xl md:text-5xl text-white leading-tight mb-4">
            Gift Cards, <span className="text-[#E8441A]">Delivered Fast</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            We are building a simple way to buy gift cards from top brands. Select a card and download the app to get started.
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

        {/* Categories */}
        {categories.map(cat => (
          <div key={cat.label} className="mb-12">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#E8441A]/10 border border-[#E8441A]/20 flex items-center justify-center">
                {cat.icon}
              </div>
              <h2 className="font-[Syne] font-bold text-white text-lg">{cat.label}</h2>
              <div className="flex-1 h-px bg-white/5 ml-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.cards.map(card => {
                const globalIndex = allCards.findIndex(c => c.name === card.name);
                return (
                  <div
                    key={card.name}
                    ref={el => { cardsRef.current[globalIndex] = el; }}
                    style={{ animationDelay: `${globalIndex * 0.05}s` }}
                    className={`opacity-0 group relative bg-gradient-to-br ${card.gradient} border border-white/[0.06] hover:border-[#E8441A]/30 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Gift className="w-5 h-5 text-[#E8441A]" />
                      </div>
                      <span className="text-[10px] font-semibold text-[#E8441A] bg-[#E8441A]/10 border border-[#E8441A]/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Gift Card
                      </span>
                    </div>

                    <h3 className="font-[Syne] font-bold text-white text-xl mb-1">{card.name}</h3>
                    <p className="text-white/40 text-sm mb-5 leading-relaxed">{card.desc}</p>

                    <button
                      onClick={() => navigate('/download')}
                      className="w-full py-2.5 rounded-xl bg-[#E8441A]/0 border border-[#E8441A]/30 text-[#E8441A] text-sm font-semibold group-hover:bg-[#E8441A] group-hover:text-white transition-all duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className="opacity-0 mt-16 rounded-3xl border border-[#E8441A]/20 bg-gradient-to-br from-[#E8441A]/10 to-transparent p-10 text-center"
        >
          <h2 className="font-[Syne] font-black text-3xl text-white mb-3">
            Ready to buy a gift card?
          </h2>
          <p className="text-white/40 mb-7 max-w-md mx-auto">
            Download the Xaddie app to purchase gift cards from any of the brands above.
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