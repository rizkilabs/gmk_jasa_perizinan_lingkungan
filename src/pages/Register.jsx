// src/pages/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MotionWrapper from "../components/MotionWrapper";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  // simple email regex
  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Indonesian phone validation: starts with 08... or +62...
  const isPhoneValid = (phone) => /^(08\d{7,12}|\+62\d{7,12})$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic required fields
    if (!form.name || !form.email || !form.phone || !form.password) {
      toast.error("Semua field wajib diisi!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (!isEmailValid(form.email)) {
      toast.error("Format email tidak valid", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (!isPhoneValid(form.phone)) {
      toast.error("Format nomor HP tidak valid. Pakai 08xxxx atau +62xxxx", {
        position: "top-center",
        autoClose: 3500,
      });
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password minimal 6 karakter", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    // load users array
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // check duplicate by email or phone (case-insensitive on email)
    const dup = users.find(
      (u) =>
        u.email.toLowerCase() === form.email.toLowerCase() ||
        u.phone === form.phone
    );

    if (dup) {
      toast.error("Email atau nomor HP sudah terdaftar!", {
        position: "top-center",
        autoClose: 3500,
      });
      return;
    }

    // create new user object
    const newUser = {
      id: `u_${Date.now()}`,
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      businessName: form.businessName.trim() || "",
      password: form.password, // plain text for demo only
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Pendaftaran berhasil! Redirecting to login...", {
      position: "top-center",
      autoClose: 4000,
    });

    // redirect after toast shown
    setTimeout(() => navigate("/login"), 1900);
  };

  return (
    <MotionWrapper>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="login-glass-card"
          style={{ maxWidth: 520, width: "95%" }}
        >
          <h2 className="text-center mb-3 login-title">
            Pendaftaran Usaha (singkat)
          </h2>
          <p className="text-center text-muted" style={{ fontSize: 14 }}>
            Isi data dasar — bisa dipakai untuk login dengan Email atau No HP
          </p>

          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
              <label className="form-label fw-semibold">Nama Lengkap</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control login-input"
                placeholder="Nama lengkap"
                autoComplete="name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control login-input"
                placeholder="email@contoh.com"
                autoComplete="email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Nomor HP</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="form-control login-input"
                placeholder="08xxxx atau +62xxxx"
                autoComplete="tel"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Nama Usaha (opsional)
              </label>
              <input
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                className="form-control login-input"
                placeholder="Nama usaha (boleh kosong)"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="form-control login-input"
                placeholder="Minimal 6 karakter"
                autoComplete="new-password"
              />
            </div>

            <button
              type="submit"
              className="btn w-100 btn-toska fw-semibold rounded-pill"
            >
              Daftar Sekarang
            </button>

            <p className="text-center mt-3" style={{ fontSize: 14 }}>
              Sudah punya akun?{" "}
              <a
                href="/login"
                style={{ color: "var(--primary)" }}
                className="text-decoration-none"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </MotionWrapper>
  );
}
