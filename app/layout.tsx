import type { Metadata } from "next"; // Inportando as meta tags para podermos usarmos

import "./UI/styles/globals.css"; // Importando o css global

import Header from "./UI/components/Header/header"; //importando o componente Header

import { lusitana } from "./UI/Fonts/font"; // Importando a fonte 
import { ErroProvider } from "./UI/context/erroContext";

export const metadata: Metadata = { // Meta tags
  title: "Simas Turbo",
  description: ""
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <ErroProvider>
      <html lang="pt-BR">
        <head>
          <style>
            @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
          </style>
        </head>

        <body className={lusitana.className}>
          <Header />
          {children}
        </body>
      </html>
    </ErroProvider>
  );
}
