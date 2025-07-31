import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const token = (await cookies()).get("auth_token");

  if (token) {
    redirect("/admin/dashboard"); // Пользователь авторизован
  } else {
    redirect("/auth/login"); // Пользователь не авторизован
  }
}
