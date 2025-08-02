import { useEffect } from 'react';
import { useAppStore } from '../store/store';

export const useThemeEffect = () => {
    const theme = useAppStore((state) => state.theme);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [theme]);
};
