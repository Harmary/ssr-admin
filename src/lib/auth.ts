import { cookies } from "next/headers";

export async function getCurrentUser() {
    const token = (await cookies()).get("token")?.value;
    if (!token) return null;

    // эмуляция запроса
    return { id: 1, name: "Admin" };
}
