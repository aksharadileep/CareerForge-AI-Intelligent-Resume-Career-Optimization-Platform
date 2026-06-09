import React, { useState } from 'react';
import { T, css } from '../../constants/theme';
import { Logo } from '../common/Logo';

export function AuthPage({ onAuth }) {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    if (!form.email || !form.password) { setError("Email and password are required"); return; }
    if (mode === "signup" && form.password !== form.confirm) { setError("Passwords do not match"); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onAuth(form.name || form.email.split("@")[0]);
    }, 1000);
  };

  return (
    <div style={{ minHeight: "100vh", background: T.bg, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div className="animate-in" style={{ width: "100%", maxWidth: 480 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ display: "inline-block" }}><Logo size="lg" /></div>
          <p style={{ marginTop: 16, fontSize: 14, color: T.textLight }}>AI-powered career tools trusted by 10,000+ professionals</p>
        </div>

        <div style={css.card}>
          <div style={{ display: "flex", gap: 12, background: T.surfaceAlt, borderRadius: 48, padding: 4, marginBottom: 28 }}>
            <button onClick={() => { setMode("login"); setError(""); }} style={{
              flex: 1, padding: "10px 0", borderRadius: 40, border: "none",
              background: mode === "login" ? T.primary : "transparent",
              color: mode === "login" ? "white" : T.textLight, fontSize: 14, fontWeight: 600, cursor: "pointer",
            }}>Sign In</button>
            <button onClick={() => { setMode("signup"); setError(""); }} style={{
              flex: 1, padding: "10px 0", borderRadius: 40, border: "none",
              background: mode === "signup" ? T.primary : "transparent",
              color: mode === "signup" ? "white" : T.textLight, fontSize: 14, fontWeight: 600, cursor: "pointer",
            }}>Create Account</button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {mode === "signup" && (
              <div>
                <label style={css.label}>Full Name</label>
                <input placeholder="James Wilson" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} style={css.input} />
              </div>
            )}
            <div>
              <label style={css.label}>Email Address</label>
              <input type="email" placeholder="hello@company.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} style={css.input} />
            </div>
            <div>
              <label style={css.label}>Password</label>
              <input type="password" placeholder="••••••••" value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} style={css.input} />
            </div>
            {mode === "signup" && (
              <div>
                <label style={css.label}>Confirm Password</label>
                <input type="password" placeholder="••••••••" value={form.confirm} onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))} style={css.input} />
              </div>
            )}
          </div>

          {error && <div style={{ marginTop: 16, padding: "12px 16px", background: T.warningLight, borderRadius: 12, fontSize: 13, color: T.warning }}>{error}</div>}

          <button onClick={handleSubmit} style={{ ...css.btnPrimary, width: "100%", marginTop: 24, opacity: loading ? 0.7 : 1 }}>
            {loading ? "Processing..." : mode === "login" ? "Sign In" : "Create Free Account"}
          </button>
        </div>
      </div>
    </div>
  );
}