import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ResErro } from "../types/typeResErro";
import logger from "../utils/logger";
import { json } from "stream/consumers";

type Teste = {
    'status' : number,
    userID? : number ,
    acessToken : string,
}

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
            logger.error({err: error});
            return 0;
        }
    }

    static async Login(pEmail:string, pSenha:string): Promise<Teste>{
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

            const BodyResponse = await Response.json()

            return {'status': Response.status, userID : BodyResponse?.IdUsuario, acessToken : BodyResponse?.AcessToken};
            
        } catch (error:unknown) {
            // logger.error({err : error, pEmail});
            console.error(error)
            return {'status': 0, acessToken: ''};
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

    static async DesativaPerfil (token : RequestCookie | undefined | string) : Promise<number> {
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
                        'accept' : 'application/json',
                    }
                }
            )

            return Response.status;

        } catch (error) {
            logger.error({err: error});
            return 0;
        }
    }

    static async AtivaUsuario (userID: number) : Promise<number> {
        try {
            const Response = await fetch(
                `http://localhost:3001/Usuarios/AtivarPerfil/${userID}`,
                {
                    method : 'PATCH',
                    credentials : 'include',    
                    mode: 'cors'
                }
            );

            return Response.status;

        } catch (error) {
            logger.error({err: error,})
            return 0;
        }
    }
}
