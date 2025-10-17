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

                        // var response = await fetch(

                        //     'http://localhost:3001/Login',
                            
                        //     {
                        //         mode: 'cors',
                        //         method: 'post',
                        //         body: new URLSearchParams({ Senha : pSenha, Email: pEmail}),
                        //         credentials: 'include',
                        //     }

                        // );

                        // var login = await response.json();
                        const response = await Usuarios.Login(pEmail, pSenha);

                        if(response.Response?.status == 400) // erro na requisicao (dados invalidos)
                        {
                            console.error(response.BodyResponse?.Erro, response.Response?.status, response.Response?.statusText);
                            alert(response.BodyResponse.Erro);
                            // Aqui para que eu possa renderizar o erro em um template posso criar um novo cookie com o erro e redirecionar para uma pagina de erro
                            // ou posso usar um state global para armazenar o erro e renderizar na pagina de login
                            // ou posso tentar returnar um componente react desse erro e renderizar na pagina de login
                        }
                        else if (response.Response?.status == 401) // nao autorizado
                        {
                            console.error(response.BodyResponse?.Erro, response.Response?.status, response.Response?.statusText);
                            alert(response.BodyResponse?.Erro);
                        }
                        else if (response.Response?.status == 500) // erro no servidor backend
                        {
                            console.error(response.BodyResponse?.Erro, response.Response?.status, response.Response?.statusText);
                            erro?.setErro(`${response.BodyResponse?.Erro}, ${response.Response?.status}, ${response.Response?.statusText}`)
                            router.push('/Erro')
                        }
                        else if (response.Response?.status == 200) // sucesso
                        {
                            router.push('/Usuarios/Catalogo');
                        }
                        else 
                        {
                            erro?.setErro(`${response.error}`)
                            router.push('/Erro')
                        }

                    } catch (error) {
                        console.error(error);
                        erro?.setErro(`${error}`);
                        erro?.setUrl('/Login');
                        router.push('/Erro');
                    }
                }
            }
        > Entrar </button>
    )
}
