// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../hooks/useStore";

export default function Login() {
  const navigate = useNavigate();
  const login = useStore((s) => s.login);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Username dan password wajib diisi.");
      return;
    }

    const user = {
      name: username,
      token: "demo-token",
    };

    login(user);
    navigate("/dashboard", { replace: true });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        background: "var(--gray)",
      }}
    >
      <div className="login-glass-card">
        <h3 className="text-center mb-3 login-title">Masuk</h3>

        {error && (
          <div className="alert alert-danger py-2 text-center">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: 500 }}>
              Username
            </label>
            <input
              className="form-control login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: 500 }}>
              Password
            </label>
            <input
              type="password"
              className="form-control login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="btn w-100 btn-toska"
            type="submit"
            style={{
              padding: "10px 0",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "1rem",
            }}
          >
            Login
          </button>
        </form>

        <p
          className="text-center mt-3"
          style={{ fontSize: "0.9rem", opacity: 0.7 }}
        >
          *Gunakan username & password bebas (demo)
        </p>
      </div>
    </div>
  );
}
