export interface LegalDocument {
  id: string;
  name: string;
  code: string;
  authority: string;
  description: string;
  verified: boolean;
}

export interface KbliItem {
  code: string;
  title: string;
  type: 'Utama' | 'Pendukung';
  description: string;
}

export interface ServiceProduct {
  id: string;
  name: string;
  category: 'Catering' | 'Laundry' | 'Housekeeping';
  shortDesc: string;
  details: string[];
  capacity: string;
  image?: string;
  badge?: string;
}

export interface PartnerExperience {
  id: string;
  client: string;
  period: string;
  years: string;
  services: string[];
  location: string;
  isCurrent: boolean;
  statusText: string;
}

export interface FleetVehicle {
  name: string;
  units: number;
  type: string;
  role: string;
  capacity: string;
}

export interface CoreValue {
  title: string;
  meaning: string;
  iconName: string;
}

export const COMPANY_INFO = {
  name: 'CV. Patria Arta Wahana',
  tagline: 'General Service Pertambangan & Industri Terpercaya',
  established: '11 September 2010',
  yearsActive: 16,
  address: 'Gg. Mekarsari RT 016 RW 004, Kel. Simpang Empat Sungai Baru, Kec. Jorong, Kab. Tanah Laut, Kalimantan Selatan',
  email: 'patriaartawahana@paw.co.id',
  phone: '+62 812-5123-4567',
  whatsapp: '+6281251234567',
  brandColor: '#0082c8',
  aboutQuote: 'CV. Patria Arta Wahana adalah perusahaan keluarga yang telah berdiri dan beroperasi sejak 11 September 2010, dengan kekuatan hukum yang sah. Kami senantiasa berusaha untuk memberikan yang terbaik bagi pelanggan. Pemilihan bahan dasar yang mengutamakan kualitas hingga pengolahan produk agar menjadi sajian yang terbaik.',
  laundryQuote: 'Menjadi Perusahaan Jasa Laundry Profesional yang Mampu Memberikan Mutu Layanan Terbaik bagi Pelanggan dan Memberikan Sebanyak-banyaknya Manfaat bagi Orang Banyak.',
  visi: 'Menjadi perusahaan jasa layanan General Service Pertambangan berbasis sertifikat SNI yang mengutamakan kepuasan pelanggan dan pemangku Kepentingan di Indonesia.',
  misi: 'Memberikan service jasa dengan layanan kualitas mutu terbaik yang menjunjung tinggi integritas, disiplin dan bertanggung jawab dengan memberikan prioritas pada pelayanan kepuasaan pelanggan.',
};

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Ketakwaan Kepada Tuhan Yang Maha Esa',
    meaning: 'Menjadikan nilai spiritual, kejujuran moral, dan rasa syukur sebagai landasan utama dalam setiap aktivitas bisnis serta interaksi antar sesama.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Integritas',
    meaning: 'Menjunjung tinggi transparansi, konsistensi antara perkataan dan perbuatan, serta pemenuhan komitmen kepada seluruh mitra kerja.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Kualitas & Efektifitas',
    meaning: 'Mengutamakan standar mutu terbaik dalam pemilihan bahan, ketepatan waktu pengantaran, dan efisiensi operasional tanpa kompromi.',
    iconName: 'Award',
  },
  {
    title: 'Kerja Sama Tim',
    meaning: 'Sinergi solid lintas divisi antara dapur, logistik, penatu, dan kebersihan demi mewujudkan kepuasan optimal bagi pelanggan.',
    iconName: 'Users',
  },
  {
    title: 'Inovasi',
    meaning: 'Terus beradaptasi dengan teknologi sanitasi modern, variasi gizi mutakhir, dan sistem kontrol HSE sesuai standar industri pertambangan.',
    iconName: 'Sparkles',
  },
];

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    id: 'akta',
    name: 'Akta Pendirian Perusahaan',
    code: 'AHU-709-AH 02.01-Tahun 2011',
    authority: 'Kementerian Hukum & HAM RI',
    description: 'Landasan legalitas pendirian perusahaan berbadan hukum sah',
    verified: true,
  },
  {
    id: 'nib',
    name: 'Nomor Induk Berusaha (NIB)',
    code: '1209001442404',
    authority: 'Lembaga OSS / BKPM RI',
    description: 'Legalitas izin operasional dan identitas berusaha resmi',
    verified: true,
  },
  {
    id: 'sr',
    name: 'Surat Rekomendasi Ketenagakerjaan (SR)',
    code: 'Rek.560/589/Was-NKT/Disnakertrans',
    authority: 'Disnakertrans Kalimantan Selatan',
    description: 'Kepatuhan pengawasan norma ketenagakerjaan dan K3',
    verified: true,
  },
  {
    id: 'skt',
    name: 'Surat Keterangan Terdaftar (SKT)',
    code: 'PEM-7.921/WPJ.29/KP.0203/2010',
    authority: 'Direktorat Jenderal Pajak (KPP)',
    description: 'Kepatuhan perpajakan dan NPWP badan usaha sejak 2010',
    verified: true,
  },
  {
    id: 'laik',
    name: 'Sertifikat Laik Sehat Higiene Sanitasi',
    code: 'T/443.61/145/Dinkes-KM.3/IV/2022',
    authority: 'Dinas Kesehatan Kab. Tanah Bumbu',
    description: 'Sertifikasi kelaikan higienis jasa boga dan pengolahan pangan',
    verified: true,
  },
];

