// src/components/estimator/ShareButtons.jsx
import React from "react";
import { MessageCircle, FileInput } from "lucide-react";
import jsPDF from "jspdf";

export default function ShareButtons({ payload }) {
  // payload: { input, result }
  const { input, result } = payload;

  const message = `
Estimasi Perizinan:
Service: ${input.type}
Luas: ${input.area} m²
Lokasi: ${input.location}
Urgency: ${input.urgency}
Status Dokumen: ${input.docsStatus}

Total Estimasi: Rp ${result.total.toLocaleString()}
Paket: ${result.packageName}
Perkiraan Waktu: ${result.timeline} hari
  `;

  function sendWA() {
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  function downloadPDF() {
    const doc = new jsPDF({ unit: "pt" });
    const lines = message
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    let y = 40;
    doc.setFontSize(12);
    lines.forEach((ln) => {
      doc.text(ln, 40, y);
      y += 18;
    });
    doc.save("estimasi-perizinan.pdf");
  }

  return (
    <div className="d-flex gap-2 mt-3">
      <button
        type="button"
        className="btn btn-success flex-fill"
        onClick={sendWA}
      >
        <MessageCircle size={16} className="me-2" /> WhatsApp
      </button>
      <button
        type="button"
        className="btn btn-dark flex-fill"
        onClick={downloadPDF}
      >
        <FileInput size={16} className="me-2" /> Download PDF
      </button>
    </div>
  );
}
