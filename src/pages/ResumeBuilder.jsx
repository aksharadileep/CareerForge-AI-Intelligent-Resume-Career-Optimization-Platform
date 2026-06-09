import React from 'react';
import { T, css } from '../constants/theme';

export default function ResumeBuilder() {
  return (
    <div style={css.card}>
      <h2 style={{ fontSize: 24, fontWeight: 600, color: T.text, marginBottom: 16 }}>Resume Builder</h2>
      <p style={{ color: T.textLight, marginBottom: 20 }}>Build your professional resume with ATS-optimized templates.</p>
      <div style={{ 
        background: T.primaryLight, 
        borderRadius: 12, 
        padding: 20,
        marginTop: 20
      }}>
        <p style={{ color: T.text }}>✨ Resume builder coming soon! Connect to FastAPI backend for full functionality.</p>
      </div>
    </div>
  );
}