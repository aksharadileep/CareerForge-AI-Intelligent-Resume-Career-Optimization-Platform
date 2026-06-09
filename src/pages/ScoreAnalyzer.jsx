import React from 'react';
import { T, css } from '../constants/theme';

export default function ScoreAnalyzer() {
  return (
    <div style={css.card}>
      <h2 style={{ fontSize: 24, fontWeight: 600, color: T.text, marginBottom: 16 }}>Resume Score Analyzer</h2>
      <p style={{ color: T.textLight }}>Your resume scores 78/100 · 5 improvements suggested.</p>
    </div>
  );
}