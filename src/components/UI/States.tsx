import React from 'react';

export const Loading = () => (
  <div className="state-container" role="status" aria-label="Cargando">
    <div className="spinner"></div>
    <p>Cargando información...</p>
  </div>
);

export const ErrorState = ({ message, onRetry }: { message: string; onRetry: () => void }) => (
  <div className="state-container error-container" role="alert">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
    <p>{message}</p>
    <button className="btn btn-primary" onClick={onRetry}>Reintentar</button>
  </div>
);

export const EmptyState = ({ message }: { message: string }) => (
  <div className="state-container">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <p style={{ color: 'var(--text-muted)' }}>{message}</p>
  </div>
);
