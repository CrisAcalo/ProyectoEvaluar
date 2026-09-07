import React from 'react';
import type { Post, User } from '../../types';
import { Loading, ErrorState, EmptyState } from '../UI/States';

interface PostListProps {
  user: User | null;
  posts: Post[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

export const PostList: React.FC<PostListProps> = ({ user, posts, loading, error, onRetry }) => {
  if (!user) {
    return <EmptyState message="Selecciona un usuario para ver sus publicaciones" />;
  }

  return (
    <div>
      <div className="posts-header">
        <div className="profile-card">
          <div className="profile-name">{user.name}</div>
          <div className="profile-username">@{user.username}</div>
          
          <div className="profile-details">
            <div className="profile-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <span className="profile-label">Email</span>
                <span>{user.email}</span>
              </div>
            </div>
            
            <div className="profile-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <span className="profile-label">Teléfono</span>
                <span>{user.phone}</span>
              </div>
            </div>
            
            <div className="profile-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <div>
                <span className="profile-label">Sitio Web</span>
                <span>{user.website}</span>
              </div>
            </div>
            
            <div className="profile-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              <div>
                <span className="profile-label">Empresa</span>
                <span>{user.company.name}</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>{user.company.catchPhrase}</span>
              </div>
            </div>

            <div className="profile-item" style={{ gridColumn: '1 / -1' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <span className="profile-label">Dirección</span>
                <span>{user.address.street} {user.address.suite}, {user.address.city}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="posts-title">Últimas Publicaciones</h2>

      {loading && <Loading />}
      
      {error && <ErrorState message={error} onRetry={onRetry} />}
      
      {!loading && !error && posts.length === 0 && (
        <EmptyState message="Este usuario no tiene publicaciones." />
      )}
      
      {!loading && !error && posts.length > 0 && (
        <div className="post-list" role="list">
          {posts.map((post) => (
            <article key={post.id} className="post-card" role="listitem">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-body">{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