export const KBLI_LIST: KbliItem[] = [
  {
    code: '56210',
    title: 'Jasa Boga Untuk Suatu Event Tertentu (Event Catering)',
    type: 'Utama',
    description: 'Penyediaan jasa makanan dan boga untuk kontrak industri, pertambangan, pabrik, meeting korporat, dan event khusus.',
  },
  {
    code: '96200',
    title: 'Aktifitas Penatu / Binatu',
    type: 'Utama',
    description: 'Jasa pencucian basah, pembersihan, setrika pakaian wearpack kerja, linen mess, selimut, dan perlengkapan tekstil industri.',
  },
  {
    code: '81210',
    title: 'Aktifitas Kebersihan Umum Bangunan',
    type: 'Pendukung',
    description: 'Jasa pembersihan umum interior bangunan kantor, akomodasi mess karyawan tambang, gedung operasional, dan sanitasi berkala.',
  },
  {
    code: '47920',
    title: 'Perdagangan Eceran Atas Dasar Balas Jasa (Fee) Atau Kontrak',
    type: 'Pendukung',
    description: 'Jasa perantara dan pengadaan barang/jasa berbasis kontrak korporat dan perjanjian kerja sama mitra usaha.',
  },
  {
    code: '45202',
    title: 'Pencucian Dan Salon Mobil',
    type: 'Pendukung',
    description: 'Pemeliharaan kebersihan kendaraan operasional, armada logistik, dan fasilitas cuci kendaraan site tambang.',
  },
  {
    code: '47528',
    title: 'Perdagangan Eceran Berbagai Macam Material Bangunan',
    type: 'Pendukung',
    description: 'Distribusi perlengkapan dan bahan material penunjang infrastruktur fasilitas mess dan perkantoran.',
  },
  {
    code: '47524',
    title: 'Perdagangan Eceran Semen, Kapur, Pasir Dan Batu',
    type: 'Pendukung',
    description: 'Dukungan suplai material komoditas dasar pendukung pemeliharaan fasilitas tapak operasional.',
  },
  {
    code: '47612',
    title: 'Perdagangan Eceran Hasil Pencetakan Dan Penerbitan',
    type: 'Pendukung',
    description: 'Pengadaan material cetak administratif kantor, form HSE, log book operasional, dan label stiker higienitas pangan.',
  },
];

