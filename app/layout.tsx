import type { Metadata } from "next"; // Inportando as meta tags para podermos usarmos

import "../components/UI/styles/globals.css"; // Importando o css global

import Header from "../components/Header/header"; //importando o componente Header

import { lusitana } from "../components/UI/Fonts/font"; // Importando a fonte 

import { ErroProvider } from "../context/ErroContext/erroContext";

import NotifyBox from "../components/NotifyBox/NotifyBox";

import Loading from "../components/Loading/Loading";
import { UserProvider } from "../context/UserContext/userContext";

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
