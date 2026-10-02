import React, { useState } from 'react';
import { COMPANY_INFO, CORE_VALUES } from '../data/companyData.ts';
import { ShieldCheck, HeartHandshake, Award, Users, Sparkles, Building, MapPin, Mail, Calendar, Compass, Target } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeValueIndex, setActiveValueIndex] = useState(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#0082c8]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0082c8]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#0082c8]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#0082c8]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#0082c8]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#0082c8]" />;
    }
  };

  return (
    <section id="tentang-kami" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0082c8] uppercase tracking-wider mb-2">
            <span>Profil Korporat</span>
            <span aria-hidden="true">·</span>
            <span>Perjalanan Sejak 11 September 2010</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Membangun Layanan Berkualitas Tinggi dengan Integritas dan Nilai Kekeluargaan
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Sejak 11 September 2010, CV. Patria Arta Wahana tumbuh dari usaha keluarga menjadi salah satu penyedia 
            General Service pertambangan dan industri paling konsisten di Tanah Laut dan wilayah Kalimantan Selatan.
          </p>
        </div>

        {/* Company Philosophy & Statement Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-xl p-6 sm:p-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0082c8] mb-3">
              Komitmen Manajemen
            </h3>
            <blockquote className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal italic border-l-4 border-[#0082c8] pl-4 my-4">
              "{COMPANY_INFO.aboutQuote}"
            </blockquote>
            <p className="text-sm text-slate-600 leading-relaxed mt-4">
              Filosofi kami di bidang penatu dan kebersihan pun selaras:
            </p>
            <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed italic border-l-2 border-slate-300 pl-4 my-2">
              "{COMPANY_INFO.laundryQuote}"
            </blockquote>
          </div>

          {/* Quick Profile Summary Card */}
          <div className="lg:col-span-5 bg-[#0a1c30] text-white rounded-xl p-6 sm:p-7 shadow-sm border border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7cc8f8] mb-4">
              Data Resmi Perusahaan
            </h3>
            
            <dl className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-[#0082c8] shrink-0 mt-0.5" />
                <div>
                  <dt className="text-slate-400 text-xs">Nama Perusahaan</dt>
                  <dd className="font-semibold text-slate-100">{COMPANY_INFO.name}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#0082c8] shrink-0 mt-0.5" />
                <div>
                  <dt className="text-slate-400 text-xs">Tanggal Berdiri</dt>
                  <dd className="font-semibold text-slate-100">{COMPANY_INFO.established} (16 Tahun Beroperasi)</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0082c8] shrink-0 mt-0.5" />
                <div>
                  <dt className="text-slate-400 text-xs">Alamat Domisili Operasional</dt>
                  <dd className="text-slate-200 leading-snug">{COMPANY_INFO.address}</dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#0082c8] shrink-0 mt-0.5" />
                <div>
                  <dt className="text-slate-400 text-xs">Email Korespondensi</dt>
                  <dd className="font-semibold text-[#7cc8f8]">
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0082c8]/10 flex items-center justify-center text-[#0082c8]">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Visi Perusahaan</h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {COMPANY_INFO.visi}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0082c8]/10 flex items-center justify-center text-[#0082c8]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Misi Perusahaan</h3>
            </div>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {COMPANY_INFO.misi}
            </p>
          </div>
        </div>

        {/* 5 Nilai Inti Perusahaan (Interactive Selection) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                5 Nilai Inti (Core Values)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Prinsip dasar yang memandu etika kerja setiap insan CV. Patria Arta Wahana
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {CORE_VALUES.map((item, index) => {
              const isSelected = activeValueIndex === index;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveValueIndex(index)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-[#0082c8]'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-[#0082c8]/50 hover:bg-slate-50'
                  }`}
                >
                  <div className="mb-3">
                    {getIcon(item.iconName)}
                  </div>
                  <h4 className="text-sm font-bold leading-snug">
                    {item.title}
                  </h4>
                  <p className={`mt-2 text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {item.meaning}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
