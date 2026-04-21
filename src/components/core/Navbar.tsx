import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/xaddie-logo.png"
const links = ['Home', 'Features', 'Products', 'Security'];

const linkRoutes: Record<string, string> = {
  Home: '/',
  Features: '/features',
  Products: '/products',
  Security: '/security',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080D1A]/90 backdrop-blur-xl border-b border-white/5 py-3' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="rounded-2xl overflow-hidden">
            <img src={logo} className="w-17 h-17 object-contain" />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex justify-end gap-8 flex-1">
          {links.map(l => (
            <li key={l}>
              <Link
                to={linkRoutes[l]}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1526] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l} to={linkRoutes[l]} onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white text-sm font-medium py-1">
              {l}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="#" className="flex-1 text-center py-2 rounded-full border border-white/10 text-white/60 text-sm">Sign In</a>
            <a href="#" className="flex-1 text-center py-2 rounded-full bg-[#E8441A] text-white text-sm font-semibold">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
}