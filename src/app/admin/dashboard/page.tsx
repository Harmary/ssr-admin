import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Dashboard } from "@/shared/ui/pages-ui/dashboard";

export default async function DashboardPage() {
    const user = await getCurrentUser();
    if (!user) redirect("/login");

    return <Dashboard user={user} />;
}
