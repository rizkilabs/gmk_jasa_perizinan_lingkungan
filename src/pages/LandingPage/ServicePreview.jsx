import React from "react";
import ServiceCard from "../../components/ServiceCard";
import { Leaf, Building2, FileCheck2 } from "lucide-react";

const services = [
  {
    icon: <Leaf />,
    title: "Analisis Dampak Lingkungan",
    desc: "Konsultasi AMDAL dengan ahli bersertifikat dan metode sesuai regulasi terbaru.",
  },
  {
    icon: <Building2 />,
    title: "Perizinan Usaha",
    desc: "Pendampingan perizinan lingkungan yang cepat, efisien, dan terintegrasi.",
  },
  {
    icon: <FileCheck2 />,
    title: "Monitoring & Pelaporan",
    desc: "Sistem pemantauan dan pelaporan kepatuhan lingkungan secara real-time.",
  },
];

const ServicePreview = () => (
  <section id="layanan" className="service-section">
    <div className="container">
      <h2 className="service-title-section text-center fw-bold mb-4">
        Layanan Unggulan Kami
      </h2>

      <p
        className="text-center mb-5"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        Kami menyediakan layanan konsultasi, perizinan, dan pemantauan
        lingkungan dengan standar terbaik dan teknologi modern.
      </p>
      <div className="row g-4">
        {services.map((srv, i) => (
          <div key={i} className="col-md-4">
            <ServiceCard {...srv} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicePreview;
