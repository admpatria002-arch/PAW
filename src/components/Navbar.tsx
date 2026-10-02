import React, { useState } from 'react';
import { PatriaLogo } from './PatriaLogo.tsx';
import { Menu, X, Mail } from 'lucide-react';

export type NavTab = 
  | 'beranda'
  | 'tentang-kami'
  | 'layanan'
  | 'standar-hse'
  | 'portofolio-mitra'
  | 'legalitas'
  | 'sarana-prasarana'
  | 'kontak';

interface NavbarProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exact solid background as requested:
  // "warna latar header disetiap menu sama tidak berubah walau di gulir kebawah"
  // It is fixed with bg-[#0a1c30] permanently, no dynamic opacity or color shift.

  const navItems: { id: NavTab; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang-kami', label: 'Tentang Kami' },
    { id: 'layanan', label: 'Layanan' },
    { id: 'sarana-prasarana', label: 'Sarana & Prasarana' },
    { id: 'standar-hse', label: 'Standar HSE' },
    { id: 'portofolio-mitra', label: 'Portofolio Mitra' },
    { id: 'legalitas', label: 'Legalitas & KBLI' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const handleSelectTab = (id: NavTab) => {
    onTabChange(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a1c30] border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single element brand lockup with redesigned logo */}
        <button
          onClick={() => handleSelectTab('beranda')}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0082c8] rounded-md py-1 text-left"
        >
          <PatriaLogo variant="icon" size="md" />
          <span
            className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#0082c8] transition-colors whitespace-nowrap"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            CV. Patria Arta Wahana
          </span>
        </button>

        {/* Zone 2: Clean text navigation links for separated menus */}
        <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-300">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`transition-colors whitespace-nowrap py-1 font-medium ${
                  isActive
                    ? 'text-white border-b-2 border-[#0082c8] font-bold'
                    : 'text-slate-300 hover:text-white hover:border-b-2 hover:border-slate-500'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Direct Contact Action (Kalkulator removed as requested) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleSelectTab('kontak')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#0082c8] hover:bg-[#0074b3] rounded-lg transition-colors whitespace-nowrap active:scale-95 shadow-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hubungi Kami</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus-visible:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer - stays in exact same #0a1c30 solid background */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a1c30] border-b border-slate-800 px-6 py-5 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`w-full text-left py-2.5 text-sm transition-colors border-b border-slate-800/70 ${
                  isActive ? 'text-[#0082c8] font-bold' : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleSelectTab('kontak')}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-[#0082c8] rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Hubungi Kami</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