export const HSE_STANDARDS = [
  {
    number: '01',
    title: 'Pemeriksaan Kesehatan Routine (MCU Berkala)',
    description: 'Seluruh tenaga penjamah makanan (food handlers), staf laundry, dan teknisi kebersihan menjalani Medical Check-Up berkala, tes bebas penyakit menular, swab tangan, serta vaksinasi dan sertifikasi higienis resmi dari Dinas Kesehatan.',
    points: [
      'Pemeriksaan feses rutin untuk pencegahan Salmonella & patogen makanan',
      'Sertifikasi hygiene sanitasi bagi seluruh koki dan staf saji',
      'Pemeriksaan suhu tubuh dan inspeksi kebersihan APD harian sebelum bertugas',
      'Penerapan ketat masker, hairnet, apron, dan sarung tangan food-grade',
    ],
  },
  {
    number: '02',
    title: 'Sampel Uji Harian (Retained Sample Food Safety)',
    description: 'Setiap menu yang disajikan wajib diambil sampel ujinya sebanyak minimal 100 gram per item menu dan disimpan di dalam lemari pendingin steril khusus selama 2x24 jam (48 jam) lengkap dengan log sheet tanggal dan shift.',
    points: [
      'Penyimpanan sampel makanan pada suhu terkontrol (-5°C s/d 4°C)',
      'Labeling terstruktur: Tanggal masak, jam penyajian, koki penanggung jawab',
      'Sampel diuji mandiri dan siap diserahkan ke Dinkes/Labkesda jika diperlukan audit',
      'Pencatatan rekam jejak digital dan fisik untuk jaminan keamanan pangan mitra',
    ],
  },
  {
    number: '03',
    title: 'Variasi Menu Bergizi & Rotasi Kalori Seimbang',
    description: 'Penyusunan siklus menu terencana (14 hingga 28 hari rotasi) yang dirancang bersama ahli gizi untuk memenuhi kecukupan kalori pekerja lapangan pertambangan (2.500 - 3.200 kkal/hari) dengan bahan baku segar berstandar.',
    points: [
      'Proporsi gizi seimbang: karbohidrat kompleks, protein tinggi, serat segar, mineral',
      'Pemilihan bahan baku bersertifikat halal dan bebas residu pestisida berlebih',
      'Penyesuaian menu khusus bagi karyawan diet medik (rendah garam/gula/kolesterol)',
      'Uji organoleptik rasa, aroma, suhu penyajian, dan estetika presentasi',
    ],
  },
];

export const PARTNER_EXPERIENCES: PartnerExperience[] = [
  {
    id: 'ppa-angsana',
    client: 'PT. Putra Perkasa Abadi Angsana',
    period: '2018 – Sekarang',
    years: '8 Tahun Berjalan',
    services: ['Jasa Catering Lengkap', 'Kebersihan Mess', 'Jasa Laundry'],
    location: 'Site Angsana, Kalimantan Selatan',
    isCurrent: true,
    statusText: 'Kemitraan Aktif Berkelanjutan',
  },
  {
    id: 'madhani',
    client: 'PT. Madhani Talatah Nusantara',
    period: '2016 – 2024',
    years: '8 Tahun',
    services: ['Jasa Catering Harian', 'Jasa Laundry Mess & Wearpack'],
    location: 'Kalimantan Selatan',
    isCurrent: false,
    statusText: 'Kontrak Selesai dengan Predikat Memuaskan',
  },
  {
    id: 'kpp',
    client: 'PT. Kalimantan Prima Persada (KPP)',
    period: '2017 – 2022',
    years: '5 Tahun',
    services: ['Jasa Boga / Catering Pertambangan'],
    location: 'Kalimantan Selatan',
    isCurrent: false,
    statusText: 'Proyek Selesai Sesuai Kontrak',
  },
  {
    id: 'imcm',
    client: 'PT. Indonesian Minerals & Coal Mining (IMCM)',
    period: '2014 – 2018',
    years: '4 Tahun',
    services: ['Industrial Camp Catering'],
    location: 'Kalimantan Selatan',
    isCurrent: false,
    statusText: 'Proyek Selesai Sesuai Kontrak',
  },
  {
    id: 'delta-prima',
    client: 'Pabrik Biji Besi Delta Prima Steel',
    period: '2012 – 2013',
    years: '1 Tahun',
    services: ['Catering Karyawan Pabrik & Shift'],
    location: 'Kalimantan Selatan',
    isCurrent: false,
    statusText: 'Proyek Selesai Sesuai Kontrak',
  },
  {
    id: 'zirkon',
    client: 'Pabrik Bata Ringan Zirkon Inti Persada',
    period: '2012 – 2013',
    years: '1 Tahun',
    services: ['Catering Makan Siang & Lembur'],
    location: 'Tanah Laut, Kalimantan Selatan',
    isCurrent: false,
    statusText: 'Proyek Selesai Sesuai Kontrak',
  },
  {
    id: 'ppa-asam',
    client: 'PT. Putra Perkasa Abadi Asam-asam',
    period: '2011 – 2013',
    years: '2 Tahun',
    services: ['Catering Pertambangan Batubara'],
    location: 'Asam-asam, Kalimantan Selatan',
    isCurrent: false,
    statusText: 'Proyek Selesai Sesuai Kontrak',
  },
  {
    id: 'trakindo',
    client: 'PT. Trakindo Asam-asam',
    period: '2010 – 2011',
    years: '1 Tahun',
    services: ['Catering Workshop & Office Heavy Equipment'],
    location: 'Asam-asam, Kalimantan Selatan',
    isCurrent: false,
    statusText: 'Mitra Perdana Pendirian Perusahaan',
  },
];

