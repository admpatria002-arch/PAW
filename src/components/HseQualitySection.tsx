import React, { useState } from 'react';
import { HSE_STANDARDS } from '../data/companyData.ts';
import { ShieldCheck, Stethoscope, TestTube2, Apple, CheckCircle2, FileCheck, AlertTriangle } from 'lucide-react';

export const HseQualitySection: React.FC = () => {
  const [selectedStandard, setSelectedStandard] = useState(0);

  const getStandardIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Stethoscope className="w-5 h-5 text-[#0082c8]" />;
      case 1:
        return <TestTube2 className="w-5 h-5 text-[#0082c8]" />;
      case 2:
        return <Apple className="w-5 h-5 text-[#0082c8]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#0082c8]" />;
    }
  };

  return (
    <section id="standar-hse" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0082c8] uppercase tracking-wider mb-2">
            <span>Keselamatan & Kesehatan Kerja</span>
            <span aria-hidden="true">·</span>
            <span>HSE Mining Compliant</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Standar Kualitas & Prosedur HSE Terintegrasi
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Menjalankan operasional di lingkungan industri pertambangan menuntut nol toleransi terhadap risiko 
            kontaminasi pangan maupun kecelakaan kerja. Kami menerapkan 3 pilar prosedur HSE yang ketat dan teraudit.
          </p>
        </div>

        {/* 3 Pillars of HSE & Quality */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {HSE_STANDARDS.map((std, idx) => {
            const isActive = selectedStandard === idx;
            return (
              <div
                key={std.number}
                onClick={() => setSelectedStandard(idx)}
                className={`cursor-pointer rounded-xl border p-6 transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'border-[#0082c8] bg-slate-50/90 shadow-md ring-1 ring-[#0082c8]'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#0082c8]">
                      PROSEDUR {std.number}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-100">
                      {getStandardIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {std.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {std.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80">
                  <div className="text-xs font-semibold text-slate-700 mb-2">Poin Kunci Prosedur:</div>
                  <ul className="space-y-1.5">
                    {std.points.slice(0, 3).map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0082c8] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit & Compliance Trust Block */}
        <div className="bg-[#0a1c30] rounded-xl p-6 sm:p-8 text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#7cc8f8] mb-2 uppercase tracking-wider">
                <FileCheck className="w-4 h-4 text-[#0082c8]" />
                <span>Kesiapan Audit Berkala (Audit Readiness)</span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                Terverifikasi Dinas Kesehatan & Terbuka untuk Audit HSE Mitra Tambang
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Setiap siklus pengolahan pangan kami dilengkapi checklist sanitasi harian, arsip Retained Sample 48 jam, 
                rekam logistik suhu, dan berkas Medical Check-Up seluruh staf dapur dan kebersihan yang siap diperiksa 
                kapan saja oleh tim auditor keselamatan klien.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-lg flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0082c8] shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Sertifikat Laik Sehat</div>
                  <div className="text-slate-400">T/443.61/145/Dinkes-KM.3/IV/2022</div>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 p-3 rounded-lg flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-[#0082c8] shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-white">Rekomendasi Disnakertrans</div>
                  <div className="text-slate-400">Rek.560/589/Was-NKT/Disnakertrans</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
