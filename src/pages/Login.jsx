// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MotionWrapper from "../components/MotionWrapper";

export default function Login() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState(""); // email or phone
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!identifier || !password) {
      toast.error("Masukkan Email/No HP dan Password", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // try find by email (case-insensitive) or phone exact match
    const user = users.find(
      (u) =>
        (u.email && u.email.toLowerCase() === identifier.toLowerCase()) ||
        (u.phone && u.phone === identifier)
    );

    if (!user) {
      toast.error("User tidak ditemukan", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (user.password !== password) {
      toast.error("Password salah", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    // login success
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ id: user.id, name: user.name, email: user.email })
    );
    toast.success("Login berhasil! Mengarahkan ke dashboard...", {
      position: "top-center",
      autoClose: 1600,
    });

    setTimeout(() => navigate("/dashboard"), 1700);
  };

  return (
    <MotionWrapper>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="login-glass-card"
          style={{ maxWidth: 480, width: "95%" }}
        >
          <h2 className="text-center mb-3 login-title">Masuk</h2>
          <p className="text-center text-muted" style={{ fontSize: 14 }}>
            Masuk menggunakan Email atau Nomor HP
          </p>

          <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email atau Nomor HP
              </label>
              <input
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="form-control login-input"
                placeholder="email@contoh.com atau 08xxxx"
                autoComplete="username"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control login-input"
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              className="btn w-100 btn-toska fw-semibold rounded-pill"
            >
              Masuk
            </button>

            <p className="text-center mt-3" style={{ fontSize: 14 }}>
              Belum punya akun?{" "}
              <a
                href="/register"
                style={{ color: "var(--primary)" }}
                className="text-decoration-none"
              >
                Daftar
              </a>
            </p>
          </form>
        </div>
      </div>
    </MotionWrapper>
  );
}