export const FLEET_LIST: FleetVehicle[] = [
  {
    name: 'Isuzu Canter',
    units: 1,
    type: 'Light Duty Commercial Truck',
    role: 'Logistik Berat, Distribusi Suplai Bahan Makanan Segar & Perlengkapan Besar',
    capacity: 'Kapasitas angkut s/d 4.5 Ton dengan box tertutup higienis',
  },
  {
    name: 'Triton Single Cabin',
    units: 1,
    type: '4x4 Utility Heavy Pickup',
    role: 'Akses Cepat Jalur Tambang (Hauling Road) & Pengiriman Darurat Pit Site',
    capacity: 'All-Terrain 4WD untuk medan offroad tambang Kalimantan',
  },
  {
    name: 'Grandmax Box',
    units: 2,
    type: 'Special Box Catering Delivery',
    role: 'Pengantaran Nasi Kotak, Makanan Matang Tertutup & Suplai Harian Mess',
    capacity: 'Kabin berpendingin & rak stainless khusus menjaga suhu makanan',
  },
  {
    name: 'Grandmax Blindvan',
    units: 1,
    type: 'Enclosed Utility Van',
    role: 'Distribusi Jasa Laundry, Pakaian Wearpack Bersih & Linen Terlindungi',
    capacity: 'Kabin kedap debu menjamin pakaian tetap steril saat melintasi area tambang',
  },
  {
    name: 'Terios Mobil Penumpang',
    units: 1,
    type: 'Passenger SUV',
    role: 'Kendaraan Supervisi Manajemen, Inspeksi HSE & Koordinasi Mitra Kerja',
    capacity: '7-seater untuk mobilitas manajemen proyek & audit berkala',
  },
];

