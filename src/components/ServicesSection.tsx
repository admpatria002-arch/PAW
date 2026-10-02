import React, { useState } from 'react';
import { PRODUCTS_SERVICES, ServiceProduct, COMPANY_INFO } from '../data/companyData.ts';
import { Utensils, Shirt, Sparkles, Check, ArrowRight, Mail } from 'lucide-react';
import cateringImg from '../assets/images/catering_buffet_tumpeng_1790902041415.jpg';
import laundryImg from '../assets/images/laundry_facility_mining_1790902052847.jpg';
import housekeepingImg from '../assets/images/housekeeping_mess_office_1790902071558.jpg';

interface ServicesSectionProps {
  onContactForService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactForService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'Catering' | 'Laundry' | 'Housekeeping'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ServiceProduct | null>(null);

  const filteredServices = activeTab === 'all' 
    ? PRODUCTS_SERVICES 
    : PRODUCTS_SERVICES.filter(item => item.category === activeTab);

  return (
    <section id="layanan" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0082c8] uppercase tracking-wider mb-2">
              <span>Portofolio Layanan</span>
              <span aria-hidden="true">·</span>
              <span>Spesialis Pertambangan & Korporat</span>
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
            >
              8 Produk & Layanan Unggulan Terpadu
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Menghadirkan solusi konsumsi gizi berimbang, sanitasi laundry berstandar tinggi, 
              serta manajemen kebersihan akomodasi mess dan perkantoran pertambangan.
            </p>
          </div>

          {/* Functional Filter Tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-slate-200/80 rounded-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua (8)
            </button>
            <button
              onClick={() => setActiveTab('Catering')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'Catering'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Catering (6)
            </button>
            <button
              onClick={() => setActiveTab('Laundry')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'Laundry'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Laundry (1)
            </button>
            <button
              onClick={() => setActiveTab('Housekeeping')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'Housekeeping'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Housekeeping (1)
            </button>
          </div>
        </div>

        {/* Visual Pillar Banner Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <div className="h-44 overflow-hidden">
              <img
                src={cateringImg}
                alt="Jasa Catering & Nasi Tumpeng Prasmanan CV. Patria Arta Wahana"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0082c8] mb-1">
                <Utensils className="w-4 h-4" />
                <span>Divisi Jasa Boga & Catering</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Penyediaan Konsumsi Skala Besar & Event
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Kapasitas produksi hingga 5.000+ porsi/hari dengan sertifikasi Laik Sehat Dinas Kesehatan.
              </p>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <div className="h-44 overflow-hidden">
              <img
                src={laundryImg}
                alt="Fasilitas Laundry Industri Mess dan Wearpack Tambang"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0082c8] mb-1">
                <Shirt className="w-4 h-4" />
                <span>Divisi Penatu / Laundry Industri</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Pencucian Wearpack & Linen Mess
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Kapasitas 1.500 Kg/hari dengan formula degreaser pembersih noda oli dan lumpur tambang.
              </p>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            <div className="h-44 overflow-hidden">
              <img
                src={housekeepingImg}
                alt="Layanan Kebersihan Mess dan Kantor Site Tambang"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0082c8] mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Divisi Kebersihan & Housekeeping</span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                Sanitasi Akomodasi Mess & Kantor Site
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Standar inspeksi harian HSE dengan chemical pembersih aman dan tenaga kerja terlatih.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-[#0082c8] hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#0082c8]">{product.category}</span>
                  <span className="font-mono">{product.capacity}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0082c8] transition-colors">
                  {product.name}
                </h3>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {product.shortDesc}
                </p>

                <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                  {product.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-[#0082c8] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="text-xs font-semibold text-slate-700 hover:text-[#0082c8] transition-colors"
                >
                  Detail Lengkap
                </button>
                <button
                  onClick={() => onContactForService(product.name)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0082c8] hover:text-[#006ca6] group-hover:translate-x-0.5 transition-all"
                >
                  <span>Konsultasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Details */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-[#0082c8] uppercase tracking-wider">
                    {selectedProduct.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedProduct.shortDesc}
                </p>

                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 mb-2">Spesifikasi & Cakupan Layanan:</div>
                  <ul className="space-y-2">
                    {selectedProduct.details.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-[#0082c8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                  <span>Kapasitas Dukungan:</span>
                  <span className="font-semibold text-slate-800">{selectedProduct.capacity}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    const name = selectedProduct.name;
                    setSelectedProduct(null);
                    onContactForService(name);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#0082c8] hover:bg-[#0073b3] rounded-lg flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Kirim Permohonan Layanan Ini</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
