import { z } from 'zod';

export const loginSchema = z.object({
    email: z.email('Неверный email'),
    password: z.string().min(6, 'Минимум 6 символов'),
});

export const registerSchema = loginSchema.extend({
    name: z.string().min(2, 'Введите имя'),
});
