import Usuarios from '../Services/Usuarios';
import { useRouter } from "next/navigation";
import { ErroContext } from "@/app/UI/context/erroContext";
import { useContext } from "react";

export function useLogin() {
    const router = useRouter();

    const erroContext = useContext(ErroContext);

    async function hookLogin(pEmail : string, pSenha : string) {
        erroContext?.setLoading(true);
        try {
            const Response = await Usuarios.Login(pEmail, pSenha);
            
        
            if (pEmail == '' || pSenha == '') 
            {
                erroContext?.setNotify({
                    Title : "Dados Invalidos!",
                    Messege : "Inputs vazios!"
                });
        
                return; 
            }
        
            switch (Response) {
                case 400:
                    erroContext?.setNotify(
                        {
                            Title : "Não autorizado!",
                            Messege : "Dados invalidos"
                        }
                    );
                    break;
        
                case 401:
                    erroContext?.setNotify(
                        {
                            Title : "Usuario ou Senha Incorreta",
                            Messege : "Revise os dados do login"
                        }
                    );
        
                    break;
                
                case 403:
                    router.push('/') // Adicionar a url para a rota de ativação do usuário
                    break;
                
                case 404:
                     erroContext?.setNotify(
                        {
                            Title : "Usuário Não Cadastrado",
                            Messege : "Email não encontrado"
                        }
                    );
                    break;
                
                default:
                    throw new Error("Erro ao Realizar login, Tente Novamente Mais Tarde!")
            }
            
        } catch (error) {

            erroContext?.setErro(`${error}`);
            erroContext?.setUrl('/Login');
            router.replace('/Erro');
    
        } finally {
            erroContext?.setLoading(false);
        }
    }

    return { hookLogin }

}
