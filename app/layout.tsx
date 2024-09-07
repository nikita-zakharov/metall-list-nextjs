import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import CallbackModalProvider from "./components/modals/CallbackModal/CallbackModalProvider";

const font = Open_Sans({ subsets: ["cyrillic"] });

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
    <CallbackModalProvider>
      <html lang="en">
        <body className={font.className}>
          <Header />
          <main className="min-h-[600px]">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </CallbackModalProvider>
  );
}
