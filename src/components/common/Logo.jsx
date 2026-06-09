import React from 'react';
import { T } from '../../constants/theme';

export function Logo({ size = "md", variant = "default" }) {
  const sizes = { sm: 32, md: 40, lg: 48 };
  const fontSize = { sm: 18, md: 22, lg: 26 };
  
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{
        width: sizes[size], height: sizes[size],
        background: T.gradientPrimary, borderRadius: 12,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 12px rgba(10,102,194,0.2)",
      }}>
        <span style={{ color: "white", fontSize: fontSize[size], fontWeight: 700 }}>CF</span>
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: fontSize[size] - 2, color: T.text, letterSpacing: "-0.3px" }}>
          Career<span style={{ color: T.primary }}>Forge</span>
        </div>
        <div style={{ fontSize: 10, color: T.textMuted, letterSpacing: "0.3px", marginTop: -2 }}>CAREER INTELLIGENCE</div>
      </div>
    </div>
  );
}