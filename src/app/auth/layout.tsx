import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
    const session = await getAuthSession();

    if (session) {
        redirect('/admin/dashboard');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
            <div className="w-full max-w-md p-8">
                {children}
            </div>
        </div>
    );
}
