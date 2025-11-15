// src/pages/ServiceList.jsx
import React, { useMemo, useState } from "react";
import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import ChatbotWidget from "./LandingPage/ChatbotWidget";
import { services } from "../lib/data";
import { motion } from "framer-motion";

function ServiceList() {
  // Pagination
  const [page, setPage] = useState(1);
  const perPage = 9;

  const total = services.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  const currentItems = useMemo(() => {
    const start = (page - 1) * perPage;
    return services.slice(start, start + perPage);
  }, [page]);

  // stagger container
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));
  const goTo = (n) => setPage(Math.max(1, Math.min(totalPages, n)));

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

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="row g-4"
          >
            {currentItems.map((item) => (
              <div className="col-md-4" key={item.id}>
                <ServiceCard
                  icon={item.icon}
                  title={item.title}
                  shortDesc={item.shortDesc}
                  slug={item.slug}
                  category={item.category}
                />
              </div>
            ))}
          </motion.div>

          {/* Pagination */}
          <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
            <button
              className="btn btn-light"
              onClick={handlePrev}
              disabled={page === 1}
            >
              Prev
            </button>

            {/* page numbers (show max 5 centered) */}
            <div style={{ display: "flex", gap: 8 }}>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(Math.max(0, page - 3), Math.min(totalPages, page + 2))
                .map((p) => (
                  <button
                    key={p}
                    onClick={() => goTo(p)}
                    className={`btn ${p === page ? "btn-toska" : "btn-light"}`}
                    aria-current={p === page ? "page" : undefined}
                  >
                    {p}
                  </button>
                ))}
            </div>

            <button
              className="btn btn-light"
              onClick={handleNext}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>

          {/* small info */}
          <div className="text-center mt-3" style={{ color: "#666" }}>
            Menampilkan {currentItems.length} dari {total} layanan — Halaman{" "}
            {page} / {totalPages}
          </div>
        </div>
      </section>
      <ChatbotWidget />
    </Layout>
  );
}

export default ServiceList;
