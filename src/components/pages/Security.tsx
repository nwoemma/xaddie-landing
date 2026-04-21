import { useEffect, useRef } from 'react';
import { MdLock, MdShield, MdVpnKey, MdPhoneAndroid, MdNotifications, MdVerifiedUser, MdSecurity, MdFingerprint } from 'react-icons/md';

export default function Security() {
  const headerRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const trustRef = useRef<(HTMLDivElement | null)[]>([]);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    pointsRef.current.forEach(el => { if (el) observer.observe(el); });
    trustRef.current.forEach(el => { if (el) observer.observe(el); });
    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => observer.disconnect();
  }, []);

  const points = [
    { icon: <MdLock className="text-4xl text-[#E8441A]" />, title: 'PIN-protected access', desc: 'Every transaction secured with your unique 4-digit PIN.' },
    { icon: <MdShield className="text-4xl text-[#E8441A]" />, title: 'KYC verification', desc: 'BVN-based identity checks ensure only you access your wallet.' },
    { icon: <MdVpnKey className="text-4xl text-[#E8441A]" />, title: 'AES-256 encryption', desc: 'All data encrypted at rest and in transit, always.' },
    { icon: <MdPhoneAndroid className="text-4xl text-[#E8441A]" />, title: 'Device binding', desc: 'Your account is bound to your verified device for extra safety.' },
    { icon: <MdNotifications className="text-4xl text-[#E8441A]" />, title: 'Instant alerts', desc: 'Get real-time notifications for every transaction on your account.' },
    { icon: <MdFingerprint className="text-4xl text-[#E8441A]" />, title: 'Biometric login', desc: 'Use your fingerprint or face ID to access your account instantly.' },
  ];

  const trustCards = [
    { title: 'We are just getting started', desc: 'Xaddie is a new product built by a passionate team that believes buying gift cards should be fast, simple, and safe. We are actively building, improving, and listening to every piece of feedback we receive.' },
    { title: 'Security is being taken seriously', desc: 'From day one, we have implemented industry-standard security practices. We use encryption, device verification, and identity checks not because we have to — but because your trust means everything to us.' },
    { title: 'Built for Nigeria and beyond', desc: 'Xaddie was built to bridge the gap between Nigeria, Africa and global financial services. We are solving real money problems for everyday people, starting from Nigeria and expanding across the continent.' },
    { title: 'No hidden charges', desc: 'What you see is what you pay. We believe in full transparency with our pricing. No surprise deductions, no hidden fees added at checkout. Just a straightforward way to buy the gift cards you need.' },
    { title: 'Fast and reliable', desc: 'Transactions are processed quickly after payment is confirmed. No waiting, no back and forth — just instant access to your money and purchases.' },
    { title: 'We listen to our users', desc: 'Every feature on Xaddie exists because someone asked for it. We actively collect feedback and use it to shape our roadmap. If something is not working for you, we want to know about it.' },
  ];

  return (
    <section id="security" className="py-28 bg-[#080D1A] relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] -right-48 top-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(26,58,107,0.2),transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 opacity-0">
          <span className="text-[#E8441A] text-xs font-bold tracking-[3px] uppercase mb-4 block">Built to protect you</span>
          <h2 className="font-[Syne] text-4xl md:text-5xl font-extrabold tracking-[-1.5px] mb-5 leading-[1.1]">
            Security is not<br />an <span className="text-[#E8441A]">afterthought.</span>
          </h2>
          <p className="text-white/55 text-lg max-w-md mx-auto leading-relaxed font-light">
            Every layer of Xaddie is designed with your safety at the core.
          </p>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p, i) => (
            <div
              key={i}
              ref={el => { pointsRef.current[i] = el; }}
              style={{ animationDelay: `${i * 0.08}s` }}
              className="opacity-0 bg-[#0F1A2E] border border-white/6 rounded-3xl p-7 text-center hover:border-[#E8441A]/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{p.icon}</div>
              <h3 className="font-[Syne] text-base font-bold mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed font-light">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3 text-center mb-4">
            <span className="text-[#E8441A] text-xs font-bold tracking-[3px] uppercase">Why you can trust Xaddie</span>
          </div>

          {trustCards.map((card, i) => (
            <div
              key={i}
              ref={el => { trustRef.current[i] = el; }}
              style={{ animationDelay: `${i * 0.1}s` }}
              className="opacity-0 bg-[#0F1A2E] border border-white/6 rounded-3xl p-8"
            >
              <h3 className="font-[Syne] font-bold text-xl text-white mb-3">{card.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div
          ref={bannerRef}
          className="opacity-0 mt-10 rounded-3xl border border-[#E8441A]/20 bg-gradient-to-br from-[#E8441A]/10 to-transparent p-10 text-center"
        >
          <h3 className="font-[Syne] font-black text-3xl text-white mb-3">
            Your safety is our <span className="text-[#E8441A]">top priority.</span>
          </h3>
          <p className="text-white/40 max-w-md mx-auto text-sm leading-relaxed">
            Xaddie is built from the ground up with security at every layer. We hold ourselves to the highest standards so you never have to worry about your money or your data.
          </p>
        </div>

      </div>
    </section>
  );
}