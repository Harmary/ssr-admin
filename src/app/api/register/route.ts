import { db } from '@/lib/db';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { email, password, name } = await req.json();

    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
        return NextResponse.json({ error: 'Пользователь уже существует' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
        data: {
            email,
            password: hashedPassword,
            name,
        },
    });

    return NextResponse.json({ user });
}
