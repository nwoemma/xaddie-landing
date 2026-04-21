import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const steps = [
  { num: '01', title: 'Create your account', desc: 'Sign up with your email and basic info. Takes less than 2 minutes to get started.' },
  { num: '02', title: 'Set your secure PIN', desc: 'Protect your wallet with a 4-digit PIN required for all transactions.' },
  { num: '03', title: 'Verify your identity', desc: 'Complete KYC via BVN to unlock your NGN wallet and higher transaction limits.' },
  { num: '04', title: 'Start transacting', desc: 'Deposit, send money, buy gift cards, or create your virtual USD card instantly.' },
];

export default function HowItWorks() {
  const navigate = useNavigate();
  const leftRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (leftRef.current) observer.observe(leftRef.current);
    stepsRef.current.forEach(el => { if (el) observer.observe(el); });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 bg-[#0D1526]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <div ref={leftRef} className="opacity-0">
          <span className="text-[#E8441A] text-xs font-bold tracking-[3px] uppercase mb-4 block">Simple by design</span>
          <h2 className="font-[Syne] text-4xl md:text-5xl font-extrabold tracking-[-1.5px] leading-[1.1] mb-5">
            Up and running<br />in <span className="text-[#E8441A]">4 steps.</span>
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-9 font-light">
            We removed every friction point so you can start moving money the moment you sign up.
          </p>
          <button
            onClick={() => navigate('/download')}
            className="inline-block px-7 py-3.5 bg-[#E8441A] rounded-2xl text-white font-semibold text-sm shadow-[0_8px_32px_rgba(232,68,26,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(232,68,26,0.4)] transition-all"
          >
            Download the App →
          </button>
        </div>

        {/* Right — steps */}
        <div className="flex flex-col">
          {steps.map((s, i) => (
            <div
              key={i}
              ref={el => { stepsRef.current[i] = el; }}
              style={{ animationDelay: `${i * 0.15}s` }}
              className="opacity-0 flex gap-5 relative"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-[22px] top-11 bottom-0 w-px bg-gradient-to-b from-[#E8441A]/30 to-transparent" />
              )}
              <div className="w-11 h-11 shrink-0 bg-[#E8441A]/10 border border-[#E8441A]/30 rounded-xl flex items-center justify-center font-[Syne] font-bold text-[#E8441A] text-sm z-10">
                {s.num}
              </div>
              <div className="pb-8">
                <h3 className="font-[Syne] text-lg font-bold mb-2 tracking-[-0.3px]">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}