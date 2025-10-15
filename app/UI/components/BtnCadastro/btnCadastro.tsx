'use client';

import { useRouter } from 'next/navigation';

import style from '@/app/UI/Styles/login.module.css';

import { ErroContext } from '../../context/erroContext';
import { useContext } from 'react';
import { TypeUsuarios } from '@/app/types/typeUsuarios';
import Usuarios from '@/app/Services/Usuarios'

export default function BtnCadastro (
    { 
        pNome, 
        pDtNascimento, 
        pCpf, 
        pEmail, 
        pSenha, 
        pConfSenha
    } :TypeUsuarios
) {

    const router = useRouter();
    const erro = useContext(ErroContext);
    const NovoUsuario = new Usuarios({pNome, pDtNascimento, pCpf, pEmail, pSenha, pConfSenha});

    return (
        <button type="button" className={style.botaoSubmit}
            onClick={
                // async () => {
                //     try {
                        
                //         var response = await fetch(
                //             'http://localhost:3001/Login/Cadastro', 
                //             {
                //                 mode: 'cors',
                //                 method: 'post',
                //                 body: new URLSearchParams({"Nome" : pNome, "Data_Nascimento": pDtNascimento, "Cpf" : pCpf, "Email": pEmail, "Senha" : pSenha})
                //             }
                //         )
                //         // Refatorei 16/09/2025, falta tratar o erro de senha diferente do confirmar senha e redireciona para pagina de erro
                //         var cadastro = await response.json(); // extrai o json da resposta

                //         if(response.status == 400) // erro na requisicao (dados invalidos)
                //         {
                //             console.error(cadastro.Erro, response.status, response.statusText);
                //             alert(cadastro.Erro);
                //             // Aqui para que eu possa renderizar o erro em um template posso criar um novo cookie com o erro e redirecionar para uma pagina de erro
                //         }
                //         else if (response.status == 500) // erro no servidor
                //         {
                //             erro?.setErro(`${cadastro.Erro}`)
                //             erro?.setUrl(`/Cadastro`)
                //             router.push('/Erro')
                //         }
                //         else if (response.status == 409) // conflito
                //         {
                //             alert(cadastro.Erro);
                //         }
                //         else if (response.status == 201) // criado com sucesso
                //         {
                //             alert('Sucesso')
                //             router.push('/Login');
                //         }
                //         else {
                //             console.error(response.status, response.statusText);
                //             erro?.setErro(`${response.status, response.statusText}`);
                //             erro?.setUrl('/Cadastro');
                //             router.push('/Erro');
                //         }
                        
                //     } catch (error) {
                //        erro?.setErro(`${error}`);
                //        erro?.setUrl(`/Cadastro`);
                //        router.push('/Erro');
                //     }
                // }
                async () => {
                    const CadastroUser = await NovoUsuario.CadastroUsuario(); // Utilizando o Método de Cadastro do usuario
                    const response = CadastroUser?.Response; // Gaurdando a Response aqui
                    const cadastro = CadastroUser?.BodyResponse; // Guardando o BodyResponse

                    try {
                        if(CadastroUser?.error != undefined)
                        {
                            erro?.setErro(`${CadastroUser?.error}`);
                            erro?.setUrl(`/Cadastro`);
                            router.push('/Erro');
                        }
                        else if(response?.status == 400) // erro na requisicao (dados invalidos)
                        {
                            console.error(cadastro.Erro, response.status, response.statusText);
                            alert(cadastro.Erro);
                            // Aqui para que eu possa renderizar o erro em um template posso criar um novo cookie com o erro e redirecionar para uma pagina de erro
                        }
                        else if (response?.status == 500) // erro no servidor
                        {
                            erro?.setErro(`${cadastro.Erro}`)
                            erro?.setUrl(`/Cadastro`)
                            router.push('/Erro')
                        }
                        else if (response?.status == 409) // conflito
                        {
                            alert(cadastro.Erro);
                        }
                        else if (response?.status == 201) // criado com sucesso
                        {
                            alert('Sucesso')
                            router.push('/Login');
                        }
                        else {
                            console.error(response?.status, response?.statusText);
                            erro?.setErro(`${response?.status, response?.statusText}`);
                            erro?.setUrl('/Cadastro');
                            router.push('/Erro');
                        }
                    } catch (error) {
                        erro?.setErro(`${error}`);
                        erro?.setUrl(`/Cadastro`);
                        router.push('/Erro');
                    }
                }
            }
        > Cadastrar-se </button>
    );
}
