import Usuarios from '../Services/Usuarios';
import { useRouter } from "next/navigation";
import { ErroContext } from "@/context/ErroContext/erroContext";
import { useContext } from "react";
import { UserContext } from '../UI/context/userContext';

export function useLogin() {
    const router = useRouter();

    const userContext = useContext(UserContext);

    const erroContext = useContext(ErroContext);

    async function hookLogin(pEmail : string, pSenha : string) {
        erroContext?.setLoading(true);
        
        try {
        
            if (pEmail == '' || pSenha == '') 
            {
                erroContext?.setNotify(
                    {
                        Title : "Dados Invalidos!",
                        Messege : "Inputs vazios!"
                    }
                );
        
                return; 
            }

            const Response = await Usuarios.Login(pEmail, pSenha).then((valor)=>{ return valor});
        
            switch (Response.status) {

                case 200:
                    userContext?.setAcessToken(Response.acessToken);
                    
                    router.replace('/Usuarios/Perfil')
                    break;

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
                    userContext?.setUserID(Response?.userID);
                    userContext?.setUserID(3);// não lembro o pq disso investigar depois provavelmente foi para contornar um erro

                    router.push('/Usuarios/AtivarUsuario') // Adicionar a url para a rota de ativação do usuário
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
