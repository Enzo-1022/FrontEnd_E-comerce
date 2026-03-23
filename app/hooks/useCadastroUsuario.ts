import { useRouter } from 'next/navigation';

import { ErroContext } from '@/app/UI/context/erroContext';
import { useContext } from 'react';
import { TypeUsuarios } from '@/app/types/typeUsuarios';
import Usuarios from '@/app/Services/Usuarios'

export function useCadastroUsuario() {
    const erro = useContext(ErroContext);
    const router = useRouter();

    async function cadastroUsuario({ 
        pNome, 
        pDtNascimento, 
        pCpf, 
        pEmail, 
        pSenha, 
        pConfSenha
    } : TypeUsuarios ) 
    {

        erro?.setLoading(true)

        if(pNome == '' || pDtNascimento == '' || pCpf == '' || pEmail == '' || pSenha == '' || pConfSenha == '')
        {
            erro?.setNotify({
                Title : "Dados Invalidos!",
                Messege : "Alguns dos inputs se encontram vazios"
            });

            erro?.setLoading(false);

            return;
        }
        
        if (pSenha != pConfSenha)
        {
            erro?.setNotify({
                Title : "Senha invalida",
                Messege : "A senha informada está diferente da senha digitada ao confirmar senha!"
            })

            erro?.setLoading(false);

            return;
        }

        try {
            const Response = await Usuarios.CadastroUsuario(pNome, pEmail, pDtNascimento, pCpf, pSenha);

            switch (Response) {
                case 201:
                    erro?.setNotify(
                        {
                            Title: 'Sucesso',
                            Messege: 'Cadastro Bem Sucedido'
                        }
                    );

                    router.push('/Login');

                    break;
                
                case 400: 
                    erro?.setNotify(
                        {
                            Title: 'Dados Invalidos!',
                            Messege: 'Revise os Dados Informados'
                        }
                    );

                    break;

                case 409: 
                    erro?.setNotify(
                        {
                            Title: 'Ops...',
                            Messege: 'Ja existe um usuário cadastrado com esse email'
                        }
                    );

                    break;
                
                default:
                    throw new Error(`Erro ao Cadastrar Usuário, Tente Novamente Mais Tarde!`)
            }   

        } catch (error) {

            erro?.setErro(`${error}`);
            erro?.setUrl(`/Cadastro`);
            router.push('/Erro');

        } finally {
            erro?.setLoading(false);
        }
    }

    return { cadastroUsuario };

}