export const PRODUCTS_SERVICES: ServiceProduct[] = [
  {
    id: 'nasi-tumpeng',
    name: 'Nasi Tumpeng Eksklusif',
    category: 'Catering',
    shortDesc: 'Sajian tumpeng tradisional modern lengkap dengan lauk pauk istimewa untuk syukuran proyek, peresmian, dan perayaan milestone pertambangan.',
    details: [
      'Pilihan Nasi Kuning, Nasi Gurih, atau Nasi Uduk rempah alami',
      'Lauk lengkap: Ayam Goreng Lengkuas, Sambal Goreng Ati, Telur Balado, Perkedel, Urap Sayur, Kering Tempe',
      'Hiasan sayur segar artistik & higienis',
      'Porsi mulai dari 10 hingga 50 porsi per paket tumpeng',
    ],
    capacity: '10 - 50 Porsi / Paket',
    badge: 'Spesial Event',
  },
  {
    id: 'nasi-kotak',
    name: 'Nasi Kotak (Bento & Box)',
    category: 'Catering',
    shortDesc: 'Paket makanan lengkap higienis dengan packaging food-grade, cocok untuk operasional shift kerja, lembur, dan rapat koordinasi lapangan.',
    details: [
      'Kemasan box ramah lingkungan dengan sekat pemisah higienis',
      'Menu bergizi seimbang: Nasi, Protein Utama (Ayam/Daging/Ikan), Sayur, Pelengkap, Sambal, Buah, dan Air Mineral',
      'Kemasan tersegel rapi dengan label waktu penyajian',
      'Kapasitas produksi harian s/d ribuan porsi per shift',
    ],
    capacity: 'Kapasitas 5.000+ Box / Hari',
    badge: 'Produk Terlaris',
  },
  {
    id: 'nasi-bungkus',
    name: 'Nasi Bungkus Lapangan',
    category: 'Catering',
    shortDesc: 'Solusi makan praktis dengan porsi padat energi khusus tenaga kerja lapangan dan operator pit area yang membutuhkan asupan cepat dan bersih.',
    details: [
      'Bungkusan daun pisang dan kertas anti-minyak berstandar food-safe',
      'Porsi kalori tinggi disesuaikan dengan aktivitas berat di lapangan',
      'Tahan hangat optimal selama perjalanan hauling road',
      'Distribusi tepat waktu ke pos-pos pit tambang',
    ],
    capacity: 'Kapasitas 3.000+ Porsi / Hari',
    badge: 'Operasional Pit',
  },
  {
    id: 'acara-prasmanan',
    name: 'Acara Prasmanan (Buffet)',
    category: 'Catering',
    shortDesc: 'Layanan prasmanan profesional lengkap dengan chafing dish stainless, pemanas elektrik, dan tenaga saji terlatih ber-uniform standar HSE.',
    details: [
      'Peralatan saji stainless steel food grade mewah dan higienis',
      'Variasi menu pembuka (appetizer), sup hangat, menu utama, hingga dessert pencuci mulut',
      'Staf banquet ramah berpakaian rapi dengan sarung tangan dan penutup kepala',
      'Penjagaan suhu hidangan tetap hangat sepanjang acara',
    ],
    capacity: '50 s/d 1.500 Tamu',
    badge: 'VIP & Corporate',
  },
  {
    id: 'acara-meeting',
    name: 'Catering Acara Meeting',
    category: 'Catering',
    shortDesc: 'Penyediaan konsumsi khusus rapat direksi, audiensi pemerintah, rapat safety bulanan, dan pertemuan pemangku kepentingan.',
    details: [
      'Pilihan menu premium dengan cita rasa nusantara dan oriental',
      'Pengantaran on-time sebelum sesi istirahat rapat',
      'Termasuk coffee break, teh hangat, dan infused water segar',
      'Penyajian hening dan rapi tanpa mengganggu jalannya rapat',
    ],
    capacity: 'Fleksibel 10 - 200 Peserta',
    badge: 'Eksekutif',
  },
  {
    id: 'snack-box',
    name: 'Snack Box & Coffee Break',
    category: 'Catering',
    shortDesc: 'Paket kudapan manis dan asin segar buatan dapur sendiri, dilengkapi air mineral atau jus buah untuk jeda workshop dan pelatihan karyawan.',
    details: [
      'Kombinasi 3 - 4 macam kue (manis, asin/gurih, kue basah/roti)',
      'Bahan berkualitas tanpa pengawet berbahaya',
      'Packaging eksklusif berlabel CV. Patria Arta Wahana',
      'Kue dibuat segar pada hari pengiriman (freshly made)',
    ],
    capacity: 'Hingga 2.000 Box / Hari',
    badge: 'Fresh Daily',
  },
  {
    id: 'jasa-laundry',
    name: 'Jasa Laundry Industri & Mess',
    category: 'Laundry',
    shortDesc: 'Layanan penatu profesional untuk seragam tambang (wearpack high-visibility) dengan teknologi penghilang noda oli/lumpur dan pencucian linen mess.',
    details: [
      'Deterjen khusus industri ramah serat dan ampuh memecah grease oli tambang',
      'Sistem labeling barcode/penomoran baju karyawan anti-tertukar',
      'Pengeringan suhu tinggi membunuh tungau, jamur, dan kuman',
      'Penyetrikaan uap presisi dan packing plastik tertutup rapat rapi',
    ],
    capacity: 'Kapasitas 1.500 Kg Pakaian / Hari',
    badge: 'Industrial Grade',
  },
  {
    id: 'jasa-kebersihan',
    name: 'Jasa Kebersihan (Housekeeping) Mess & Kantor',
    category: 'Housekeeping',
    shortDesc: 'Layanan sanitasi menyeluruh untuk kamar akomodasi mess pekerja tambang, area umum, koridor, toilet, dan gedung perkantoran site.',
    details: [
      'Pembersihan harian: pergantian sprei, merapikan kasur, penyedotan debu, pel lantai',
      'Sanitasi toilet dan disinfeksi pegangan pintu, saklar, dan meja kerja',
      'Pembersihan kaca, ventilasi, dan pengelolaan tempat sampah terpisah',
      'Checklist inspeksi harian yang dapat dipantau oleh pengawas HSE klien',
    ],
    capacity: '300+ Kamar Mess & 20+ Unit Kantor',
    badge: 'HSE Compliant',
  },
];
