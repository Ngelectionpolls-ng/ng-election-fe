import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { QueryClient } from "@tanstack/react-query";
import AuthProvider from "./providers/AuthProvider";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Eyewitness Report Portal",
  description: "Eyewitness Report Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
          <AuthProvider>
            {children}
          </AuthProvider>
      </body>
      <Toaster position="top-right" />
    </html>
  );
}
