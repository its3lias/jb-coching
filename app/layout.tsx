import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Lose 15 lbs in 90 Days | JB Coaching with Jordan",
  description:
    "For busy men: lose 15 lbs in 90 days without living in the gym, sacrificing work life balance, or eating a strict diet, or Jordan works with you for free until you do. Book your free call.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
