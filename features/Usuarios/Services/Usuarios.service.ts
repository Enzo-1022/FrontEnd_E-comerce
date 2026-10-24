import logger from "@/utils/logger.util";
import Usuario  from "@/features/Usuarios/interfaces/Usuario.interface"
import Auth from "@/services/auth.service";

type ResLogin = {
    status : number,
    userID : number
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

    static async Login(pEmail:string, pSenha:string): Promise<ResLogin>{
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

            return {status: Response.status, userID : BodyResponse?.IdUsuario};
            
        } catch (error:unknown) {
            // logger.error({err : error, pEmail});
            throw new Error("Erro ao Realizar Login", { cause : error })
        }
    }

    static async BuscaUsuario () : Promise<Usuario>{
        try {
            const Response = await fetch(

                'http://localhost:3001/Usuarios/Perfil', 

                {
                    mode:'cors',
                    method: 'get',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json', // Tipo de conteudo da requisição
                        "accept" : 'application/json' // Conteudo que aceitamos como resposta 
                    }
                }
            );

            var usuario : Usuario = {
                Cpf : "Indefinido",
                Data_Nascimento : "Indefinido",
                Id_Usuario : 0,
                Nome : "Indefinido"
            }

            switch (Response.status) {
                case 200:
                    usuario = await Response.json();
                    break

                case 401:
                    const renovandoAcessToken = await Auth.renovaAcessToken();

                    if (renovandoAcessToken == "ok") {
                        usuario = await this.BuscaUsuario();
                    }

                    break;
            
                default:
                    throw new Error("Erro ao Buscar Usuário", {cause : await Response.json()})

            }
            
            return usuario;

        } catch (error) {
            console.error(error)
            throw new Error("Erro ao Buscar Usuário", {'cause' : error});
        }
    }

    static async DesativaPerfil () : Promise<number> {
        try {
            const Response = await fetch(
                'http://localhost:3001/Usuarios/DesativarPerfil',
                {
                    method : 'PATCH',
                    mode : "cors",
                    credentials : 'include',
                    headers : {
                        'Content-Type' : 'application/json', 
                        'accept' : 'application/json'
                    }
                }
            )

            return Response.status;

        } catch (error) {
            logger.error({err: error});
            return 0;
        }
    }

    static async AtivaUsuario () : Promise<number> {
        try {
            const Response = await fetch(
                `http://localhost:3001/Usuarios/AtivarPerfil`,
                {
                    method : 'PATCH',
                    credentials : 'include',    
                    mode: 'cors'
                }
            );

            return Response.status;

        } catch (error) {
            logger.error({err: error})
            return 0;
        }
    }
}
