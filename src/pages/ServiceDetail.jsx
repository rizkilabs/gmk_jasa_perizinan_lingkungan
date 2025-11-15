// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { services } from "../lib/data";

// Modular components
import ServiceHero from "../components/service/ServiceHero";
import ServiceContent from "../components/service/ServiceContent";
import ServiceDocuments from "../components/service/ServiceDocuments";
import ServiceProcess from "../components/service/ServiceProcess";
import ServiceSidebar from "../components/service/ServiceSidebar";
import ChatbotWidget from "./LandingPage/ChatbotWidget";

// NEW: estimator modal
import PriceEstimatorModal from "../components/estimator/PriceEstimatorModal";

export default function ServiceDetailPage() {
  const { slug } = useParams();

  // Find service data by slug
  const service = services.find((s) => s.slug === slug);

  // modal state
  const [openEstimator, setOpenEstimator] = React.useState(false);

  // If slug not found
  if (!service) {
    return (
      <Layout>
        <div className="service-detail-section container py-5 text-center">
          <h2 className="mb-3">Layanan tidak ditemukan</h2>
          <p>Pastikan URL atau layanan yang Anda akses sudah benar.</p>

          <a href="/services" className="btn btn-toska mt-3">
            Kembali ke Daftar Layanan
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="service-detail-section service-section">
        <div className="container py-5">
          {/* HERO / HEADER */}
          <ServiceHero service={service} />

          <div className="row g-4 mt-3">
            {/* LEFT CONTENT */}
            <div className="col-lg-8">
              <ServiceContent service={service} />

              <div className="row g-4 mt-2">
                <div className="col-md-6">
                  <ServiceDocuments service={service} />
                </div>
                <div className="col-md-6">
                  <ServiceProcess service={service} />
                </div>
              </div>

              {/* BENEFIT SECTION */}
              {service.detail?.manfaat?.length > 0 && (
                <div className="mt-4">
                  <h4 className="mb-3">Keuntungan Menggunakan Layanan Ini</h4>

                  <div className="row g-3">
                    {service.detail.manfaat.map((m, i) => (
                      <div className="col-md-4" key={i}>
                        <div className="service-card">
                          <h6 className="fw-bold mb-0">{m}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4">
              <ServiceSidebar
                service={service}
                onOpenEstimator={() => setOpenEstimator(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Price Estimator Modal */}
      <PriceEstimatorModal
        open={openEstimator}
        onClose={() => setOpenEstimator(false)}
        service={service}
      />
      <ChatbotWidget />
    </Layout>
  );
}
