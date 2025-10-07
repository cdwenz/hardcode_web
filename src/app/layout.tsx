import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "HardCode Technologies",
  description: "Software a medida — profesionalismo, seriedad y calidad.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans bg-neutral-950 text-neutral-100`}>
        {children}
      </body>
    </html>
  );
}
