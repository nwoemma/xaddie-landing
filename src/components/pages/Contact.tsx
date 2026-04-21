import { useState, useEffect, useRef } from 'react';
import { MdEmail, MdPerson, MdMessage } from 'react-icons/md';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#080D1A] pt-28 pb-24 px-6">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <span className="text-[#E8441A] text-xs font-bold tracking-[3px] uppercase mb-4 block">Get in touch</span>
          <h1 className="font-[Syne] font-black text-4xl md:text-5xl text-white mb-4">
            Contact <span className="text-[#E8441A]">Us</span>
          </h1>
          <p className="text-white/50 text-lg">
            Have a question or feedback? We would love to hear from you.
          </p>
        </div>

        {sent ? (
          <div className="bg-[#0F1A2E] border border-[#E8441A]/30 rounded-3xl p-10 text-center animate-fade-up">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="font-[Syne] font-black text-2xl text-white mb-2">Message Sent</h2>
            <p className="text-white/50 text-sm">We will get back to you as soon as we can.</p>
            <button
              onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
              className="mt-6 px-6 py-2.5 rounded-full border border-[#E8441A]/30 text-[#E8441A] text-sm font-semibold hover:bg-[#E8441A] hover:text-white transition-all"
            >
              Send another
            </button>
          </div>
        ) : (
          <div ref={formRef} className="opacity-0 bg-[#0F1A2E] border border-white/[0.06] rounded-3xl p-8 flex flex-col gap-5">

            <div>
              <label className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2 block">Name</label>
              <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl px-4 py-3 focus-within:border-[#E8441A]/50 transition-all">
                <MdPerson className="text-[#E8441A] text-xl shrink-0" />
                <input
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="bg-transparent text-white text-sm outline-none w-full placeholder:text-white/20"
                />
              </div>
            </div>

            <div>
              <label className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2 block">Email</label>
              <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl px-4 py-3 focus-within:border-[#E8441A]/50 transition-all">
                <MdEmail className="text-[#E8441A] text-xl shrink-0" />
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="bg-transparent text-white text-sm outline-none w-full placeholder:text-white/20"
                />
              </div>
            </div>

            <div>
              <label className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2 block">Message</label>
              <div className="flex gap-3 bg-white/[0.03] border border-white/[0.08] rounded-2xl px-4 py-3 focus-within:border-[#E8441A]/50 transition-all">
                <MdMessage className="text-[#E8441A] text-xl shrink-0 mt-0.5" />
                <textarea
                  placeholder="Write your message here..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="bg-transparent text-white text-sm outline-none w-full placeholder:text-white/20 resize-none"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-3.5 rounded-2xl bg-[#E8441A] text-white font-semibold hover:bg-[#FF5C2E] transition-all shadow-lg shadow-orange-500/25 hover:-translate-y-0.5"
            >
              Send Message
            </button>

          </div>
        )}
      </div>
    </div>
  );
}