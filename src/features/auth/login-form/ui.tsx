"use client";

import { useState } from "react";

export function LoginForm() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // фейковый вход
        document.cookie = `token=fake-token; path=/`;
        window.location.href = "/admin/dashboard";
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="mb-2 w-full p-2 border" />
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Пароль" className="mb-4 w-full p-2 border" />
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Войти</button>
        </form>
    );
}
