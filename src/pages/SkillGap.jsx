import React from 'react';
import { T, css } from '../constants/theme';

export default function SkillGap() {
  return (
    <div style={css.card}>
      <h2 style={{ fontSize: 24, fontWeight: 600, color: T.text, marginBottom: 16 }}>Skill Gap Analysis</h2>
      <p style={{ color: T.textLight }}>Identify missing skills and get learning recommendations.</p>
    </div>
  );
}