
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

export const UserSkeletonList = () => (
  <div className="user-list">
    {[1, 2, 3, 4, 5].map((i) => (
      <div key={i} className="skeleton-card">
        <div className="skeleton skeleton-title" style={{ width: '50%' }}></div>
        <div className="skeleton skeleton-text" style={{ width: '80%' }}></div>
        <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
      </div>
    ))}
  </div>
);

export const PostSkeletonList = () => (
  <div className="post-list">
    {[1, 2, 3].map((i) => (
      <div key={i} className="skeleton-card">
        <div className="skeleton skeleton-title" style={{ width: '70%' }}></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text" style={{ width: '40%' }}></div>
      </div>
    ))}
  </div>
);
