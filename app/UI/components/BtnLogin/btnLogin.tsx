'use client'

import style from "@/app/UI/Styles/login.module.css";
import { useRouter } from "next/navigation";

import { ErroContext } from "@/app/UI/context/erroContext";
import { useContext } from "react";
import { Logins } from "@/app/types/typeLogins";
import Usuarios from "@/app/Services/Usuarios";

export default function BtnLogin ({pEmail, pSenha} : Logins) {
    const router = useRouter();
    const erro = useContext(ErroContext);

    return (
        <button className={style.botaoSubmit} type="button" 
            onClick={ 
                async () => {
                    try {
                        erro?.setLoading(true);

                        if (pEmail == '' || pSenha == '') 
                        {
                            erro?.setNotify({
                                Title : "Dados Invalidos!",
                                Messege : "Inputs vazios!"
                            });

                            erro?.setLoading(false)

                            return; 
                        }

                        const response = await Usuarios.Login(pEmail, pSenha);

                        if(response.Response?.status == 400) // erro na requisicao (dados invalidos)
                        {
                            erro?.setNotify({
                                Title : "Dados Invalidos!",
                                Messege : response.BodyResponse?.Erro
                            });

                            erro?.setLoading(false)

                            return;
                        }

                        if (response.Response?.status == 401) // nao autorizado
                        {
                            erro?.setNotify({
                                Title : "Não autorizado!",
                                Messege : response.BodyResponse?.Erro
                            });

                            erro?.setLoading(false)

                            return;
                        }

                        if (response.Response?.status == 500) // erro no servidor backend
                        {
                            erro?.setErro(`${response.BodyResponse?.Erro}, ${response.Response?.status}, ${response.Response?.statusText}`);
                            router.push('/Erro');

                            erro?.setLoading(false)

                            return;
                        }
                        
                        if (response.Response?.status == 200) // sucesso
                        {
                            router.push('/Usuarios/Catalogo');

                            erro?.setLoading(false)

                            return;
                        }

                        erro?.setErro(`${response.error}`);

                        router.push('/Erro');

                        erro?.setLoading(false);

                    } catch (error) {
                        console.error(error);
                        erro?.setErro(`${error}`);
                        erro?.setUrl('/Login');
                        router.push('/Erro');
                        erro?.setLoading(false)
                    }
                }
            }
        > Entrar </button>
    )
}
