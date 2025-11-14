// src/lib/data.js
// Data layanan lengkap — id harus unik, icon keys sesuai iconMap.js

export const services = [
  // =====================================================
  // ===============   LEGAL / COMPANY   ==================
  // =====================================================

  {
    id: "svc-001",
    title: "Pembuatan PT / CV",
    shortDesc: "Bantu urus pembuatan PT atau CV, dokumen & pengarsipan.",
    slug: "pembuatan-pt-cv",
    category: "Legal",
    icon: "BsBuilding",
    detail: {
      longDesc:
        "Layanan ini membantu proses pendirian PT atau CV mulai dari pengecekan nama, pembuatan akta notaris, SK Kemenkumham, NPWP perusahaan, hingga NIB OSS RBA. Semua dilakukan oleh tim yang berpengalaman sehingga proses lebih cepat dan tanpa ribet.",
      manfaat: [
        "Proses cepat & legal sesuai peraturan",
        "Dibantu notaris berlisensi",
        "Semua dokumen lengkap (akta, SK, NPWP, NIB)",
        "Bisa konsultasi perusahaan sebelum pendirian",
      ],
      dokumen: [
        "KTP pemilik / pengurus",
        "NPWP pribadi",
        "Nama perusahaan (3 opsi)",
        "Alamat usaha",
        "Struktur kepemilikan saham",
      ],
      proses: [
        "Konsultasi & pengecekan nama perusahaan",
        "Pembuatan akta notaris",
        "Pengesahan Kemenkumham",
        "Pembuatan NPWP perusahaan",
        "Pendaftaran NIB OSS RBA",
      ],
      waktu: "3–7 hari kerja",
      cta: {
        whatsapp: "Hubungi Kami",
        konsultasi: "Konsultasi Gratis",
        form: "Ajukan Pembuatan PT/CV",
      },
    },
  },

  {
    id: "svc-002",
    title: "Perizinan NIB Lengkap",
    shortDesc: "Pengurusan NIB & pendaftaran usaha online (OSS).",
    slug: "perizinan-nib",
    category: "Legal",
    icon: "BsFileText",
    detail: {
      longDesc:
        "NIB (Nomor Induk Berusaha) adalah identitas resmi sebuah usaha dalam OSS RBA. Layanan ini membantu proses pendaftaran NIB beserta perizinan dasar lain seperti izin lokasi, izin usaha, PB-UMKU, hingga risiko menengah/tinggi.",
      manfaat: [
        "Usaha jadi resmi & tercatat",
        "Akses ke perbankan dan tender",
        "Dokumen lengkap dari OSS",
        "Pendampingan sampai selesai",
      ],
      dokumen: ["KTP", "NPWP", "Alamat usaha", "Jenis kegiatan usaha (KBLI)"],
      proses: [
        "Konsultasi KBLI yang sesuai",
        "Input data OSS RBA",
        "Penerbitan NIB",
        "Aktivasi izin usaha/operasional",
      ],
      waktu: "1–2 hari kerja",
      cta: {
        whatsapp: "Buat NIB Sekarang",
        konsultasi: "Tanya KBLI",
        form: "Ajukan Pembuatan NIB",
      },
    },
  },

  {
    id: "svc-003",
    title: "Sertifikasi Halal",
    shortDesc: "Bimbingan & pengurusan sertifikasi halal untuk produk.",
    slug: "sertifikasi-halal",
    category: "Legal",
    icon: "BsAward",
    detail: {
      longDesc:
        "Pendampingan pengajuan sertifikat halal melalui BPJPH/LPPOM. Layanan mencakup pendaftaran, pembuatan dokumen HACCP, SJH, hingga verifikasi auditor halal.",
      manfaat: [
        "Produk lebih dipercaya konsumen",
        "Naik kelas untuk masuk retail besar",
        "Dibantu penyusunan dokumen halal",
      ],
      dokumen: [
        "KTP pemilik",
        "Daftar bahan baku",
        "Proses produksi",
        "Foto lokasi produksi",
      ],
      proses: [
        "Konsultasi & pengecekan bahan",
        "Pengisian sistem SIHALAL",
        "Audit halal",
        "Penerbitan sertifikat",
      ],
      waktu: "7–14 hari kerja",
      cta: {
        whatsapp: "Tanya Sertifikasi Halal",
        konsultasi: "Cek Kelayakan Halal",
        form: "Ajukan Sertifikasi Halal",
      },
    },
  },

  // =====================================================
  // ===============   LINGKUNGAN / AMDAL   ===============
  // =====================================================

  {
    id: "svc-004",
    title: "AMDAL",
    shortDesc: "Analisis dampak lingkungan + dokumen AMDAL lengkap.",
    slug: "amdal",
    category: "Lingkungan",
    icon: "BsSend",
    detail: {
      longDesc:
        "AMDAL adalah kajian dampak penting suatu usaha terhadap lingkungan. Tim kami membantu penyusunan KA-ANDAL, ANDAL, RKL-RPL, serta pendampingan penilaian di Dinas Lingkungan Hidup.",
      manfaat: [
        "Diproses langsung oleh ahli bersertifikat",
        "Dokumen lengkap sesuai PermenLHK",
        "Pendampingan sidang penilaian",
      ],
      dokumen: [
        "Profil perusahaan",
        "Data teknis kegiatan",
        "Site plan",
        "Izin pendukung (jika ada)",
      ],
      proses: [
        "Survey lokasi & pengumpulan data",
        "Penyusunan KA-ANDAL",
        "Penyusunan ANDAL + RKL-RPL",
        "Sidang penilaian & revisi",
      ],
      waktu: "30–60 hari kerja",
      cta: {
        whatsapp: "Konsultasi AMDAL",
        konsultasi: "Analisa Kelayakan",
        form: "Ajukan AMDAL",
      },
    },
  },

  {
    id: "svc-005",
    title: "UKL-UPL & SPPL",
    shortDesc: "Penyusunan UKL-UPL atau SPPL sesuai regulasi.",
    slug: "ukl-upl-sppl",
    category: "Lingkungan",
    icon: "BsClipboardCheck",
    detail: {
      longDesc:
        "UKL-UPL & SPPL merupakan dokumen pengelolaan lingkungan untuk usaha berisiko rendah–menengah. Tim kami menyusun dokumen lengkap hingga penerbitan persetujuan lingkungan.",
      manfaat: [
        "Dokumen sesuai format OSS RBA",
        "Survey lokasi dilakukan tim",
        "Pengurusan hingga penerbitan persetujuan",
      ],
      dokumen: ["KTP pemilik", "Profil usaha", "Lokasi kegiatan"],
      proses: [
        "Survey & pengambilan data",
        "Penyusunan dokumen UKL-UPL/SPPL",
        "Upload OSS",
        "Penerbitan persetujuan lingkungan",
      ],
      waktu: "2–7 hari kerja",
      cta: {
        whatsapp: "Tanya UKL-UPL",
        konsultasi: "Cek Kategori Risiko",
        form: "Ajukan UKL-UPL",
      },
    },
  },

  {
    id: "svc-006",
    title: "Pengelolaan Limbah",
    shortDesc: "Konsultasi & solusi pengelolaan limbah industri.",
    slug: "pengelolaan-limbah",
    category: "Lingkungan",
    icon: "BsRecycle",
    detail: {
      longDesc:
        "Layanan untuk membantu perusahaan mengelola limbah B3 maupun non-B3 secara aman sesuai regulasi. Termasuk penyusunan SOP, perhitungan timbulan, hingga memilih pengangkut/pengelola resmi.",
      manfaat: [
        "Meminimalkan risiko pencemaran",
        "Dokumen lengkap untuk audit",
        "Pendampingan teknis lapangan",
      ],
      dokumen: ["Profil perusahaan", "Jenis limbah", "Volume limbah"],
      proses: [
        "Survey lapangan",
        "Analisa kebutuhan pengelolaan",
        "Pembuatan SOP",
        "Implementasi & monitoring",
      ],
      waktu: "3–10 hari kerja",
      cta: {
        whatsapp: "Tanya Limbah",
        konsultasi: "Cek Kebutuhan Limbah",
        form: "Ajukan Pengelolaan Limbah",
      },
    },
  },

  // =====================================================
  // ===============   INDUSTRI / K3 / ISO   ==============
  // =====================================================

  {
    id: "svc-007",
    title: "Sertifikasi ISO 14001",
    shortDesc: "Implementasi & audit ISO 14001 (lingkungan).",
    slug: "iso-14001",
    category: "Industri",
    icon: "BsShieldCheck",
    detail: {
      longDesc:
        "Pendampingan implementasi Sistem Manajemen Lingkungan ISO 14001:2015. Mulai dari gap analysis, training, dokumentasi, hingga audit sertifikasi.",
      manfaat: [
        "Meningkatkan kredibilitas perusahaan",
        "Efisiensi operasional",
        "Standarisasi proses & lingkungan kerja",
      ],
      dokumen: ["Profil perusahaan", "Struktur organisasi", "Proses bisnis"],
      proses: [
        "Gap analysis",
        "Training karyawan",
        "Penyusunan dokumentasi ISO",
        "Audit internal",
        "Audit sertifikasi",
      ],
      waktu: "14–30 hari kerja",
      cta: {
        whatsapp: "Tanya ISO 14001",
        konsultasi: "Cek Kesiapan ISO",
        form: "Ajukan Sertifikasi ISO",
      },
    },
  },

  {
    id: "svc-008",
    title: "Konsultasi K3",
    shortDesc: "Evaluasi K3 + training + SOP keselamatan kerja.",
    slug: "konsultasi-k3",
    category: "Industri",
    icon: "BsPerson",
    detail: {
      longDesc:
        "Layanan konsultasi K3 untuk meningkatkan keselamatan & kesehatan kerja. Termasuk audit K3, pembuatan SOP, identifikasi bahaya, dan training awareness.",
      manfaat: [
        "Mengurangi risiko kecelakaan kerja",
        "Memenuhi standar K3 perusahaan",
        "SOP lengkap & implementasi langsung",
      ],
      dokumen: ["Profil usaha", "Jenis kegiatan produksi"],
      proses: [
        "Survey lapangan",
        "Identifikasi risiko",
        "Pembuatan SOP",
        "Training",
      ],
      waktu: "2–5 hari kerja",
      cta: {
        whatsapp: "Tanya K3",
        konsultasi: "Cek Risiko K3",
        form: "Ajukan Konsultasi K3",
      },
    },
  },

  {
    id: "svc-009",
    title: "SLO / Laik Operasi",
    shortDesc: "Bantuan pengurusan SLO dan kelayakan operasi.",
    slug: "slo-laik-operasi",
    category: "Industri",
    icon: "BsLightning",
    detail: {
      longDesc:
        "SLO diperlukan untuk memastikan instalasi listrik atau peralatan industri memenuhi standar keselamatan. Layanan meliputi survey teknis, pengujian, dan pendampingan hingga terbit SLO.",
      manfaat: [
        "Legalitas operasional aman",
        "Survey teknis dilakukan tenaga ahli",
        "Memenuhi standar keselamatan",
      ],
      dokumen: ["Gambar teknis", "Daya listrik", "Profil usaha"],
      proses: ["Survey teknis", "Pengujian instalasi", "Penerbitan SLO"],
      waktu: "3–7 hari kerja",
      cta: {
        whatsapp: "Tanya SLO",
        konsultasi: "Cek Kebutuhan SLO",
        form: "Ajukan SLO",
      },
    },
  },

  // =====================================================
  // ===============   PAJAK / KEUANGAN   =================
  // =====================================================

  {
    id: "svc-010",
    title: "Perpajakan UMKM",
    shortDesc: "Konsultasi pajak & penyusunan SPT UMKM.",
    slug: "perpajakan-umkm",
    category: "Keuangan",
    icon: "BsBarChart",
    detail: {
      longDesc:
        "Layanan perpajakan UMKM meliputi konsultasi aturan pajak, penyusunan SPT Tahunan, pembuatan pembukuan sederhana, dan pelaporan bulanan.",
      manfaat: [
        "Aman dari denda pajak",
        "Pendampingan hingga pelaporan",
        "Pembukuan rapi & sesuai aturan",
      ],
      dokumen: ["NPWP", "Bukti transaksi", "Rekening koran"],
      proses: ["Konsultasi pajak", "Penyusunan pembukuan", "Pelaporan SPT"],
      waktu: "1–3 hari kerja",
      cta: {
        whatsapp: "Tanya Pajak UMKM",
        konsultasi: "Cek Pajak Kamu",
        form: "Ajukan Perpajakan UMKM",
      },
    },
  },

  {
    id: "svc-011",
    title: "Pembukuan & Akuntansi",
    shortDesc: "Setup pembukuan + laporan keuangan bulanan.",
    slug: "pembukuan-akuntansi",
    category: "Keuangan",
    icon: "BsCalculator",
    detail: {
      longDesc:
        "Membantu menyusun sistem pembukuan bisnis kamu: jurnal, cashflow, laporan laba rugi, neraca, hingga rekonsiliasi bank.",
      manfaat: [
        "Laporan keuangan rapi",
        "Mudah untuk akses modal",
        "Rekonsiliasi otomatis & efisien",
      ],
      dokumen: ["Bukti transaksi", "Rekening koran"],
      proses: ["Setup sistem pembukuan", "Input transaksi", "Laporan bulanan"],
      waktu: "1–7 hari kerja",
      cta: {
        whatsapp: "Tanya Pembukuan",
        konsultasi: "Cek Kesiapan Pembukuan",
        form: "Ajukan Akuntansi",
      },
    },
  },

  // =====================================================
  // =============== KONSTRUKSI / PROPERTI ===============
  // =====================================================

  {
    id: "svc-012",
    title: "IMB / PBG",
    shortDesc: "Pengurusan IMB / PBG & dokumen perizinan bangunan.",
    slug: "imb-pbg",
    category: "Konstruksi",
    icon: "BsHouse",
    detail: {
      longDesc:
        "PBG adalah perizinan bangunan pengganti IMB. Kami bantu proses perhitungan teknis, gambar kerja, hingga persetujuan di dinas terkait.",
      manfaat: [
        "Bangunan aman & sesuai aturan",
        "Pendampingan teknis lengkap",
        "Dokumen PBG resmi",
      ],
      dokumen: ["Gambar kerja", "Site plan", "KTP pemilik"],
      proses: [
        "Survey lokasi",
        "Perhitungan teknis",
        "Upload PBG",
        "Penerbitan PBG",
      ],
      waktu: "7–14 hari kerja",
      cta: {
        whatsapp: "Tanya PBG",
        konsultasi: "Cek Dokumen Kamu",
        form: "Ajukan IMB/PBG",
      },
    },
  },

  {
    id: "svc-013",
    title: "SBU / SKK Konstruksi",
    shortDesc: "Pengurusan SBU / SKK untuk tender & proyek.",
    slug: "sbu-skk",
    category: "Konstruksi",
    icon: "BsBriefcase",
    detail: {
      longDesc:
        "SBU & SKK diperlukan untuk mengikuti tender pekerjaan konstruksi. Kami bantu proses asesmen, verifikasi LPJK, hingga penerbitan.",
      manfaat: ["Legal untuk tender", "Proses cepat", "Pendampingan dokumen"],
      dokumen: ["Portofolio proyek", "Dokumen perusahaan"],
      proses: ["Konsultasi", "Input sistem LPJK", "Asesmen", "Penerbitan"],
      waktu: "3–10 hari kerja",
      cta: {
        whatsapp: "Tanya SKK/SBU",
        konsultasi: "Cek Kelayakan Tender",
        form: "Ajukan SBU/SKK",
      },
    },
  },

  // =====================================================
  // ===============   LABORATORIUM   =====================
  // =====================================================

  {
    id: "svc-014",
    title: "Sampling & Laboratorium",
    shortDesc: "Pengujian sampel (air, tanah, bahan) di lab terakreditasi.",
    slug: "sampling-lab",
    category: "Lab",
    icon: "BsHourglassBottom",
    detail: {
      longDesc:
        "Pengambilan sampel dan pengujian laboratorium air, limbah, udara, tanah, dan material. Semua hasil diterbitkan oleh laboratorium terakreditasi.",
      manfaat: [
        "Hasil uji resmi",
        "Diambil oleh teknisi bersertifikat",
        "Laporan mudah dipakai untuk izin lingkungan",
      ],
      dokumen: ["Jenis sampel", "Lokasi sampel"],
      proses: [
        "Survey lokasi",
        "Pengambilan sampel",
        "Uji laboratorium",
        "Laporan",
      ],
      waktu: "3–7 hari kerja",
      cta: {
        whatsapp: "Tanya Harga Sampling",
        konsultasi: "Cek Jenis Pengujian",
        form: "Ajukan Sampling",
      },
    },
  },

  // =====================================================
  // ===============     LAINNYA / UMUM   =================
  // =====================================================

  {
    id: "svc-015",
    title: "Audit Energi",
    shortDesc: "Audit penggunaan energi & rekomendasi efisiensi.",
    slug: "audit-energi",
    category: "Energi",
    icon: "BsActivity",
    detail: {
      longDesc:
        "Audit energi untuk melihat penggunaan listrik, heat loss, dan efisiensi mesin. Termasuk rekomendasi perbaikan yang bisa langsung diterapkan.",
      manfaat: [
        "Menghemat biaya energi",
        "Identifikasi pemborosan",
        "Laporan lengkap untuk manajemen",
      ],
      dokumen: ["Data mesin", "Konsumsi listrik", "Profil usaha"],
      proses: ["Survey lokasi", "Pengukuran energi", "Analisa", "Laporan"],
      waktu: "2–7 hari kerja",
      cta: {
        whatsapp: "Tanya Audit Energi",
        konsultasi: "Cek Kelayakan Audit",
        form: "Ajukan Audit Energi",
      },
    },
  },

  {
    id: "svc-016",
    title: "Konsultasi Operasional",
    shortDesc: "Optimisasi proses & SOP operasional perusahaan.",
    slug: "konsultasi-operasional",
    category: "Umum",
    icon: "BsWrench",
    detail: {
      longDesc:
        "Layanan ini membantu perusahaan meningkatkan proses operasional, membuat SOP, workflow produksi, hingga monitoring KPI.",
      manfaat: [
        "Proses kerja lebih efisien",
        "SOP rapi dan terukur",
        "Produktivitas meningkat signifikan",
      ],
      dokumen: ["Profil usaha", "Data workflow"],
      proses: ["Observasi proses", "Analisa", "Pembuatan SOP", "Implementasi"],
      waktu: "3–14 hari kerja",
      cta: {
        whatsapp: "Tanya Operasional",
        konsultasi: "Cek Masalah Operasional",
        form: "Ajukan Konsultasi",
      },
    },
  },

  {
    id: "svc-017",
    title: "Pengurusan Sertifikat Lain",
    shortDesc: "Sertifikat khusus sesuai kebutuhan (custom).",
    slug: "sertifikat-lain",
    category: "Umum",
    icon: "BsFileEarmarkText",
    detail: {
      longDesc:
        "Layanan fleksibel untuk membantu pengurusan berbagai jenis sertifikat perusahaan sesuai kebutuhan kamu, baik teknis maupun administratif.",
      manfaat: ["Proses cepat", "Dokumen resmi", "Bisa request custom"],
      dokumen: ["Jenis sertifikat", "Data pendukung"],
      proses: ["Konsultasi", "Penyusunan dokumen", "Pengurusan", "Penerbitan"],
      waktu: "1–14 hari kerja",
      cta: {
        whatsapp: "Tanya Sertifikat",
        konsultasi: "Cek Kebutuhan Sertifikat",
        form: "Ajukan Pengurusan",
      },
    },
  },

  {
    id: "svc-018",
    title: "Training & Capacity Building",
    shortDesc: "Pelatihan teknis & non-teknis untuk tim Anda.",
    slug: "training-capacity",
    category: "Umum",
    icon: "BsFileArrowUp",
    detail: {
      longDesc:
        "Pelatihan karyawan secara on-site/off-site terkait lingkungan, K3, operasional, dan manajemen. Materi bisa custom sesuai kebutuhan perusahaan.",
      manfaat: [
        "Skill karyawan meningkat",
        "Training dibawakan trainer profesional",
        "Sertifikat training tersedia",
      ],
      dokumen: ["Jumlah peserta", "Materi yang dibutuhkan"],
      proses: ["Need assessment", "Penyusunan materi", "Training", "Evaluasi"],
      waktu: "1–3 hari",
      cta: {
        whatsapp: "Tanya Training",
        konsultasi: "Cek Kebutuhan Training",
        form: "Ajukan Pelatihan",
      },
    },
  },
];
