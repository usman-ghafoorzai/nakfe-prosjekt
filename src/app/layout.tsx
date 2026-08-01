import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { metadataBase, siteTitle } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase,
  title: siteTitle,
  description: "Nettside for NAKFE med planlagt RAG-basert chatbot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground font-sans">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
