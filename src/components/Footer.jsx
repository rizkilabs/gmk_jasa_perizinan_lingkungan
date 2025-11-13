import React from "react";

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
                <a href="#amdal">Penyusunan AMDAL</a>
              </li>
              <li>
                <a href="#ukl-upl">UKL-UPL</a>
              </li>
              <li>
                <a href="#sppl">SPPL</a>
              </li>
              <li>
                <a href="#konsultasi">Konsultasi Lingkungan</a>
              </li>
            </ul>
          </div>

          {/* 3️⃣ Kontak & Sosial Media */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h6 className="text-uppercase mb-3 fw-semibold">Kontak Kami</h6>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>Jl. Raya Gunung Sindur
              No. 88, Bogor
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>(021) 1234-5678
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>
              info@geomandirigreasi.co.id
            </p>

            <div className="mt-3 social-icons">
              <a href="#" className="me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="me-3">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>

          {/* 4️⃣ Google Map */}
          <div className="col-12 col-md-6 col-lg-3 mb-4">
            <h6 className="text-uppercase mb-3 fw-semibold">Lokasi Kami</h6>
            <div className="ratio ratio-4x3 rounded shadow-sm footer-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.532467245193!2d106.6883!3d-6.199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5e4bcdbe38b%3A0x123456789abcdef!2sPT%20Geo%20Mandiri%20Kreasi!5e0!3m2!1sid!2sid!4v1699876543210!5m2!1sid!2sid"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Geo Mandiri Kreasi"
              ></iframe>
            </div>
          </div>
        </div>

        <hr />

        {/* Copyright */}
        <div className="text-center py-3">
          <small>
            © {new Date().getFullYear()} Geo Mandiri Kreasi. All rights
            reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
