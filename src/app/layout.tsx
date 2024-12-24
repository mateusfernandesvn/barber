import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "A Navalha -  A melhor Barbearia de Salvador",
  description: "Barbearia A Navalha em Salvador-Ba",
  authors: {
    name: "Mateus Fernandes",
    url: "https://github.com/mateusfernandesvn",
  },
  keywords: [
    "barbearia",
    "barbearia a navalha",
    "barbearia a navalha salvador",
    "barbearia a navalha salvador ba",
  ],
  openGraph: {
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Barbearia A Navalha",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
