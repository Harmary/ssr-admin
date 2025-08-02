'use client';

import { usePathname } from 'next/navigation';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { LogOut, Menu as MenuIcon, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';
import { useAppStore } from '@/shared/store/store';
import { signOut } from 'next-auth/react';

type HeaderProps = {
    username?: string;
};

export const Header = ({ username = 'Admin' }: HeaderProps) => {
    const { theme, toggleTheme } = useAppStore();
    const openSidebar = useAppStore((s) => s.openSidebar);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between h-16 px-4 bg-white shadow-sm dark:bg-gray-800">
            {/* Left: Menu + Page Title */}
            <div className="flex items-center gap-3">
                <button
                    onClick={openSidebar}
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
                >
                    <MenuIcon className="w-5 h-5" />
                </button>
                <span className="text-lg font-semibold capitalize text-gray-800 dark:text-white">
                    {pathname.split('/').filter(Boolean).slice(-1)[0] || 'Dashboard'}
                </span>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <Menu as="div" className="relative">
                    <MenuButton className="flex items-center gap-2 focus:outline-none">
                        <Image
                            src="/avatar.png" // замени на путь к настоящему аватару
                            alt="Avatar"
                            width={32}
                            height={32}
                            className="rounded-full border border-gray-300"
                        />
                        <span className="text-sm font-medium text-gray-700 dark:text-white">{username}</span>
                    </MenuButton>
                    <MenuItems className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black/5 dark:bg-gray-800">
                        <MenuItem>
                            {({ active }) => (
                                <button
                                    className={clsx(
                                        'flex w-full items-center gap-2 px-4 py-2 text-sm text-left',
                                        active ? 'bg-gray-100 dark:bg-gray-700' : ''
                                    )}
                                    onClick={() => signOut()}
                                >
                                    <LogOut className="w-4 h-4" />
                                    Выйти
                                </button>
                            )}
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </header>
    );
};
