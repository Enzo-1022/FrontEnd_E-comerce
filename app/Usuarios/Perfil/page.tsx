import { cookies } from "next/headers"

async function request() {
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
        })

        switch (Response.status) { //falta terminar as validações dos códigos
            case 200:
                
                break;

            default:
                break;
        }
        
        var bodyResponse = await Response.json();
    } catch (error) {
        
    }
}

export default async function Perfil () {
    
    return <h1>{
        'tt.PerfilUsuario.Id_Usuario'
    }</h1>
}