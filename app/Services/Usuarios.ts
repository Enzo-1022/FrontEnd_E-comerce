import { TypeUsuarios } from "../types/typeUsuarios";

export default class Usuarios{

    private Nome;
    private Email;
    private DataNascimento;
    private Cpf;
    private Senha;
    private ConfirmarSenha;

    constructor({pNome, pEmail, pDtNascimento, pCpf, pSenha, pConfSenha} : TypeUsuarios) {
        this.Nome = pNome;
        this.Email = pEmail;
        this.DataNascimento = pDtNascimento;
        this.Cpf = pCpf;
        this.Senha = pSenha;
        this.ConfirmarSenha = pConfSenha;  
    }

    async CadastroUsuario(): Promise<{Response?: Response,  BodyResponse?: any, error?:unknown}> {
        try {
            const Response = await fetch(
                'http://localhost:3001/Login/Cadastro',
                {
                    method: 'post',
                    mode: 'cors',
                    credentials: 'include',
                    body: new URLSearchParams({
                        'Nome': this.Nome,
                        'Email': this.Email,
                        'Data_Nascimento': this.DataNascimento,
                        'Cpf': this.Cpf,
                        'Senha': this.Senha
                    })
                }
            );

            const BodyResponse = await Response.json();

            return {Response, BodyResponse}

        } catch (error:unknown) {
            return {error}
        }
    }

    static async Login(pEmail:string, pSenha:string): Promise<{BodyResponse?: any, Response?: Response, error?:unknown}>{
        try {
            const Response = await fetch('http://localhost:3001/Login',{
                method: 'post',
                mode: 'cors',
                body: new URLSearchParams({Senha: pSenha, Email: pEmail}),
                credentials: 'include'
            });

            const BodyResponse = await Response.json();

            return {Response, BodyResponse}
            
        } catch (error:unknown) {
            return {error};
        }
    }
}
