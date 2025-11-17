// chatbotResponses.js

export const chatbotResponses = [
  // ====== UTAMA: LAYANAN PT. GEO MANDIRI KREASI ======
  {
    keywords: ["amdal", "analisis dampak lingkungan"],
    response: `📘 *AMDAL* (Analisis Mengenai Dampak Lingkungan) adalah kajian mendalam untuk menilai dampak besar suatu kegiatan terhadap lingkungan.  
Kami bantu penyusunan dokumen AMDAL lengkap — mulai dari penyusunan KA-ANDAL, ANDAL, RKL, dan RPL hingga pengesahan dari instansi berwenang.`,
  },
  {
    keywords: ["ukl", "upl", "upaya pengelolaan", "upaya pemantauan"],
    response: `📗 *UKL-UPL* (Upaya Pengelolaan & Pemantauan Lingkungan) adalah dokumen wajib bagi usaha yang tidak memerlukan AMDAL.  
PT. Geo Mandiri Kreasi siap bantu dari konsultasi, penyusunan dokumen, hingga validasi dinas lingkungan.`,
  },
  {
    keywords: ["sppl", "surat pernyataan pengelolaan lingkungan"],
    response: `📄 *SPPL* adalah Surat Pernyataan Kesanggupan Pengelolaan dan Pemantauan Lingkungan.  
Biasanya untuk usaha kecil-menengah. Kami bantu penyusunan & pelaporannya biar sesuai aturan KLHK dan OSS.`,
  },
  {
    keywords: [
      "izin lingkungan",
      "izin usaha",
      "izin operasional",
      "perizinan lingkungan",
    ],
    response: `🧾 Kami melayani semua jenis *Perizinan Lingkungan*:  
- AMDAL  
- UKL-UPL  
- SPPL  
- Izin TPS Limbah B3  
- Izin Air Limbah  
- Konsultasi lingkungan perusahaan  

Kamu tinggal kasih jenis usaha + lokasi proyek, nanti kami bantu arahkan dokumen apa yang kamu butuh.`,
  },

  // ====== BIAYA, WAKTU, & PROSES ======
  {
    keywords: ["biaya", "harga", "tarif", "bayar", "budget"],
    response: `💰 Biaya tergantung jenis dokumen & lokasi proyek.  
Sebagai gambaran:  
- SPPL mulai dari Rp 1 juta  
- UKL-UPL mulai dari Rp 3 juta  
- AMDAL mulai dari Rp 10 juta  
Semua sudah termasuk konsultasi & pendampingan teknis.`,
  },
  {
    keywords: ["berapa lama", "durasi", "proses", "waktu pengerjaan"],
    response: `⏳ Estimasi waktu pengerjaan dokumen:  
- SPPL: 3–5 hari kerja  
- UKL-UPL: 1–2 minggu  
- AMDAL: 3–4 minggu  
Tapi bisa lebih cepat tergantung kelengkapan data dari kamu.`,
  },
  {
    keywords: ["prosedur", "alur", "tahapan", "langkah"],
    response: `📋 Proses perizinan lingkungan di kami biasanya:  
1️⃣ Konsultasi awal gratis  
2️⃣ Pengumpulan data & dokumen perusahaan  
3️⃣ Penyusunan dokumen lingkungan  
4️⃣ Review & validasi instansi terkait  
5️⃣ Pengesahan & penyerahan hasil akhir`,
  },

  // ====== KONSULTASI & KONTAK ======
  {
    keywords: ["konsultasi", "butuh bantuan", "mau tanya", "bisa bantu"],
    response: `🤝 Tentu! Kamu bisa konsultasi gratis dulu.  
Ceritakan jenis usaha kamu, nanti GeoBot bantu arahkan dokumen yang kamu butuh.  
Kalau mau cepat, hubungi tim kami langsung di WhatsApp 0813-1581-6277.`,
  },
  {
    keywords: ["kontak", "hubungi", "telepon", "alamat", "lokasi", "maps"],
    response: `📍 *Kontak PT. Geo Mandiri Kreasi*  
🏢 Alamat: Jl. Raya Setu No. 88, Bekasi  
📞 Telepon/WA: 0813-1581-6277
📧 Email: info@geomandirikreasi.co.id  
🌐 Website: www.geomandirikreasi.co.id`,
  },

  // ====== DOKUMEN & PERSYARATAN ======
  {
    keywords: ["syarat", "dokumen", "persyaratan", "berkas"],
    response: `🗂️ Dokumen yang biasanya dibutuhkan:  
- Profil perusahaan  
- Nomor Induk Berusaha (NIB)  
- Denah lokasi usaha  
- Data limbah & kegiatan operasional  
- Surat tanah / izin lokasi  

Kami bantu cek kelengkapan sebelum proses jalan.`,
  },
  {
    keywords: ["laporan", "pelaporan", "monitoring"],
    response: `📈 Kami juga bantu *pelaporan berkala* seperti:  
- Laporan UKL-UPL  
- Laporan RKL-RPL  
- Laporan Pengelolaan Limbah B3  
- Pemantauan Air & Udara  
GeoBot bisa bantu atur jadwal pelaporannya juga.`,
  },

  // ====== STATUS & CEK PROGRES ======
  {
    keywords: ["status", "cek", "progres", "sudah sampai mana"],
    response: `🔍 Untuk cek progres dokumen kamu, silakan kirimkan *nama perusahaan* dan *nomor registrasi dokumen*.  
Kami akan bantu cekkan statusnya di sistem internal.`,
  },

  // ====== HUMOR / GENERAL CHAT ======
  {
    keywords: ["halo", "hai", "hello", "pagi", "siang", "malam"],
    response:
      "👋 Hai juga! Aku GeoBot. Siap bantu urusan perizinan lingkungan kamu hari ini?",
  },
  {
    keywords: ["terima kasih", "thanks", "makasih"],
    response:
      "🙏 Sama-sama! Senang bisa bantu kamu. Jangan ragu untuk tanya apa pun ya!",
  },
  {
    keywords: ["siapa kamu", "kamu siapa", "nama kamu"],
    response:
      "🤖 Aku *GeoBot*, asisten virtual PT. Geo Mandiri Kreasi. Aku bisa bantu jawab semua pertanyaan seputar izin lingkungan dan konsultasi dokumen.",
  },
  {
    keywords: ["bisa apa", "fitur", "fungsi"],
    response:
      "⚙️ Aku bisa bantu kamu cari info tentang AMDAL, UKL-UPL, SPPL, biaya, waktu pengerjaan, dokumen yang dibutuhkan, dan konsultasi proyek.",
  },
  {
    keywords: ["cuaca", "game", "makan", "lucu", "gombal"],
    response:
      "😅 Haha... Aku bukan bot cuaca atau komedi sih, tapi aku bisa bantu kamu dapetin izin usaha biar lega kayak cuaca cerah 🌤️",
  },
  {
    keywords: ["gak tau", "bingung", "gimana ya"],
    response:
      "🙂 Santai aja! Ceritain dulu aja jenis usaha kamu dan lokasinya di mana. Nanti aku bantu tentuin dokumen yang kamu butuh.",
  },
];

// 🧠 Fungsi pencarian “AI-like”
export const findBestResponse = (input) => {
  const query = input.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;

  chatbotResponses.forEach((item) => {
    item.keywords.forEach((kw) => {
      const keyword = kw.toLowerCase();
      let score = 0;

      // Cek kesamaan sederhana (match sebagian)
      if (query.includes(keyword)) score = keyword.length / query.length;
      else if (keyword.includes(query)) score = query.length / keyword.length;
      else {
        // Bonus skor untuk kata yang mirip
        const common = keyword
          .split(" ")
          .filter((word) => query.includes(word));
        score = common.length / keyword.split(" ").length / 2;
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = item.response;
      }
    });
  });

  // Jika tidak ada yang cocok
  return (
    bestMatch ||
    "🤔 Hmm... pertanyaan kamu menarik! Tapi sepertinya belum ada di database-ku. Coba tanya seputar AMDAL, UKL-UPL, SPPL, atau izin lingkungan ya 😊"
  );
};
