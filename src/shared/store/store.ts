import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createThemeSlice, ThemeSlice } from './themeSlice';
import { createSidebarSlice, SidebarSlice } from './sidebarSlice';

// Если будут другие slices, их добавляем сюда:
type AppStore = ThemeSlice & SidebarSlice;

export const useAppStore = create<AppStore>()(
    devtools((...args) => ({
        ...createThemeSlice(...args),
        ...createSidebarSlice(...args)
        // ...другие слайсы
    }))
);
