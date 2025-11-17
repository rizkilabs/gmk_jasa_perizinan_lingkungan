// src/pages/dashboard/EditContent.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * EditContent (admin)
 * - Live preview updates while typing
 * - Save to localStorage key "heroContent"
 * - Reset to defaults (remove key)
 */
export default function EditContent() {
  const navigate = useNavigate();

  // load initial from localStorage
  const loadFromStorage = () => {
    try {
      const raw = localStorage.getItem("heroContent");
      return raw ? JSON.parse(raw) : { title: "", subtitle: "" };
    } catch (err) {
      console.error("Failed parse heroContent", err);
      return { title: "", subtitle: "" };
    }
  };

  const defaultValues = {
    title: "Solusi untuk Lingkungan yang Lebih Baik 🌿",
    subtitle:
      "Kami bantu perusahaan wujudkan kepatuhan lingkungan dengan mudah dan cepat.",
  };

  const saved = loadFromStorage();
  const [title, setTitle] = useState(saved.title || defaultValues.title);
  const [subtitle, setSubtitle] = useState(
    saved.subtitle || defaultValues.subtitle
  );
  const [dirty, setDirty] = useState(false);

  // mark dirty when user types
  useEffect(() => {
    const initialTitle = saved.title || defaultValues.title;
    const initialSubtitle = saved.subtitle || defaultValues.subtitle;
    setDirty(title !== initialTitle || subtitle !== initialSubtitle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, subtitle]);

  const handleSave = () => {
    const payload = { title: title.trim(), subtitle: subtitle.trim() };
    localStorage.setItem("heroContent", JSON.stringify(payload));
    setDirty(false);
    alert("Saved hero content ✅");
  };

  const handleReset = () => {
    if (confirm("Reset hero content to default?")) {
      localStorage.removeItem("heroContent");
      setTitle(defaultValues.title);
      setSubtitle(defaultValues.subtitle);
      setDirty(false);
      alert("Hero content reset to default.");
    }
  };

  const goHome = () => navigate("/");

  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="m-0">Edit Hero Section</h2>
        <div>
          <button className="btn btn-secondary me-2" onClick={goHome}>
            Back to Home
          </button>
          <button className="btn btn-outline-danger" onClick={handleReset}>
            Reset Default
          </button>
        </div>
      </div>

      <div className="row g-4">
        {/* FORM */}
        <div className="col-12 col-lg-5">
          <div className="card p-3">
            <div className="mb-3">
              <label className="form-label">Hero Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title shown in hero"
              />
              <div className="form-text">
                Text displayed in the big hero heading.
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Hero Subtitle</label>
              <textarea
                rows={3}
                className="form-control"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                placeholder="Subtitle/lead text"
              />
              <div className="form-text">
                Small paragraph under the heading.
              </div>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-primary"
                onClick={handleSave}
                disabled={!dirty}
                title={!dirty ? "No changes to save" : "Save changes"}
              >
                Save
              </button>

              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  // reload from storage
                  const stored = loadFromStorage();
                  setTitle(stored.title || defaultValues.title);
                  setSubtitle(stored.subtitle || defaultValues.subtitle);
                }}
              >
                Revert
              </button>
            </div>
          </div>
        </div>

        {/* LIVE PREVIEW */}
        <div className="col-12 col-lg-7">
          <div className="card p-0 overflow-hidden">
            <div
              style={{
                height: "350px",
                position: "relative",
                background: "#000",
              }}
            >
              {/* background video (same as site) */}
              <video
                src="/assets/hero-bg.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%) scale(1.28)",
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
                  zIndex: 1,
                }}
              />

              {/* preview text */}
              <div
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  color: "white",
                  textAlign: "center",
                  padding: "0 16px",
                  maxWidth: 820,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "clamp(1.25rem, 3vw, 2rem)",
                    lineHeight: 1.2,
                  }}
                >
                  {title || defaultValues.title}
                </h3>

                <p style={{ marginTop: 12, opacity: 0.95 }}>
                  {subtitle || defaultValues.subtitle}
                </p>

                <div style={{ marginTop: 16 }}>
                  <a
                    href="#layanan"
                    className="btn btn-toska px-4 py-2"
                    style={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      borderRadius: "50px",
                    }}
                  >
                    Lihat Layanan
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3">
              <small className="text-muted">
                Live preview — changes show as you type.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
