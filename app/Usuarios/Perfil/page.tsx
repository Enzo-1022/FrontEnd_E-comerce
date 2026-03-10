'use server'
import { cookies } from "next/headers";

import Usuarios from "@/app/Services/Usuarios";
import BtnDesativarConta from "@/app/UI/components/BtnDesativarConta/btnDesativarConta";

export default async function Perfil () {
    try {
        const cookiesStorage = await cookies();
        var token = cookiesStorage.get('sessionToken');

        const Response = await fetch('http://localhost:3001/Usuarios/Perfil', {
            mode:'cors',
            method: 'get',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json', // Tipo de conteudo da requisição
                "authorization": `Bearer ${token?.value}`, // Cabeçalho para passarmos os tokens de autorização
                "accept" : 'application/json' // Conteudo que aceitamos como resposta 
            }
        });

        const BodyResponse =  await Response.json();

        // return {Response, BodyResponse};
        return <>
            <BtnDesativarConta/>
        </>

    } catch (error) {
        return {error};
    }

    
}
