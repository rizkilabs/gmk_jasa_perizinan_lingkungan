// src/components/estimator/PriceEstimatorModal.jsx
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import usePriceEstimator from "../../hooks/usePriceEstimator";
import ShareButtons from "./ShareButtons";

export default function PriceEstimatorModal({ open, onClose, service }) {
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      area: "",
      location: "jawa",
      type: service?.type || "uklUpl",
      urgency: "normal",
      docsStatus: "none",
    },
  });

  const { calculate } = usePriceEstimator();
  const [result, setResult] = React.useState(null);

  useEffect(() => {
    // load saved
    const saved = localStorage.getItem("price-estimator");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        reset(parsed.input || {});
        setResult(parsed.result || null);
      } catch (e) {}
    } else {
      reset({
        area: "",
        location: "jawa",
        type: service?.type || "uklUpl",
        urgency: "normal",
        docsStatus: "none",
      });
      setResult(null);
    }
  }, [open, reset, service]);

  function onSubmit(data) {
    const calc = calculate({
      area: Number(data.area),
      location: data.location,
      type: data.type,
      urgency: data.urgency,
      docsStatus: data.docsStatus,
    });

    const payload = { input: data, result: calc };
    setResult(calc);
    localStorage.setItem("price-estimator", JSON.stringify(payload));
  }

  function clearSaved() {
    localStorage.removeItem("price-estimator");
    reset({
      area: "",
      location: "jawa",
      type: service?.type || "uklUpl",
      urgency: "normal",
      docsStatus: "none",
    });
    setResult(null);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="estimator-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10050,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            className="service-card"
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            style={{
              width: "min(920px, 96%)",
              maxHeight: "88vh",
              overflowY: "auto",
              padding: "1.25rem",
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h5 className="mb-0">Estimasi Harga & Rekomendasi</h5>
              <div>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={clearSaved}
                >
                  Reset
                </button>
                <button className="btn btn-sm btn-secondary" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label">Luas Area (m²)</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register("area", { required: true })}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label">Lokasi</label>
                  <select className="form-select" {...register("location")}>
                    <option value="jabodetabek">Jabodetabek</option>
                    <option value="jawa">Pulau Jawa</option>
                    <option value="sumatera">Sumatera</option>
                    <option value="kalimantan">Kalimantan</option>
                    <option value="sulawesi">Sulawesi</option>
                    <option value="baliNtt">Bali & NTT</option>
                    <option value="luarPulau">Luar Pulau</option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Jenis Perizinan</label>
                  <select className="form-select" {...register("type")}>
                    <option value="uklUpl">UKL-UPL</option>
                    <option value="amdal">AMDAL</option>
                    <option value="sppl">SPPL</option>
                    <option value="ijinLingkunganLain">
                      Izin Lingkungan Lain
                    </option>
                  </select>
                </div>

                <div className="col-md-4">
                  <label className="form-label">Urgency</label>
                  <select className="form-select" {...register("urgency")}>
                    <option value="normal">Normal</option>
                    <option value="cepat">Cepat</option>
                    <option value="express">Express</option>
                  </select>
                </div>

                <div className="col-md-8">
                  <label className="form-label">Status Dokumen</label>
                  <select className="form-select" {...register("docsStatus")}>
                    <option value="none">Dokumen lengkap</option>
                    <option value="minor">Kekurangan minor</option>
                    <option value="major">Banyak dokumen belum ada</option>
                  </select>
                </div>
              </div>

              <div className="d-flex gap-2 mt-3">
                <button type="submit" className="btn btn-toska">
                  Hitung & Rekomendasi
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={onClose}
                >
                  Tutup
                </button>
              </div>
            </form>

            {/* Result */}
            {result && (
              <div className="mt-3">
                <hr />
                <h6>Hasil & Breakdown</h6>
                <div className="row">
                  <div className="col-md-6">
                    <p className="mb-1">Total Estimasi</p>
                    <h3>Rp {result.total.toLocaleString()}</h3>
                    <p className="mb-0">
                      Paket Rekomendasi: <strong>{result.packageName}</strong>
                    </p>
                    <p className="mb-0">
                      Perkiraan Waktu: <strong>{result.timeline} hari</strong>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="mb-1">Rincian</p>
                    <ul>
                      <li>Base: Rp {result.breakdown.base.toLocaleString()}</li>
                      <li>Location Multiplier: x{result.breakdown.locMul}</li>
                      <li>Risk Factor: x{result.breakdown.risk}</li>
                      <li>
                        Urgency Fee: Rp{" "}
                        {result.breakdown.urgencyFee.toLocaleString()}
                      </li>
                      <li>
                        Docs Fee: Rp {result.breakdown.docsFee.toLocaleString()}
                      </li>
                      <li>
                        Variability: Rp{" "}
                        {result.breakdown.variability.toLocaleString()}
                      </li>
                    </ul>
                    <p className="mb-0">
                      Konsultan (estimasi): Rp{" "}
                      {result.consultantEstimate.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* recommendations */}
                <div className="mt-3">
                  <h6>Rekomendasi Tambahan</h6>
                  <div className="row g-2">
                    {result.recommendations.map((r) => (
                      <div className="col-md-6" key={r.key}>
                        <div
                          className="p-2 rounded"
                          style={{ border: "1px dashed rgba(0,0,0,0.06)" }}
                        >
                          <div className="d-flex justify-content-between">
                            <div>
                              <strong>{r.title}</strong>
                              {r.note && (
                                <div className="small text-muted">{r.note}</div>
                              )}
                            </div>
                            <div className="text-end">
                              Rp {r.price.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <ShareButtons payload={{ input: watch(), result }} />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
