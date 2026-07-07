import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({ detail: "Invalid credentials" }));
        throw new Error(errData.detail || "Authentication failed");
      }

      const data = await res.json();
      localStorage.setItem("token", data.access_token);
      navigate("/admin/blogs");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "85vh",
        background: "linear-gradient(135deg, #0f0c20 0%, #1e133e 100%)",
        margin: "-50px -15px", // Spans the full height and margins of our layout container
        padding: "50px 15px",
      }}
    >
      <div
        className="card border-0 p-4 p-md-5 text-white shadow-lg"
        style={{
          maxWidth: "450px",
          width: "100%",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold mb-1" style={{ color: "#8E70FF" }}>Adyalam Admin</h3>
          <p className="text-muted small">Please sign in to access control center</p>
        </div>

        {error && (
          <div className="alert alert-danger border-0 text-center py-2" style={{ backgroundColor: "rgba(220, 53, 69, 0.2)", color: "#ff848f" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="form-label small text-uppercase fw-bold text-white">Username</label>
            <input
              type="text"
              className="form-control text-black border-0"
              style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                padding: "12px 16px",
                borderRadius: "8px",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label small text-uppercase fw-bold text-white">Password</label>
            <input
              type="password"
              className="form-control text-black border-0"
              style={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                padding: "12px 16px",
                borderRadius: "8px",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100 py-3 mt-2 fw-bold text-white border-0"
            style={{
              background: "linear-gradient(90deg, #6A47ED 0%, #8E70FF 100%)",
              borderRadius: "8px",
              boxShadow: "0 4px 15px rgba(106, 71, 237, 0.4)",
              transition: "all 0.3s ease",
            }}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
