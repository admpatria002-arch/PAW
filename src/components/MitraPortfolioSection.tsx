import React, { useState } from 'react';
import { PARTNER_EXPERIENCES, PartnerExperience } from '../data/companyData.ts';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, Award } from 'lucide-react';

export const MitraPortfolioSection: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'active' | 'completed'>('all');

  const filteredMitra = PARTNER_EXPERIENCES.filter((m) => {
    if (filterType === 'active') return m.isCurrent;
    if (filterType === 'completed') return !m.isCurrent;
    return true;
  });

  return (
    <section id="portofolio-mitra" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0082c8] uppercase tracking-wider mb-2">
              <span>Rekam Jejak & Pengalaman</span>
              <span aria-hidden="true">·</span>
              <span>16 Tahun Berkelanjutan</span>
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
            >
              Pengalaman Kontrak dengan Mitra Terkemuka
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Portofolio kerja sama resmi CV. Patria Arta Wahana sejak didirikan tahun 2010 
              bersama korporasi tambang batubara, pabrik manufaktur, dan kontraktor alat berat.
            </p>
          </div>

          {/* Interactive Filter (Buttons, non-pill) */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filterType === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Mitra (8)
            </button>
            <button
              onClick={() => setFilterType('active')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filterType === 'active'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Aktif Berjalan
            </button>
            <button
              onClick={() => setFilterType('completed')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                filterType === 'completed'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Riwayat Selesai
            </button>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredMitra.map((partner) => (
            <div
              key={partner.id}
              className={`rounded-xl border p-6 transition-all duration-200 bg-white flex flex-col justify-between ${
                partner.isCurrent
                  ? 'border-[#0082c8] shadow-sm ring-1 ring-[#0082c8]/30'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Clean unboxed status line (anti-pill) */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#0082c8]" />
                    <span className="tabular-nums">{partner.period}</span>
                  </span>
                  
                  <span className={partner.isCurrent ? 'text-emerald-700 font-semibold' : 'text-slate-500'}>
                    {partner.statusText}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {partner.client}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{partner.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-medium text-slate-700">{partner.years}</span>
                </div>

                {/* Scope of Services */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-xs font-semibold text-slate-600 mb-2">Cakupan Layanan:</div>
                  <div className="flex flex-wrap gap-2">
                    {partner.services.map((svc, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-100 text-slate-800 px-2.5 py-1 rounded font-medium border border-slate-200/60"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {partner.isCurrent && (
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-[#0082c8] font-semibold flex items-center justify-between">
                  <span>Kerja Sama Aktif Berkelanjutan (Catering, Kebersihan Mess & Laundry)</span>
                  <Award className="w-4 h-4 text-[#0082c8]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Milestone Summary Footer */}
        <div className="mt-10 bg-white border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-600">
            <span className="font-bold text-slate-900">Komitmen Layanan Tanpa Henti:</span> Dari proyek pertama bersama PT. Trakindo tahun 2010 hingga kemitraan menyeluruh dengan PT. Putra Perkasa Abadi & PT. Madhani Talatah Nusantara, kepuasan mitra selalu menjadi prioritas utama kami.
          </div>
          <a
            href="#kontak"
            className="shrink-0 px-4 py-2 text-xs font-semibold text-white bg-[#0082c8] hover:bg-[#0073b3] rounded-lg transition-colors whitespace-nowrap"
          >
            Mulai Kemitraan Baru
          </a>
        </div>

      </div>
    </section>
  );
};
