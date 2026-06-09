import React from 'react';
import { T, css } from '../constants/theme';

export default function MockInterview() {
  return (
    <div style={css.card}>
      <h2 style={{ fontSize: 24, fontWeight: 600, color: T.text, marginBottom: 16 }}>Mock Interview</h2>
      <p style={{ color: T.textLight }}>Practice with AI-powered interview simulation.</p>
    </div>
  );
}