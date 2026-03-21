'use client';

import style from '@/app/UI/Styles/login.module.css';
import { TypeUsuarios } from '@/app/types/typeUsuarios';


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
        
    return (
        <button type="button" className={style.botaoSubmit}
            onClick={
                async () => {

                   
                }
            }
        > Cadastrar-se </button>
    );
}
