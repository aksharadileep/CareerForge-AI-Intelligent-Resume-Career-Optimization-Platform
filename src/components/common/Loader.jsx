import React from 'react';
import { T } from '../../../constants/theme';

export function Loader({ size = 'medium', fullPage = false, message = 'Loading...' }) {
  const sizeMap = { small: 24, medium: 40, large: 56 };
  const loaderSize = sizeMap[size];
  
  const LoaderContent = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div style={{
        width: loaderSize, height: loaderSize,
        border: `3px solid ${T.primaryLight}`,
        borderTopColor: T.primary,
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      {message && <div style={{ color: T.textLight, fontSize: 14 }}>{message}</div>}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
  
  if (fullPage) {
    return (
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        background: 'rgba(255, 255, 255, 0.9)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999,
      }}>
        <LoaderContent />
      </div>
    );
  }
  return <LoaderContent />;
}