import React from 'react';
import { Hero } from './Hero.tsx';
import { NavTab } from './Navbar.tsx';
import { COMPANY_INFO, HSE_STANDARDS, PARTNER_EXPERIENCES, FLEET_LIST, LEGAL_DOCUMENTS } from '../data/companyData.ts';
import { ArrowRight, ShieldCheck, Utensils, Shirt, Sparkles, Truck, Award, Calendar, FileText, CheckCircle2 } from 'lucide-react';

interface HomeOverviewProps {
  onNavigate: (tab: NavTab) => void;
}

export const HomeOverview: React.FC<HomeOverviewProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 1. Profil Singkat Strip (Tentang Kami) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold text-[#0084d6] uppercase tracking-wider">
                Tentang CV. Patria Arta Wahana
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1"
                style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
              >
                Komitmen Mutu Layanan & Integritas Sejak 11 September 2010
              </h2>
              <blockquote className="mt-4 text-slate-700 italic border-l-3 border-[#0084d6] pl-4 text-sm sm:text-base leading-relaxed">
                "{COMPANY_INFO.aboutQuote}"
              </blockquote>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => onNavigate('tentang-kami')}
                className="inline-flex items-center justify-between px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm group"
              >
                <span>Profil, Visi, Misi & 5 Nilai Inti</span>
                <ArrowRight className="w-4 h-4 text-[#0084d6] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('legalitas')}
                className="inline-flex items-center justify-between px-5 py-3 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl text-xs font-bold transition-all group"
              >
                <span>Legalitas Resmi NIB & KBLI</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Layanan Utama Preview */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-[#0084d6] uppercase tracking-wider">
                Layanan Unggulan
              </span>
              <h2
                className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1"
                style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
              >
                3 Pilar Jasa General Service Pertambangan
              </h2>
            </div>
            <button
              onClick={() => onNavigate('layanan')}
              className="mt-3 sm:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#0084d6] hover:text-[#006ca6]"
            >
              <span>Buka Menu Layanan Lengkap (8 Produk)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0084d6] transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0084d6] flex items-center justify-center mb-4">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Jasa Boga & Catering</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Penyediaan Nasi Tumpeng, Nasi Kotak Bento, Nasi Bungkus Lapangan, Acara Prasmanan, Meeting & Snack Box hingga 5.000+ porsi/hari berizin Laik Sehat.
                </p>
              </div>
              <button
                onClick={() => onNavigate('layanan')}
                className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-[#0084d6] flex items-center gap-1"
              >
                <span>Lihat Varian Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0084d6] transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0084d6] flex items-center justify-center mb-4">
                  <Shirt className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Laundry Industri & Mess</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Penatu higienis khusus seragam tambang (wearpack), sprei, dan linen mess karyawan dengan sistem tracking dan dekontaminasi oli hingga 1.500 kg/hari.
                </p>
              </div>
              <button
                onClick={() => onNavigate('layanan')}
                className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-[#0084d6] flex items-center gap-1"
              >
                <span>Lihat Fasilitas Penatu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0084d6] transition-all">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0084d6] flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Kebersihan Mess & Kantor</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Sanitasi kamar mess akomodasi pekerja tambang, kebersihan ruang kantor site, koridor, dan toilet dengan standar checklist HSE harian.
                </p>
              </div>
              <button
                onClick={() => onNavigate('layanan')}
                className="mt-5 pt-3 border-t border-slate-100 text-xs font-bold text-[#0084d6] flex items-center gap-1"
              >
                <span>Lihat Standar Housekeeping</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sarana & Prasarana Quick Callout */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-blue-50 text-[#0084d6] shrink-0">
                <Truck className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#0084d6] uppercase tracking-wider">
                  Sarana & Prasarana Siaga
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  6 Unit Armada Transportasi & Fasilitas Pengolahan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  Isuzu Canter, Triton Single Cabin 4x4, Grandmax Box (2 unit), Grandmax Blindvan, dan Terios siap beroperasi 24 jam dengan peralatan food-grade dan laundry industri otomatis.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('sarana-prasarana')}
              className="shrink-0 px-5 py-3 text-xs font-bold text-white bg-[#0084d6] hover:bg-[#0073b3] rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              Buka Sarana & Prasarana
            </button>
          </div>
        </div>
      </section>

      {/* 4. HSE & Mitra Preview */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* HSE Assurance */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0084d6] uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Kepatuhan Standar K3</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  3 Standar Kualitas & Prosedur HSE
                </h3>
                <p className="text-xs text-slate-600 mt-2 mb-4 leading-relaxed">
                  Menjamin keamanan pangan dan kenyamanan tempat tinggal seluruh tenaga kerja mitra:
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  {HSE_STANDARDS.map((std) => (
                    <li key={std.number} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0084d6] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900">{std.title}:</span>{' '}
                        <span className="text-slate-600">{std.description.slice(0, 110)}...</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onNavigate('standar-hse')}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#0084d6] hover:text-[#006ca6]"
              >
                <span>Buka Detail Prosedur & Sertifikasi HSE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Rekam Jejak Mitra */}
            <div className="bg-[#0a1c30] text-white rounded-xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#7cc8f8] uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4 text-[#0084d6]" />
                  <span>Mitra Kerja Sejak 2010</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Dipercaya Korporasi Tambang & Industri
                </h3>
                <p className="text-xs text-slate-300 mt-2 mb-4 leading-relaxed">
                  Rekam jejak kemitraan berkelanjutan bersama kontraktor tambang kelas satu:
                </p>

                <div className="space-y-2 text-xs">
                  {PARTNER_EXPERIENCES.slice(0, 4).map((pt) => (
                    <div key={pt.id} className="bg-slate-850/80 p-2.5 rounded-lg border border-slate-700/80 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-100">{pt.client}</div>
                        <div className="text-[11px] text-slate-400">{pt.services.join(', ')}</div>
                      </div>
                      <span className="text-[11px] font-mono text-[#7cc8f8] shrink-0 font-medium">
                        {pt.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('portofolio-mitra')}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#7cc8f8] hover:text-white"
              >
                <span>Lihat Seluruh 8 Mitra Kerja & Riwayat Kontrak</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
