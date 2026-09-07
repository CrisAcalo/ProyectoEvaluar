import type { User, Post } from '../types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`${BASE_URL}/users`);
  if (!response.ok) {
    throw new Error('Error al cargar los usuarios');
  }
  return response.json();
};

export const fetchPosts = async (userId: number): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
  if (!response.ok) {
    throw new Error('Error al cargar las publicaciones');
  }
  return response.json();
};
