import { getAuthSession } from "@/lib/auth";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { redirect } from "next/navigation";


export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const session = await getAuthSession();

    if (!session) {
        redirect('/auth/login');
    }

    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <Header />
                <main className="flex-1 p-6">{children}</main>
            </div>
        </div>
    );
}
