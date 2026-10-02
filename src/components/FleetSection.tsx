import React from 'react';
import { FLEET_LIST } from '../data/companyData.ts';
import { Truck, ShieldCheck, Check, Navigation, Car } from 'lucide-react';
import fleetImg from '../assets/images/fleet_logistics_trucks_1790902084392.jpg';

export const FleetSection: React.FC = () => {
  return (
    <section id="armada" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0082c8] uppercase tracking-wider mb-2">
            <span>Infrastruktur & Logistik</span>
            <span aria-hidden="true">·</span>
            <span>Distribusi Siaga 24 Jam</span>
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Sarana & Prasarana Armada Operasional
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Kelancaran suplai makanan panas dan kebersihan pakaian seragam di area tambang sangat bergantung pada 
            armada tangguh yang mampu menembus medan hauling road berdebu dan cuaca ekstrem Kalimantan Selatan.
          </p>
        </div>

        {/* Featured Fleet Media Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-12 border border-slate-200 shadow-sm max-h-[380px]">
          <img
            src={fleetImg}
            alt="Armada Pengiriman dan Logistik Tambang CV. Patria Arta Wahana"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center max-h-[380px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white max-w-xl">
              <span className="text-xs font-bold text-[#7cc8f8] uppercase tracking-wider">
                Logistik Terpadu & Higienis
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">
                Kesiapan Distribusi Tepat Waktu Menjangkau Seluruh Pos Tambang
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Dilengkapi box stainless food-grade berisolasi termal, kabin kedap debu untuk laundry steril, dan armada 4x4 untuk respon cepat pit area.
              </p>
            </div>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FLEET_LIST.map((vehicle, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-[#0082c8] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#0082c8]">
                    {vehicle.name.includes('Canter') || vehicle.name.includes('Grandmax') ? (
                      <Truck className="w-5 h-5" />
                    ) : (
                      <Car className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-xs font-bold font-mono text-[#0082c8] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                    {vehicle.units} Unit Ready
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0082c8] transition-colors">
                  {vehicle.name}
                </h3>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {vehicle.type}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs space-y-2">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Peran Utama Operasional:</span>
                    <span className="font-medium text-slate-700">{vehicle.role}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Kapasitas & Fitur:</span>
                    <span className="text-slate-600">{vehicle.capacity}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>Siap Mobilisasi</span>
                </span>
                <span className="text-slate-400">Stanby Jorong & Site</span>
              </div>
            </div>
          ))}

          {/* Quick Summary Card */}
          <div className="bg-[#0a1c30] text-white rounded-xl p-5 flex flex-col justify-between border border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7cc8f8]">
                Total Armada
              </span>
              <div className="text-3xl font-extrabold text-white mt-1 tabular-nums">
                6 Unit <span className="text-xs font-normal text-slate-300">Kendaraan Khusus</span>
              </div>
              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                Pemeliharaan rutin dilakukan setiap minggu dengan standar safety induction kendaraan tambang (safety cone, rotary lamp, APAR & P3K onboard).
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-xs text-[#7cc8f8] flex items-center gap-1.5 font-medium">
              <Navigation className="w-4 h-4 text-[#0082c8]" />
              <span>Jangkauan Luas: Kalsel & Sekitarnya</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
