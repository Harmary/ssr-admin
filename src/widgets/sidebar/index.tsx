'use client';

import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import Link from 'next/link';
import classNames from 'classnames';
import { useAppStore } from '@/shared/store/store';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/admin/dashboard', label: 'Dashboard' },
    { href: '/admin/products', label: 'Товары' },
    { href: '/admin/orders', label: 'Заказы' },
];

export const Sidebar = () => {
    const pathname = usePathname();
    const { isSidebarOpen, closeSidebar } = useAppStore();

    return (
        <>
            {/* Desktop */}
            <aside className="w-64 bg-white dark:bg-gray-900 border-r px-4 py-6 hidden md:block">
                <nav className="flex flex-col gap-2">
                    {navItems.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={classNames(
                                'px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800',
                                pathname === href ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : ''
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Mobile */}
            <Transition show={isSidebarOpen}>
                <Dialog open={isSidebarOpen} onClose={closeSidebar} className="relative z-50 md:hidden">
                    <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

                    <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-900 p-6 shadow-xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold">Админ панель</h2>
                            <button onClick={closeSidebar} className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-2">
                            {navItems.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={closeSidebar}
                                    className={classNames(
                                        'px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800',
                                        pathname === href ? 'bg-gray-200 dark:bg-gray-700 font-semibold' : ''
                                    )}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </Dialog>
            </Transition>

        </>
    );
};
