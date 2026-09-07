import type { User } from '../../types';

interface UserListProps {
  users: User[];
  selectedUserId: number | null;
  onSelectUser: (id: number) => void;
}

export const UserList: React.FC<UserListProps> = ({ users, selectedUserId, onSelectUser }) => {
  return (
    <div className="user-list" role="list">
      {users.map((user) => (
        <div
          key={user.id}
          className={`card interactive ${selectedUserId === user.id ? 'selected' : ''}`}
          onClick={() => onSelectUser(user.id)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectUser(user.id);
            }
          }}
          tabIndex={0}
          role="listitem"
          aria-selected={selectedUserId === user.id}
        >
          <div className="user-name">{user.name}</div>
          <div className="user-meta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            {user.email}
          </div>
          <div className="user-meta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            {user.company.name}
          </div>
        </div>
      ))}
    </div>
  );
};
