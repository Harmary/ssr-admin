// shared/model/store/sidebarSlice.ts
import { StateCreator } from 'zustand';

export interface SidebarSlice {
    isSidebarOpen: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
}

export const createSidebarSlice: StateCreator<
    SidebarSlice,
    [],
    [],
    SidebarSlice
> = (set) => ({
    isSidebarOpen: false,
    openSidebar: () => set({ isSidebarOpen: true }),
    closeSidebar: () => set({ isSidebarOpen: false }),
});
