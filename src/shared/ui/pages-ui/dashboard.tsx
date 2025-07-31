import { User } from "@/entities/user/types";

export function Dashboard({ user }: { user: User }) {
    return (
        <div className="flex">
            <main className="p-4">
                <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
            </main>
        </div>
    );
}
