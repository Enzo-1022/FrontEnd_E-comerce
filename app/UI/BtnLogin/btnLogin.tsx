'use client'

import style from "@/app/UI/login.module.css";
import { useRouter } from "next/navigation";

export default function BtnLogin ({email, senha}:{email:string, senha:string}) {
    const router = useRouter();

    return (
        <button className={style.botaoSubmit} type="button" 
            onClick={ 
                async () => {
                    try {

                        var response = await fetch(

                            'http://localhost:3001/Login',
                            
                            {
                                mode: 'cors',
                                method: 'post',
                                body: new URLSearchParams({ Senha : senha, Email: email}),
                                credentials: 'include',
                            }

                        );

                        var login = await response.json();

                        if(response.status == 400) // erro na requisicao (dados invalidos)
                        {
                            console.error(login.Erro, response.status, response.statusText);
                            alert(login.Erro);
                            // Aqui para que eu possa renderizar o erro em um template posso criar um novo cookie com o erro e redirecionar para uma pagina de erro
                            // ou posso usar um state global para armazenar o erro e renderizar na pagina de login
                            // ou posso tentar returnar um componente react desse erro e renderizar na pagina de login
                        }
                        else if (response.status == 401) // nao autorizado
                        {
                            console.error(login.Erro, response.status, response.statusText);
                            alert(login.Erro);
                        }
                        else if (response.status == 500) // erro no servidor
                        {
                            console.error(login.Erro, response.status, response.statusText);
                            alert(login.Erro);
                        }
                        else if (response.status == 200) // sucesso
                        {
                            router.push('/Usuarios/Catalogo');
                        }

                    } catch (error) {
                        console.error(error);
                        alert(`UM ERRO INESPERADO ACONTECEU ${error}`);
                    }
                }
            }
        > Entrar </button>
    )
}
