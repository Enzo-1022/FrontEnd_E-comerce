// 'use server' // Vou precisar remover pq o context so pode ser usado no lado do client 
'use client'
import BtnDesativarConta from "@/app/UI/components/BtnDesativarConta/btnDesativarConta";
// import { useContext } from "react";
// import { UserContext } from "../../UI/context/userContext";

import { usePerfilUsuario } from "@/app/hooks/usePerfilUsuario";

export default async function Perfil () {
    // const userContext = useContext(UserContext);

    // try {
    //     const Response = await fetch('http://localhost:3001/Usuarios/Perfil', {
    //         mode:'cors',
    //         method: 'get',
    //         credentials: 'include',
    //         headers: {
    //             'Content-Type': 'application/json', // Tipo de conteudo da requisição
    //             "authorization": `Bearer ${userContext?.acessToken}`, // Cabeçalho para passarmos os tokens de autorização
    //             "accept" : 'application/json' // Conteudo que aceitamos como resposta 
    //         }
    //     });

    //     const BodyResponse =  await Response.json();

    //     return <>
    //         {/* <h1>{BodyResponse?.Nome_Usuario}</h1> */}
    //         <BtnDesativarConta/>
    //     </>

    // } catch (error) {
    //     console.log(error)
    //     return <h1 color="white">Erro ao Buscar Usuário</h1>
    // }    
    const { hookPerfilUsuario } = usePerfilUsuario()

    try {
       

        hookPerfilUsuario();

        return <>
            {/* <h1>{BodyResponse?.Nome_Usuario}</h1> */}
            <BtnDesativarConta/>
        </>
        
    } catch (error) {
        return <>
            <h1>Deu RED</h1>
        </>
    }
}
