'use client';

import style from '@/components/UI/Styles/login.module.css';
import { TypeUsuarios } from '@/features/Usuarios/types/Usuarios.type';
import { useCadastroUsuario } from '@/features/Cadastro/hooks/useCadastroUsuario.hook';


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
    const { cadastroUsuario } = useCadastroUsuario();
    return (
        <button type="button" className={style.botaoSubmit}
            onClick={
                async () => {
                    cadastroUsuario({
                        pNome : pNome,
                        pDtNascimento : pDtNascimento,
                        pCpf : pCpf,
                        pEmail : pEmail,
                        pSenha : pSenha,
                        pConfSenha : pConfSenha
                    });
                }
            }
        > Cadastrar-se </button>
    );
}
