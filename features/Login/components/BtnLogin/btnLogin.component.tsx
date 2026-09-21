'use client'

import style from "@/components/UI/Styles/login.module.css";
import { Logins } from "@/features/Login/types/Logins.type";
import { useLogin } from "@/features/Login/hooks/useLogin.hook";

export default function BtnLogin ({pEmail, pSenha} : Logins) {

    const { hookLogin } = useLogin();

    return (
        <button className={style.botaoSubmit} type="button" 
            onClick={
                () => {
                    hookLogin(pEmail, pSenha)
                }
            }
        > Entrar </button>
    )
}
