import type { Metadata } from "next";
import { Geist, Geist_Mono, Stardos_Stencil } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const stardosStencil = Stardos_Stencil({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-stencil",
});

export const metadata: Metadata = {
  title: "Scallab — Expert Amazon FBA & Seller Central",
  description: "Accompagnement expert en FBA, gestion de compte, optimisation de listings et Amazon Ads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${stardosStencil.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
