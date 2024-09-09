import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import CallbackModalProvider from "./components/modals/CallbackModal/CallbackModalProvider";

const font = Open_Sans({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Оцинкованная сталь в Воронеже | Металл-лист",
  description: "Продажа оцинкованной стали в Воронеже, в листах, ленте и рулонах",
};

export const viewport: Viewport = {
  maximumScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CallbackModalProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </head>
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
