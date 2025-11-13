import React from "react";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import { services } from "../lib/data";

function ServiceList() {
  return (
    <Layout>
      <section className="service-section">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="service-title-section">Daftar Layanan</h2>
            <p className="service-desc-section">
              Pilih layanan yang sesuai dengan kebutuhan usaha Anda.
            </p>
          </div>

          <div className="row g-4">
            {services.map((item) => (
              <div className="col-md-4" key={item.id}>
                <ServiceCard
                  icon={item.icon}
                  title={item.title}
                  desc={item.shortDesc}
                  slug={item.slug}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ServiceList;
