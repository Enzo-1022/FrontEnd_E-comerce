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
    
    const erro = useContext(ErroContext);
    const router = useRouter();
        
    return (
        <button type="button" className={style.botaoSubmit}
            onClick={
                async () => {

                    erro?.setLoading(true)

                    if(pNome == '' || pDtNascimento == '' || pCpf == '' || pEmail == '' || pSenha == '' || pConfSenha == '')
                    {
                        erro?.setNotify({
                            Title : "Dados Invalidos!",
                            Messege : "Alguns dos inputs se encontram vazios"
                        })

                        erro?.setLoading(false)
                        return;
                    }
                    
                    if (pSenha != pConfSenha) 
                    {
                        erro?.setNotify({
                            Title : "Senha invalida",
                            Messege : "A senha informada está diferente da senha digitada ao confirmar senha!"
                        })
                        erro?.setLoading(false)

                        return;
                    }

                    const NovoUsuario = new Usuarios({pNome, pDtNascimento, pCpf, pEmail, pSenha, pConfSenha});
                    const CadastroUser = await NovoUsuario.CadastroUsuario(); // Utilizando o Método de Cadastro do usuario
                    const response = CadastroUser?.Response ; // Gaurdando a Response aqui
                    const cadastro = CadastroUser?.BodyResponse; // Guardando o BodyResponse

                    try {

                        if(CadastroUser?.error != undefined)
                        {
                            throw new Error(String(CadastroUser?.error))
                        }

                        if(response?.status == 400) // erro na requisicao (dados invalidos)
                        {
                            console.error(cadastro.Erro, response.status, response.statusText);
                            erro?.setNotify({
                                Title: 'Erro',
                                Messege: cadastro.Erro
                            });
                            erro?.setLoading(false)
                            return;
                            // Aqui para que eu possa renderizar o erro em um template posso criar um novo cookie com o erro e redirecionar para uma pagina de erro
                        }
                        
                        if (response?.status == 500) // erro no servidor
                        {
                            erro?.setErro(`${cadastro.Erro}`)
                            erro?.setUrl(`/Cadastro`)
                            router.push('/Erro')
                            erro?.setLoading(false)
                            return;
                        }
                        
                        if (response?.status == 409) // conflito
                        {
                            erro?.setNotify({
                                Title: 'Erro',
                                Messege: cadastro.Erro
                            });
                            erro?.setLoading(false)
                            return;
                        }
                        
                        if (response?.status == 201) // criado com sucesso
                        {
                            erro?.setNotify({
                                Title: 'Sucesso',
                                Messege: 'Cadastro Bem Sucedido'
                            });
                            router.push('/Login');
                            erro?.setLoading(false)

                            return;
                        }

                        throw new Error("undefined error");

                    } catch (error) {
                        erro?.setErro(`${error}`);
                        erro?.setUrl(`/Cadastro`);
                        router.push('/Erro');
                        erro?.setLoading(false)
                    }
                }
            }
        > Cadastrar-se </button>
    );
}
