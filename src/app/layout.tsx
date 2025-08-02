import "./globals.css";
import { ClientTheme } from "@/shared/ui/ClientTheme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <ClientTheme />
        {children}
      </body>
    </html>
  );
}
