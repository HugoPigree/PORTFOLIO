import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundFX from "@/components/BackgroundFX";

export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" suppressHydrationWarning>
        <body className="relative min-h-screen bg-[#0b1220] text-white antialiased">
        <BackgroundFX variant="aurora" />
        <div className="relative z-10">
            <Navbar />
            <main id="content" className="pb-16">
                {children}
            </main>
            <Footer />
        </div>
        </body>
        </html>
    );
}
