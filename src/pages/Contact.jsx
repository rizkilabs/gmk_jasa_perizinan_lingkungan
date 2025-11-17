import React from "react";
import Layout from "../components/Layout";
import MotionWrapper from "../components/MotionWrapper";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ChatbotWidget from "./LandingPage/ChatbotWidget";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const PHONE_NUMBER = "+6281315816277";
const EMAIL = "info@geomandiri.co.id";

function ContactCard({ Icon, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.36 }}
      className="service-card"
      style={{ padding: "1rem" }}
    >
      <div className="d-flex align-items-start gap-3">
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.03)",
            boxShadow: "0 6px 18px rgba(0,191,166,0.06)",
          }}
        >
          <Icon className="service-icon" size={26} />
        </div>
        <div>
          <h6 className="fw-semibold mb-1">{title}</h6>
          <div style={{ fontSize: 14 }}>{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

function WhatsAppCTA() {
  const wa = `https://wa.me/${PHONE_NUMBER.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(
    "Halo Geo Mandiri Kreasi, saya ingin konsultasi perizinan lingkungan."
  )}`;

  return (
    <a
      href={wa}
      target="_blank"
      rel="noreferrer"
      className="btn btn-toska d-flex align-items-center gap-2"
      style={{ whiteSpace: "nowrap" }}
    >
      <Phone size={16} /> Chat via WhatsApp
    </a>
  );
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      console.log(" ini env nya -> ", import.meta.env.VITE_EMAILJS_SERVICE_ID);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          reply_to: data.email,
          phone: data.phone || "-",
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Pesan berhasil dikirim!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengirim pesan. Coba lagi nanti.");
    }
  }

  return (
    <Layout>
      <MotionWrapper>
        <div className="container py-5" style={{ marginTop: 70 }}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36 }}
            className="text-center mb-4"
          >
            <h1 className="fw-bold service-title-section">Hubungi Kami</h1>
            <p className="service-desc-section">
              Untuk konsultasi perizinan lingkungan, pengajuan Amdal / UKL-UPL,
              atau audit kepatuhan, hubungi tim kami lewat form di samping atau
              langsung WhatsApp.
            </p>
          </motion.div>

          <div className="row g-3 mb-4">
            <div className="col-12 col-md-4">
              <ContactCard Icon={MapPin} title="Alamat">
                Rukan Kaca Hijau Jln. Raya Jatiwaringin No.6C
              </ContactCard>
            </div>

            <div className="col-12 col-md-4">
              <ContactCard Icon={Phone} title="Telepon / WA">
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span className="fw-semibold">{PHONE_NUMBER}</span>
                  <a
                    className="text-decoration-none ms-2"
                    href={`tel:${PHONE_NUMBER.replace(/[^0-9+]/g, "")}`}
                  >
                    Call
                  </a>
                </div>
                <div className="mt-2">
                  <WhatsAppCTA />
                </div>
              </ContactCard>
            </div>

            <div className="col-12 col-md-4">
              <ContactCard Icon={Mail} title="Email">
                <div className="fw-semibold">{EMAIL}</div>
                <a className="d-inline-block mt-2" href={`mailto:${EMAIL}`}>
                  kirim email
                </a>
              </ContactCard>
            </div>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36 }}
                className="service-card"
                style={{ padding: 24 }}
              >
                <h5 className="fw-semibold mb-3">Kirim Pesan</h5>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label className="form-label">Nama</label>
                    <input
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      {...register("name", { required: true })}
                      placeholder="Nama lengkap"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">Nama wajib diisi</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      {...register("email", {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      })}
                      placeholder="alamat@domain.com"
                    />
                    {errors.email?.type === "required" && (
                      <div className="invalid-feedback">Email wajib diisi</div>
                    )}
                    {errors.email?.type === "pattern" && (
                      <div className="invalid-feedback">
                        Format email tidak valid
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Nomor HP</label>
                    <input
                      className="form-control"
                      {...register("phone")}
                      placeholder="+628..."
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Pesan</label>
                    <textarea
                      className={`form-control ${
                        errors.message ? "is-invalid" : ""
                      }`}
                      rows={5}
                      {...register("message", { required: true })}
                      placeholder="Jelaskan kebutuhan perizinan atau pertanyaan Anda..."
                    />
                    {errors.message && (
                      <div className="invalid-feedback">Pesan wajib diisi</div>
                    )}
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-toska"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                    </button>

                    <a
                      className="btn btn-outline-secondary"
                      href={`https://wa.me/${PHONE_NUMBER.replace(
                        /[^0-9]/g,
                        ""
                      )}?text=${encodeURIComponent(
                        "Halo, saya ingin konsultasi perizinan lingkungan."
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </form>
              </motion.div>
            </div>

            <div className="col-12 col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36 }}
                className="service-card"
                style={{ padding: 0 }}
              >
                <div style={{ padding: 16 }}>
                  <h5 className="fw-semibold mb-3">Lokasi Kami</h5>
                  <p className="mb-2" style={{ fontSize: 14 }}>
                    Rukan Kaca Hijau Jln. Raya Jatiwaringin No.6C — Kunjungi
                    kami atau hubungi untuk jadwal pertemuan.
                  </p>
                </div>

                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63457.97930801433!2d106.906767!3d-6.247425000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f32b83252e77%3A0xd4495dbdb34e3f71!2sGeo%20Mandiri%20Kreasi.%20PT!5e0!3m2!1sid!2sus!4v1763198031494!5m2!1sid!2sus"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </MotionWrapper>
    </Layout>
  );
}
