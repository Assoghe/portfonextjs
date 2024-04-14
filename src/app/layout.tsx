import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soraya Gherras",
  description: "Je suis une UX et Ui designer qui explore l’intégration pour créer des interfaces réalistes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={unbounded.className}>{children}</body>
    </html>
  );
}
