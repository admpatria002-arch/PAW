import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData.ts';
import { PatriaLogo } from './PatriaLogo.tsx';
import { MapPin, Mail, Send, Check, ExternalLink } from 'lucide-react';
import { NavTab } from './Navbar.tsx';

interface ContactFooterProps {
  onTabChange?: (tab: NavTab) => void;
  isStandalone?: boolean;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onTabChange, isStandalone = false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const exactAddress = "CV. Patria Arta Wahana, Gg. Mekarsari RT 016 RW 004, Kel. Simpang Empat Sungai Baru, Kec. Jorong, Kab, Tanah Laut, Kalimantan Selatan";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(exactAddress)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
  const googleMapsDirectLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(exactAddress)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const mailSubject = subject || `Permohonan Penawaran / Audiensi dari ${name}`;
    const mailBody = `Nama: ${name}\nEmail: ${email}\nPerusahaan: ${subject || '-'}\n\nPesan:\n${message}\n\nDikirim via Website Resmi CV. Patria Arta Wahana`;
    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <footer id="kontak" className="bg-[#071526] text-slate-300 pt-14 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title if on standalone contact view */}
        {isStandalone && (
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0084d6] uppercase tracking-wider mb-2">
              <span>Hubungi Manajemen</span>
              <span aria-hidden="true">·</span>
              <span>Layanan Terpadu Kalimantan Selatan</span>
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
            >
              Kontak & Lokasi Kantor Operasional
            </h2>
          </div>
        )}

        {/* Contact Grid: Info + Map on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Left Column: Logo, Address, Email, and Google Map placed directly below */}
          <div className="lg:col-span-6 space-y-5">
            <PatriaLogo variant="full" size="lg" />

            {/* Address & Email Information */}
            <div className="space-y-4 pt-2 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0084d6] shrink-0 mt-1" />
                <div>
                  <span className="text-slate-400 block text-xs">Alamat Kantor & Operasional:</span>
                  <span className="text-slate-200 font-medium leading-relaxed block">
                    {exactAddress}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#0084d6] shrink-0 mt-1" />
                <div>
                  <span className="text-slate-400 block text-xs">Email Resmi Perusahaan:</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-[#7cc8f8] font-bold text-sm sm:text-base hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map moved directly below Email with adjusted compact size as requested */}
            <div className="pt-2">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0084d6]" />
                  <span>Peta Lokasi Kantor di Jorong, Tanah Laut</span>
                </span>
                <a
                  href={googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#7cc8f8] hover:underline font-semibold"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-700/80 shadow-md bg-slate-900">
                <iframe
                  title="Peta Lokasi CV. Patria Arta Wahana"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Email Form */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Kirim Pesan & Permohonan Penawaran
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Pesan Anda akan langsung diteruskan ke email manajemen kami ({COMPANY_INFO.email}).
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Nama Lengkap / PIC
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Narahubung"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#0084d6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Perusahaan / Instansi
                    </label>
                    <input
                      type="text"
                      placeholder="PT. Mitra Tambang"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#0084d6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Alamat Email Korespondensi
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="email@perusahaan.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#0084d6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Rincian Kebutuhan (Catering, Laundry, atau Housekeeping)
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Jelaskan kebutuhan jumlah porsi/karyawan, durasi kontrak, dan lokasi site tambang..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#0084d6]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-[#0084d6] hover:bg-[#0073b3] rounded-lg transition-colors active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Resmi</span>
                </button>

                {submitted && (
                  <div className="p-3 bg-emerald-950/60 border border-emerald-700 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>Aplikasi email Anda telah terbuka dengan draft pesan terformat lengkap menuju {COMPANY_INFO.email}.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Quiet Footer Copyright & Navigation Mirror */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} CV. Patria Arta Wahana. Hak Cipta Dilindungi Undang-Undang.
          </div>

          {onTabChange && (
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
              <button onClick={() => { onTabChange('beranda'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-slate-300">Beranda</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => { onTabChange('tentang-kami'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-slate-300">Tentang Kami</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => { onTabChange('layanan'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-slate-300">Layanan</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => { onTabChange('sarana-prasarana'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-slate-300">Sarana & Prasarana</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => { onTabChange('standar-hse'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-slate-300">Standar HSE</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => { onTabChange('portofolio-mitra'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-slate-300">Portofolio Mitra</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => { onTabChange('legalitas'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-slate-300">Legalitas & KBLI</button>
              <span aria-hidden="true">·</span>
              <button onClick={() => { onTabChange('kontak'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-slate-300">Kontak</button>
            </div>
          )}
        </div>

      </div>
    </footer>
  );
};
