import { create } from 'zustand';
import { storage } from '../services/storage';
import { STORAGE_KEYS } from '../constants';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  logout: () => void;
  hydrate: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  setToken: (token: string) => {
    storage.set(STORAGE_KEYS.AUTH_TOKEN, token);
    set({ token, isAuthenticated: true });
  },
  logout: () => {
    storage.remove(STORAGE_KEYS.AUTH_TOKEN);
    set({ token: null, isAuthenticated: false });
  },
  hydrate: () => {
    const token = storage.getString(STORAGE_KEYS.AUTH_TOKEN);
    if (token) {
      set({ token, isAuthenticated: true });
    }
  },
}));
