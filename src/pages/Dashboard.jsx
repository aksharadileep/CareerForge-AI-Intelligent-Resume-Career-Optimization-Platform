import React from 'react';
import { T, css } from '../constants/theme';

export default function Dashboard({ onNavigate, user }) {
  const stats = [
    { label: "Resume Score", value: "78", change: "+12%", icon: "📄", color: T.primary },
    { label: "Job Match Rate", value: "85%", change: "+5%", icon: "🎯", color: T.accent },
    { label: "Skills Gap", value: "3", change: "-2", icon: "🔍", color: T.warning },
    { label: "Interviews Prep", value: "2", change: "New", icon: "🎤", color: T.secondary },
  ];

  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, color: T.text, marginBottom: 8 }}>Welcome back, {user}</h2>
        <p style={{ fontSize: 15, color: T.textLight }}>Your career readiness score is 68/100 · 30% higher chance of getting hired</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 32 }}>
        {stats.map(s => (
          <div key={s.label} style={{ ...css.card, padding: "20px 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: s.change.includes("+") ? T.accent : T.warning }}>{s.change}</span>
            </div>
            <div style={{ fontSize: 36, fontWeight: 700, color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: T.textMuted }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: 24 }}>
        <div style={css.card}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 20 }}>Resume Builder</h3>
          <button onClick={() => onNavigate("resume")} style={css.btnPrimary}>Build My Resume →</button>
        </div>
      </div>
    </div>
  );
}