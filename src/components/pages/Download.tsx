import { FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import logo from "../../assets/xaddie-logo.png"
export default function DownloadApp() {
  const iconRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const els = [iconRef, titleRef, descRef, btnRef, statsRef, backRef];
    els.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.animationDelay = `${i * 0.1}s`;
        ref.current.classList.add('animate-fade-up');
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#080D1A] flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">

        <div className="rounded-2xl overflow-hidden flex items-center justify-center">
            <img src={logo} className="w-17 h-17 object-contain" />
        </div>

        <h1
          ref={titleRef}
          className="opacity-0 font-[Syne] font-black text-4xl text-white mb-4"
        >
          Get the <span className="text-[#E8441A]">Xaddie</span> App
        </h1>

        <p
          ref={descRef}
          className="opacity-0 text-white/50 text-lg mb-10"
        >
          Buy gift cards, send to anyone, anywhere. Download the app to get started.
        </p>

        <div
          ref={btnRef}
          className="opacity-0 flex justify-center mb-10"
        >
          <a href="#">
            <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white text-[#080D1A] hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-lg">
              <FaGooglePlay className="text-xl text-black" />
              <div className="text-left">
                <div className="text-[10px] text-black/50 leading-none">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </div>
          </a>
        </div>

        <div
          ref={statsRef}
          className="opacity-0 grid grid-cols-3 gap-4 mb-10"
        >
          {[
            { value: 'Free', label: 'To Download' },
            { value: '1min', label: 'Setup Time' },
            { value: '10+', label: 'Brands' },
          ].map(s => (
            <div key={s.label} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4">
              <div className="font-[Syne] font-black text-2xl text-[#E8441A]">{s.value}</div>
              <div className="text-white/40 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <Link
          ref={backRef}
          to="/products"
          className="opacity-0 text-white/30 hover:text-white/60 text-sm transition-colors"
        >
          ← Back to Products
        </Link>

      </div>
    </div>
  );
}