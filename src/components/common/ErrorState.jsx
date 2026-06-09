import React from 'react';
import { T, css } from '../../../constants/theme';

export function ErrorState({ error, onRetry, message = 'Something went wrong' }) {
  return (
    <div style={{
      ...css.card, textAlign: 'center', padding: '48px 32px',
      background: T.warningLight, borderColor: T.warning,
    }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>⚠️</div>
      <h3 style={{ color: T.warning, marginBottom: 8, fontSize: 18 }}>{message}</h3>
      <p style={{ color: T.textLight, marginBottom: 24, fontSize: 14 }}>
        {error?.message || 'An unexpected error occurred'}
      </p>
      {onRetry && <button onClick={onRetry} style={css.btnPrimary}>Try Again</button>}
    </div>
  );
}