'use client'

import style from "@/app/UI/Styles/login.module.css";
import { Logins } from "@/app/types/typeLogins";
import { useLogin } from "@/app/hooks/useLogin";

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
