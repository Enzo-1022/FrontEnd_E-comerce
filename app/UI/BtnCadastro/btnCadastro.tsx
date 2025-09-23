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
                        
                        var response = await fetch(
                            'http://localhost:3001/Login/Cadastro', 
                            {
                                mode: 'cors',
                                method: 'post',
                                body: new URLSearchParams({"Nome" : pNome, "Data_Nascimento": pDtNascimento, "Cpf" : pCpf, "Email": pEmail, "Senha" : pSenha})
                            }
                        )
                        // Refatorei 16/09/2025, falta tratar o erro de senha diferente do confirmar senha e redireciona para pagina de erro
                        var cadastro = await response.json(); // extrai o json da resposta

                        if(response.status == 400) // erro na requisicao (dados invalidos)
                        {
                            console.error(cadastro.Erro, response.status, response.statusText);
                            alert(cadastro.Erro);
                            // Aqui para que eu possa renderizar o erro em um template posso criar um novo cookie com o erro e redirecionar para uma pagina de erro
                        }
                        else if (response.status == 500) // erro no servidor
                        {
                            alert(cadastro.Erro);
                        }
                        else if (response.status == 409) // conflito
                        {
                            alert(cadastro.Erro);
                        }
                        else if (response.status == 201) // criado com sucesso
                        {
                            alert('Sucesso')
                            router.push('/Login');
                        }
                        else {
                            console.error(response.status, response.statusText);
                            alert('Erro desconhecido. Contate o suporte.')
                        }
                        
                    } catch (error) {
                        alert(error);
                    }
                }
            }
        > Cadastrar-se </button>
    );
}
