import React, { useState } from 'react';
import { LEGAL_DOCUMENTS, KBLI_LIST } from '../data/companyData.ts';
import { ShieldCheck, Copy, Check, FileText, Search, ExternalLink } from 'lucide-react';

export const LegalitasKbliSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [kbliFilter, setKbliFilter] = useState<'all' | 'Utama' | 'Pendukung'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredKbli = KBLI_LIST.filter(item => {
    const matchesFilter = kbliFilter === 'all' || item.type === kbliFilter;
    const matchesSearch = item.code.includes(searchQuery) || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="legalitas" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0082c8] uppercase tracking-wider mb-2">
            <span>Kepatuhan Hukum & Legalitas</span>
            <span aria-hidden="true">·</span>
            <span>Beroperasi Sejak 2010</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Ijin Legalitas Resmi & Klasifikasi Usaha (KBLI)
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Sebagai badan usaha profesional yang bermitra dengan perusahaan terbuka dan korporasi multinasional, 
            seluruh aspek legalitas, ketenagakerjaan, perpajakan, dan kelaikan sanitasi telah terpenuhi secara sah.
          </p>
        </div>

        {/* Legal Permits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {LEGAL_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 flex flex-col justify-between hover:border-[#0082c8]/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-slate-700">{doc.authority}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Terverifikasi</span>
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  {doc.name}
                </h3>

                {/* Nomor Dokumen Box */}
                <div className="mt-3 bg-white border border-slate-200 rounded-lg p-2.5 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-800 break-all select-all">
                    {doc.code}
                  </span>
                  <button
                    onClick={() => handleCopy(doc.code, doc.id)}
                    className="p-1 text-slate-400 hover:text-[#0082c8] transition-colors shrink-0 ml-2"
                    title="Salin Nomor Dokumen"
                    aria-label="Salin Nomor Dokumen"
                  >
                    {copiedId === doc.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-500 mt-2.5">
                  {doc.description}
                </p>
              </div>

              {copiedId === doc.id && (
                <div className="mt-2 text-[11px] text-emerald-600 font-medium animate-fadeIn">
                  ✓ Nomor dokumen berhasil disalin ke clipboard
                </div>
              )}
            </div>
          ))}
        </div>

        {/* KBLI Section */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Klasifikasi Baku Lapangan Usaha Indonesia (KBLI)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Cakupan bidang usaha yang terdaftar pada Nomor Induk Berusaha (NIB: 1209001442404)
              </p>
            </div>

            {/* KBLI Filters & Search */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari kode atau nama KBLI..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg w-full sm:w-60 focus:outline-none focus:ring-1 focus:ring-[#0082c8]"
                />
              </div>

              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
                <button
                  onClick={() => setKbliFilter('all')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    kbliFilter === 'all'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Semua (8)
                </button>
                <button
                  onClick={() => setKbliFilter('Utama')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    kbliFilter === 'Utama'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Utama (2)
                </button>
                <button
                  onClick={() => setKbliFilter('Pendukung')}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                    kbliFilter === 'Pendukung'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Pendukung (6)
                </button>
              </div>
            </div>
          </div>

          {/* KBLI Table with Tabular Numerals */}
          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700">
                <tr>
                  <th className="py-3 px-4 font-bold w-24">Kode KBLI</th>
                  <th className="py-3 px-4 font-bold">Judul Lapangan Usaha</th>
                  <th className="py-3 px-4 font-bold w-28">Kategori</th>
                  <th className="py-3 px-4 font-bold hidden md:table-cell">Deskripsi Operasional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {filteredKbli.map((item) => (
                  <tr key={item.code} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#0082c8] tabular-nums">
                      {item.code}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      {item.title}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-block px-2 py-0.5 text-xs font-semibold rounded ${
                          item.type === 'Utama'
                            ? 'bg-blue-50 text-[#0082c8] border border-blue-200'
                            : 'bg-slate-100 text-slate-600 border border-slate-200'
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-slate-600 hidden md:table-cell">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
