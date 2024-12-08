import { Metadata } from "next";
import { Container } from "@/app/components/container";

export const metadata: Metadata = {
  title: "Login - A Navalha",
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

export default function Login() {
  return (
    <Container>
      <h1 className="text-center">Página login</h1>
    </Container>
  );
}
