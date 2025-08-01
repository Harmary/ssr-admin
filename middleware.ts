import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

const publicPaths = ['/auth/login', '/auth/register'];

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isAuthPage = publicPaths.includes(req.nextUrl.pathname);

    if (token && isAuthPage) {
        return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }

    if (!token && !isAuthPage && !req.nextUrl.pathname.startsWith('/api')) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
