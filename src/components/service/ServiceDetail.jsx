// src/components/service/ServiceDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { services } from "../../lib/data";
import ServiceHero from "./ServiceHero";
import ServiceContent from "./ServiceContent";
import ServiceDocuments from "./ServiceDocuments";
import ServiceProcess from "./ServiceProcess";
import ServiceSidebar from "./ServiceSidebar";

function ServiceDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <section className="service-section">
          <div className="container py-5 text-center">
            <h2 className="mb-3">Layanan tidak ditemukan</h2>
            <p>Pastikan URL atau layanan yang Anda akses sudah benar.</p>
            <Link to="/services" className="btn btn-toska mt-3">
              Kembali ke Daftar Layanan
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="service-section">
        <div className="container py-5">
          {/* Breadcrumb */}
          <div className="mb-3">
            <Link to="/">Home</Link> / <Link to="/services">Layanan</Link> /{" "}
            <span>{service.title}</span>
          </div>

          <ServiceHero service={service} navigate={navigate} />

          <div className="row g-4 mt-3">
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

              {/* Benefits */}
              {service.detail?.manfaat && service.detail.manfaat.length > 0 && (
                <div className="mt-4">
                  <h4 className="mb-3">Keuntungan Menggunakan Layanan Ini</h4>
                  <div className="row g-3">
                    {service.detail.manfaat.map((m, i) => (
                      <div className="col-md-4" key={i}>
                        <div className="service-card">
                          <h6 className="fw-bold mb-2">{m}</h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-4">
              <ServiceSidebar service={service} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ServiceDetailPage;
