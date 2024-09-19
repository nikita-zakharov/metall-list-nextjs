import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import CallbackModalProvider from "./components/modals/CallbackModal/CallbackModalProvider";
import { emailAddress, phoneNumberFormatted } from "./constants";
import YandexMetrika from "./components/shared/YandexMetrika";
import { Suspense } from "react";

const font = Open_Sans({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: {
    template: "%s | «Металл-лист»",
    default: 'Оцинкованная сталь купить в Воронеже по выгодной цене, с доставкой | «Металл-лист»'
  },
  description: `Каталог оцинкованной стали, купить в Воронеже по выгодной цене. Доставка в день заказа. Продаем оптом и в розницу. Оставьте заявку на ${emailAddress} или позвоните нам по телефону ${phoneNumberFormatted} | «Металл-лист»`,
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
        <body className={font.className}>
          <Suspense>
            <YandexMetrika />
          </Suspense>
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
