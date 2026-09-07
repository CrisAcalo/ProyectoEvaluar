import React, { useState, useMemo } from 'react';
import { useUsers } from './hooks/useUsers';
import { usePosts } from './hooks/usePosts';
import { UserSearch } from './components/UserSearch/UserSearch';
import { UserList } from './components/UserList/UserList';
import { PostList } from './components/PostList/PostList';
import { Loading, ErrorState, EmptyState } from './components/UI/States';

function App() {
  const { users, loading: usersLoading, error: usersError, retry: retryUsers } = useUsers();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const selectedUser = useMemo(
    () => users.find(u => u.id === selectedUserId) || null,
    [users, selectedUserId]
  );

  const { 
    posts, 
    loading: postsLoading, 
    error: postsError, 
    retry: retryPosts 
  } = usePosts(selectedUserId);

  // Client-side filtering
  const filteredUsers = useMemo(() => {
    if (!searchTerm.trim()) return users;
    
    const lowerTerm = searchTerm.toLowerCase();
    return users.filter(user => 
      user.name.toLowerCase().includes(lowerTerm) || 
      user.email.toLowerCase().includes(lowerTerm)
    );
  }, [users, searchTerm]);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Explorador de Usuarios</h1>
        <p>Consulta personas y revisa sus publicaciones</p>
      </header>

      <main className="main-content">
        <section className="scrollable-section" aria-label="Lista de Usuarios">
          <UserSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          
          <div className="scroll-area">
            {usersLoading && <Loading />}
            
            {usersError && <ErrorState message={usersError} onRetry={retryUsers} />}
            
            {!usersLoading && !usersError && filteredUsers.length === 0 && (
              <EmptyState message="No se encontraron usuarios con esa búsqueda." />
            )}
            
            {!usersLoading && !usersError && filteredUsers.length > 0 && (
              <UserList 
                users={filteredUsers} 
                selectedUserId={selectedUserId} 
                onSelectUser={setSelectedUserId} 
              />
            )}
          </div>
        </section>

        <section className="scrollable-section" aria-label="Publicaciones del Usuario" aria-live="polite">
          <div className="scroll-area">
            <PostList 
              user={selectedUser}
              posts={posts}
              loading={postsLoading}
              error={postsError}
              onRetry={retryPosts}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
