"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '@/lib/validators/auth';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function LoginForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        const res = await signIn('credentials', {
            ...data,
            redirect: false,
        });

        if (res?.ok) router.push('/admin/dashboard');
        else alert('Неверные учетные данные');
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl space-y-4"
        >
            <h1 className="text-2xl font-semibold">Вход</h1>

            <div>
                <input
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                    className="w-full px-4 py-2 border rounded-md"
                />
                {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Пароль"
                    {...register('password')}
                    className="w-full px-4 py-2 border rounded-md"
                />
                {errors.password && (
                    <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md"
            >
                Войти
            </button>
        </form>
    );
}
