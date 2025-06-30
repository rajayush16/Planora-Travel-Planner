import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import AppProtector from "./app-protector";
import PageLayout from "./page-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PLANORA",
  description: "Your travel companion",
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <AppProtector />
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  );
}
