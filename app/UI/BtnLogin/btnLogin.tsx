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

                        let res = await fetch(

                            'http://localhost:3001/Login',

                            {
                                mode: 'cors',
                                method: 'post',
                                body: new URLSearchParams({ Senha : senha, Email: email})
                            }

                        ).then( 
                            ( res ) => {
                                return res.json();
                            }
                        );

                        console.log(res);

                        if (res.errors.status == 'Inexistente') 
                        {
                            // console.log('Não conseguimos te localizar em nossa base de dados, tente novamente!!!');
                            alert('Não conseguimos te localizar em nossa base de dados, tente novamente!!!')
                            // new Error('Não conseguimos te localizar em nossa base de dados, tente novamente!!!'); 
                        }
                        else if (res.errors.status == 'Senha') 
                        {
                            // console.log(res.errors.status)
                            // new Error(`${res.errors.erro}`);
                            alert(res.errors.erro)
                        }
                        else 
                        {
                            if(localStorage.getItem('Login') == null)
                            {
                                localStorage.setItem('Login', res.Login);
                            }
                            else
                            {
                                localStorage.removeItem('Login');
                                localStorage.setItem('Login', res.Login);
                            }
    
                            if(localStorage.getItem('Autenticacao'))
                            {
                                localStorage.setItem("Autenticacao", JSON.stringify(res.Token));
                            }
                            else
                            {
                                localStorage.removeItem("Autenticacao");
                                localStorage.setItem("Autenticacao", JSON.stringify(res.Token));
                            }

                            console.log(localStorage);

                            router.push('/Usuarios/Catalogo');
                        }


                    } catch (error) {
                        console.log("foi")
                        alert(`UM ERRO INESPERADO ACONTECEU ${error}`);
                    }
                }
            }
        > Entrar </button>
    )
}
