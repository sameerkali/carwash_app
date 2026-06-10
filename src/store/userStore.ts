import { create } from 'zustand';
import { User } from '../types';

interface UserState {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  setCurrentUser: (user: User) => set({ currentUser: user }),
  clearUser: () => set({ currentUser: null }),
}));
