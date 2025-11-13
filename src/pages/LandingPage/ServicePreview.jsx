import React from "react";
import ServiceCard from "../../components/ServiceCard";
import { Leaf, Building2, FileCheck2 } from "lucide-react";

const services = [
  {
    icon: <Leaf />,
    title: "Analisis Dampak Lingkungan",
    desc: "Konsultasi AMDAL dengan ahli bersertifikat.",
  },
  {
    icon: <Building2 />,
    title: "Perizinan Usaha",
    desc: "Bantu proses izin lingkungan lebih cepat & mudah.",
  },
  {
    icon: <FileCheck2 />,
    title: "Monitoring & Pelaporan",
    desc: "Pantau kepatuhan lingkungan secara real-time.",
  },
];

const ServicePreview = () => (
  <section id="layanan" className="container py-5">
    <h2 className="text-center fw-bold mb-5">Layanan Unggulan Kami</h2>
    <div className="row g-4">
      {services.map((srv, i) => (
        <div key={i} className="col-md-4">
          <ServiceCard {...srv} />
        </div>
      ))}
    </div>
  </section>
);

export default ServicePreview;
