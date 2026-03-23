import type { Metadata } from "next"; // Inportando as meta tags para podermos usarmos

import "./UI/styles/globals.css"; // Importando o css global

import Header from "./UI/components/Header/header"; //importando o componente Header

import { lusitana } from "./UI/Fonts/font"; // Importando a fonte 

import { ErroProvider } from "./UI/context/erroContext";

import NotifyBox from "./UI/components/NotifyBox/NotifyBox";

import Loading from "./UI/components/Loading/Loading";
import { UserProvider } from "./UI/context/userContext";

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
    <html lang="pt-BR">
      <head>
        <style>
          @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
        </style>
      </head>
      <UserProvider>
        <ErroProvider>
            <body className={lusitana.className}>
              <Header />
              <NotifyBox />
              <Loading children={children}/>
            </body>
        </ErroProvider>
      </UserProvider>
    </html>
  );
}
