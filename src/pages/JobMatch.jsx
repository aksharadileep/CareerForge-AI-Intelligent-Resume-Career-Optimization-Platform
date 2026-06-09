import React from 'react';
import { T, css } from '../constants/theme';

export default function JobMatch() {
  return (
    <div style={css.card}>
      <h2 style={{ fontSize: 24, fontWeight: 600, color: T.text, marginBottom: 16 }}>Job Match Tool</h2>
      <p style={{ color: T.textLight }}>Paste job description to see your match percentage.</p>
    </div>
  );
}