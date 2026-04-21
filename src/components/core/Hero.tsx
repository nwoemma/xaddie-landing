import heroImg from "../../assets/mobile.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-20">

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] -top-24 -left-24 bg-[radial-gradient(circle,rgba(232,68,26,0.15),transparent_70%)] rounded-full animate-pulse" />
        <div className="absolute w-[500px] h-[500px] -bottom-24 right-1/4 bg-[radial-gradient(circle,rgba(26,58,107,0.25),transparent_70%)] rounded-full" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16 relative z-10">

        {/* Left content */}
        <div className="animate-[fadeUp_0.8s_ease_both]">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-[Syne] font-extrabold leading-[1.05] tracking-[-2px] mb-6">
            Your Money,<br />
            <span className="text-[#E8441A]">Anywhere.</span><br />
            Anytime.
          </h1>

          <p className="text-white/55 text-lg leading-relaxed max-w-md mb-10 font-light">
            Buy gift cards from top global brands, send money, and manage your finances — all from one app.
          </p>

        </div>

        {/* Right — image */}
        <div className="hidden md:flex justify-center relative">
          <div className="absolute w-72 h-72 bg-[radial-gradient(circle,rgba(232,68,26,0.18),transparent_70%)] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <img
            src={heroImg}
            alt="Xaddie App"
            className="w-[400px] object-contain relative z-10 animate-[floatA_4s_ease-in-out_infinite] mix-blend-screen"
              style={{ mixBlendMode: 'multiply', filter: 'contrast(1.1)' }}
          />
        </div>

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatA {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

    </section>
  );
}