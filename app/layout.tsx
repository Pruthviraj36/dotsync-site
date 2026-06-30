import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DotSync — Encrypted .env sync for dev teams",
  description:
    "DotSync encrypts your .env secrets client-side and syncs them across your team in seconds. No plaintext, no leaks, no more secrets in Slack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg text-text font-sans">
        {children}
      </body>
    </html>
  );
}
