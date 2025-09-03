import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/BackgroundFX";

export const metadata: Metadata = { /* (garde ce que tu as) */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="fr">
      <body className="relative">
      <BackgroundFX />
      <Navbar />
      {children}
      <Footer />
      </body>
      </html>
  );
}
