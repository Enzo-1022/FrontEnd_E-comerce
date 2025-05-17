'use client';

import { useRouter } from 'next/navigation';

import style from '@/app/UI/login.module.css';

export default  function BtnCadastro (
    { 
        pNome, 
        pDtNascimento, 
        pCpf, 
        pEmail, 
        pSenha, 
        pConfSenha
    } : {
        pNome : string,
        pDtNascimento : string,
        pCpf : string,
        pEmail : string,
        pSenha : string,
        pConfSenha : string
    }
) {

    const router = useRouter();

    return (
        <button type="button" className={style.botaoSubmit}
            onClick={
                async () => {
                    try {
                        
                        var cadastro = await fetch(
                            'http://localhost:3001/Login/Cadastro', 
                            {
                                mode: 'cors',
                                method: 'post',
                                body: new URLSearchParams({"Nome" : pNome, "Data_Nascimento": pDtNascimento, "Cpf" : pCpf, "Email": pEmail, "Senha" : pSenha})
                            }
                        ).then( res => res.json() );

                        if(cadastro.errors.length) 
                        {
                            console.error(cadastro.errors)
                            alert("Erro");
                        }
                        else if (cadastro.resultado == 'ok')
                        {
                            alert('Sucesso')
                            router.push('/Login');
                        }
                        
                    } catch (error) {
                        alert(error);
                    }
                }
            }
        > Cadastrar-se </button>
    );
}
