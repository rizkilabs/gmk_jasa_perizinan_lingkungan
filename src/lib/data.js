// Dummy service data

import { Leaf, Building2, Factory } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Penyusunan UKL-UPL",
    slug: "penyusunan-ukl-upl",
    icon: <Leaf size={40} />,
    shortDesc:
      "Dokumen pengelolaan & pemantauan lingkungan untuk usaha skala menengah.",
    basePrice: 2500000,
    faktor: 15000,
    lokasiFee: {
      jabodetabek: 500000,
      luarJabodetabek: 1000000,
    },
    details: [
      "Survey lokasi",
      "Penyusunan dokumen teknis",
      "Konsultasi 1x via Zoom",
      "Revisi dokumen hingga ACC",
    ],
  },
  {
    id: 2,
    title: "Penyusunan SPPL",
    slug: "penyusunan-sppl",
    icon: <Building2 size={40} />,
    shortDesc: "Surat Pernyataan Kesanggupan Pengelolaan Lingkungan.",
    basePrice: 1500000,
    faktor: 10000,
    lokasiFee: {
      jabodetabek: 300000,
      luarJabodetabek: 600000,
    },
    details: [
      "Konsultasi kebutuhan",
      "Pengumpulan data usaha",
      "Draft dokumen",
      "Pendampingan hingga selesai",
    ],
  },
  {
    id: 3,
    title: "Amdal / Andalalin",
    slug: "amdal-andalalin",
    icon: <Factory size={40} />,
    shortDesc: "Analisis dampak kegiatan skala besar.",
    basePrice: 5000000,
    faktor: 20000,
    lokasiFee: {
      jabodetabek: 1000000,
      luarJabodetabek: 2000000,
    },
    details: [
      "Survey teknis mendalam",
      "Analisis dampak",
      "Dokumen lengkap",
      "Pendampingan presentasi resmi",
    ],
  },
];
