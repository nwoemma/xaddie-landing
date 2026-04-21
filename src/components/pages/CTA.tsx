import { useEffect, useRef } from 'react';
import { FaGooglePlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const navigate = useNavigate();
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    [labelRef, titleRef, descRef, btnRef].forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.animationDelay = `${i * 0.15}s`;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const buttons = [
    { label: 'Google Play', sub: 'Get it on', icon: <FaGooglePlay className="text-2xl text-white" /> },
  ];

  return (
    <section className="py-28 bg-[#0D1526] relative overflow-hidden">
      <div className="absolute w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(232,68,26,0.1),transparent_65%)] rounded-full pointer-events-none" />
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">

        <span ref={labelRef} className="opacity-0 text-[#E8441A] text-xs font-bold tracking-[3px] uppercase mb-5 block">
          Get started today
        </span>

        <h2 ref={titleRef} className="opacity-0 font-[Syne] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-2px] leading-[1.05] mb-6">
          Ready to take control<br />of your <span className="text-[#E8441A]">finances?</span>
        </h2>

        <p ref={descRef} className="opacity-0 text-white/55 text-lg leading-relaxed mb-12 font-light">
          Xaddie is launching soon. Be one of the first to get instant access to top global gift cards — right from your phone.
        </p>

        <div ref={btnRef} className="opacity-0 flex flex-wrap gap-4 justify-center">
          {buttons.map(btn => (
            <button
              key={btn.label}
              onClick={() => navigate('/download')}
              className="flex items-center gap-4 px-6 py-3.5 bg-[#111827] border border-white/10 rounded-2xl text-white hover:border-[#E8441A] hover:-translate-y-1 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.2)] min-w-[180px]"
            >
              {btn.icon}
              <div className="text-left">
                <div className="text-[10px] text-white/40">{btn.sub}</div>
                <div className="font-[Syne] font-bold text-base">{btn.label}</div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}