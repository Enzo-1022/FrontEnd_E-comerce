import { TypeUsuarios } from "../types/typeUsuarios";
import { ResErro } from "../types/typeResErro";

export default class Usuarios {

   static async CadastroUsuario(pNome: string, pEmail:string, pDataNascimento: string, pCpf: string, pSenha: string): Promise<number> {
        try {
            const Response = await fetch(

                'http://localhost:3001/Login/Cadastro',

                {
                    method: 'post',
                    mode: 'cors',
                    credentials: 'include',
                    body: new URLSearchParams({
                        'Nome': pNome,
                        'Email': pEmail,
                        'Data_Nascimento': pDataNascimento,
                        'Cpf': pCpf,
                        'Senha': pSenha
                    })
                }
            );

            return Response.status

        } catch (error:unknown) {
            console.error(error)
            return 0;
        }
    }

    static async Login(pEmail:string, pSenha:string): Promise<number>{
        try {
            const Response = await fetch(

                'http://localhost:3001/Login',

                {
                    method: 'post',
                    mode: 'cors',
                    body: new URLSearchParams({Senha: pSenha, Email: pEmail}),
                    credentials: 'include'
                }
            );

            return Response.status
            
        } catch (error:unknown) {
            console.error(error);
            return 0;
        }
    }

    static async BuscaUsuario (token:string) : Promise<Response | string>{
        try {
            const Response = await fetch(

                'http://localhost:3001/Usuarios/Perfil', 

                {
                    mode:'cors',
                    method: 'get',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json', // Tipo de conteudo da requisição
                        "authorization": `Bearer ${token}`, // Cabeçalho para passarmos os tokens de autorização
                        "accept" : 'application/json' // Conteudo que aceitamos como resposta 
                    }
                }
            );

            if(Response.status != 200) {
                return Response.json().then( (data : ResErro) => { return data.Erro});
            }

           return await Response.json();

        } catch (error) {
            return `Erro ao Buscar Usuário`;
        }
    }

    static async DesativaPerfil (token : string) : Promise<number> {
        try {
            const Response = await fetch(
                'http://localhost:3001/Usuarios/DesativarPerfil',
                {
                    method : 'PATCH',
                    mode : "cors",
                    credentials : 'include',
                    headers : {
                        'Content-Type' : 'application/json', 
                        'authorization' : `Bearer ${token}`,
                        'accept' : 'application/json'
                    }
                }
            )

            return Response.status;

        } catch (error) {
            console.log(error);
            return 0;
        }
    }

    static async AtivaUsuario (pToken: string) : Promise<boolean | string> {
        try {
            const Response = fetch(
                'http://localhost:3001/Usuarios/AtivarUsuario'
            );
            return ``;
        } catch (error) {
            return `Erro ao Ativar Usuário`;
        }
    }
}
