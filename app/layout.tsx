import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  fallback: ["Inter", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Meet2When",
  description: "Schedule a meeting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
