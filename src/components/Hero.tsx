import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import heroImage from '../assets/images/hero_industrial_catering_1790902026830.jpg';
import { NavTab } from './Navbar.tsx';

interface HeroProps {
  onNavigate: (tab: NavTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-[#071526] overflow-hidden">
      {/* Background Media with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Operasional Dapur Industri dan Catering Tambang CV. Patria Arta Wahana"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-105"
        />
        {/* Measured contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071526] via-[#071526]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071526] via-[#071526]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="max-w-3xl">
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif", textWrap: 'balance' }}
          >
            Mitra Terpercaya Jasa <span className="text-[#0082c8]">Catering</span>, <span className="text-[#0082c8]">Laundry</span> & <span className="text-[#0082c8]">Housekeeping</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            CV. Patria Arta Wahana adalah perusahaan keluarga yang beroperasi dengan legalitas sah sejak 11 September 2010. 
            Kami berdedikasi menyajikan makanan bernutrisi tinggi berstandar HSE, penatu pakaian tambang higienis, 
            serta kebersihan mess dan kantor berstandar industri demi kepuasan mitra dan pekerja.
          </p>

          {/* Action CTAs (Kalkulator removed as requested) */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onNavigate('layanan')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0082c8] hover:bg-[#0073b3] rounded-lg transition-all shadow-lg shadow-[#0082c8]/25 whitespace-nowrap active:scale-[0.98]"
            >
              <span>Jelajahi Produk & Layanan</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('kontak')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 rounded-lg transition-all whitespace-nowrap active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-[#0082c8]" />
              <span>Hubungi Kami</span>
            </button>
          </div>
        </div>

        {/* Structural Key Proof Markers (Claim-to-Proof Adjacency) */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
              16+ <span className="text-[#0082c8] text-base font-normal">Tahun</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Pengalaman operasional lapangan sejak 11 September 2010
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
              8+ <span className="text-[#0082c8] text-base font-normal">Kemitraan</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Rekam jejak kontrak kontraktor tambang & pabrik terkemuka
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              100% <span className="text-[#0082c8] text-base font-normal">Legal</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              NIB, Akta Kemenkumham, SR Disnakertrans & Laik Sehat Dinkes
            </p>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
              6 <span className="text-[#0082c8] text-base font-normal">Unit Armada</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Truk box berpendingin, 4x4 Triton hauling road, & mobil operasional
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
