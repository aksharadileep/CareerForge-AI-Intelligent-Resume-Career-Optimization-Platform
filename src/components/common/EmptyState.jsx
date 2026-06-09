import React from 'react';
import { T, css } from '../../../constants/theme';

export function EmptyState({ 
  title = 'No data available', 
  message = 'Get started by adding your first item', 
  actionLabel = 'Get Started', 
  onAction,
  icon = '📄',
}) {
  return (
    <div style={{ ...css.card, textAlign: 'center', padding: '64px 32px' }}>
      <div style={{ fontSize: 64, marginBottom: 20 }}>{icon}</div>
      <h3 style={{ marginBottom: 8, fontSize: 18, color: T.text }}>{title}</h3>
      <p style={{ color: T.textLight, marginBottom: 24, fontSize: 14 }}>{message}</p>
      {onAction && <button onClick={onAction} style={css.btnPrimary}>{actionLabel}</button>}
    </div>
  );
}