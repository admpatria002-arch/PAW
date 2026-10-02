import React from 'react';
import { FLEET_LIST } from '../data/companyData.ts';
import { Truck, ShieldCheck, Check, Navigation, Car, Wrench, Compass, Box, Layers } from 'lucide-react';

export const SaranaPrasaranaSection: React.FC = () => {
  return (
    <section id="sarana-prasarana" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0084d6] uppercase tracking-wider mb-2">
            <span>Infrastruktur & Sarana Kerja</span>
            <span aria-hidden="true">·</span>
            <span>Distribusi Siaga Operasional</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Sarana & Prasarana Operasional
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Kelancaran suplai makanan panas tepat waktu dan kebersihan pakaian seragam di area site tambang didukung oleh 
            kesiapan 6 unit armada angkutan logistik tangguh dan peralatan higienis berstandar kepatuhan safety pertambangan.
          </p>
        </div>

        {/* Note: Gambar kantor telah dihilangkan sesuai permintaan pengguna */}

        {/* Unit Armada Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {FLEET_LIST.map((vehicle, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col justify-between hover:border-[#0084d6] hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#0084d6]">
                    {vehicle.name.includes('Canter') || vehicle.name.includes('Grandmax') ? (
                      <Truck className="w-6 h-6" />
                    ) : (
                      <Car className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-xs font-bold font-mono text-[#0084d6] bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-md">
                    {vehicle.units} Unit Ready
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0084d6] transition-colors">
                  {vehicle.name}
                </h3>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {vehicle.type}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 text-xs space-y-2.5">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase tracking-wider">Peran Operasional:</span>
                    <span className="font-medium text-slate-800 leading-snug">{vehicle.role}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold uppercase tracking-wider">Kapasitas & Fitur:</span>
                    <span className="text-slate-600 leading-snug">{vehicle.capacity}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <Check className="w-4 h-4" />
                  <span>Kondisi Siap Operasi</span>
                </span>
                <span className="text-slate-400">Stanby Jorong & Site</span>
              </div>
            </div>
          ))}

          {/* Total Armada Summary Card */}
          <div className="bg-[#0a1c30] text-white rounded-xl p-6 flex flex-col justify-between border border-slate-800 shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7cc8f8]">
                Total Sarana Transportasi
              </span>
              <div className="text-3xl font-extrabold text-white mt-1 tabular-nums">
                6 Unit <span className="text-xs font-normal text-slate-300">Armada Siaga</span>
              </div>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Dilengkapi box tertutup stainless food-grade berisolasi suhu, kabin kedap debu untuk laundry higienis, dan kendaraan 4x4 untuk respon cepat area hauling road dan pit tambang.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-xs text-[#7cc8f8] flex items-center gap-1.5 font-medium">
              <Navigation className="w-4 h-4 text-[#0084d6]" />
              <span>Jangkauan Wilayah: Kalimantan Selatan</span>
            </div>
          </div>
        </div>

        {/* Fasilitas & Perlengkapan Standar Penunjang */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0084d6] uppercase tracking-wider mb-1">
            <Layers className="w-4 h-4" />
            <span>Peralatan & Fasilitas Pengolahan</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            Sarana Penunjang Higienitas & K3 Tambang
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0084d6]" />
                <span>Peralatan Dapur Stainless Food Grade</span>
              </div>
              <p className="text-slate-500 leading-relaxed text-xs">
                Workstation stainless steel SUS 304 anti-karat, pemotong sayur/daging mekanis higienis, serta alat sterilisasi peralatan makan beruap panas.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-800 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#0084d6]" />
                <span>Mesin Laundry Industri Otomatis</span>
              </div>
              <p className="text-slate-500 leading-relaxed text-xs">
                Mesin cuci extractor dan dryer tumbler berkapasitas besar dengan kontrol suhu presisi untuk dekontaminasi pakaian tambang dan linen mess.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 space-y-2">
              <div className="font-bold text-slate-800 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#0084d6]" />
                <span>Peralatan Housekeeping & Sanitasi</span>
              </div>
              <p className="text-slate-500 leading-relaxed text-xs">
                Vacuum cleaner wet & dry industri, floor polisher, caddy bag lengkap, dan chemical sanitasi ramah lingkungan bersertifikasi MSDS.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
