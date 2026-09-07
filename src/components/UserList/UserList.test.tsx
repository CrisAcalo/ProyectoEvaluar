import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { UserList } from './UserList';
import type { User } from '../../types';

const mockUsers: User[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: { lat: '-37.3159', lng: '81.1496' }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }
];

describe('UserList Component', () => {
  it('renders a list of users', () => {
    render(<UserList users={mockUsers} selectedUserId={null} onSelectUser={() => {}} />);
    
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('Sincere@april.biz')).toBeInTheDocument();
    expect(screen.getByText('Romaguera-Crona')).toBeInTheDocument();
  });

  it('calls onSelectUser when a user is clicked', () => {
    const handleSelectUser = vi.fn();
    render(<UserList users={mockUsers} selectedUserId={null} onSelectUser={handleSelectUser} />);
    
    const userCard = screen.getByRole('listitem');
    fireEvent.click(userCard);
    
    expect(handleSelectUser).toHaveBeenCalledWith(1);
    expect(handleSelectUser).toHaveBeenCalledTimes(1);
  });
});
