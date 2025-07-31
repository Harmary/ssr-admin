import { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark';

export interface ThemeSlice {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

// 👇 Сначала обычный slice
const _createThemeSlice: StateCreator<
    ThemeSlice,
    [],
    [],
    ThemeSlice
> = (set) => ({
    theme: 'light',

    toggleTheme: () =>
        set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
        })),

    setTheme: (theme) => set({ theme }),
});

// 👇 Теперь оборачиваем его в persist и экспортируем
export const createThemeSlice: StateCreator<
    ThemeSlice,
    [],
    [['zustand/persist', unknown]],
    ThemeSlice
> = persist(
    _createThemeSlice,
    {
        name: 'theme-storage', // Ключ в localStorage
        partialize: (state) => ({ theme: state.theme }), // сохраняем только theme
    }
);
