import React from 'react';
import { T, css } from '../constants/theme';

export default function LinkedInOptimizer() {
  return (
    <div style={css.card}>
      <h2 style={{ fontSize: 24, fontWeight: 600, color: T.text, marginBottom: 16 }}>LinkedIn Optimizer</h2>
      <p style={{ color: T.textLight }}>Boost your profile visibility to recruiters.</p>
    </div>
  );
}