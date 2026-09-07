
interface UserSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const UserSearch: React.FC<UserSearchProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-container">
      <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="search"
        className="search-input"
        placeholder="Buscar por nombre o correo..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Buscar usuarios"
      />
    </div>
  );
};
