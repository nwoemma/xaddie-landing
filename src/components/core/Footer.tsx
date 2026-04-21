import { Link } from 'react-router-dom';
import logo from "../../assets/xaddie-logo.png"
import { MdGridView } from 'react-icons/md';



const cols = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Products', to: '/products' },
      { label: 'How It Works', to: '/howitworks' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'CTA', to: '/cta' },
      { label: 'Security', to: '/security' },
      
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Download App', to: '/download' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080D1A] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 mb-14">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="rounded-2xl overflow-hidden">
                <img src={logo} className="w-17 h-17 object-contain" />
              </div>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed font-light">
              A fintech platform integrating traditional finance with blockchain technology. Manage your money across borders — all in one app.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8">
            {cols.map(col => (
              <div key={col.title} className="flex flex-col gap-3">
                <div className="font-[Syne] font-bold text-sm text-white mb-1">{col.title}</div>
                {col.links.map(l => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-white/40 hover:text-white text-sm transition-colors font-light"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/30">
          <span>© 2026 Xaddie. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <MdGridView className="text-[#E8441A]" /> Xaddie — where finance meets simplicity
          </span>

        </div>
      </div>
    </footer>
  );
}