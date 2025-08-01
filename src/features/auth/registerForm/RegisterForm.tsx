'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/lib/validators/auth';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: z.infer<typeof registerSchema>) => {
        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (res.ok) {
            router.push('/auth/login');
        } else {
            const err = await res.json();
            alert(err.error || 'Ошибка регистрации');
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl space-y-4"
        >
            <h1 className="text-2xl font-semibold">Регистрация</h1>

            <div>
                <input
                    type="text"
                    placeholder="Имя"
                    {...register('name')}
                    className="w-full px-4 py-2 border rounded-md"
                />
                {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
            </div>

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
                Зарегистрироваться
            </button>
        </form>
    );
}
