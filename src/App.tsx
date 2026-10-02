import React, { useState } from 'react';
import { Navbar, NavTab } from './components/Navbar.tsx';
import { HomeOverview } from './components/HomeOverview.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { SaranaPrasaranaSection } from './components/SaranaPrasaranaSection.tsx';
import { HseQualitySection } from './components/HseQualitySection.tsx';
import { MitraPortfolioSection } from './components/MitraPortfolioSection.tsx';
import { LegalitasKbliSection } from './components/LegalitasKbliSection.tsx';
import { ContactFooter } from './components/ContactFooter.tsx';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('beranda');

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactForService = (serviceName: string) => {
    setActiveTab('kontak');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0084d6] selection:text-white flex flex-col justify-between">
      {/* 
        Fixed Navbar with invariant solid background as required:
        "warna latar header disetiap menu sama tidak berubah walau di gulir kebawah"
      */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Main View Area with Distinct Separated Menus in logical sequence */}
      <main className="flex-grow pt-20">
        {activeTab === 'beranda' && (
          <HomeOverview onNavigate={handleTabChange} />
        )}

        {activeTab === 'tentang-kami' && (
          <div className="animate-fadeIn">
            <AboutSection />
          </div>
        )}

        {activeTab === 'layanan' && (
          <div className="animate-fadeIn">
            <ServicesSection onContactForService={handleContactForService} />
          </div>
        )}

        {activeTab === 'sarana-prasarana' && (
          <div className="animate-fadeIn">
            <SaranaPrasaranaSection />
          </div>
        )}

        {activeTab === 'standar-hse' && (
          <div className="animate-fadeIn">
            <HseQualitySection />
          </div>
        )}

        {activeTab === 'portofolio-mitra' && (
          <div className="animate-fadeIn">
            <MitraPortfolioSection />
          </div>
        )}

        {activeTab === 'legalitas' && (
          <div className="animate-fadeIn">
            <LegalitasKbliSection />
          </div>
        )}

        {activeTab === 'kontak' && (
          <div className="animate-fadeIn">
            <ContactFooter onTabChange={handleTabChange} isStandalone={true} />
          </div>
        )}
      </main>

      {/* 
        Footer with embedded Google Map directly below email info:
        CV. Patria Arta Wahana, Gg. Mekarsari RT 016 RW 004, Kel. Simpang Empat Sungai Baru, Kec. Jorong, Kab, Tanah Laut, Kalimantan Selatan
        (Shown on all pages except when already on standalone kontak page)
      */}
      {activeTab !== 'kontak' && (
        <ContactFooter onTabChange={handleTabChange} isStandalone={false} />
      )}

      {/* Floating Scroll To Top Button (Minimal) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleScrollToTop}
          className="p-3 bg-slate-900/90 hover:bg-[#0084d6] text-white rounded-full shadow-lg transition-all border border-slate-700 active:scale-95"
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
