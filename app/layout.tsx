import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";


const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Оцинкованная сталь в Воронеже | Металл-лист",
  description: "Продажа оцинкованной стали в Воронеже, в листах, ленте и рулонах",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[600px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
