import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* 1️⃣ Company Info */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h5 className="text-uppercase fw-bold">Geo Mandiri Kreasi</h5>
            <p>
              Penyedia jasa konsultasi dan pengurusan izin lingkungan
              terpercaya. Kami membantu perusahaan memenuhi regulasi dengan
              cepat, mudah, dan profesional.
            </p>
          </div>

          {/* 2️⃣ Layanan Kami */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h6 className="text-uppercase mb-3 fw-semibold">Layanan Kami</h6>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/layanan/amdal">Penyusunan AMDAL</NavLink>
              </li>
              <li>
                <NavLink to="/layanan/ukl-upl-sppl">UKL-UPL</NavLink>
              </li>
              <li>
                <NavLink to="/layanan/ukl-upl-sppl">SPPL</NavLink>
              </li>
              <li>
                <NavLink to="/layanan/konsultasi-operasional">
                  Konsultasi Lingkungan
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 3️⃣ Kontak & Sosial Media */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h6 className="text-uppercase mb-3 fw-semibold">Kontak Kami</h6>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>Rukan Kaca Hijau Jln.
              Raya Jatiwaringin No.6C
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>(021) 862-1510
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>
              info@geomandiri.co.id
            </p>

            <div className="mt-3 social-icons">
              <a
                href="https://www.youtube.com/@visgenGeoMandiri"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="bi bi-youtube fs-5"></i>
              </a>
              <a
                href="https://www.instagram.com/visgen2025"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a
                href="https://www.tiktok.com/@visgen5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-tiktok fs-5"></i>
              </a>
            </div>
          </div>

          {/* 4️⃣ Google Map */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h6 className="text-uppercase mb-3 fw-semibold">Lokasi Kami</h6>
            <div className="ratio ratio-4x3 rounded shadow-sm footer-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63457.97930801433!2d106.906767!3d-6.247425000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f32b83252e77%3A0xd4495dbdb34e3f71!2sGeo%20Mandiri%20Kreasi.%20PT!5e0!3m2!1sid!2sus!4v1763198031494!5m2!1sid!2sus"
                allowfullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <hr />

        {/* Copyright */}
        <div className="text-center py-3">
          <small>
            © {new Date().getFullYear()} PT. GEO MANDIRI KREASI . All rights
            reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
